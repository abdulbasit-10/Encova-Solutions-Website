import React from 'react';
import Card from '../components/Card';

const CookiePolicy = () => {
  return (
    <div className="bg-white pt-20">
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Cookie Policy</h1>
          <p className="text-gray-600 mb-8">Last updated: December 6, 2025</p>

          <Card className="mb-8">
            <div className="prose max-w-none text-gray-700">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">1. What Are Cookies</h2>
              <p className="mb-4">
                Cookies are small text files that are placed on your device when you visit our website. They are widely used to make websites work more efficiently and provide information to website owners.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">2. How We Use Cookies</h2>
              <p className="mb-4">
                Encova Solutions uses cookies to:
              </p>
              <ul className="list-disc list-inside mb-4 space-y-2">
                <li>Ensure our website functions properly</li>
                <li>Remember your preferences and settings</li>
                <li>Understand how you use our website</li>
                <li>Improve your user experience</li>
                <li>Analyze website traffic and usage patterns</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">3. Types of Cookies We Use</h2>
              
              <h3 className="text-xl font-bold text-gray-900 mb-3 mt-6">Essential Cookies</h3>
              <p className="mb-4">
                These cookies are necessary for the website to function and cannot be switched off. They are usually only set in response to actions you take, such as setting privacy preferences or filling in forms.
              </p>

              <h3 className="text-xl font-bold text-gray-900 mb-3 mt-6">Performance Cookies</h3>
              <p className="mb-4">
                These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously. This helps us improve how our website works.
              </p>

              <h3 className="text-xl font-bold text-gray-900 mb-3 mt-6">Functionality Cookies</h3>
              <p className="mb-4">
                These cookies enable enhanced functionality and personalization, such as remembering your preferences and choices.
              </p>

              <h3 className="text-xl font-bold text-gray-900 mb-3 mt-6">Analytics Cookies</h3>
              <p className="mb-4">
                We use analytics cookies to understand how visitors use our site and to improve user experience. These cookies collect information such as:
              </p>
              <ul className="list-disc list-inside mb-4 space-y-2">
                <li>Number of visitors</li>
                <li>Pages visited</li>
                <li>Time spent on pages</li>
                <li>Source of traffic</li>
                <li>Error messages encountered</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">4. Third-Party Cookies</h2>
              <p className="mb-4">
                We may use third-party services that also set cookies on your device. These include:
              </p>
              <ul className="list-disc list-inside mb-4 space-y-2">
                <li>Google Analytics for website analytics</li>
                <li>Social media platforms for sharing content</li>
                <li>Advertising networks (if applicable)</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">5. How to Control Cookies</h2>
              <p className="mb-4">
                You have the right to decide whether to accept or reject cookies. You can control and/or delete cookies through your browser settings:
              </p>
              <ul className="list-disc list-inside mb-4 space-y-2">
                <li><strong>Chrome:</strong> Settings → Privacy and Security → Cookies and other site data</li>
                <li><strong>Firefox:</strong> Options → Privacy & Security → Cookies and Site Data</li>
                <li><strong>Safari:</strong> Preferences → Privacy → Cookies and website data</li>
                <li><strong>Edge:</strong> Settings → Cookies and site permissions</li>
              </ul>
              <p className="mb-4">
                Please note that if you disable cookies, some features of our website may not function properly.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">6. Cookie Duration</h2>
              <p className="mb-4">
                Cookies may be either "session" or "persistent" cookies:
              </p>
              <ul className="list-disc list-inside mb-4 space-y-2">
                <li><strong>Session Cookies:</strong> These are temporary and are deleted when you close your browser</li>
                <li><strong>Persistent Cookies:</strong> These remain on your device for a set period or until you delete them</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">7. Updates to This Policy</h2>
              <p className="mb-4">
                We may update this Cookie Policy from time to time to reflect changes in our practices or for legal, regulatory, or operational reasons. Please check this page periodically for updates.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">8. More Information</h2>
              <p className="mb-4">
                For more information about cookies and how they work, visit:
              </p>
              <ul className="list-disc list-inside mb-4 space-y-2">
                <li>www.allaboutcookies.org</li>
                <li>www.youronlinechoices.eu</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">9. Contact Us</h2>
              <p className="mb-4">
                If you have any questions about our Cookie Policy, please contact us at:
              </p>
              <p className="mb-2">Email: info@encovasolutions.com</p>
              <p className="mb-2">Phone: +92 311 9093 230</p>
              <p>Address: Office No TF 200, Deans Trade Center, Peshawar, Pakistan</p>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default CookiePolicy;

