import { redirect } from 'next/navigation';
import { createSupabaseServerClient } from '@/lib/supabase';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Plus, FileText, Calendar, MapPin, Download, Settings, LogOut } from 'lucide-react';
import Link from 'next/link';

export default async function DashboardPage(): Promise<React.JSX.Element> {
  const supabase = await createSupabaseServerClient();
  
  // Check if user is authenticated
  const { data: { user }, error: authError } = await supabase.auth.getUser();
  
  if (authError || !user) {
    redirect('/auth/login');
  }

  // Check if user has paid access
  const { data: entitlement } = await supabase
    .from('entitlements')
    .select('paid, source')
    .eq('user_id', user.id)
    .single();

  if (!entitlement?.paid) {
    redirect('/purchase');
  }

  // Get user's inspections
  const { data: inspections } = await supabase
    .from('inspections')
    .select(`
      *,
      properties (
        name,
        address
      )
    `)
    .eq('user_id', user.id)
    .order('created_at', { ascending: false });

  // Get user's properties count
  const { count: propertiesCount } = await supabase
    .from('properties')
    .select('*', { count: 'exact', head: true })
    .eq('user_id', user.id);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
              <p className="text-gray-600">Welcome back, {user.email}</p>
            </div>
            <div className="flex items-center space-x-4">
              <Badge variant="secondary" className="bg-green-100 text-green-800">
                Pro Account
              </Badge>
              <Link href="/settings">
                <Button variant="outline" size="sm">
                  <Settings className="h-4 w-4 mr-2" />
                  Settings
                </Button>
              </Link>
              <form action="/auth/signout" method="post">
                <Button variant="outline" size="sm" type="submit">
                  <LogOut className="h-4 w-4 mr-2" />
                  Sign Out
                </Button>
              </form>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Inspections</CardTitle>
              <FileText className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{inspections?.length || 0}</div>
              <p className="text-xs text-muted-foreground">
                Professional reports generated
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Properties</CardTitle>
              <MapPin className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{propertiesCount || 0}</div>
              <p className="text-xs text-muted-foreground">
                Properties under management
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">This Month</CardTitle>
              <Calendar className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {inspections?.filter(i => {
                  const created = new Date(i.created_at);
                  const now = new Date();
                  return created.getMonth() === now.getMonth() && created.getFullYear() === now.getFullYear();
                }).length || 0}
              </div>
              <p className="text-xs text-muted-foreground">
                Inspections completed
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Quick Actions */}
        <div className="mb-8">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <Link href="/inspection/new">
              <Card className="hover:shadow-md transition-shadow cursor-pointer">
                <CardContent className="flex items-center p-6">
                  <Plus className="h-8 w-8 text-blue-600 mr-4" />
                  <div>
                    <h3 className="font-medium">New Inspection</h3>
                    <p className="text-sm text-gray-600">Start a new property inspection</p>
                  </div>
                </CardContent>
              </Card>
            </Link>
            
            <Link href="/properties">
              <Card className="hover:shadow-md transition-shadow cursor-pointer">
                <CardContent className="flex items-center p-6">
                  <MapPin className="h-8 w-8 text-green-600 mr-4" />
                  <div>
                    <h3 className="font-medium">Manage Properties</h3>
                    <p className="text-sm text-gray-600">Add or edit properties</p>
                  </div>
                </CardContent>
              </Card>
            </Link>
            
            <Link href="/templates">
              <Card className="hover:shadow-md transition-shadow cursor-pointer">
                <CardContent className="flex items-center p-6">
                  <FileText className="h-8 w-8 text-purple-600 mr-4" />
                  <div>
                    <h3 className="font-medium">Templates</h3>
                    <p className="text-sm text-gray-600">Customize inspection templates</p>
                  </div>
                </CardContent>
              </Card>
            </Link>
            
            <Link href="/settings">
              <Card className="hover:shadow-md transition-shadow cursor-pointer">
                <CardContent className="flex items-center p-6">
                  <Settings className="h-8 w-8 text-gray-600 mr-4" />
                  <div>
                    <h3 className="font-medium">Settings</h3>
                    <p className="text-sm text-gray-600">Account and preferences</p>
                  </div>
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>

        {/* Recent Inspections */}
        <div>
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold text-gray-900">Recent Inspections</h2>
            <Link href="/inspections">
              <Button variant="outline" size="sm">
                View All
              </Button>
            </Link>
          </div>
          
          {inspections && inspections.length > 0 ? (
            <div className="grid gap-4">
              {inspections.slice(0, 5).map((inspection) => (
                <Card key={inspection.id}>
                  <CardContent className="flex items-center justify-between p-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                        <FileText className="h-5 w-5 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="font-medium">{inspection.properties?.name}</h3>
                        <p className="text-sm text-gray-600">{inspection.properties?.address}</p>
                        <div className="flex items-center space-x-2 mt-1">
                          <Badge variant={inspection.type === 'move_in' ? 'default' : 'secondary'}>
                            {inspection.type === 'move_in' ? 'Move In' : 'Move Out'}
                          </Badge>
                          <span className="text-xs text-gray-500">
                            {new Date(inspection.date).toLocaleDateString()}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Link href={`/inspection/${inspection.id}`}>
                        <Button variant="outline" size="sm">
                          View
                        </Button>
                      </Link>
                      <Link href={`/api/export/${inspection.id}`}>
                        <Button variant="outline" size="sm">
                          <Download className="h-4 w-4" />
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <Card>
              <CardContent className="text-center py-12">
                <FileText className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-gray-900 mb-2">No inspections yet</h3>
                <p className="text-gray-600 mb-4">
                  Get started by creating your first property inspection
                </p>
                <Link href="/inspection/new">
                  <Button>
                    <Plus className="h-4 w-4 mr-2" />
                    Create First Inspection
                  </Button>
                </Link>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
}
