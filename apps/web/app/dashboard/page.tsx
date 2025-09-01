'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { createSupabaseBrowserClient } from '@/lib/supabase';
import { Plus, FileText, Calendar, MapPin, LogOut, User } from 'lucide-react';
import { useRouter } from 'next/navigation';

interface Inspection {
  id: string;
  property_id: string;
  type: 'move_in' | 'move_out';
  date: string;
  created_at: string;
  properties: {
    name: string;
    address: string;
  };
}

export default function DashboardPage(): React.JSX.Element {
  const [user, setUser] = useState<any>(null);
  const [inspections, setInspections] = useState<Inspection[]>([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const supabase = createSupabaseBrowserClient();

  useEffect(() => {
    checkUser();
    fetchInspections();
  }, []);

  const checkUser = async () => {
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) {
      router.push('/auth/login');
      return;
    }
    setUser(user);
  };

  const fetchInspections = async () => {
    try {
      const { data, error } = await supabase
        .from('inspections')
        .select(`
          *,
          properties (
            name,
            address
          )
        `)
        .order('created_at', { ascending: false });

      if (error) {
        console.error('Error fetching inspections:', error);
      } else {
        setInspections(data || []);
      }
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    router.push('/');
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading your dashboard...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <Link href="/" className="text-2xl font-bold text-blue-600">
                Landlord PDF Pro
              </Link>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center text-gray-600">
                <User className="h-4 w-4 mr-2" />
                {user?.email}
              </div>
              <Button variant="outline" onClick={handleSignOut}>
                <LogOut className="h-4 w-4 mr-2" />
                Sign Out
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Welcome back!
          </h1>
          <p className="text-gray-600">
            Manage your property inspections and generate professional reports.
          </p>
        </div>

        {/* Quick Actions */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <Card className="hover:shadow-lg transition-shadow cursor-pointer">
            <Link href="/dashboard/new">
              <CardHeader className="text-center">
                <div className="mx-auto w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <Plus className="h-6 w-6 text-blue-600" />
                </div>
                <CardTitle>New Inspection</CardTitle>
                <CardDescription>
                  Start a new property inspection
                </CardDescription>
              </CardHeader>
            </Link>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader className="text-center">
              <div className="mx-auto w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <FileText className="h-6 w-6 text-green-600" />
              </div>
              <CardTitle>{inspections.length}</CardTitle>
              <CardDescription>
                Total Inspections
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader className="text-center">
              <div className="mx-auto w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                <Calendar className="h-6 w-6 text-purple-600" />
              </div>
              <CardTitle>This Month</CardTitle>
              <CardDescription>
                {inspections.filter(i => {
                  const inspectionDate = new Date(i.created_at);
                  const now = new Date();
                  return inspectionDate.getMonth() === now.getMonth() && 
                         inspectionDate.getFullYear() === now.getFullYear();
                }).length} inspections
              </CardDescription>
            </CardHeader>
          </Card>
        </div>

        {/* Recent Inspections */}
        <Card>
          <CardHeader>
            <div className="flex justify-between items-center">
              <div>
                <CardTitle>Recent Inspections</CardTitle>
                <CardDescription>
                  Your latest property inspections
                </CardDescription>
              </div>
              <Button asChild>
                <Link href="/dashboard/new">
                  <Plus className="h-4 w-4 mr-2" />
                  New Inspection
                </Link>
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            {inspections.length === 0 ? (
              <div className="text-center py-12">
                <FileText className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  No inspections yet
                </h3>
                <p className="text-gray-600 mb-6">
                  Get started by creating your first property inspection.
                </p>
                <Button asChild>
                  <Link href="/dashboard/new">
                    <Plus className="h-4 w-4 mr-2" />
                    Create First Inspection
                  </Link>
                </Button>
              </div>
            ) : (
              <div className="space-y-4">
                {inspections.map((inspection) => (
                  <div
                    key={inspection.id}
                    className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50"
                  >
                    <div className="flex items-center space-x-4">
                      <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                        <FileText className="h-5 w-5 text-blue-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">
                          {inspection.properties?.name || 'Property'}
                        </h4>
                        <div className="flex items-center text-sm text-gray-600 mt-1">
                          <MapPin className="h-4 w-4 mr-1" />
                          {inspection.properties?.address}
                        </div>
                        <div className="flex items-center space-x-2 mt-2">
                          <Badge variant={inspection.type === 'move_in' ? 'default' : 'secondary'}>
                            {inspection.type === 'move_in' ? 'Move In' : 'Move Out'}
                          </Badge>
                          <span className="text-sm text-gray-500">
                            {new Date(inspection.date).toLocaleDateString()}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Button variant="outline" size="sm" asChild>
                        <Link href={`/dashboard/inspection/${inspection.id}`}>
                          View
                        </Link>
                      </Button>
                      <Button variant="outline" size="sm" asChild>
                        <Link href={`/dashboard/inspection/${inspection.id}/export`}>
                          Export PDF
                        </Link>
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
