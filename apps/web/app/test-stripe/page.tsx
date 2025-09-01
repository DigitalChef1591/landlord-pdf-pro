'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';

export default function TestStripePage(): React.JSX.Element {
  const [result, setResult] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  const testStripeAPI = async () => {
    setLoading(true);
    try {
      const response = await fetch('/api/stripe/checkout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          successUrl: `${window.location.origin}/thank-you`,
          cancelUrl: `${window.location.origin}/purchase`,
        }),
      });

      const data = await response.json();
      setResult({
        status: response.status,
        data: data,
        timestamp: new Date().toISOString()
      });
    } catch (error) {
      setResult({
        error: error instanceof Error ? error.message : 'Unknown error',
        timestamp: new Date().toISOString()
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-2xl font-bold mb-6">Stripe API Test</h1>
        
        <Button 
          onClick={testStripeAPI}
          disabled={loading}
          className="mb-6"
        >
          {loading ? 'Testing...' : 'Test Stripe Checkout API'}
        </Button>

        {result && (
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-lg font-semibold mb-4">API Response:</h2>
            <pre className="bg-gray-100 p-4 rounded text-sm overflow-auto">
              {JSON.stringify(result, null, 2)}
            </pre>
          </div>
        )}

        <div className="mt-8 bg-blue-50 p-4 rounded">
          <h3 className="font-semibold mb-2">What this test does:</h3>
          <ul className="text-sm space-y-1">
            <li>• Calls the same API that the Buy Now button uses</li>
            <li>• Shows the exact response from the server</li>
            <li>• Helps diagnose if the issue is in the API or Stripe config</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
