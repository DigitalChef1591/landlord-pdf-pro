import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, FileText, Camera, Users, Download, Star, ArrowRight, Shield, Zap } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Landlord PDF Pro - Professional Property Inspection Reports",
  description: "Create professional move-in/out inspection reports with photos, signatures, and PDF exports. Trusted by thousands of landlords and property managers.",
};

export default function Home(): React.JSX.Element {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <FileText className="h-8 w-8 text-blue-600 mr-3" />
              <h1 className="text-2xl font-bold text-gray-900">Landlord PDF Pro</h1>
            </div>
            <div className="flex items-center space-x-4">
              <Link href="/demo" className="text-gray-600 hover:text-gray-900">
                Try Free Demo
              </Link>
              <Button asChild>
                <Link href="/purchase">Buy Now - $29</Link>
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge className="mb-4 bg-blue-600">Professional Property Management</Badge>
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Professional Move-In/Out<br />
            <span className="text-blue-600">Inspection Reports</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Create detailed property inspection reports with photos, signatures, and professional PDF exports. 
            Perfect for landlords, property managers, and real estate professionals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="text-lg px-8 py-4">
              <Link href="/demo">
                Try Free Demo
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="text-lg px-8 py-4">
              <Link href="/purchase">Buy Now - $29</Link>
            </Button>
          </div>
          <p className="text-sm text-gray-500 mt-4">
            One-time purchase • No monthly fees • Instant access
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Everything You Need for Professional Inspections
            </h2>
            <p className="text-xl text-gray-600">
              Streamline your property inspections with our comprehensive toolkit
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <FileText className="h-6 w-6 text-blue-600" />
                </div>
                <CardTitle>Room-by-Room Inspection</CardTitle>
                <CardDescription>
                  Pre-built templates for kitchens, bathrooms, bedrooms, and more
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Customizable room templates</li>
                  <li>• Condition tracking (Good/Needs Repair/N/A)</li>
                  <li>• Detailed notes for each item</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <Camera className="h-6 w-6 text-green-600" />
                </div>
                <CardTitle>Photo Documentation</CardTitle>
                <CardDescription>
                  Capture and organize photos for each room and item
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• High-quality photo capture</li>
                  <li>• Automatic organization</li>
                  <li>• EXIF data preservation</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-purple-600" />
                </div>
                <CardTitle>Digital Signatures</CardTitle>
                <CardDescription>
                  Collect tenant and landlord signatures digitally
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Touch-friendly signature capture</li>
                  <li>• Legally binding documentation</li>
                  <li>• Timestamp verification</li>
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
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-gray-600 mb-12">
            One-time purchase. No monthly fees. Lifetime access.
          </p>

          <div className="max-w-lg mx-auto">
            <Card className="border-2 border-blue-500 shadow-xl">
              <CardHeader className="text-center">
                <Badge className="w-fit mx-auto mb-4 bg-blue-600">Most Popular</Badge>
                <CardTitle className="text-3xl">Landlord PDF Pro</CardTitle>
                <CardDescription>Complete professional toolkit</CardDescription>
                <div className="text-5xl font-bold text-gray-900 mt-4">$29</div>
                <p className="text-gray-500">One-time purchase</p>
              </CardHeader>
              <CardContent className="space-y-4">
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

                <Button asChild className="w-full text-lg py-6">
                  <Link href="/purchase">
                    Get Started Now
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>

                <div className="text-center">
                  <Link href="/demo" className="text-blue-600 hover:text-blue-800 text-sm">
                    Try the free demo first →
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Trusted by Property Professionals
            </h2>
            <p className="text-xl text-gray-600">
              See what landlords and property managers are saying
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">
                  "This tool has saved me hours on each inspection. The PDF reports look 
                  incredibly professional and my tenants love the digital process."
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                    <span className="text-blue-600 font-semibold">SM</span>
                  </div>
                  <div>
                    <p className="font-semibold">Sarah Mitchell</p>
                    <p className="text-sm text-gray-500">Property Manager</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">
                  "The photo organization and signature features are game-changers. 
                  I can complete inspections faster and with better documentation."
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mr-3">
                    <span className="text-green-600 font-semibold">DJ</span>
                  </div>
                  <div>
                    <p className="font-semibold">David Johnson</p>
                    <p className="text-sm text-gray-500">Real Estate Investor</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">
                  "Worth every penny! The one-time purchase model is refreshing, 
                  and the software pays for itself after just a few inspections."
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center mr-3">
                    <span className="text-purple-600 font-semibold">LR</span>
                  </div>
                  <div>
                    <p className="font-semibold">Lisa Rodriguez</p>
                    <p className="text-sm text-gray-500">Landlord</p>
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
                <li><Link href="#" className="hover:text-white">Features</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="#" className="hover:text-white">Help Center</Link></li>
                <li><Link href="#" className="hover:text-white">Contact Us</Link></li>
                <li><Link href="#" className="hover:text-white">Documentation</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="#" className="hover:text-white">Privacy Policy</Link></li>
                <li><Link href="#" className="hover:text-white">Terms of Service</Link></li>
                <li><Link href="#" className="hover:text-white">Refund Policy</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Landlord PDF Pro. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
