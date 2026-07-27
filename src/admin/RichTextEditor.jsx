import { useEffect, useRef } from "react";

// Lightweight, dependency-free rich text editor built on a contentEditable div.
// Emits its HTML via onChange. Used by the blog form so admins can author
// bold / italic / headings / lists and have that styling saved and displayed.
//
// Toolbar actions use document.execCommand — deprecated on paper but still the
// simplest cross-browser way to run formatting commands on a contentEditable
// region, and universally supported in the browsers this admin panel targets.

const BLOCK = (tag) => ({ cmd: "formatBlock", value: tag });

const TOOLS = [
  { key: "bold", label: "B", title: "Bold", cmd: "bold", className: "font-bold" },
  { key: "italic", label: "I", title: "Italic", cmd: "italic", className: "italic" },
  { key: "underline", label: "U", title: "Underline", cmd: "underline", className: "underline" },
  { key: "sep1", separator: true },
  { key: "h2", label: "H1", title: "Big heading", ...BLOCK("h2") },
  { key: "h3", label: "H2", title: "Medium heading", ...BLOCK("h3") },
  { key: "p", label: "¶", title: "Normal text", ...BLOCK("p") },
  { key: "sep2", separator: true },
  { key: "ul", label: "• List", title: "Bulleted list", cmd: "insertUnorderedList" },
  { key: "ol", label: "1. List", title: "Numbered list", cmd: "insertOrderedList" },
  { key: "sep3", separator: true },
  { key: "clear", label: "Clear", title: "Remove formatting", cmd: "removeFormat" },
];

export default function RichTextEditor({ id, value = "", onChange, placeholder = "", className = "" }) {
  const ref = useRef(null);

  // Seed the editor's HTML from `value` only when it differs from what the DOM
  // already holds. Writing innerHTML on every keystroke would reset the caret to
  // the start, so we skip it while the user is typing (DOM already === value).
  useEffect(() => {
    const el = ref.current;
    if (el && value !== el.innerHTML) el.innerHTML = value || "";
  }, [value]);

  const emit = () => {
    if (ref.current) onChange?.(ref.current.innerHTML);
  };

  const run = (tool) => {
    if (tool.separator) return;
    ref.current?.focus();
    document.execCommand(tool.cmd, false, tool.value ?? null);
    emit();
  };

  return (
    <div className={`rounded-lg border border-gray-300 focus-within:ring-2 focus-within:ring-orange-500 overflow-hidden ${className}`}>
      <div className="flex flex-wrap items-center gap-1 border-b border-gray-200 bg-gray-50 px-2 py-1.5">
        {TOOLS.map((tool) =>
          tool.separator ? (
            <span key={tool.key} className="mx-0.5 h-5 w-px bg-gray-300" aria-hidden="true" />
          ) : (
            <button
              key={tool.key}
              type="button"
              title={tool.title}
              aria-label={tool.title}
              onMouseDown={(e) => e.preventDefault()} // keep the selection while clicking
              onClick={() => run(tool)}
              className={`min-w-8 rounded px-2 py-1 text-sm text-gray-700 hover:bg-gray-200 transition ${tool.className || ""}`}
            >
              {tool.label}
            </button>
          )
        )}
      </div>

      <div
        id={id}
        ref={ref}
        contentEditable
        suppressContentEditableWarning
        role="textbox"
        aria-multiline="true"
        data-placeholder={placeholder}
        onInput={emit}
        onBlur={emit}
        className="rich-text prose-editor min-h-[9rem] max-h-80 overflow-y-auto px-4 py-2.5 text-gray-900 focus:outline-none"
      />
    </div>
  );
}
