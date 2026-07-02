import { Helmet } from "react-helmet-async";
import { useState } from "react";

const CONTACT_EMAIL = "hello@devotional.example";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // No backend yet — show a confirmation. Wire this to an email/API service when available.
    setSubmitted(true);
  };

  const channels = [
    { icon: "📧", title: "Email", value: CONTACT_EMAIL, href: `mailto:${CONTACT_EMAIL}` },
    { icon: "💬", title: "Response Time", value: "Within 2–3 business days", href: null },
    { icon: "🌐", title: "Languages", value: "We reply in Hindi & English", href: null },
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Helmet>
        <title>Contact Us | Devotional</title>
        <meta name="description" content="Get in touch with the Devotional team — questions, suggestions, and feedback welcome." />
      </Helmet>

      {/* Header */}
      <section className="bg-gradient-to-r from-orange-600 to-red-600 dark:from-orange-800 dark:to-red-800 text-white py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 drop-shadow-lg">✉️ Contact Us</h1>
          <p className="text-lg opacity-90 max-w-2xl">
            Questions, suggestions, or a kind word — we'd love to hear from you.
          </p>
        </div>
      </section>

      <main className="max-w-5xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact info */}
          <aside className="lg:col-span-1 space-y-4">
            {channels.map((c) => (
              <div key={c.title} className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 border border-gray-100 dark:border-gray-700">
                <div className="text-3xl mb-2" aria-hidden="true">{c.icon}</div>
                <h3 className="font-bold text-gray-800 dark:text-white mb-1">{c.title}</h3>
                {c.href ? (
                  <a href={c.href} className="text-orange-600 dark:text-orange-400 hover:underline break-all">{c.value}</a>
                ) : (
                  <p className="text-gray-600 dark:text-gray-300 text-sm">{c.value}</p>
                )}
              </div>
            ))}
          </aside>

          {/* Form */}
          <section className="lg:col-span-2">
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 border border-gray-100 dark:border-gray-700">
              {submitted ? (
                <div className="text-center py-12">
                  <div className="text-5xl mb-4" aria-hidden="true">🙏</div>
                  <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">Thank you, {form.name || "friend"}!</h2>
                  <p className="text-gray-600 dark:text-gray-300 mb-6">
                    Your message has been received. We'll get back to you soon.
                  </p>
                  <button
                    onClick={() => { setSubmitted(false); setForm({ name: "", email: "", subject: "", message: "" }); }}
                    className="inline-block bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-2.5 rounded-lg font-semibold hover:opacity-90 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">Send us a message</h2>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Name</label>
                      <input
                        id="name" name="name" type="text" required value={form.name} onChange={handleChange}
                        className="w-full px-4 py-2.5 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-orange-500"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Email</label>
                      <input
                        id="email" name="email" type="email" required value={form.email} onChange={handleChange}
                        className="w-full px-4 py-2.5 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-orange-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Subject</label>
                    <input
                      id="subject" name="subject" type="text" value={form.subject} onChange={handleChange}
                      className="w-full px-4 py-2.5 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-orange-500"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Message</label>
                    <textarea
                      id="message" name="message" rows={5} required value={form.message} onChange={handleChange}
                      className="w-full px-4 py-2.5 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-orange-500 resize-y"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full sm:w-auto bg-gradient-to-r from-orange-500 to-red-500 text-white px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500"
                  >
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
