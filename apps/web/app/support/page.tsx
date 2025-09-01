import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
  title: 'Support - Landlord PDF Pro',
  description: 'Get help and support for Landlord PDF Pro. Contact us, view FAQs, and find answers to common questions.',
}

export default function Support(): React.ReactElement {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">Support & Help Center</h1>
          
          {/* Contact Information */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">Contact Us</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">General Support</h3>
                <p className="text-gray-600 mb-2">Email: support@landlordpdfpro.net</p>
                <p className="text-gray-600 mb-2">Response time: Within 24 hours</p>
                <p className="text-gray-600">Available: Monday - Friday, 9 AM - 5 PM EST</p>
              </div>
              <div className="bg-green-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Billing Support</h3>
                <p className="text-gray-600 mb-2">Email: billing@landlordpdfpro.net</p>
                <p className="text-gray-600 mb-2">All sales are final</p>
                <p className="text-gray-600">Payment issues and account access</p>
              </div>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">Frequently Asked Questions</h2>
            
            <div className="space-y-6">
              <div className="border-b border-gray-200 pb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">How do I get started?</h3>
                <p className="text-gray-600">Simply sign up with your email address, purchase the one-time license for $29, and you'll have immediate access to create unlimited property inspection reports.</p>
              </div>

              <div className="border-b border-gray-200 pb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">What's included in the $29 purchase?</h3>
                <p className="text-gray-600">Your one-time purchase includes:</p>
                <ul className="list-disc pl-6 mt-2 text-gray-600">
                  <li>Unlimited property inspections</li>
                  <li>Professional PDF report generation</li>
                  <li>Photo upload and management</li>
                  <li>Digital signature collection</li>
                  <li>Secure cloud storage</li>
                  <li>Lifetime access with no recurring fees</li>
                </ul>
              </div>

              <div className="border-b border-gray-200 pb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">What is your refund policy?</h3>
                <p className="text-gray-600">All sales are final. No refunds will be provided under any circumstances. By purchasing, you acknowledge and agree to this no-refund policy.</p>
              </div>

              <div className="border-b border-gray-200 pb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Is my data secure?</h3>
                <p className="text-gray-600">Absolutely. We use enterprise-grade security with:</p>
                <ul className="list-disc pl-6 mt-2 text-gray-600">
                  <li>End-to-end encryption for all data</li>
                  <li>Secure cloud storage through Supabase</li>
                  <li>Regular security audits and updates</li>
                  <li>GDPR and privacy law compliance</li>
                </ul>
              </div>

              <div className="border-b border-gray-200 pb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Can I use this on mobile devices?</h3>
                <p className="text-gray-600">Yes! Our web application works perfectly on mobile browsers. We're also developing dedicated iOS and Android apps that will be available soon.</p>
              </div>

              <div className="border-b border-gray-200 pb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">What file formats are supported?</h3>
                <p className="text-gray-600">You can upload photos in JPG, PNG, and WEBP formats. All reports are generated as professional PDF documents that can be easily shared or printed.</p>
              </div>

              <div className="border-b border-gray-200 pb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">How do digital signatures work?</h3>
                <p className="text-gray-600">Our digital signature feature allows both landlords and tenants to sign inspection reports directly within the application using touch or mouse input. Signatures are securely stored and embedded in the final PDF.</p>
              </div>

              <div className="border-b border-gray-200 pb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Can I customize the inspection checklist?</h3>
                <p className="text-gray-600">Yes! While we provide default room templates (Kitchen, Living Room, Bedroom, Bathroom, etc.), you can add custom rooms and inspection items to match your specific needs.</p>
              </div>

              <div className="border-b border-gray-200 pb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Is there a limit on the number of properties?</h3>
                <p className="text-gray-600">No limits! You can create inspections for unlimited properties and generate as many reports as you need.</p>
              </div>

              <div className="pb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Do you offer bulk discounts?</h3>
                <p className="text-gray-600">For property management companies or organizations needing multiple licenses, please contact support@landlordpdfpro.net to discuss volume pricing options.</p>
              </div>
            </div>
          </div>

          {/* Technical Support */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">Technical Requirements</h2>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Supported Browsers</h3>
              <ul className="list-disc pl-6 text-gray-600 mb-4">
                <li>Chrome 90+ (recommended)</li>
                <li>Firefox 88+</li>
                <li>Safari 14+</li>
                <li>Edge 90+</li>
              </ul>
              
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Mobile Compatibility</h3>
              <ul className="list-disc pl-6 text-gray-600">
                <li>iOS Safari 14+</li>
                <li>Android Chrome 90+</li>
                <li>Responsive design works on all screen sizes</li>
              </ul>
            </div>
          </div>

          {/* Legal Links */}
          <div className="border-t border-gray-200 pt-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">Legal & Privacy</h2>
            <div className="flex flex-wrap gap-4">
              <a href="/privacy" className="text-blue-600 hover:text-blue-800 underline">Privacy Policy</a>
              <a href="/terms" className="text-blue-600 hover:text-blue-800 underline">Terms of Service</a>
            </div>
          </div>

          {/* Still Need Help */}
          <div className="mt-12 bg-blue-50 p-8 rounded-lg text-center">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Still Need Help?</h2>
            <p className="text-gray-600 mb-6">Can't find what you're looking for? Our support team is here to help!</p>
            <a 
              href="mailto:support@landlordpdfpro.net" 
              className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Contact Support
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
