import ImageWithFallback from "./ImageWithFallback";

// Compact medallion-style portrait of Lord Hanuman shown above content lists
// (Chalisa, Mantra, Aarti pages).
export default function HanumanImage() {
  return (
    <div className="flex justify-center py-4">
      <div className="relative">
        {/* Soft glowing aura */}
        <div
          className="absolute -inset-3 rounded-full bg-gradient-to-r from-orange-400/40 via-amber-300/40 to-red-400/40 blur-xl animate-pulse"
          aria-hidden="true"
        />

        {/* Gradient ring around the portrait */}
        <div className="relative rounded-full p-1 bg-gradient-to-tr from-orange-500 via-amber-400 to-red-500 shadow-lg">
          <div className="rounded-full p-1 bg-white dark:bg-gray-900">
            <ImageWithFallback
              src="/assets/hanuman.png"
              alt="Lord Hanuman - Divine Avatar"
              className="w-36 h-36 sm:w-44 sm:h-44 rounded-full object-cover object-top hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>

        {/* Badge */}
        <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 whitespace-nowrap bg-gradient-to-r from-orange-500 to-red-500 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-md">
          🚩 जय श्री राम
        </span>
      </div>
    </div>
  );
}
