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
    <div className="flex justify-center items-center bg-gradient-to-b from-orange-100 to-yellow-50 dark:from-orange-900 dark:to-yellow-900 rounded-xl p-6 shadow-lg overflow-hidden border-4 border-orange-300 dark:border-orange-700">
      <div className="relative w-full max-w-sm">
        {imageExists ? (
          // Display actual image if available
          <>
            <img
              src="/assets/hanuman.png"
              alt="Lord Hanuman - Divine Avatar"
              className="w-full h-auto object-cover rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300"
            />
            {/* Decorative overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-orange-500/20 via-transparent to-transparent rounded-lg pointer-events-none"></div>
            
            {/* Spiritual aura effect */}
            <div className="absolute -inset-2 bg-gradient-to-r from-orange-400/20 to-yellow-400/20 rounded-lg blur-xl -z-10 animate-pulse"></div>
          </>
        ) : (
          // Fallback: Show placeholder with instructions
          <div className="flex flex-col items-center justify-center py-16 px-6">
            <div className="text-6xl mb-4">🙏</div>
            <h3 className="text-2xl font-bold text-orange-600 dark:text-orange-400 mb-3 text-center">
              Lord Hanuman
            </h3>
            <p className="text-center text-gray-700 dark:text-gray-300 mb-4">
              <strong>Divine Avatar of Strength & Courage</strong>
            </p>
            <div className="bg-orange-100 dark:bg-orange-900 rounded-lg p-4 text-sm text-gray-700 dark:text-gray-200 text-center">
              <p className="mb-2">🖼️ Image placeholder</p>
              <p className="text-xs opacity-75">Place your Hanuman image at:</p>
              <code className="block mt-2 text-xs bg-white dark:bg-gray-800 p-2 rounded font-mono">
                /public/assets/hanuman.png
              </code>
            </div>
            
            {/* Decorative elements */}
            <div className="mt-6 flex gap-3">
              <span className="text-2xl animate-bounce">✨</span>
              <span className="text-2xl animate-bounce" style={{ animationDelay: '0.1s' }}>🙏</span>
              <span className="text-2xl animate-bounce" style={{ animationDelay: '0.2s' }}>✨</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
