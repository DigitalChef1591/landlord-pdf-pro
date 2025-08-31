'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, CheckCircle, CreditCard, Shield, Zap } from 'lucide-react';
import { FooterBanner } from '@/components/ui/ad-banner';

export default function PurchasePage(): React.JSX.Element {
  const [loading, setLoading] = useState(false);

  const handlePurchase = async () => {
    setLoading(true);
    
    try {
      // Create checkout session
      const response = await fetch('/api/stripe/checkout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          priceId: process.env.NEXT_PUBLIC_STRIPE_PRICE_ID,
          successUrl: `${window.location.origin}/thank-you`,
          cancelUrl: `${window.location.origin}/purchase`,
        }),
      });

      const { sessionId } = await response.json();
      
      // Redirect to Stripe Checkout using the session URL
      if (sessionId) {
        window.location.href = `https://checkout.stripe.com/pay/${sessionId}`;
      }
    } catch (error) {
      console.error('Error creating checkout session:', error);
      alert('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <Link href="/" className="flex items-center text-gray-600 hover:text-gray-900">
              <ArrowLeft className="h-5 w-5 mr-2" />
              Back to Home
            </Link>
            <div className="flex items-center space-x-4">
              <Link href="/demo" className="text-gray-600 hover:text-gray-900">
                Try Demo
              </Link>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Get Landlord PDF Pro
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Professional property inspection reports with unlimited features
          </p>
          <Badge className="bg-green-600 text-white px-4 py-2 text-lg">
            One-time purchase • No monthly fees
          </Badge>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Product Details */}
          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Zap className="h-6 w-6 text-yellow-500 mr-2" />
                  What You Get
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-0.5" />
                  <div>
                    <h4 className="font-medium">Unlimited Inspections</h4>
                    <p className="text-sm text-gray-600">Create as many property inspections as you need</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-0.5" />
                  <div>
                    <h4 className="font-medium">Up to 100 Photos per Inspection</h4>
                    <p className="text-sm text-gray-600">Document every detail with high-quality photos</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-0.5" />
                  <div>
                    <h4 className="font-medium">Professional PDF Reports</h4>
                    <p className="text-sm text-gray-600">Clean, watermark-free PDFs ready for official use</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-0.5" />
                  <div>
                    <h4 className="font-medium">Digital Signatures</h4>
                    <p className="text-sm text-gray-600">Collect tenant and landlord signatures digitally</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-0.5" />
                  <div>
                    <h4 className="font-medium">Cloud Storage & Sync</h4>
                    <p className="text-sm text-gray-600">Access your inspections from any device</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-0.5" />
                  <div>
                    <h4 className="font-medium">Priority Support</h4>
                    <p className="text-sm text-gray-600">Get help when you need it most</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-green-50 border-green-200">
              <CardHeader>
                <CardTitle className="flex items-center text-green-800">
                  <Shield className="h-6 w-6 mr-2" />
                  Secure & Professional
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-green-700">
                  Trusted by thousands of landlords and property managers. 
                  Secure payment processing and instant access to all features.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Purchase Card */}
          <div className="lg:sticky lg:top-8">
            <Card className="border-2 border-blue-500 shadow-xl">
              <CardHeader className="text-center">
                <Badge className="w-fit mx-auto mb-4 bg-blue-600">Most Popular</Badge>
                <CardTitle className="text-3xl">Landlord PDF Pro</CardTitle>
                <CardDescription>Complete professional toolkit</CardDescription>
                <div className="text-5xl font-bold text-gray-900 mt-4">$29</div>
                <p className="text-gray-500">One-time purchase</p>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-3">
                  <div className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                    Unlimited inspections & exports
                  </div>
                  <div className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                    Up to 100 photos per inspection
                  </div>
                  <div className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                    Professional PDFs (no watermark)
                  </div>
                  <div className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                    Digital signature collection
                  </div>
                  <div className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                    Cloud storage & sync
                  </div>
                  <div className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                    Priority email support
                  </div>
                </div>

                <Button 
                  onClick={handlePurchase}
                  disabled={loading}
                  className="w-full text-lg py-6 bg-blue-600 hover:bg-blue-700"
                >
                  <CreditCard className="h-5 w-5 mr-2" />
                  {loading ? 'Processing...' : 'Buy Now - $29'}
                </Button>

                <div className="text-center space-y-2">
                  <p className="text-sm text-gray-500">
                    Secure payment powered by Stripe
                  </p>
                  <p className="text-sm text-gray-500">
                    Instant access • No monthly fees
                  </p>
                </div>
              </CardContent>
            </Card>

            <div className="mt-6 text-center">
              <Link href="/demo" className="text-blue-600 hover:text-blue-800 text-sm">
                Want to try it first? Start with our free demo →
              </Link>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-center text-gray-900 mb-8">
            Frequently Asked Questions
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Is this a one-time purchase?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Yes! Pay once and use Landlord PDF Pro forever. No monthly fees or hidden costs.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Can I use this on multiple devices?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Absolutely! Your account works on web, iOS, and Android. All your data syncs automatically.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">How do I get started?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  After purchase, you'll get instant access. Create your first inspection in minutes with our guided setup.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Do you offer support?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Yes! Pro users get priority email support. We typically respond within 24 hours.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Footer Ad Banner - After FAQ, before page end */}
        <div className="mt-12">
          <FooterBanner />
        </div>
      </div>
    </div>
  );
}
