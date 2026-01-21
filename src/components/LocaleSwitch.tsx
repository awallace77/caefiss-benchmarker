import { useTranslation } from "react-i18next";

function LocaleSwitch() {
  const { i18n, t } = useTranslation();

  function toggleLanguage() {
    const newLang = i18n.language === "en" ? "fr" : "en";
    i18n.changeLanguage(newLang);
  }
  return (
    <>
      <a
        className="text-sm text-gray-400 underline hover:text-(--coolor-blue) cursor-pointer"
        onClick={toggleLanguage}
      >
        {t("general.switchLocale")}
      </a>
    </>
  );
}

export default LocaleSwitch;
