import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle, Download, Mail, Smartphone } from 'lucide-react';

export default function ThankYouPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Success Header */}
        <div className="text-center mb-12">
          <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
            <CheckCircle className="h-8 w-8 text-green-600" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Welcome to Landlord PDF Pro!
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Your purchase was successful. You now have access to all Pro features.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* What's Next */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Download className="h-6 w-6 text-blue-600 mr-2" />
                What's Next?
              </CardTitle>
              <CardDescription>
                Get started with your new Pro account
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-start">
                <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mr-3 mt-0.5">
                  <span className="text-sm font-medium text-blue-600">1</span>
                </div>
                <div>
                  <h4 className="font-medium">Check your email</h4>
                  <p className="text-sm text-gray-600">We've sent you a receipt and account setup instructions</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mr-3 mt-0.5">
                  <span className="text-sm font-medium text-blue-600">2</span>
                </div>
                <div>
                  <h4 className="font-medium">Create your first inspection</h4>
                  <p className="text-sm text-gray-600">Start with our full-featured inspection builder</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mr-3 mt-0.5">
                  <span className="text-sm font-medium text-blue-600">3</span>
                </div>
                <div>
                  <h4 className="font-medium">Download mobile apps</h4>
                  <p className="text-sm text-gray-600">Get our iOS and Android apps for on-the-go inspections</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Pro Features Unlocked */}
          <Card className="bg-gradient-to-br from-blue-50 to-indigo-50 border-blue-200">
            <CardHeader>
              <CardTitle className="flex items-center text-blue-800">
                <CheckCircle className="h-6 w-6 mr-2" />
                Pro Features Unlocked
              </CardTitle>
              <CardDescription className="text-blue-600">
                You now have access to everything
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-center text-sm text-blue-700">
                <CheckCircle className="h-4 w-4 text-blue-600 mr-2" />
                Unlimited inspections & exports
              </div>
              <div className="flex items-center text-sm text-blue-700">
                <CheckCircle className="h-4 w-4 text-blue-600 mr-2" />
                Up to 100 photos per inspection
              </div>
              <div className="flex items-center text-sm text-blue-700">
                <CheckCircle className="h-4 w-4 text-blue-600 mr-2" />
                Professional PDFs (no watermark)
              </div>
              <div className="flex items-center text-sm text-blue-700">
                <CheckCircle className="h-4 w-4 text-blue-600 mr-2" />
                Digital signature collection
              </div>
              <div className="flex items-center text-sm text-blue-700">
                <CheckCircle className="h-4 w-4 text-blue-600 mr-2" />
                Cloud storage & sync
              </div>
              <div className="flex items-center text-sm text-blue-700">
                <CheckCircle className="h-4 w-4 text-blue-600 mr-2" />
                Priority email support
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Action Buttons */}
        <div className="text-center space-y-4">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild className="text-lg px-8 py-4">
              <Link href="/dashboard">Go to Dashboard</Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="text-lg px-8 py-4">
              <Link href="/dashboard/new">Create First Inspection</Link>
            </Button>
          </div>
          <p className="text-sm text-gray-500">
            Need help? <Link href="/support" className="text-blue-600 hover:text-blue-800">Contact our support team</Link>
          </p>
        </div>

        {/* Mobile Apps Section */}
        <div className="mt-16">
          <Card>
            <CardHeader className="text-center">
              <CardTitle className="flex items-center justify-center">
                <Smartphone className="h-6 w-6 text-green-600 mr-2" />
                Get Our Mobile Apps
              </CardTitle>
              <CardDescription>
                Take your inspections on the go with our native mobile apps
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <h4 className="font-medium">iOS App</h4>
                  <p className="text-sm text-gray-600">
                    Available on the App Store. Includes camera integration and offline support.
                  </p>
                  <Button variant="outline" disabled>
                    Coming Soon - iOS
                  </Button>
                </div>
                <div className="space-y-3">
                  <h4 className="font-medium">Android App</h4>
                  <p className="text-sm text-gray-600">
                    Available on Google Play. Full feature parity with the web app.
                  </p>
                  <Button variant="outline" disabled>
                    Coming Soon - Android
                  </Button>
                </div>
              </div>
              <p className="text-sm text-gray-500">
                Mobile apps are currently in development and will be available soon. 
                You'll be notified via email when they're ready.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Support Section */}
        <div className="mt-12 text-center">
          <Card className="bg-gray-50">
            <CardHeader>
              <CardTitle className="flex items-center justify-center">
                <Mail className="h-6 w-6 text-blue-600 mr-2" />
                Need Help Getting Started?
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">
                Our support team is here to help you make the most of Landlord PDF Pro.
              </p>
              <Button variant="outline" asChild>
                <Link href="mailto:support@landlordpdfpro.com">
                  Contact Support
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
