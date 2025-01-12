import { createRoot } from "react-dom/client";

export function usePrintWithTailwind() {
  const printWithTailwind = ({
    title,
    component,
    delay = 500,
  }: {
    title: string;
    component: React.ReactNode;
    delay?: number;
  }) => {
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

    const rootDom = createRoot(
      doc.getElementById("print-react-tailwind-root")!
    );

    rootDom.render(component);

    // Wait for the iframe to load styles before printing
    setTimeout(() => {
      try {
        contentWindow.focus();
        contentWindow.print();
      } catch (error) {
        console.error("Error during printing:", error);
      } finally {
        document.body.removeChild(iframe);
      }
    }, delay);
  };

  return printWithTailwind;
}
