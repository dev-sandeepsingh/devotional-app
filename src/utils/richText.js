// Helpers for the rich-text HTML that admins author for blog descriptions
// (see admin/RichTextEditor.jsx). Blog descriptions are now stored as HTML, so
// we need to (a) render it safely and (b) derive plain text for previews.

// Strip all tags → plain text. Used for card previews, table cells, meta
// descriptions and word counts, where markup would otherwise leak through.
export function stripHtml(html) {
  if (!html) return "";
  return html
    .replace(/<[^>]*>/g, " ")
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/\s+/g, " ")
    .trim();
}

// Minimal sanitizer for rendering admin-authored HTML. Content comes from
// authenticated admins, so this is defense-in-depth rather than the primary
// trust boundary: drop <script>/<style> blocks, inline event handlers, and
// javascript: URLs before the HTML reaches dangerouslySetInnerHTML.
export function sanitizeHtml(html) {
  if (!html) return "";
  return html
    .replace(/<\s*(script|style|iframe|object|embed)\b[^>]*>[\s\S]*?<\s*\/\s*\1\s*>/gi, "")
    .replace(/<\s*(script|style|iframe|object|embed)\b[^>]*\/?>/gi, "")
    .replace(/\son\w+\s*=\s*("[^"]*"|'[^']*'|[^\s>]+)/gi, "")
    .replace(/(href|src)\s*=\s*("|')?\s*javascript:[^"'>]*("|')?/gi, "$1=\"#\"");
}
