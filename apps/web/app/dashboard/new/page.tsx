'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { createSupabaseBrowserClient } from '@/lib/supabase';
import { ArrowLeft, Camera, FileText, Plus, Check, X } from 'lucide-react';
import { useRouter } from 'next/navigation';

interface Room {
  name: string;
  items: string[];
}

interface InspectionData {
  propertyName: string;
  propertyAddress: string;
  inspectionType: 'move_in' | 'move_out';
  inspectionDate: string;
  rooms: { [roomName: string]: { [item: string]: { condition: string; notes: string; photos: string[] } } };
}

const DEFAULT_ROOMS: Room[] = [
  {
    name: 'Living Room',
    items: ['Walls', 'Ceiling', 'Floor', 'Windows', 'Doors', 'Light Fixtures', 'Outlets']
  },
  {
    name: 'Kitchen',
    items: ['Walls', 'Ceiling', 'Floor', 'Cabinets', 'Countertops', 'Appliances', 'Sink', 'Faucet']
  },
  {
    name: 'Bedroom',
    items: ['Walls', 'Ceiling', 'Floor', 'Windows', 'Doors', 'Closet', 'Light Fixtures']
  },
  {
    name: 'Bathroom',
    items: ['Walls', 'Ceiling', 'Floor', 'Toilet', 'Sink', 'Shower/Tub', 'Mirror', 'Ventilation']
  },
  {
    name: 'Hallway',
    items: ['Walls', 'Ceiling', 'Floor', 'Light Fixtures', 'Doors']
  }
];

export default function NewInspectionPage(): React.JSX.Element {
  const [user, setUser] = useState<any>(null);
  const [currentStep, setCurrentStep] = useState(1);
  const [inspectionData, setInspectionData] = useState<InspectionData>({
    propertyName: '',
    propertyAddress: '',
    inspectionType: 'move_in',
    inspectionDate: new Date().toISOString().split('T')[0] || '',
    rooms: {}
  });
  const [selectedRoom, setSelectedRoom] = useState<string>('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const supabase = createSupabaseBrowserClient();

  useEffect(() => {
    checkUser();
    initializeRooms();
  }, []);

  const checkUser = async () => {
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) {
      router.push('/auth/login');
      return;
    }
    setUser(user);
  };

  const initializeRooms = () => {
    const rooms: any = {};
    DEFAULT_ROOMS.forEach(room => {
      rooms[room.name] = {};
      room.items.forEach(item => {
        rooms[room.name][item] = {
          condition: '',
          notes: '',
          photos: []
        };
      });
    });
    setInspectionData(prev => ({ ...prev, rooms }));
    setSelectedRoom(DEFAULT_ROOMS[0]?.name || '');
  };

  const updateItemCondition = (room: string, item: string, condition: string) => {
    setInspectionData(prev => ({
      ...prev,
      rooms: {
        ...prev.rooms,
        [room]: {
          ...prev.rooms[room],
          [item]: {
            ...prev.rooms[room]?.[item],
            condition,
            notes: prev.rooms[room]?.[item]?.notes || '',
            photos: prev.rooms[room]?.[item]?.photos || []
          }
        }
      }
    }));
  };

  const updateItemNotes = (room: string, item: string, notes: string) => {
    setInspectionData(prev => ({
      ...prev,
      rooms: {
        ...prev.rooms,
        [room]: {
          ...prev.rooms[room],
          [item]: {
            ...prev.rooms[room]?.[item],
            notes,
            condition: prev.rooms[room]?.[item]?.condition || '',
            photos: prev.rooms[room]?.[item]?.photos || []
          }
        }
      }
    }));
  };

  const saveInspection = async () => {
    setLoading(true);
    try {
      // Create property first
      const { data: property, error: propertyError } = await supabase
        .from('properties')
        .insert({
          name: inspectionData.propertyName,
          address: inspectionData.propertyAddress,
          user_id: user.id
        })
        .select()
        .single();

      if (propertyError) throw propertyError;

      // Create inspection
      const { data: inspection, error: inspectionError } = await supabase
        .from('inspections')
        .insert({
          user_id: user.id,
          property_id: property.id,
          type: inspectionData.inspectionType,
          date: inspectionData.inspectionDate,
          payload: inspectionData.rooms,
          notes: ''
        })
        .select()
        .single();

      if (inspectionError) throw inspectionError;

      router.push(`/dashboard/inspection/${inspection.id}`);
    } catch (error) {
      console.error('Error saving inspection:', error);
      alert('Failed to save inspection. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const getConditionColor = (condition: string) => {
    switch (condition) {
      case 'good': return 'bg-green-100 text-green-800 border-green-200';
      case 'needs_repair': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'na': return 'bg-gray-100 text-gray-800 border-gray-200';
      default: return 'bg-white border-gray-200';
    }
  };

  const getConditionIcon = (condition: string) => {
    switch (condition) {
      case 'good': return <Check className="h-4 w-4" />;
      case 'needs_repair': return <X className="h-4 w-4" />;
      case 'na': return <span className="text-xs">N/A</span>;
      default: return null;
    }
  };

  if (!user) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading...</p>
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
              <Link href="/dashboard" className="flex items-center text-gray-600 hover:text-gray-900 mr-4">
                <ArrowLeft className="h-5 w-5 mr-2" />
                Back to Dashboard
              </Link>
              <h1 className="text-xl font-semibold text-gray-900">New Inspection</h1>
            </div>
            <div className="flex items-center space-x-4">
              <Badge variant="outline">
                Step {currentStep} of 3
              </Badge>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Step 1: Property Details */}
        {currentStep === 1 && (
          <Card>
            <CardHeader>
              <CardTitle>Property Information</CardTitle>
              <CardDescription>
                Enter the basic details about the property being inspected.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="propertyName">Property Name</Label>
                  <Input
                    id="propertyName"
                    placeholder="e.g., Main Street Apartment"
                    value={inspectionData.propertyName}
                    onChange={(e) => setInspectionData(prev => ({ ...prev, propertyName: e.target.value }))}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="inspectionType">Inspection Type</Label>
                  <select
                    id="inspectionType"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={inspectionData.inspectionType}
                    onChange={(e) => setInspectionData(prev => ({ ...prev, inspectionType: e.target.value as 'move_in' | 'move_out' }))}
                  >
                    <option value="move_in">Move In</option>
                    <option value="move_out">Move Out</option>
                  </select>
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="propertyAddress">Property Address</Label>
                <Input
                  id="propertyAddress"
                  placeholder="e.g., 123 Main St, City, State 12345"
                  value={inspectionData.propertyAddress}
                  onChange={(e) => setInspectionData(prev => ({ ...prev, propertyAddress: e.target.value }))}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="inspectionDate">Inspection Date</Label>
                <Input
                  id="inspectionDate"
                  type="date"
                  value={inspectionData.inspectionDate}
                  onChange={(e) => setInspectionData(prev => ({ ...prev, inspectionDate: e.target.value }))}
                />
              </div>
              <div className="flex justify-end">
                <Button 
                  onClick={() => setCurrentStep(2)}
                  disabled={!inspectionData.propertyName || !inspectionData.propertyAddress}
                >
                  Continue to Inspection
                </Button>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Step 2: Room Inspection */}
        {currentStep === 2 && (
          <div className="grid lg:grid-cols-4 gap-6">
            {/* Room Navigation */}
            <div className="lg:col-span-1">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Rooms</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  {DEFAULT_ROOMS.map((room) => (
                    <button
                      key={room.name}
                      onClick={() => setSelectedRoom(room.name)}
                      className={`w-full text-left px-3 py-2 rounded-md transition-colors ${
                        selectedRoom === room.name
                          ? 'bg-blue-100 text-blue-900 border border-blue-200'
                          : 'hover:bg-gray-100'
                      }`}
                    >
                      {room.name}
                    </button>
                  ))}
                </CardContent>
              </Card>
            </div>

            {/* Room Items */}
            <div className="lg:col-span-3">
              <Card>
                <CardHeader>
                  <CardTitle>{selectedRoom} Inspection</CardTitle>
                  <CardDescription>
                    Inspect each item and record its condition.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {DEFAULT_ROOMS.find(r => r.name === selectedRoom)?.items.map((item) => (
                      <div key={item} className="border rounded-lg p-4">
                        <div className="flex items-center justify-between mb-3">
                          <h4 className="font-medium text-gray-900">{item}</h4>
                          <div className="flex space-x-2">
                            {['good', 'needs_repair', 'na'].map((condition) => (
                              <button
                                key={condition}
                                onClick={() => updateItemCondition(selectedRoom, item, condition)}
                                className={`px-3 py-1 rounded-full text-sm border transition-colors ${
                                  inspectionData.rooms[selectedRoom]?.[item]?.condition === condition
                                    ? getConditionColor(condition)
                                    : 'bg-white border-gray-200 hover:bg-gray-50'
                                }`}
                              >
                                <div className="flex items-center space-x-1">
                                  {getConditionIcon(condition)}
                                  <span>
                                    {condition === 'good' ? 'Good' : 
                                     condition === 'needs_repair' ? 'Needs Repair' : 'N/A'}
                                  </span>
                                </div>
                              </button>
                            ))}
                          </div>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor={`notes-${item}`}>Notes (optional)</Label>
                          <Input
                            id={`notes-${item}`}
                            placeholder="Add any additional notes..."
                            value={inspectionData.rooms[selectedRoom]?.[item]?.notes || ''}
                            onChange={(e) => updateItemNotes(selectedRoom, item, e.target.value)}
                          />
                        </div>
                        <div className="mt-3 flex items-center space-x-2">
                          <Button variant="outline" size="sm" disabled>
                            <Camera className="h-4 w-4 mr-2" />
                            Add Photos (Coming Soon)
                          </Button>
                          <span className="text-sm text-gray-500">
                            {inspectionData.rooms[selectedRoom]?.[item]?.photos?.length || 0} photos
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        )}

        {/* Step 3: Review & Save */}
        {currentStep === 3 && (
          <Card>
            <CardHeader>
              <CardTitle>Review Inspection</CardTitle>
              <CardDescription>
                Review your inspection details before saving.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Property Details</h3>
                  <div className="space-y-1 text-sm">
                    <p><strong>Name:</strong> {inspectionData.propertyName}</p>
                    <p><strong>Address:</strong> {inspectionData.propertyAddress}</p>
                    <p><strong>Type:</strong> {inspectionData.inspectionType === 'move_in' ? 'Move In' : 'Move Out'}</p>
                    <p><strong>Date:</strong> {new Date(inspectionData.inspectionDate).toLocaleDateString()}</p>
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Inspection Summary</h3>
                  <div className="space-y-1 text-sm">
                    {Object.entries(inspectionData.rooms).map(([roomName, items]) => {
                      const itemsWithConditions = Object.entries(items).filter(([_, data]) => data.condition);
                      return (
                        <p key={roomName}>
                          <strong>{roomName}:</strong> {itemsWithConditions.length} items inspected
                        </p>
                      );
                    })}
                  </div>
                </div>
              </div>
              
              <div className="flex justify-between">
                <Button variant="outline" onClick={() => setCurrentStep(2)}>
                  Back to Inspection
                </Button>
                <Button onClick={saveInspection} disabled={loading}>
                  {loading ? 'Saving...' : 'Save Inspection'}
                </Button>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Navigation */}
        {currentStep === 2 && (
          <div className="mt-6 flex justify-between">
            <Button variant="outline" onClick={() => setCurrentStep(1)}>
              Back to Property Details
            </Button>
            <Button onClick={() => setCurrentStep(3)}>
              Review & Save
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
