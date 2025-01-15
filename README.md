# React Tailwind Printer
Without rendering* first, print React components styled with Tailwind CSS programmatically!

[![NPM Downloads](https://img.shields.io/npm/dt/react-tailwind-printer.svg?style=flat)](https://npmcharts.com/compare/react-tailwind-printer?minimal=true)
[![npm version](https://badge.fury.io/js/react-tailwind-printer.svg)](https://badge.fury.io/js/react-tailwind-printer)

React Tailwind Printer allows you to print React components styled with Tailwind CSS *programmatically*, **without rendering* them first**. It ensures that Tailwind styles are preserved during the print process, making it easy to print dynamic content without pre-rendering*.

---

## **Features**
- Programmatically Print React components with Tailwind CSS styling seamlessly.

---

## **Installation**

Install the package using `npm` or `yarn` or `pnpm`:

```bash
npm install react-tailwind-printer
```

or

```bash
yarn add react-tailwind-printer
```

or

```bash
pnpm install react-tailwind-printer
```

---

## **Usage**

### **Basic Example**

```tsx
import { printWithTailwind } from "react-tailwind-printer";

const MyComponent = () => {
  const handlePrint = () => {
    printWithTailwind({
      title: "Printable Component",
      component: (
        <div className="p-4 bg-gray-100 rounded shadow-md">
          <h1 className="text-2xl font-bold">Hello, World!</h1>
          <p className="text-gray-700">This is a printable component styled with Tailwind CSS.</p>
        </div>
      ),
    });
  };

  return (
    <div>
      <button onClick={handlePrint} className="px-4 py-2 bg-blue-500 text-white rounded">
        Print
      </button>
    </div>
  );
};

export default MyComponent;
```

---

### **API Reference**

#### **`printWithTailwind`**

**Parameters**:  
- `title` *(string, required)*: The title of the printed document.  
- `component` *(React.ReactNode, required)*: The React component to render and print.  
- `timeout` *(number, optional)*: The timeout in milliseconds to wait for the iframe to load before skipping the print process (default: `5000ms`).

```ts
printWithTailwind({
  title: string;
  component: React.ReactNode;
  timeout?: number;
}): void;
```

---

### **Customizing the Timeout**

If your component requires additional time to load styles, you can configure the timeout:

```tsx
printWithTailwind({
  title: "Custom Timeout Example",
  component: <div className="text-lg font-medium">Content with longer load time</div>,
  timeout: 10000, // Wait for 10 seconds before skipping print
});
```

---

## **License**

This project is licensed under the [MIT License](./LICENSE).

---

### **Contributing**

Contributions are welcome! Please feel free to open issues or submit pull requests on the [GitHub repository](https://github.com/shahriarAS/react-tailwind-printer).

---

Would you like to include more advanced examples or additional customization options?

\
\* React Tailwind Printer does not render components directly in the visible DOM, it performs off-screen rendering by creating a hidden iframe. The component is rendered within this iframe to ensure Tailwind CSS styles are correctly applied during the print process. This rendering is completely isolated and does not interfere with the visible content of your application.