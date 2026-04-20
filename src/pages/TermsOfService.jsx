import React from 'react';
import Card from '../components/Card';

const TermsOfService = () => {
  return (
    <div className="bg-white pt-20">
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Terms of Service</h1>
          <p className="text-gray-600 mb-8">Last updated: December 6, 2025</p>

          <Card className="mb-8">
            <div className="prose max-w-none text-gray-700">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Acceptance of Terms</h2>
              <p className="mb-4">
                By accessing and using the services provided by Encova Solutions, you accept and agree to be bound by the terms and provisions of this agreement. If you do not agree to these terms, please do not use our services.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">2. Services Description</h2>
              <p className="mb-4">
                Encova Solutions provides IT solutions and consulting services including but not limited to:
              </p>
              <ul className="list-disc list-inside mb-4 space-y-2">
                <li>Web development</li>
                <li>Mobile application development</li>
                <li>UI/UX design</li>
                <li>Artificial intelligence solutions</li>
                <li>Graphic design services</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">3. User Responsibilities</h2>
              <p className="mb-4">As a user of our services, you agree to:</p>
              <ul className="list-disc list-inside mb-4 space-y-2">
                <li>Provide accurate and complete information</li>
                <li>Maintain the security of your account credentials</li>
                <li>Comply with all applicable laws and regulations</li>
                <li>Not use our services for any unlawful purpose</li>
                <li>Not attempt to gain unauthorized access to our systems</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">4. Intellectual Property</h2>
              <p className="mb-4">
                All content, features, and functionality of our services are owned by Encova Solutions and are protected by international copyright, trademark, and other intellectual property laws.
              </p>
              <p className="mb-4">
                Unless otherwise specified in a written agreement, all deliverables created for clients become the property of the client upon full payment.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">5. Payment Terms</h2>
              <p className="mb-4">
                Payment terms will be specified in individual project agreements. Generally:
              </p>
              <ul className="list-disc list-inside mb-4 space-y-2">
                <li>Invoices are due within the timeframe specified in the agreement</li>
                <li>Late payments may incur additional fees</li>
                <li>Work may be suspended for non-payment</li>
                <li>All prices are in the currency specified in the agreement</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">6. Project Timelines</h2>
              <p className="mb-4">
                While we strive to meet all agreed-upon deadlines, timelines are estimates and may be subject to change based on project complexity, client feedback, and unforeseen circumstances.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">7. Warranties and Disclaimers</h2>
              <p className="mb-4">
                We warrant that our services will be performed in a professional manner. However, we make no warranties regarding:
              </p>
              <ul className="list-disc list-inside mb-4 space-y-2">
                <li>Uninterrupted or error-free service</li>
                <li>Results that meet your specific requirements</li>
                <li>Third-party services or products</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">8. Limitation of Liability</h2>
              <p className="mb-4">
                Encova Solutions shall not be liable for any indirect, incidental, special, or consequential damages arising out of or related to the use of our services, even if advised of the possibility of such damages.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">9. Termination</h2>
              <p className="mb-4">
                Either party may terminate services upon written notice. Upon termination:
              </p>
              <ul className="list-disc list-inside mb-4 space-y-2">
                <li>Client shall pay for all work completed to date</li>
                <li>Encova Solutions will deliver completed work upon payment</li>
                <li>Confidential information must be returned or destroyed</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">10. Modifications</h2>
              <p className="mb-4">
                We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting on our website. Continued use of our services constitutes acceptance of modified terms.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">11. Governing Law</h2>
              <p className="mb-4">
                These terms shall be governed by and construed in accordance with the laws of Pakistan, without regard to its conflict of law provisions.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">12. Contact Information</h2>
              <p className="mb-4">
                For questions about these Terms of Service, please contact us at:
              </p>
              <p className="mb-2 text-gray-700">Email: info@encovasolutions.com</p>
              <p className="mb-2 text-gray-700">Phone: +92 311 9093 230</p>
              <p className="text-gray-700">Address: Office No TF 200, Deans Trade Center, Peshawar, Pakistan</p>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default TermsOfService;

