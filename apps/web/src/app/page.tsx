import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, FileText, Camera, Signature, Download, Shield } from 'lucide-react';
import { HeaderBanner, InContentBanner, FooterBanner } from '@/components/ui/ad-banner';

export default function HomePage(): React.JSX.Element {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center">
              <FileText className="h-8 w-8 text-blue-600 mr-3" />
              <h1 className="text-2xl font-bold text-gray-900">Landlord PDF Pro</h1>
            </div>
            <nav className="flex items-center space-x-4">
              <Link href="/demo" className="text-gray-600 hover:text-gray-900">
                Try Demo
              </Link>
              <Link href="/auth/signin" className="text-gray-600 hover:text-gray-900">
                Sign In
              </Link>
              <Button asChild>
                <Link href="/purchase">Buy Now - $29</Link>
              </Button>
            </nav>
          </div>
        </div>
      </header>

      {/* Header Ad */}
      <HeaderBanner />

      {/* Hero Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-5xl font-bold text-gray-900 mb-6">
            Professional Move-In/Out
            <span className="text-blue-600 block">Inspection Reports</span>
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Create detailed property inspection reports with photos, signatures, and professional PDF exports. 
            Perfect for landlords, property managers, and real estate professionals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild className="text-lg px-8 py-4">
              <Link href="/demo">Try Free Demo</Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="text-lg px-8 py-4">
              <Link href="/purchase">Buy Now - $29</Link>
            </Button>
          </div>
          <p className="text-sm text-gray-500 mt-4">
            One-time purchase • No monthly fees • Instant access
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Everything You Need for Professional Inspections
            </h3>
            <p className="text-lg text-gray-600">
              Streamline your property inspections with our comprehensive toolkit
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CheckCircle className="h-10 w-10 text-green-600 mb-2" />
                <CardTitle>Room-by-Room Inspection</CardTitle>
                <CardDescription>
                  Pre-built templates for kitchens, bathrooms, bedrooms, and more
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Customizable room templates</li>
                  <li>• Condition tracking (Good/Needs Repair/N/A)</li>
                  <li>• Detailed notes for each item</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Camera className="h-10 w-10 text-blue-600 mb-2" />
                <CardTitle>Photo Documentation</CardTitle>
                <CardDescription>
                  Capture and organize photos for each room and item
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Automatic photo compression</li>
                  <li>• Organized by room and item</li>
                  <li>• Up to 100 photos per inspection</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Signature className="h-10 w-10 text-purple-600 mb-2" />
                <CardTitle>Digital Signatures</CardTitle>
                <CardDescription>
                  Collect tenant and landlord signatures digitally
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Touch/mouse signature capture</li>
                  <li>• Legally binding documentation</li>
                  <li>• Automatic date stamping</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Download className="h-10 w-10 text-indigo-600 mb-2" />
                <CardTitle>Professional PDF Export</CardTitle>
                <CardDescription>
                  Generate polished reports ready for official use
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Professional formatting</li>
                  <li>• Cover page with property details</li>
                  <li>• Photo galleries by room</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Shield className="h-10 w-10 text-red-600 mb-2" />
                <CardTitle>Secure & Private</CardTitle>
                <CardDescription>
                  Your data is encrypted and securely stored
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• End-to-end encryption</li>
                  <li>• Private cloud storage</li>
                  <li>• GDPR compliant</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <FileText className="h-10 w-10 text-orange-600 mb-2" />
                <CardTitle>Multi-Platform</CardTitle>
                <CardDescription>
                  Works on web, iOS, and Android devices
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Responsive web app</li>
                  <li>• Native mobile apps</li>
                  <li>• Offline draft saving</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Mid-Content Ad */}
      <InContentBanner />

      {/* Pricing Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-3xl font-bold text-gray-900 mb-8">
            Simple, One-Time Pricing
          </h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Free Demo */}
            <Card className="relative">
              <CardHeader>
                <Badge variant="secondary" className="w-fit mx-auto mb-2">Demo</Badge>
                <CardTitle className="text-2xl">Free Trial</CardTitle>
                <CardDescription>Try before you buy</CardDescription>
                <div className="text-3xl font-bold text-gray-900 mt-4">$0</div>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center text-sm">
                  <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                  Full inspection builder
                </div>
                <div className="flex items-center text-sm">
                  <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                  Up to 5 photos per inspection
                </div>
                <div className="flex items-center text-sm">
                  <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                  1 PDF export per day
                </div>
                <div className="flex items-center text-sm text-orange-600">
                  <CheckCircle className="h-4 w-4 text-orange-600 mr-2" />
                  Watermarked PDFs
                </div>
                <Button className="w-full mt-6" variant="outline" asChild>
                  <Link href="/demo">Start Free Demo</Link>
                </Button>
              </CardContent>
            </Card>

            {/* Pro Version */}
            <Card className="relative border-blue-500 border-2">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <Badge className="bg-blue-600">Most Popular</Badge>
              </div>
              <CardHeader>
                <Badge variant="default" className="w-fit mx-auto mb-2 bg-blue-600">Pro</Badge>
                <CardTitle className="text-2xl">Full Version</CardTitle>
                <CardDescription>Complete professional toolkit</CardDescription>
                <div className="text-4xl font-bold text-gray-900 mt-4">$29</div>
                <p className="text-sm text-gray-500">One-time purchase</p>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center text-sm">
                  <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                  Unlimited inspections
                </div>
                <div className="flex items-center text-sm">
                  <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                  Up to 100 photos per inspection
                </div>
                <div className="flex items-center text-sm">
                  <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                  Unlimited PDF exports
                </div>
                <div className="flex items-center text-sm">
                  <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                  Professional PDFs (no watermark)
                </div>
                <div className="flex items-center text-sm">
                  <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                  Priority support
                </div>
                <Button className="w-full mt-6" asChild>
                  <Link href="/purchase">Buy Now - $29</Link>
                </Button>
              </CardContent>
            </Card>
          </div>

          <p className="text-sm text-gray-500 mt-8">
            7-day money-back guarantee • Secure payment via Stripe • Instant access
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-3xl font-bold text-white mb-4">
            Ready to Create Professional Inspection Reports?
          </h3>
          <p className="text-xl text-blue-100 mb-8">
            Join thousands of landlords and property managers who trust Landlord PDF Pro
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild className="text-lg px-8 py-4">
              <Link href="/demo">Try Free Demo</Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="text-lg px-8 py-4 text-white border-white hover:bg-white hover:text-blue-600">
              <Link href="/purchase">Buy Now - $29</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <FileText className="h-6 w-6 text-blue-400 mr-2" />
                <span className="text-lg font-semibold">Landlord PDF Pro</span>
              </div>
              <p className="text-gray-400 text-sm">
                Professional property inspection reports made simple.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><Link href="/demo" className="hover:text-white">Free Demo</Link></li>
                <li><Link href="/features" className="hover:text-white">Features</Link></li>
                <li><Link href="/pricing" className="hover:text-white">Pricing</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><Link href="/help" className="hover:text-white">Help Center</Link></li>
                <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
                <li><Link href="/refunds" className="hover:text-white">Refunds</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><Link href="/privacy" className="hover:text-white">Privacy Policy</Link></li>
                <li><Link href="/terms" className="hover:text-white">Terms of Service</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
            <p>&copy; 2024 Landlord PDF Pro. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
