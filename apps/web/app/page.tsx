// Force redeploy to fix custom domain caching issue - 2025-09-01
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, FileText, Camera, Users, Download, Star, ArrowRight, Shield, Zap } from "lucide-react";
import { Metadata } from "next";
import { InContentBanner, FooterBanner } from "@/components/ui/ad-banner";

export const metadata: Metadata = {
  title: "Landlord PDF Pro - Professional Property Inspection Reports",
  description: "Create professional move-in/out inspection reports with photos, signatures, and PDF exports. Trusted by thousands of landlords and property managers.",
};

export default function Home(): React.JSX.Element {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-lg border-b border-gray-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center">
              <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-2 rounded-xl mr-4">
                <FileText className="h-8 w-8 text-white" />
              </div>
              <h1 className="text-3xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                Landlord PDF Pro
              </h1>
            </div>
            <div className="flex items-center space-x-6">
              <Link href="/demo" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
                Try Free Demo
              </Link>
              <Button asChild className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 shadow-lg">
                <Link href="/purchase">Buy Now - $29</Link>
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50"></div>
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-800 text-sm font-medium mb-8">
            <Zap className="h-4 w-4 mr-2" />
            Professional Property Management Solution
          </div>
          <h1 className="text-6xl md:text-7xl font-bold text-gray-900 mb-8 leading-tight">
            Professional<br />
            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Inspection Reports
            </span>
          </h1>
          <p className="text-xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed">
            Create stunning property inspection reports with photos, digital signatures, and professional PDF exports. 
            Trusted by thousands of landlords, property managers, and real estate professionals worldwide.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
            <Button asChild size="lg" className="text-lg px-10 py-6 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 shadow-xl hover:shadow-2xl transition-all duration-300">
              <Link href="/demo">
                Try Free Demo
                <ArrowRight className="ml-3 h-6 w-6" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="text-lg px-10 py-6 border-2 border-gray-300 hover:border-blue-600 hover:text-blue-600 transition-all duration-300">
              <Link href="/purchase">Buy Now - $29</Link>
            </Button>
          </div>
          <div className="flex items-center justify-center space-x-8 text-sm text-gray-500">
            <div className="flex items-center">
              <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
              One-time purchase
            </div>
            <div className="flex items-center">
              <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
              No monthly fees
            </div>
            <div className="flex items-center">
              <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
              Instant access
            </div>
          </div>
        </div>
      </section>

      {/* Ad Banner */}
      <InContentBanner />

      {/* Features Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-indigo-100 text-indigo-800 text-sm font-medium mb-6">
              <Shield className="h-4 w-4 mr-2" />
              Comprehensive Feature Set
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Everything You Need for<br />
              <span className="text-indigo-600">Professional Inspections</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Streamline your property inspections with our comprehensive toolkit designed by industry professionals
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center border-0 shadow-xl hover:shadow-2xl transition-all duration-300 bg-white group hover:-translate-y-2">
              <CardHeader className="pb-4">
                <div className="mx-auto w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <FileText className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl font-bold text-gray-900 mb-3">Room-by-Room Inspection</CardTitle>
                <CardDescription className="text-gray-600 text-base">
                  Pre-built templates for kitchens, bathrooms, bedrooms, and more
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="text-gray-600 space-y-3 text-left">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                    Customizable room templates
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                    Condition tracking (Good/Needs Repair/N/A)
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                    Detailed notes for each item
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-xl hover:shadow-2xl transition-all duration-300 bg-white group hover:-translate-y-2">
              <CardHeader className="pb-4">
                <div className="mx-auto w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Camera className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl font-bold text-gray-900 mb-3">Photo Documentation</CardTitle>
                <CardDescription className="text-gray-600 text-base">
                  Capture and organize photos for each room and item
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="text-gray-600 space-y-3 text-left">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                    High-quality photo capture
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                    Automatic organization
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                    EXIF data preservation
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-xl hover:shadow-2xl transition-all duration-300 bg-white group hover:-translate-y-2">
              <CardHeader className="pb-4">
                <div className="mx-auto w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl font-bold text-gray-900 mb-3">Digital Signatures</CardTitle>
                <CardDescription className="text-gray-600 text-base">
                  Collect tenant and landlord signatures digitally
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="text-gray-600 space-y-3 text-left">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                    Touch-friendly signature capture
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                    Legally binding documentation
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                    Timestamp verification
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* PDF Export Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-green-600">Professional Output</Badge>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Generate Professional PDF Reports
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Export your inspections as professional, legally-compliant PDF reports 
                that you can share with tenants, property owners, and legal teams.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-600 mr-3 mt-0.5" />
                  <div>
                    <h4 className="font-semibold">Professional Layout</h4>
                    <p className="text-gray-600">Clean, organized reports with your branding</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-600 mr-3 mt-0.5" />
                  <div>
                    <h4 className="font-semibold">Photo Integration</h4>
                    <p className="text-gray-600">All photos automatically included and organized</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-600 mr-3 mt-0.5" />
                  <div>
                    <h4 className="font-semibold">Digital Signatures</h4>
                    <p className="text-gray-600">Embedded signatures for legal compliance</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="flex items-center mb-4">
                <Download className="h-6 w-6 text-blue-600 mr-2" />
                <h3 className="text-lg font-semibold">Sample Report</h3>
              </div>
              <div className="bg-gray-100 h-64 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <FileText className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-500">Professional PDF Preview</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 to-indigo-50/30"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-green-100 text-green-800 text-sm font-medium mb-6">
            <CheckCircle className="h-4 w-4 mr-2" />
            Simple & Transparent
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            One Price,<br />
            <span className="text-blue-600">Everything Included</span>
          </h2>
          <p className="text-xl text-gray-600 mb-16 max-w-3xl mx-auto">
            No hidden fees, no monthly subscriptions, no surprises. Pay once and own it forever. All sales are final.
          </p>

          <div className="max-w-md mx-auto">
            <Card className="border-0 shadow-2xl bg-white relative overflow-hidden group hover:shadow-3xl transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-indigo-600/5"></div>
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-b-full"></div>
              <CardHeader className="text-center pt-8 pb-4">
                <Badge className="w-fit mx-auto mb-6 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-4 py-2">
                  ⭐ Most Popular
                </Badge>
                <CardTitle className="text-2xl font-bold text-gray-900 mb-2">Landlord PDF Pro</CardTitle>
                <CardDescription className="text-gray-600 text-base mb-6">
                  Complete professional toolkit for property inspections
                </CardDescription>
                <div className="relative">
                  <div className="text-6xl font-bold text-gray-900 mb-2">$29</div>
                  <div className="absolute -top-2 -right-8 text-lg text-gray-500 line-through">$99</div>
                  <p className="text-gray-600 font-medium">One-time purchase • Lifetime access</p>
                </div>
              </CardHeader>
              <CardContent className="px-8 pb-8">
                <div className="space-y-4 mb-8">
                  <div className="flex items-center text-gray-700">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                    <span className="font-medium">Unlimited inspections & exports</span>
                  </div>
                  <div className="flex items-center text-gray-700">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                    <span className="font-medium">Up to 100 photos per inspection</span>
                  </div>
                  <div className="flex items-center text-gray-700">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                    <span className="font-medium">Professional PDFs (no watermark)</span>
                  </div>
                  <div className="flex items-center text-gray-700">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                    <span className="font-medium">Digital signature collection</span>
                  </div>
                  <div className="flex items-center text-gray-700">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                    <span className="font-medium">Cloud storage & sync</span>
                  </div>
                  <div className="flex items-center text-gray-700">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                    <span className="font-medium">Priority email support</span>
                  </div>
                </div>

                <Button asChild className="w-full text-lg py-6 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 shadow-lg hover:shadow-xl transition-all duration-300">
                  <Link href="/purchase">
                    Get Started Now
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>

                <div className="text-center mt-6">
                  <Link href="/demo" className="text-blue-600 hover:text-blue-800 font-medium">
                    Try the free demo first →
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-yellow-100 text-yellow-800 text-sm font-medium mb-6">
              <Star className="h-4 w-4 mr-2 fill-current" />
              Customer Success Stories
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Trusted by<br />
              <span className="text-indigo-600">Property Professionals</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join thousands of landlords and property managers who have transformed their inspection process
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300 bg-white group hover:-translate-y-1">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                  "This tool has saved me hours on each inspection. The PDF reports look 
                  incredibly professional and my tenants love the digital process."
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mr-4">
                    <span className="text-white font-bold text-lg">SM</span>
                  </div>
                  <div>
                    <p className="font-bold text-gray-900">Sarah Mitchell</p>
                    <p className="text-gray-600">Property Manager</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300 bg-white group hover:-translate-y-1">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                  "The photo organization and signature features are game-changers. 
                  I can complete inspections faster and with better documentation."
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mr-4">
                    <span className="text-white font-bold text-lg">DJ</span>
                  </div>
                  <div>
                    <p className="font-bold text-gray-900">David Johnson</p>
                    <p className="text-gray-600">Real Estate Investor</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300 bg-white group hover:-translate-y-1">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                  "Worth every penny! The one-time purchase model is refreshing, 
                  and the software pays for itself after just a few inspections."
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center mr-4">
                    <span className="text-white font-bold text-lg">LR</span>
                  </div>
                  <div>
                    <p className="font-bold text-gray-900">Lisa Rodriguez</p>
                    <p className="text-gray-600">Landlord</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Streamline Your Inspections?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join thousands of property professionals who trust Landlord PDF Pro
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary" className="text-lg px-8 py-4">
              <Link href="/demo">
                Try Free Demo
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="text-lg px-8 py-4 bg-white text-blue-600 hover:bg-gray-100">
              <Link href="/purchase">Buy Now - $29</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer Ad Banner */}
      <FooterBanner />

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <FileText className="h-6 w-6 text-blue-400 mr-2" />
                <span className="text-lg font-semibold">Landlord PDF Pro</span>
              </div>
              <p className="text-gray-400">
                Professional property inspection reports made simple.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/demo" className="hover:text-white">Free Demo</Link></li>
                <li><Link href="/purchase" className="hover:text-white">Pricing</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/support" className="hover:text-white">Help Center</Link></li>
                <li><span className="text-gray-400">Email: support@landlordpdfpro.net</span></li>
                <li><span className="text-gray-400">All sales are final</span></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/privacy" className="hover:text-white">Privacy Policy</Link></li>
                <li><Link href="/terms" className="hover:text-white">Terms of Service</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Landlord PDF Pro. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
