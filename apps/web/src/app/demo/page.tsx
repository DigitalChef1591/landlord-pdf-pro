'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, Plus, Camera, FileText, Download, AlertTriangle } from 'lucide-react';
import { SidebarBanner, InContentBanner, FooterBanner } from '../../components/ui/ad-banner';
// Temporary inline types and data until we fix the package imports
const DEFAULT_ROOM_TEMPLATES = [
  { name: 'Kitchen', items: ['Refrigerator', 'Stove/Oven', 'Dishwasher', 'Sink', 'Cabinets', 'Countertops', 'Flooring'] },
  { name: 'Living Room', items: ['Walls', 'Ceiling', 'Flooring', 'Windows', 'Doors', 'Light Fixtures', 'Outlets'] },
  { name: 'Bedroom', items: ['Walls', 'Ceiling', 'Flooring', 'Windows', 'Closet', 'Light Fixtures', 'Outlets'] },
  { name: 'Bathroom', items: ['Toilet', 'Sink', 'Shower/Tub', 'Tiles', 'Mirror', 'Light Fixtures', 'Ventilation'] },
  { name: 'Hallway', items: ['Walls', 'Ceiling', 'Flooring', 'Light Fixtures', 'Outlets'] },
  { name: 'Exterior', items: ['Front Door', 'Windows', 'Siding', 'Roof', 'Gutters', 'Landscaping'] }
];

type Property = {
  id?: string;
  name: string;
  address: string;
};

type Inspection = {
  id?: string;
  type: 'move_in' | 'move_out';
  date: string;
  notes?: string;
  payload: {
    rooms: Array<{
      id: string;
      name: string;
      items: Array<{
        id: string;
        name: string;
        condition: 'good' | 'needs_repair' | 'na';
        notes: string;
        photos: string[];
      }>;
    }>;
  };
};

export default function DemoPage(): React.JSX.Element {
  const [step, setStep] = useState<'property' | 'inspection' | 'rooms' | 'export'>('property');
  const [property, setProperty] = useState<Partial<Property>>({
    name: '',
    address: ''
  });
  const [inspection, setInspection] = useState<Partial<Inspection>>({
    type: 'move_in',
    date: new Date().toISOString().split('T')[0],
    notes: '',
    payload: { rooms: [] }
  });

  const handlePropertySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (property.name && property.address) {
      setStep('inspection');
    }
  };

  const handleInspectionSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep('rooms');
  };

  const addRoom = (roomType: string) => {
    const template = DEFAULT_ROOM_TEMPLATES.find(t => t.name === roomType);
    if (template && inspection.payload) {
      const newRoom = {
        id: Date.now().toString(),
        name: template.name,
        items: template.items.map(item => ({
          id: Date.now().toString() + Math.random(),
          name: item,
          condition: 'good' as const,
          notes: '',
          photos: []
        }))
      };
      
      setInspection({
        ...inspection,
        payload: {
          ...inspection.payload,
          rooms: [...(inspection.payload.rooms || []), newRoom]
        }
      });
    }
  };

  const updateItemCondition = (roomId: string, itemId: string, condition: 'good' | 'needs_repair' | 'na') => {
    if (!inspection.payload?.rooms) return;
    
    const updatedRooms = inspection.payload.rooms.map(room => {
      if (room.id === roomId) {
        return {
          ...room,
          items: room.items.map(item => 
            item.id === itemId ? { ...item, condition } : item
          )
        };
      }
      return room;
    });

    setInspection({
      ...inspection,
      payload: {
        ...inspection.payload,
        rooms: updatedRooms
      }
    });
  };

  const updateItemNotes = (roomId: string, itemId: string, notes: string) => {
    if (!inspection.payload?.rooms) return;
    
    const updatedRooms = inspection.payload.rooms.map(room => {
      if (room.id === roomId) {
        return {
          ...room,
          items: room.items.map(item => 
            item.id === itemId ? { ...item, notes } : item
          )
        };
      }
      return room;
    });

    setInspection({
      ...inspection,
      payload: {
        ...inspection.payload,
        rooms: updatedRooms
      }
    });
  };

  const handleExport = () => {
    setStep('export');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <Link href="/" className="flex items-center text-gray-600 hover:text-gray-900 mr-4">
                <ArrowLeft className="h-5 w-5 mr-2" />
                Back to Home
              </Link>
              <div className="flex items-center">
                <FileText className="h-6 w-6 text-blue-600 mr-2" />
                <h1 className="text-xl font-semibold text-gray-900">Demo Builder</h1>
                <Badge variant="secondary" className="ml-2">Free Demo</Badge>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <AlertTriangle className="h-5 w-5 text-orange-500" />
              <span className="text-sm text-orange-600">Demo Mode - Limited Features</span>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Ad Banner - Top of Demo */}
        <div className="mb-6">
          <InContentBanner />
        </div>

        {/* Progress Steps */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            {['Property', 'Inspection', 'Rooms', 'Export'].map((stepName, index) => {
              const stepKey = stepName.toLowerCase() as typeof step;
              const isActive = step === stepKey;
              const isCompleted = ['property', 'inspection', 'rooms', 'export'].indexOf(step) > index;
              
              return (
                <div key={stepName} className="flex items-center">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                    isActive ? 'bg-blue-600 text-white' : 
                    isCompleted ? 'bg-green-600 text-white' : 
                    'bg-gray-300 text-gray-600'
                  }`}>
                    {index + 1}
                  </div>
                  <span className={`ml-2 text-sm font-medium ${
                    isActive ? 'text-blue-600' : 
                    isCompleted ? 'text-green-600' : 
                    'text-gray-500'
                  }`}>
                    {stepName}
                  </span>
                  {index < 3 && (
                    <div className={`w-16 h-0.5 mx-4 ${
                      isCompleted ? 'bg-green-600' : 'bg-gray-300'
                    }`} />
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Property Step */}
        {step === 'property' && (
          <Card>
            <CardHeader>
              <CardTitle>Property Information</CardTitle>
              <CardDescription>Enter the basic details about the property being inspected</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handlePropertySubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Property Name/Unit
                  </label>
                  <input
                    type="text"
                    value={property.name || ''}
                    onChange={(e) => setProperty({ ...property, name: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="e.g., Apartment 2B, Main House"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Property Address
                  </label>
                  <textarea
                    value={property.address || ''}
                    onChange={(e) => setProperty({ ...property, address: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="123 Main St, City, State 12345"
                    rows={3}
                    required
                  />
                </div>
                <Button type="submit" className="w-full">
                  Continue to Inspection Details
                </Button>
              </form>
            </CardContent>
          </Card>
        )}

        {/* Inspection Step */}
        {step === 'inspection' && (
          <Card>
            <CardHeader>
              <CardTitle>Inspection Details</CardTitle>
              <CardDescription>Configure the inspection settings</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleInspectionSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Inspection Type
                  </label>
                  <select
                    value={inspection.type || 'move_in'}
                    onChange={(e) => setInspection({ ...inspection, type: e.target.value as 'move_in' | 'move_out' })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="move_in">Move-In Inspection</option>
                    <option value="move_out">Move-Out Inspection</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Inspection Date
                  </label>
                  <input
                    type="date"
                    value={inspection.date || ''}
                    onChange={(e) => setInspection({ ...inspection, date: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    General Notes (Optional)
                  </label>
                  <textarea
                    value={inspection.notes || ''}
                    onChange={(e) => setInspection({ ...inspection, notes: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Any general notes about the inspection..."
                    rows={3}
                  />
                </div>
                <div className="flex space-x-3">
                  <Button type="button" variant="outline" onClick={() => setStep('property')} className="flex-1">
                    Back
                  </Button>
                  <Button type="submit" className="flex-1">
                    Continue to Rooms
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        )}

        {/* Rooms Step */}
        {step === 'rooms' && (
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Add Rooms</CardTitle>
                <CardDescription>Select room types to add to your inspection</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {DEFAULT_ROOM_TEMPLATES.map((template) => (
                    <Button
                      key={template.name}
                      variant="outline"
                      onClick={() => addRoom(template.name)}
                      className="h-auto p-4 flex flex-col items-center"
                    >
                      <Plus className="h-5 w-5 mb-2" />
                      <span className="text-sm">{template.name}</span>
                    </Button>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Room Items */}
            {inspection.payload?.rooms?.map((room) => (
              <Card key={room.id}>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    {room.name}
                    <Badge variant="secondary" className="ml-2">
                      {room.items.length} items
                    </Badge>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {room.items.map((item) => (
                      <div key={item.id} className="border rounded-lg p-4">
                        <div className="flex items-center justify-between mb-3">
                          <h4 className="font-medium">{item.name}</h4>
                          <div className="flex space-x-2">
                            {(['good', 'needs_repair', 'na'] as const).map((condition) => (
                              <Button
                                key={condition}
                                size="sm"
                                variant={item.condition === condition ? 'default' : 'outline'}
                                onClick={() => updateItemCondition(room.id, item.id, condition)}
                                className={`text-xs ${
                                  condition === 'good' ? 'bg-green-600 hover:bg-green-700' :
                                  condition === 'needs_repair' ? 'bg-red-600 hover:bg-red-700' :
                                  'bg-gray-600 hover:bg-gray-700'
                                }`}
                              >
                                {condition === 'good' ? 'Good' :
                                 condition === 'needs_repair' ? 'Needs Repair' : 'N/A'}
                              </Button>
                            ))}
                          </div>
                        </div>
                        <div className="flex space-x-3">
                          <div className="flex-1">
                            <textarea
                              value={item.notes}
                              onChange={(e) => updateItemNotes(room.id, item.id, e.target.value)}
                              placeholder="Add notes about this item..."
                              className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                              rows={2}
                            />
                          </div>
                          <Button variant="outline" size="sm" className="flex items-center">
                            <Camera className="h-4 w-4 mr-1" />
                            Add Photo
                            <Badge variant="secondary" className="ml-1">Demo</Badge>
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}

            {inspection.payload?.rooms && inspection.payload.rooms.length > 0 && (
              <div className="flex space-x-3">
                <Button variant="outline" onClick={() => setStep('inspection')} className="flex-1">
                  Back
                </Button>
                <Button onClick={handleExport} className="flex-1">
                  Generate Report
                </Button>
              </div>
            )}
          </div>
        )}

        {/* Export Step */}
        {step === 'export' && (
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Download className="h-6 w-6 mr-2" />
                Export Report
              </CardTitle>
              <CardDescription>Your inspection report is ready</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
                <div className="flex items-center">
                  <AlertTriangle className="h-5 w-5 text-orange-500 mr-2" />
                  <div>
                    <h4 className="font-medium text-orange-800">Demo Limitations</h4>
                    <p className="text-sm text-orange-700 mt-1">
                      This is a demo version. The exported PDF will include a watermark and be limited to 5 photos per inspection.
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 border rounded-lg">
                  <div>
                    <h4 className="font-medium">Inspection Report</h4>
                    <p className="text-sm text-gray-600">
                      {property.name} - {inspection.type === 'move_in' ? 'Move-In' : 'Move-Out'} Inspection
                    </p>
                    <p className="text-sm text-gray-500">
                      {inspection.payload?.rooms?.length || 0} rooms, Generated on {new Date().toLocaleDateString()}
                    </p>
                  </div>
                  <Button className="flex items-center">
                    <Download className="h-4 w-4 mr-2" />
                    Download PDF
                    <Badge variant="secondary" className="ml-2">DEMO</Badge>
                  </Button>
                </div>
              </div>

              {/* Ad Banner - Before Upgrade CTA */}
              <div className="my-6">
                <InContentBanner />
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <h4 className="font-medium text-blue-800 mb-2">Upgrade to Pro</h4>
                <p className="text-sm text-blue-700 mb-3">
                  Get unlimited inspections, up to 100 photos per inspection, and professional PDFs without watermarks.
                </p>
                <Button asChild>
                  <Link href="/purchase">Upgrade to Pro - $29</Link>
                </Button>
              </div>

              <div className="flex space-x-3">
                <Button variant="outline" onClick={() => setStep('rooms')} className="flex-1">
                  Back to Edit
                </Button>
                <Button variant="outline" onClick={() => {
                  setStep('property');
                  setProperty({ name: '', address: '' });
                  setInspection({ type: 'move_in', date: new Date().toISOString().split('T')[0], notes: '', payload: { rooms: [] } });
                }} className="flex-1">
                  Start New Inspection
                </Button>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Footer Ad Banner */}
        <div className="mt-8">
          <FooterBanner />
        </div>
      </div>
    </div>
  );
}
