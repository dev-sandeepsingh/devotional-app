import ImageWithFallback from "./ImageWithFallback";

export default function HanumanImage() {
  return (
    <div className="flex justify-center items-center bg-gradient-to-b from-orange-100 to-yellow-50 dark:from-orange-900 dark:to-yellow-900 rounded-lg p-3 shadow-md overflow-hidden border-2 border-orange-300 dark:border-orange-700">
      <div className="relative w-full max-w-xs">
        <ImageWithFallback
          src="/assets/hanuman.png"
          alt="Lord Hanuman - Divine Avatar"
          className="w-full h-auto min-h-[12rem] object-cover rounded-md shadow-md hover:shadow-lg transition-shadow duration-300"
        />
        {/* Decorative overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-orange-500/20 via-transparent to-transparent rounded-md pointer-events-none"></div>

        {/* Spiritual aura effect */}
        <div className="absolute -inset-1 bg-gradient-to-r from-orange-400/20 to-yellow-400/20 rounded-md blur-lg -z-10 animate-pulse"></div>
      </div>
    </div>
  );
}
