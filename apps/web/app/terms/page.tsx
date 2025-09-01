import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
  title: 'Terms of Service - Landlord PDF Pro',
  description: 'Terms of Service for Landlord PDF Pro - Legal terms and conditions for using our service.',
}

export default function TermsOfService(): React.ReactElement {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">Terms of Service</h1>
          <p className="text-sm text-gray-600 mb-8">Last updated: {new Date().toLocaleDateString()}</p>

          <div className="prose max-w-none">
            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">1. Acceptance of Terms</h2>
            <p className="mb-4">By accessing and using Landlord PDF Pro ("Service"), you accept and agree to be bound by the terms and provision of this agreement.</p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">2. Description of Service</h2>
            <p className="mb-4">Landlord PDF Pro is a digital platform that enables property managers and landlords to:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Create detailed property inspection reports</li>
              <li>Document property conditions with photos and notes</li>
              <li>Generate professional PDF reports</li>
              <li>Store and manage inspection data securely</li>
              <li>Collect digital signatures from tenants and landlords</li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">3. User Accounts</h2>
            <p className="mb-4">To use our Service, you must:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Provide accurate and complete registration information</li>
              <li>Maintain the security of your account credentials</li>
              <li>Be at least 18 years old or have parental consent</li>
              <li>Use the Service only for lawful purposes</li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">4. Payment Terms</h2>
            <p className="mb-4">Our Service operates on a one-time payment model:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Payment of $29 provides lifetime access to all features</li>
              <li>All payments are processed securely through Stripe</li>
              <li>All sales are final - no refunds will be provided</li>
              <li>By purchasing, you acknowledge and agree to this no-refund policy</li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">6. User Content and Data</h2>
            <p className="mb-4">You retain ownership of all content you upload to our Service:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>You are responsible for the accuracy of your data</li>
              <li>You grant us license to process and store your data to provide the Service</li>
              <li>You must not upload illegal, harmful, or copyrighted content</li>
              <li>We may remove content that violates these terms</li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">7. Prohibited Uses</h2>
            <p className="mb-4">You may not use our Service to:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Violate any applicable laws or regulations</li>
              <li>Infringe on intellectual property rights</li>
              <li>Transmit malicious code or viruses</li>
              <li>Attempt to gain unauthorized access to our systems</li>
              <li>Use the Service for fraudulent purposes</li>
              <li>Harass, abuse, or harm other users</li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">8. Service Availability</h2>
            <p className="mb-4">We strive to maintain high service availability but cannot guarantee:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>100% uptime or uninterrupted service</li>
              <li>Error-free operation</li>
              <li>Compatibility with all devices or browsers</li>
              <li>We reserve the right to modify or discontinue features</li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">9. Intellectual Property</h2>
            <p className="mb-4">The Service and its original content, features, and functionality are owned by Landlord PDF Pro and are protected by international copyright, trademark, and other intellectual property laws.</p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">10. Disclaimer of Warranties</h2>
            <p className="mb-4">THE SERVICE IS PROVIDED "AS IS" WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.</p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">11. Limitation of Liability</h2>
            <p className="mb-4">IN NO EVENT SHALL LANDLORD PDF PRO BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING WITHOUT LIMITATION, LOSS OF PROFITS, DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES.</p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">12. Indemnification</h2>
            <p className="mb-4">You agree to defend, indemnify, and hold harmless Landlord PDF Pro from and against any claims, damages, obligations, losses, liabilities, costs, or debt arising from your use of the Service.</p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">13. Termination</h2>
            <p className="mb-4">We may terminate or suspend your account and access to the Service immediately, without prior notice, for conduct that we believe violates these Terms or is harmful to other users, us, or third parties.</p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">14. Governing Law</h2>
            <p className="mb-4">These Terms shall be interpreted and governed by the laws of the United States, without regard to its conflict of law provisions.</p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">15. Changes to Terms</h2>
            <p className="mb-4">We reserve the right to modify these terms at any time. We will notify users of any changes by posting the new Terms of Service on this page and updating the "Last updated" date.</p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">16. Contact Information</h2>
            <p className="mb-4">If you have any questions about these Terms of Service, please contact us at:</p>
            <p className="mb-4">
              Email: support@landlordpdfpro.net<br />
              Address: [Your Business Address]
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">17. Severability</h2>
            <p className="mb-4">If any provision of these Terms is held to be unenforceable or invalid, such provision will be changed and interpreted to accomplish the objectives of such provision to the greatest extent possible under applicable law.</p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">18. Entire Agreement</h2>
            <p className="mb-4">These Terms constitute the entire agreement between you and Landlord PDF Pro regarding the use of the Service, superseding any prior agreements between you and Landlord PDF Pro relating to your use of the Service.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
