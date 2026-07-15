import { memo } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

// Breadcrumb trail. `crumbs` is [{ label, to }]; "Home" is prepended
// automatically and the last crumb renders as the current page (unlinked).
// variant="light" is for placement on the orange gradient headers;
// the default suits regular page backgrounds.
const Breadcrumbs = memo(function Breadcrumbs({ crumbs, variant = "default", className = "" }) {
  if (!crumbs?.length) return null;
  const items = [{ label: "Home", to: "/" }, ...crumbs];
  const isLight = variant === "light";

  // schema.org BreadcrumbList for search engines.
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.label,
      ...(c.to ? { item: window.location.origin + c.to } : {}),
    })),
  };

  return (
    <nav aria-label="Breadcrumb" className={className}>
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>
      <ol className="flex flex-wrap items-center gap-1.5 text-sm">
        {items.map((c, i) => {
          const isLast = i === items.length - 1;
          return (
            <li key={`${c.label}-${i}`} className="flex items-center gap-1.5 min-w-0">
              {i > 0 && (
                <svg
                  className={`w-3.5 h-3.5 flex-shrink-0 ${isLight ? "text-white/60" : "text-gray-400 dark:text-gray-500"}`}
                  fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              )}
              {isLast || !c.to ? (
                <span
                  aria-current={isLast ? "page" : undefined}
                  className={`truncate font-medium ${isLight ? "text-white" : "text-gray-800 dark:text-gray-200"}`}
                >
                  {c.label}
                </span>
              ) : (
                <Link
                  to={c.to}
                  className={`truncate transition-colors ${
                    isLight
                      ? "text-white/80 hover:text-white hover:underline"
                      : "text-gray-500 dark:text-gray-400 hover:text-orange-600 dark:hover:text-orange-400 hover:underline"
                  }`}
                >
                  {c.label}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
});

export default Breadcrumbs;
