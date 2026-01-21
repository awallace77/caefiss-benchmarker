import { useTranslation } from "react-i18next";

function Header() {
  const canadaFlagUrl = "https://flagcdn.com/ca.svg";
  const { t } = useTranslation();
  return (
    <>
      <h1 className="text-3xl text-center flex items-center align-middle gap-3 justify-center">
        <abbr title={t("general.title")}>
          {t("general.titleAbbr").toUpperCase()}
        </abbr>
        <img src={canadaFlagUrl} className="w-8" />
      </h1>
      <h2 className="text-xl text-center tracking-wide">
        {t("general.subtitle").toUpperCase()}
      </h2>
      <p className="text-center text-gray-300 text-md">{t("general.desc")}</p>
    </>
  );
}

export default Header;
