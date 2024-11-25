import React from "react";
import { useContext } from "react";
import { LanguageContext } from "./LanguageContext";

const SwitchButton = () => {
  const { language, setLanguage } = useContext(LanguageContext);

  return (
    <button
      onClick={() =>
        language === "english" ? setLanguage("spanish") : setLanguage("english")
      }
    >
      {language}
    </button>
  );
};

export default SwitchButton;
