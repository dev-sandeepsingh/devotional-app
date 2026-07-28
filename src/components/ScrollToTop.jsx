import { useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";

// Resets the window scroll to the top whenever the route (pathname) changes, so
// every navigation starts at the top instead of inheriting the previous page's
// scroll position. useLayoutEffect runs before paint, so there's no visible jump.
export default function ScrollToTop() {
  const { pathname } = useLocation();

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
