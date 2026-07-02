import { useEffect, useState } from "react";

const SLIDES = [
  { image: "/assets/hanuman1.png", title: "जय श्री राम", subtitle: "भक्ति से ही मुक्ति मिलती है" },
  { image: "/assets/hanuman2.png", title: "Lord Hanuman", subtitle: "Strength, courage, and devotion" },
  { image: "/assets/hanuman3.png", title: "Devotional Journey", subtitle: "Explore chants, mantras & aartis" },
];

const SLIDE_INTERVAL_MS = 4000;

export default function HeroSlider() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % SLIDES.length);
    }, SLIDE_INTERVAL_MS);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full max-w-6xl mx-auto rounded-2xl overflow-hidden shadow-lg">
      <div className="relative h-56 sm:h-72 md:h-96">
        {SLIDES.map((slide, i) => (
          <div
            key={slide.image}
            className={`absolute inset-0 transition-opacity duration-700 ${
              i === index ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
            aria-hidden={i !== index}
          >
            {/* Blurred backdrop fills the empty space so the full image can show without cropping */}
            <img
              src={slide.image}
              alt=""
              aria-hidden="true"
              className="absolute inset-0 w-full h-full object-cover scale-110 blur-xl brightness-75"
            />
            {/* The complete image, contained and centered */}
            <img src={slide.image} alt={slide.title} className="relative w-full h-full object-contain" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
            <div className="absolute bottom-8 left-6 right-6 text-white">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold drop-shadow-lg">{slide.title}</h2>
              <p className="text-sm sm:text-base opacity-90 mt-1">{slide.subtitle}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2" role="tablist" aria-label="Hero slides">
        {SLIDES.map((slide, i) => (
          <button
            key={slide.image}
            onClick={() => setIndex(i)}
            role="tab"
            aria-selected={i === index}
            aria-label={`Go to slide ${i + 1}`}
            className={`h-2 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white ${
              i === index ? "w-6 bg-white" : "w-2 bg-white/50 hover:bg-white/80"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
