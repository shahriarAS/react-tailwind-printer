# React Tailwind Printer
Print React components styled with Tailwind CSS.

[![NPM Downloads](https://img.shields.io/npm/dt/react-tailwind-printer.svg?style=flat)](https://npmcharts.com/compare/react-tailwind-printer?minimal=true)
[![npm version](https://badge.fury.io/js/react-tailwind-printer.svg)](https://badge.fury.io/js/react-tailwind-printer)

A lightweight React hook that simplifies printing React components styled with Tailwind CSS. This library ensures that Tailwind CSS styles are preserved during printing, enabling seamless and beautifully styled print outputs.

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
import { usePrintWithTailwind } from "react-tailwind-printer";

const MyComponent = () => {
  const printWithTailwind = usePrintWithTailwind();

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

#### **`usePrintWithTailwind`**

**Returns**:  
- A function `printWithTailwind` with the following signature:

```ts
printWithTailwind({
  title: string;
  component: React.ReactNode;
  delay?: number;
}): void;
```

**Parameters**:  
- `title` *(string, required)*: The title of the printed document.  
- `component` *(React.ReactNode, required)*: The React component to render and print.  
- `delay` *(number, optional)*: The delay in milliseconds before triggering the print (default: `500ms`).  

---

### **Customizing the Delay**

If your component requires additional time to load styles, you can configure the delay:

```tsx
printWithTailwind({
  title: "Custom Delay Example",
  component: <div className="text-lg font-medium">Custom Content</div>,
  delay: 1000, // Wait for 1 second before printing
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