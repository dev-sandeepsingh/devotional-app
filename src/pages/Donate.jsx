import { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";

export default function Donate() {
  // Self-contained UPI QR ("scanner") image (QR + bank + UPI ID baked in).
  // UPI_ID is also offered as functional copy-to-clipboard for anyone who can't scan.
  const QR_SRC = "/assets/banners/scanner.jpeg";
  const UPI_ID = "mandhirbath62@okicici";
  const [imgOk, setImgOk] = useState(true);
  const [copied, setCopied] = useState(false);
  const [zoomed, setZoomed] = useState(false);

  // Close the zoom overlay on Escape and lock body scroll while it's open.
  useEffect(() => {
    if (!zoomed) return;
    const onKey = (e) => e.key === "Escape" && setZoomed(false);
    document.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [zoomed]);
  const copyUpi = async () => {
    try {
      await navigator.clipboard.writeText(UPI_ID);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      // clipboard unavailable — ignore
    }
  };

  const supportReasons = [
    { icon: "🌐", title: "Free Access", text: "All content stays free for everyone, regardless of financial situation." },
    { icon: "📱", title: "Multi-Language Support", text: "Maintaining content in 8+ languages takes continuous effort and resources." },
    { icon: "⚡", title: "Fast & Reliable", text: "Your support keeps the experience fast, reliable, and completely ad-free." },
    { icon: "✨", title: "Continuous Improvement", text: "We keep adding new content and features to enrich your experience." },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <Helmet>
        <title>Donate | Support Devotional Site</title>
        <meta name="description" content="Support our devotional site — scan the UPI QR code to donate any amount." />
      </Helmet>

      {/* Header Section */}
      <section className="bg-gradient-to-r from-orange-600 to-red-600 text-white py-4 px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-xl md:text-2xl font-bold mb-1 drop-shadow-lg">❤️ Support Our Mission</h1>
          <p className="text-sm opacity-90">Help us maintain and expand this devotional platform for everyone</p>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl font-bold mb-6 dark:text-white">Why Your Support Matters</h2>
            <ul className="space-y-3">
              {supportReasons.map((r) => (
                <li
                  key={r.title}
                  className="flex items-start gap-4 rounded-xl bg-white dark:bg-gray-800/60 ring-1 ring-gray-100 dark:ring-gray-700 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 p-4"
                >
                  <span className="flex-shrink-0 w-11 h-11 rounded-full bg-orange-100 dark:bg-orange-900/40 flex items-center justify-center text-2xl" aria-hidden="true">
                    {r.icon}
                  </span>
                  <div>
                    <h3 className="font-bold dark:text-white">{r.title}</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{r.text}</p>
                  </div>
                </li>
              ))}
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

        {/* Donation — Scan to Pay */}
        <section className="mb-16">
          <div className="max-w-4xl mx-auto rounded-3xl bg-gradient-to-br from-orange-50 to-red-50 dark:from-gray-800 dark:to-gray-700 shadow-lg p-6 sm:p-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-center dark:text-white">Scan &amp; Donate</h2>
            <p className="text-center text-gray-600 dark:text-gray-300 mt-2 mb-8 sm:mb-10">
              Support us in seconds with any UPI app — give any amount you wish 🙏
            </p>

            <div className="grid md:grid-cols-2 gap-8 md:gap-10 items-center">
              {/* Scanner — the hero */}
              <div className="w-full max-w-[340px] mx-auto">
                <div className="relative rounded-3xl bg-gradient-to-br from-orange-400 to-red-500 p-1.5 shadow-2xl">
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 z-10 rounded-full bg-white dark:bg-gray-900 px-3 py-1 text-xs font-bold uppercase tracking-wide text-orange-600 dark:text-orange-400 shadow ring-1 ring-orange-200 dark:ring-orange-500/40">
                    Scan &amp; Pay
                  </span>
                  <div className="overflow-hidden rounded-[1.35rem] bg-white">
                    {imgOk ? (
                      <img
                        src={QR_SRC}
                        alt="Scan this UPI QR code to donate"
                        className="block w-full h-auto cursor-zoom-in"
                        onClick={() => setZoomed(true)}
                        title="Tap to enlarge"
                        onError={() => setImgOk(false)}
                      />
                    ) : (
                      <div className="flex flex-col items-center justify-center gap-2 py-28 px-4 text-center">
                        <span className="text-4xl">📷</span>
                        <p className="text-xs text-gray-500">
                          Add your UPI QR image at
                          <br />
                          <code className="text-[11px]">public/assets/banners/scanner.jpeg</code>
                        </p>
                      </div>
                    )}
                  </div>
                </div>
                <p className="mt-4 flex items-center justify-center gap-1.5 text-center text-sm font-medium text-gray-600 dark:text-gray-300">
                  <svg className="w-4 h-4 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9V7a2 2 0 012-2h2M17 5h2a2 2 0 012 2v2M21 15v2a2 2 0 01-2 2h-2M7 19H5a2 2 0 01-2-2v-2" /></svg>
                  Point your UPI app’s camera here
                </p>
              </div>

              {/* How to donate + copyable UPI ID */}
              <div>
                <h3 className="text-lg font-bold mb-4 dark:text-white">How to donate</h3>
                <ol className="space-y-4">
                  {[
                    "Open any UPI app — GPay, PhonePe, Paytm or BHIM",
                    "Tap “Scan QR” and point it at the code",
                    "Enter any amount and confirm the payment",
                  ].map((step, i) => (
                    <li key={step} className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-7 h-7 rounded-full bg-orange-500 text-white text-sm font-bold flex items-center justify-center">
                        {i + 1}
                      </span>
                      <span className="text-gray-700 dark:text-gray-300 pt-0.5">{step}</span>
                    </li>
                  ))}
                </ol>

                {/* Can't scan? Copy the UPI ID */}
                <div className="mt-8">
                  <p className="text-xs font-semibold uppercase tracking-wide text-gray-500 dark:text-gray-400 mb-2">
                    Can’t scan? Pay to this UPI ID
                  </p>
                  <div className="flex items-center justify-between gap-3 rounded-xl bg-white dark:bg-gray-800 ring-1 ring-gray-200 dark:ring-gray-600 px-4 py-3">
                    <span className="font-mono text-sm sm:text-base text-gray-800 dark:text-gray-100 truncate">{UPI_ID}</span>
                    <button
                      onClick={copyUpi}
                      aria-label="Copy UPI ID"
                      className="flex-shrink-0 inline-flex items-center gap-1.5 rounded-lg bg-orange-500 hover:bg-orange-600 text-white text-sm font-semibold px-3 py-1.5 transition-colors focus:outline-none focus:ring-2 focus:ring-orange-400"
                    >
                      {copied ? (
                        <>
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                          Copied
                        </>
                      ) : (
                        <>
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" /></svg>
                          Copy
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </div>
            </div>
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

      {/* Zoomed scanner overlay — click anywhere or the close button to restore */}
      {zoomed && imgOk && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 cursor-zoom-out"
          onClick={() => setZoomed(false)}
          role="dialog"
          aria-modal="true"
          aria-label="Enlarged UPI QR code"
        >
          <button
            onClick={() => setZoomed(false)}
            aria-label="Close enlarged QR code"
            className="absolute top-4 right-4 inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/90 hover:bg-white text-gray-800 shadow-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
          </button>
          <img
            src={QR_SRC}
            alt="Enlarged UPI QR code — scan to donate"
            className="max-w-full max-h-[90vh] w-auto h-auto rounded-2xl bg-white p-2 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  );
}
