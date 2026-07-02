import { useState, useEffect } from "react";

export default function HanumanImage() {
  const [imageExists, setImageExists] = useState(false);

  useEffect(() => {
    // Check if image exists
    const img = new Image();
    img.onload = () => setImageExists(true);
    img.onerror = () => setImageExists(false);
    img.src = "/assets/hanuman.png";
  }, []);

  return (
    <div className="flex justify-center items-center bg-gradient-to-b from-orange-100 to-yellow-50 dark:from-orange-900 dark:to-yellow-900 rounded-lg p-3 shadow-md overflow-hidden border-2 border-orange-300 dark:border-orange-700">
      <div className="relative w-full max-w-xs">
        {imageExists ? (
          // Display actual image if available
          <>
            <img
              src="/assets/hanuman.png"
              alt="Lord Hanuman - Divine Avatar"
              className="w-full h-auto object-cover rounded-md shadow-md hover:shadow-lg transition-shadow duration-300"
            />
            {/* Decorative overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-orange-500/20 via-transparent to-transparent rounded-md pointer-events-none"></div>
            
            {/* Spiritual aura effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-orange-400/20 to-yellow-400/20 rounded-md blur-lg -z-10 animate-pulse"></div>
          </>
        ) : (
          // Fallback: Show placeholder with instructions
          <div className="flex flex-col items-center justify-center py-8 px-4">
            <div className="text-4xl mb-2">🙏</div>
            <h3 className="text-lg font-bold text-orange-600 dark:text-orange-400 mb-2 text-center">
              Lord Hanuman
            </h3>
            <p className="text-center text-gray-700 dark:text-gray-300 mb-3 text-sm">
              <strong>Divine Avatar</strong>
            </p>
            <div className="bg-orange-100 dark:bg-orange-900 rounded p-2 text-xs text-gray-700 dark:text-gray-200 text-center">
              <p className="mb-1">🖼️ Image placeholder</p>
              <p className="text-xs opacity-75">Place image at:</p>
              <code className="block mt-1 text-xs bg-white dark:bg-gray-800 p-1 rounded font-mono break-all">
                /public/assets/hanuman.png
              </code>
            </div>
            
            {/* Decorative elements */}
            <div className="mt-3 flex gap-2">
              <span className="text-lg animate-bounce">✨</span>
              <span className="text-lg animate-bounce" style={{ animationDelay: '0.1s' }}>🙏</span>
              <span className="text-lg animate-bounce" style={{ animationDelay: '0.2s' }}>✨</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
