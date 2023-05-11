<template>
  <!-- <MainLayout></MainLayout> -->

  <router-view #="{ Component }">
    <component :is="Component" />
  </router-view>
</template>

<script>
import { onMounted } from "vue";
import MainLayout from "./layout/MainLayout.vue";
import { StyleProvider, Themes } from '@varlet/ui'
import { Locale } from '@varlet/ui'

export default {
  name: "App",
  components: { MainLayout },
  setup() {
    /**
     * CHECK THEME
     */
    const checkTheme = () => {
      let htmlElement = document.documentElement;
      let theme = localStorage.getItem("theme");
      if (theme === "dark") {
        htmlElement.setAttribute("theme", "dark");
        StyleProvider(Themes.dark);
      } else {
        htmlElement.setAttribute("theme", "light");
        StyleProvider(Themes.light);
      }
    };

    /**
     * CHECK LOCALE
     */
    const checkLocale = () => {
      let locale = localStorage.getItem("lang");
      if (locale == 'cn'){
        Locale.add('zh-CN', Locale.zhCN)
        Locale.use('zh-CN');
      }
      else{
        Locale.add('en-US', Locale.enUS)
        Locale.use('en-US');
      }
    }

    onMounted(() => {
      checkTheme();
      checkLocale();
    });
  },
};
</script>
