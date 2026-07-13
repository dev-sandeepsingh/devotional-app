import { Helmet } from "react-helmet-async";

export default function Donate() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <Helmet>
        <title>Donate | Support Devotional Site</title>
        <meta name="description" content="Support our devotional site with donations via UPI or Razorpay." />
      </Helmet>

      {/* Header Section */}
      <section className="bg-gradient-to-r from-orange-600 to-red-600 text-white py-8 px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold mb-2 drop-shadow-lg">❤️ Support Our Mission</h1>
          <p className="text-base opacity-90">Help us maintain and expand this devotional platform for everyone</p>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl font-bold mb-6 dark:text-white">Why Your Support Matters</h2>
            <ul className="space-y-4">
              <li className="flex items-start gap-4">
                <span className="text-2xl">🌐</span>
                <div>
                  <h3 className="font-bold dark:text-white">Free Access</h3>
                  <p className="text-gray-600 dark:text-gray-400">We keep all content free for everyone, regardless of their financial situation</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="text-2xl">📱</span>
                <div>
                  <h3 className="font-bold dark:text-white">Multi-Language Support</h3>
                  <p className="text-gray-600 dark:text-gray-400">Maintaining content in 8+ languages requires continuous effort and resources</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="text-2xl">⚡</span>
                <div>
                  <h3 className="font-bold dark:text-white">Fast & Reliable</h3>
                  <p className="text-gray-600 dark:text-gray-400">Your support helps us provide fast, reliable, and ad-free experience</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="text-2xl">✨</span>
                <div>
                  <h3 className="font-bold dark:text-white">Continuous Improvement</h3>
                  <p className="text-gray-600 dark:text-gray-400">We're always adding new content and features to enhance your experience</p>
                </div>
              </li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-orange-50 to-red-50 dark:from-gray-700 dark:to-gray-600 rounded-xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold mb-6 dark:text-white">Every Donation Helps</h3>
            <div className="space-y-4 mb-8">
              <div className="flex justify-between items-center">
                <span className="font-semibold dark:text-gray-300">₹100</span>
                <span className="text-gray-600 dark:text-gray-400">Maintain server for 1 day</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="font-semibold dark:text-gray-300">₹500</span>
                <span className="text-gray-600 dark:text-gray-400">Add new content in 1 language</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="font-semibold dark:text-gray-300">₹2,000</span>
                <span className="text-gray-600 dark:text-gray-400">Monthly server & maintenance</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="font-semibold dark:text-gray-300">₹5,000+</span>
                <span className="text-gray-600 dark:text-gray-400">New features & improvements</span>
              </div>
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400 text-center">
              <p className="font-semibold mb-2">100% of donations go directly to platform maintenance</p>
            </div>
          </div>
        </div>

        {/* Donation Methods */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center dark:text-white">Choose Your Payment Method</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <button
              onClick={() => window.open("upi://pay?pa=yourupi@bank&pn=DevotionalSite&tr=DevotionalDonation")}
              className="group bg-white dark:bg-gray-700 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 text-center hover:-translate-y-1"
            >
              <div className="text-5xl mb-4">📱</div>
              <h3 className="text-2xl font-bold mb-2 dark:text-white">UPI Payment</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">Quick and secure payment via UPI</p>
              <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white py-3 rounded-lg font-semibold group-hover:opacity-90 transition">
                Pay via UPI
              </div>
            </button>

            <button
              onClick={() => window.open("https://razorpay.com/payment-link/62weststudio")}
              className="group bg-white dark:bg-gray-700 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 text-center hover:-translate-y-1"
            >
              <div className="text-5xl mb-4">💳</div>
              <h3 className="text-2xl font-bold mb-2 dark:text-white">Card & Razorpay</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">Accept all major payment methods</p>
              <div className="bg-gradient-to-r from-amber-500 to-orange-600 text-white py-3 rounded-lg font-semibold group-hover:opacity-90 transition">
                Pay via Razorpay
              </div>
            </button>
          </div>
        </section>

        {/* Testimonials */}
        <section className="bg-gradient-to-r from-orange-50 to-red-50 dark:from-gray-800 dark:to-gray-700 rounded-xl p-8">
          <h2 className="text-2xl font-bold mb-8 text-center dark:text-white">Thank You Donors!</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-4xl mb-4">🙏</div>
              <p className="text-gray-700 dark:text-gray-300 italic">"This platform helped me reconnect with my spirituality. Grateful for the work being done here."</p>
              <p className="mt-4 font-semibold dark:text-white">- A Devotee</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">✨</div>
              <p className="text-gray-700 dark:text-gray-300 italic">"Free devotional content in my native language is invaluable. Thank you for your service."</p>
              <p className="mt-4 font-semibold dark:text-white">- Grateful Reader</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">💫</div>
              <p className="text-gray-700 dark:text-gray-300 italic">"The quality and accuracy of content is exceptional. Proud to support this mission."</p>
              <p className="mt-4 font-semibold dark:text-white">- A Supporter</p>
            </div>
          </div>
        </section>
      </section>
    </div>
  );
}
