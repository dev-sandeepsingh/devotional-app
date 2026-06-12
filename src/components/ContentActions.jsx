// src/components/ContentActions.jsx
export default function ContentActions({ text }) {
  const copyText = () => navigator.clipboard.writeText(text);
  const downloadPDF = () => {
    const blob = new Blob([text], { type: "application/pdf" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "content.pdf";
    link.click();
  };

  return (
    <div>
      <button onClick={copyText}>Copy</button>
      <button onClick={downloadPDF}>Download PDF</button>
    </div>
  );
}
