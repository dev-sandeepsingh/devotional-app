import { Helmet } from "react-helmet-async";
import { useState } from "react";

const CONTACT_EMAIL = "thechalisacom@gmail.com";

// Free form-to-email relay (no backend needed). Create a key at https://web3forms.com
// using thechalisacom@gmail.com, then paste it below — submissions are emailed there.
// This key is SAFE to expose in frontend code; it only sends to that verified address.
const WEB3FORMS_ACCESS_KEY = "YOUR_WEB3FORMS_ACCESS_KEY";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "", botcheck: false });
  const [status, setStatus] = useState("idle"); // idle | sending | success | error
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({ ...prev, [name]: type === "checkbox" ? checked : value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    setErrorMsg("");
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          from_name: "TheChalisa.com Contact Form",
          subject: form.subject || `New message from ${form.name || "a visitor"}`,
          name: form.name,
          email: form.email,
          message: form.message,
          botcheck: form.botcheck, // honeypot — real users leave this untouched
        }),
      });
      const data = await res.json();
      if (data.success) {
        setStatus("success");
      } else {
        setStatus("error");
        setErrorMsg(data.message || "Something went wrong. Please try again.");
      }
    } catch {
      setStatus("error");
      setErrorMsg("Network error — please check your connection and try again.");
    }
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
      <section className="bg-gradient-to-r from-orange-600 to-red-600 dark:from-orange-800 dark:to-red-800 text-white py-4 px-4">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-xl md:text-2xl font-bold mb-1 drop-shadow-lg">✉️ Contact Us</h1>
          <p className="text-sm opacity-90 max-w-2xl">
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
              {status === "success" ? (
                <div className="text-center py-12">
                  <div className="text-5xl mb-4" aria-hidden="true">🙏</div>
                  <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">Thank you, {form.name || "friend"}!</h2>
                  <p className="text-gray-600 dark:text-gray-300 mb-6">
                    Your message has been sent to our team. We'll get back to you soon.
                  </p>
                  <button
                    onClick={() => { setStatus("idle"); setForm({ name: "", email: "", subject: "", message: "", botcheck: false }); }}
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

                  {/* Honeypot — hidden from real users; bots that tick it are rejected */}
                  <input
                    type="checkbox"
                    name="botcheck"
                    checked={form.botcheck}
                    onChange={handleChange}
                    className="hidden"
                    tabIndex={-1}
                    autoComplete="off"
                    aria-hidden="true"
                  />

                  {status === "error" && (
                    <p className="text-sm font-medium text-red-600 dark:text-red-400" role="alert">
                      {errorMsg}
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={status === "sending"}
                    className="w-full sm:w-auto bg-gradient-to-r from-orange-500 to-red-500 text-white px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {status === "sending" ? "Sending…" : "Send Message"}
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
