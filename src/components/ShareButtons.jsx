import { useState } from "react";

// Social share buttons for the current page. `title` is included in the
// shared text where the platform supports it (WhatsApp, X, Telegram).
export default function ShareButtons({ url, title = "" }) {
  const [copied, setCopied] = useState(false);
  const encodedUrl = encodeURIComponent(url);
  const text = encodeURIComponent(title ? `${title} 🙏` : "");

  const networks = [
    {
      name: "WhatsApp",
      href: `https://wa.me/?text=${text ? `${text}%0A` : ""}${encodedUrl}`,
      bg: "bg-[#25D366] hover:bg-[#1ebe5b]",
      icon: (
        <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5.1-1.3A10 10 0 1 0 12 2zm5 14.2c-.2.6-1.2 1.2-1.7 1.2-.4.1-1 .1-1.6-.1a13 13 0 0 1-1.5-.5c-2.6-1.1-4.3-3.7-4.4-3.9-.1-.2-1-1.4-1-2.6 0-1.2.6-1.8.9-2 .2-.3.5-.3.7-.3h.5c.2 0 .4 0 .6.4l.9 2.1c0 .2.1.3 0 .5l-.3.5-.4.5c-.2.1-.3.3-.1.6.1.3.7 1.1 1.4 1.8 1 .9 1.8 1.1 2 1.3.3.1.4.1.6-.1l.7-.9c.2-.3.4-.2.6-.1l1.9.9c.3.1.4.2.5.3 0 .1 0 .7-.3 1.4z" />
      ),
    },
    {
      name: "Facebook",
      href: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
      bg: "bg-[#1877F2] hover:bg-[#0f6ae0]",
      icon: (
        <path d="M22 12a10 10 0 1 0-11.6 9.9v-7H7.9V12h2.5V9.8c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.5h-1.3c-1.2 0-1.6.8-1.6 1.6V12h2.8l-.4 2.9h-2.4v7A10 10 0 0 0 22 12z" />
      ),
    },
    {
      name: "X",
      href: `https://twitter.com/intent/tweet?url=${encodedUrl}${text ? `&text=${text}` : ""}`,
      bg: "bg-black hover:bg-gray-800",
      icon: (
        <path d="M18.9 2H22l-6.8 7.8L23.3 22h-6.3l-4.9-6.4L6.4 22H3.3l7.3-8.3L1.5 2h6.4l4.4 5.9L18.9 2zm-1.1 18h1.7L7 3.7H5.1L17.8 20z" />
      ),
    },
    {
      name: "Telegram",
      href: `https://t.me/share/url?url=${encodedUrl}${text ? `&text=${text}` : ""}`,
      bg: "bg-[#26A5E4] hover:bg-[#1e96d1]",
      icon: (
        <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm4.9 6.9-1.7 8c-.1.6-.5.7-1 .4l-2.6-1.9-1.2 1.2c-.2.2-.3.3-.6.3l.2-2.7 5-4.5c.2-.2 0-.3-.3-.1l-6.2 3.9-2.7-.9c-.6-.2-.6-.6.1-.9l10.4-4c.5-.2.9.1.6 1.2z" />
      ),
    },
  ];

  async function copyLink() {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard unavailable (e.g. non-HTTPS) — leave the button as-is.
    }
  }

  function nativeShare() {
    navigator.share({ title, url }).catch(() => {});
  }

  return (
    <div className="flex flex-wrap items-center gap-3">
      {networks.map((n) => (
        <a
          key={n.name}
          href={n.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Share on ${n.name}`}
          className={`${n.bg} text-white flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all`}
        >
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            {n.icon}
          </svg>
          {n.name}
        </a>
      ))}

      <button
        type="button"
        onClick={copyLink}
        className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all bg-gray-200 hover:bg-gray-300 text-gray-800 dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-gray-100 cursor-pointer"
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" d="M13.2 10.8a4 4 0 0 1 0 5.7l-3 3a4 4 0 0 1-5.7-5.7l1.5-1.5M10.8 13.2a4 4 0 0 1 0-5.7l3-3a4 4 0 0 1 5.7 5.7l-1.5 1.5" />
        </svg>
        {copied ? "Copied!" : "Copy Link"}
      </button>

      {typeof navigator !== "undefined" && !!navigator.share && (
        <button
          type="button"
          onClick={nativeShare}
          className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all bg-gradient-to-r from-orange-500 to-red-500 hover:opacity-90 text-white cursor-pointer"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M7.2 10.6a3 3 0 1 0 0 2.8m0-2.8 9.6-4.8m-9.6 7.6 9.6 4.8m0 0a3 3 0 1 0 2.7-4.4 3 3 0 0 0-2.7 4.4zm2.7-13.2a3 3 0 1 1-2.7 4.4 3 3 0 0 1 2.7-4.4z" />
          </svg>
          More
        </button>
      )}
    </div>
  );
}
