import { FR_LOCALE } from "@/shared/enums/locale/fr.locale.enum";
import { EN_LOCALE } from "@/shared/enums/locale/en.locale.enum";

const lang = "fr";

const getLocale = (lang: string) => {
  if (lang === "fr") return FR_LOCALE;
  return EN_LOCALE;
};

export const LOCALE = getLocale(lang);
