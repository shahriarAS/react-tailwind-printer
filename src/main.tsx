import { createRoot } from "react-dom/client";

export function printWithTailwind({
  title,
  component,
  timeout = 5000,
}: {
  title: string;
  component: React.ReactNode;
  timeout?: number;
}) {
  const iframe = document.createElement("iframe") as HTMLIFrameElement;
  iframe.style.position = "absolute";
  iframe.style.top = "-10000px";
  document.body.appendChild(iframe);

  const contentWindow = iframe.contentWindow;

  if (!contentWindow || !contentWindow.document) {
    console.error("Unable to access iframe contentWindow or document.");
    document.body.removeChild(iframe);
    return;
  }

  const doc = contentWindow.document;
  doc.open();
  doc.write(`
      <!DOCTYPE html>
      <html>
      <head>
          <title>${title}</title>
      </head>
      <body style="print-color-adjust: exact; -webkit-print-color-adjust: exact;">
          <div id="print-react-tailwind-root"></div>
          <script src="https://cdn.tailwindcss.com"></script>
      </body>
      </html>
    `);
  doc.close();

  const rootDom = createRoot(doc.getElementById("print-react-tailwind-root")!);
  rootDom.render(component);

  iframe.onload = () => {
    if (contentWindow.document.body.innerHTML.trim() === "") {
      console.warn("Iframe content not ready for printing.");
      cleanup();
      return;
    }

    try {
      contentWindow!.focus();
      contentWindow!.print();
    } catch (error) {
      console.error("Error during printing:", error);
    } finally {
      cleanup();
    }
  };

  setTimeout(() => {
    console.warn("Timed out waiting for iframe to load. Skipping print.");
    cleanup();
  }, timeout);

  function cleanup() {
    if (document.body.contains(iframe)) {
      document.body.removeChild(iframe);
    }
  }
}
