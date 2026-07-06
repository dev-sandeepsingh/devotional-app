import { useState } from "react";

// Renders an <img>, but if the source is missing or fails to load it shows a
// neutral "No photo" placeholder instead of a broken-image icon, the alt text,
// or a raw file path. The placeholder reuses `className` so it occupies the
// exact same box as the image would have.
export default function ImageWithFallback({ src, alt = "", className = "", ...rest }) {
  // Track which src failed rather than a bare boolean, so that when `src`
  // changes (e.g. a slider swapping images) `failed` is derived as false again
  // without needing an effect to reset it.
  const [failedSrc, setFailedSrc] = useState(null);
  const failed = failedSrc === src;

  if (!src || failed) {
    return (
      <div
        role="img"
        aria-label={alt || "No photo"}
        className={`flex flex-col items-center justify-center gap-1 bg-gray-100 dark:bg-gray-800 text-gray-400 dark:text-gray-500 ${className}`}
      >
        <span className="text-2xl leading-none" aria-hidden="true">🖼️</span>
        <span className="text-xs font-medium">No photo</span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      onError={() => setFailedSrc(src)}
      className={className}
      {...rest}
    />
  );
}
