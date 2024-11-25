// Develop a language switcher application using the useContext hook.
// Create a context to manage the current language (e.g., English or Spanish).
// Provide buttons to switch between languages.
// Use the useContext hook to access the current language value.
// Display different language versions of the application's content.

import { UserLanguage } from "./LanguageContext";
import SwitchButton from "./SwitchButton";

const LanguageSwitcher = () => {
  return (
    <UserLanguage>
      <SwitchButton />
    </UserLanguage>
  );
};

export default LanguageSwitcher;
