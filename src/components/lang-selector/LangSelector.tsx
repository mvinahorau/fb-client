import * as CH from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import { languages } from "./duck";
import { MdLanguage } from "react-icons/md";

const LangSelector = () => {
  const { i18n } = useTranslation();

  return (
    <CH.Box>
      <CH.Select
        variant="langSelect"
        size="md"
        icon={<MdLanguage />}
        value={i18n.language}
        onChange={(e) => {
          const selectedLang = e.currentTarget.value;
          i18n.changeLanguage(e.currentTarget.value).then(() => {
            localStorage.setItem("lang", selectedLang);
          });
        }}
        sx={{
          "& option": {
            color: "#242424",
          },
        }}
      >
        {languages.map((lang) => (
          <option key={lang.value} value={lang.value}>
            {lang.label}
          </option>
        ))}
      </CH.Select>
    </CH.Box>
  );
};

export default LangSelector;
