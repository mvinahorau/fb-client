import { useTranslation } from "react-i18next";
import * as CH from "@chakra-ui/react";
import * as C from "components"

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer>
      <C.WebsiteContainer>
        <CH.Box w="100%" py={4} zIndex={11}>
          <CH.Text fontSize="small" fontWeight="semibold">
            {t("intro.writeUs")}:{" "}
            <CH.Link
              href="mailto:fabletopia@gmail.com"
              fontSize="small"
              isExternal
            >
              fabletopia@gmail.com
            </CH.Link>
          </CH.Text>
          <CH.Text fontSize="small" color="#A4A4A4">
            {" "}
            © {new Date().getFullYear()}, Fabletopia,{" "}
            {t("intro.allRightsReserved")}.
          </CH.Text>
        </CH.Box>
      </C.WebsiteContainer>
    </footer>
  );
}

export default Footer