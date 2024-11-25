// Build a custom hook named useClipboard for copying text to the clipboard.
// Implement a useClipboard hook that takes a text value as a parameter.
// Use the document.execCommand API to copy the provided text to the clipboard.
// Return a success status and methods to trigger the copying action.
// Develop a component that uses the useClipboard hook to provide a copy button for text.

import React from "react";
import { useState } from "react";

const useClipboard = () => {
  const [isCopied, setIsCopied] = useState(false);

  const copyToClipboard = (text) => {
    const textArea = document.createElement("textarea");
    textArea.value = text;
    document.body.appendChild(textArea);
    textArea.select();

    try {
      const success = document.execCommand("copy");
      setIsCopied(success);
    } catch (err) {
      setIsCopied(false);
    }

    document.body.removeChild(textArea);
  };

  return { isCopied, copyToClipboard };
};

export default useClipboard;
