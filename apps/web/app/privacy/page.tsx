import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
  title: 'Privacy Policy - Landlord PDF Pro',
  description: 'Privacy Policy for Landlord PDF Pro - How we collect, use, and protect your data.',
}

export default function PrivacyPolicy(): React.ReactElement {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">Privacy Policy</h1>
          <p className="text-sm text-gray-600 mb-8">Last updated: {new Date().toLocaleDateString()}</p>

          <div className="prose max-w-none">
            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">1. Information We Collect</h2>
            <p className="mb-4">We collect information you provide directly to us, such as:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Email address for account creation and authentication</li>
              <li>Property information and inspection data you input</li>
              <li>Photos and signatures you upload</li>
              <li>Payment information processed securely through Stripe</li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">2. How We Use Your Information</h2>
            <p className="mb-4">We use the information we collect to:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Provide, maintain, and improve our services</li>
              <li>Process transactions and send related information</li>
              <li>Send technical notices and support messages</li>
              <li>Generate property inspection reports</li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">3. Information Sharing</h2>
            <p className="mb-4">We do not sell, trade, or otherwise transfer your personal information to third parties except:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>With your explicit consent</li>
              <li>To comply with legal obligations</li>
              <li>To protect our rights and safety</li>
              <li>With service providers who assist in our operations (Stripe for payments, Supabase for data storage)</li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">4. Data Security</h2>
            <p className="mb-4">We implement appropriate security measures to protect your personal information:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>All data is encrypted in transit and at rest</li>
              <li>Access controls and authentication systems</li>
              <li>Regular security audits and updates</li>
              <li>Secure cloud infrastructure through Supabase</li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">5. Data Retention</h2>
            <p className="mb-4">We retain your information for as long as your account is active or as needed to provide services. You may request deletion of your account and associated data at any time.</p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">6. Your Rights</h2>
            <p className="mb-4">You have the right to:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Access your personal information</li>
              <li>Correct inaccurate information</li>
              <li>Delete your account and data</li>
              <li>Export your data</li>
              <li>Opt out of marketing communications</li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">7. Cookies and Tracking</h2>
            <p className="mb-4">We use essential cookies for authentication and service functionality. We do not use tracking cookies for advertising purposes.</p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">8. Third-Party Services</h2>
            <p className="mb-4">Our service integrates with:</p>
            <ul className="list-disc pl-6 mb-4">
              <li><strong>Stripe:</strong> Payment processing (subject to Stripe's Privacy Policy)</li>
              <li><strong>Supabase:</strong> Database and authentication (subject to Supabase's Privacy Policy)</li>
              <li><strong>Vercel:</strong> Hosting and deployment</li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">9. Children's Privacy</h2>
            <p className="mb-4">Our service is not intended for children under 13. We do not knowingly collect personal information from children under 13.</p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">10. International Users</h2>
            <p className="mb-4">Your information may be transferred to and processed in the United States. By using our service, you consent to this transfer.</p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">11. Changes to Privacy Policy</h2>
            <p className="mb-4">We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date.</p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">12. Contact Us</h2>
            <p className="mb-4">If you have any questions about this Privacy Policy, please contact us at:</p>
            <p className="mb-4">
              Email: privacy@landlordpdfpro.net<br />
              Address: [Your Business Address]
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
