import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ImageWithFallback from "./ImageWithFallback";

const SLIDES = [
  {
    image: "/assets/hanuman1.png",
    kicker: "🚩 आज का पाठ",
    title: "जय श्री राम",
    subtitle: "भक्ति से ही मुक्ति मिलती है",
    cta: "हनुमान चालीसा पढ़ें",
    link: "/hanuman-chalisa-hindi",
  },
  {
    image: "/assets/hanuman2.png",
    kicker: "🙏 Daily Devotion",
    title: "Lord Hanuman",
    subtitle: "Strength, courage, and devotion",
    cta: "Read Hanuman Chalisa",
    link: "/chalisa",
  },
  {
    image: "/assets/hanuman3.png",
    kicker: "✨ Begin Your Journey",
    title: "Devotional Journey",
    subtitle: "Explore chants, mantras & aartis",
    cta: "Explore Mantras",
    link: "/mantra",
  },
];

const SLIDE_INTERVAL_MS = 5000;

export default function HeroSlider() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % SLIDES.length);
    }, SLIDE_INTERVAL_MS);
    return () => clearInterval(timer);
  }, [paused]);

  const goTo = (i) => setIndex((i + SLIDES.length) % SLIDES.length);

  return (
    <div
      className="group relative w-full max-w-5xl mx-auto rounded-3xl overflow-hidden shadow-2xl ring-1 ring-black/10 dark:ring-white/10"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="relative h-44 sm:h-56 md:h-72">
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
              onError={(e) => { e.currentTarget.style.visibility = "hidden"; }}
              className="absolute inset-0 w-full h-full object-cover scale-110 blur-xl brightness-75"
            />
            {/* The complete image, contained and centered, with a slow zoom while active */}
            <ImageWithFallback
              src={slide.image}
              alt={slide.title}
              className={`relative w-full h-full object-contain transition-transform duration-[6000ms] ease-out ${
                i === index ? "scale-105" : "scale-100"
              }`}
            />
            {/* Readability + brand tint overlays */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-tr from-orange-700/30 via-transparent to-transparent" />

            {/* Slide text, animated in when the slide becomes active */}
            <div
              className={`absolute bottom-6 left-5 right-5 sm:left-8 sm:right-8 text-white transition-all duration-700 delay-150 ${
                i === index ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
              }`}
            >
              <span className="inline-flex items-center gap-1 bg-white/15 backdrop-blur-sm border border-white/25 rounded-full px-3 py-0.5 text-xs font-semibold mb-2">
                {slide.kicker}
              </span>
              <h2 className="text-xl sm:text-3xl md:text-4xl font-bold drop-shadow-lg">{slide.title}</h2>
              <p className="text-sm sm:text-base opacity-90 mt-1 drop-shadow">{slide.subtitle}</p>
              <Link
                to={slide.link}
                className="inline-flex items-center gap-2 mt-2 sm:mt-3 bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white text-sm font-semibold px-4 sm:px-5 py-1.5 sm:py-2 rounded-full shadow-lg transition-all hover:shadow-xl hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                {slide.cta}
                <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Prev / next arrows (fade in on hover, always visible on touch via focus) */}
      <button
        onClick={() => goTo(index - 1)}
        aria-label="Previous slide"
        className="absolute left-3 top-1/2 -translate-y-1/2 hidden sm:flex items-center justify-center w-10 h-10 rounded-full bg-black/30 hover:bg-black/50 text-white backdrop-blur-sm opacity-0 group-hover:opacity-100 focus:opacity-100 transition-opacity focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        onClick={() => goTo(index + 1)}
        aria-label="Next slide"
        className="absolute right-3 top-1/2 -translate-y-1/2 hidden sm:flex items-center justify-center w-10 h-10 rounded-full bg-black/30 hover:bg-black/50 text-white backdrop-blur-sm opacity-0 group-hover:opacity-100 focus:opacity-100 transition-opacity focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2" role="tablist" aria-label="Hero slides">
        {SLIDES.map((slide, i) => (
          <button
            key={slide.image}
            onClick={() => setIndex(i)}
            role="tab"
            aria-selected={i === index}
            aria-label={`Go to slide ${i + 1}`}
            className={`h-2 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white ${
              i === index ? "w-8 bg-gradient-to-r from-orange-400 to-red-400" : "w-2 bg-white/50 hover:bg-white/80"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
