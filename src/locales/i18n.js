import { createI18n } from "vue-i18n";
import { useAppStore, getAppStore } from "../stores/modules/app";
import { Locale } from "@varlet/ui";
import messages from "./getLang";

/**
 * CREATE I18n
 */
const lang = getAppStore.systemStore.lang;
const i18n = createI18n({
  legacy: false,
  locale: lang.value,
  fallbackLocale: "en",
  messages: {
    en: { ...messages.en },
    cn: { ...messages.cn },
  },
});

/**
 * LANGUAGE CHANGE FUNCTION
 * - i18n.global.locale.value CHANGE i18n LOCALE
 * - useAppStore.systemStore.setLang SET LANGUAGE TO STORE FOR REAL TIME
 * - Locale.add() AND Locale.use() FOR VARLET i18n
 * @param {String} locale - Language like 'en'
 */
export function changeLang(locale) {
  i18n.global.locale.value = locale;
  useAppStore.systemStore.setLang(locale);
  if (locale == "cn") {
    Locale.add("zh-CN", Locale.zhCN);
    Locale.use("zh-CN");
  } else {
    Locale.add("en-US", Locale.enUS);
    Locale.use("en-US");
  }
}

export default i18n;
