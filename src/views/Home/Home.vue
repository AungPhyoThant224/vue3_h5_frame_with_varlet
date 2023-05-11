<template>
  <div class="card">
    <h3>{{ t("home.provider") }}</h3>
    <var-button @click="add" >+</var-button>
    {{ counter }}
    <var-button @click="lose" >-</var-button>
  </div>
  <div class="card">
    <h3>{{ t("home.language") }}</h3>
    <var-button text outline type="primary" @click="changeLangs('cn')">
      {{ t("home.cn") }}
    </var-button>
    <var-button text outline type="primary" @click="changeLangs('en')">
      {{ t("home.en") }}
    </var-button>
  </div>
  <div class="card">
    <h3>{{ t("home.axios") }}</h3>
    <div>
      <var-button
        :loading="loading"
        type="success"
        loading-type="disappear"
        loading-size="mini"
        @click="egGet()"
      >
      {{ t("home.get") }}
      </var-button>
      <var-button
        :loading="loading"
        type="success"
        loading-type="disappear"
        loading-size="mini"
        @click="egPost()"
      >
      {{ t("home.post") }}
      </var-button>
    </div>
    {{ responseData }}
  </div>
  <div class="card">
    <h3>{{ t("home.theme") }}</h3>
    <var-button type="primary" round @click="switchTheme('dark')">
      <var-icon name="weather-night" />
    </var-button>
    <var-button type="primary" round @click="switchTheme('light')">
      <var-icon name="white-balance-sunny" />
    </var-button>
  </div>
</template>

<script>
import { reactive, toRefs, onMounted } from "vue";
import { useAppStore, getAppStore } from "../../stores/modules/app";
import { useI18n } from "vue-i18n";
import { changeLang } from "../../locales/i18n";
import http from "@/http";
import { StyleProvider, Themes } from '@varlet/ui'

export default {
  name: "Home",
  setup() {
    const useStore = useAppStore;
    const getStore = getAppStore;
    const { t } = useI18n();
    const state = reactive({
      counter: getStore.counterStore.counter,
      responseData: "",
      loading: false,
    });

    /**
     * ADD COUNT USING PROVIDER
     */
    const add = () => {
      useStore.counterStore.addCount();
    };

    /**
     * LOSE COUNT USING PROVIDER
     */
    const lose = () => {
      useStore.counterStore.loseCount();
    };

    /**
     * CHANGE LANGUAGE FUNCTION IMPORT FROM "../../locales/i18n"
     * @param {String} lang - eg. 'en' 
     */
    const changeLangs = (lang) => {
      changeLang(lang);
    };

    /**
     * Axios GET METHOD EXAMPLE
     */
    const egGet = () => {
      state.loading = true;
      http.general
        .egGet()
        .then((res) => {
          state.responseData = res.data;
          state.loading = false;
        })
        .catch((e) => {
          state.responseData = e;
          state.loading = false;
        });
    };

    /**
     * Axios POST METHOD EXAMPLE
     */
    const egPost = () => {
      state.loading = true;
      http.general.egPost().then((res) => {
        state.responseData = res.data;
        state.loading = false;
      })
      .catch((e) => {
        state.responseData = e;
        state.loading = false;
      })
    }

    /**
     * SWITCH THEME FUNCTION
     * - htmlElement.setAttribute() FOR CSS VARIABLES
     * - StyleProvider() FOR Varlet THEME
     * - localStorage.setItem() FOR SET THEME IN LOCAL STORAGE
     * @param {String} theme - eg. 'dark' 
     */
    const switchTheme = (theme) => {
      let htmlElement = document.documentElement;

      if (theme === "dark") {
        htmlElement.setAttribute("theme", "dark");
        StyleProvider(Themes.dark);
        localStorage.setItem("theme", "dark");
      } else {
        htmlElement.setAttribute("theme", "light");
        StyleProvider(Themes.light);
        localStorage.setItem("theme", "light");
      }
    };

    onMounted(() => {});

    return {
      ...toRefs(state),
      t,
      add,
      lose,
      changeLangs,
      egGet,
      egPost,
      switchTheme,
    };
  },
};
</script>

<style lang="scss" scoped>
.card {
  box-shadow: var(--box-shadow);
  background-color: var(--card-color);
  margin: 30px 20px;
  padding: 18px;
  text-align: center;
  border-radius: 8px;
}

.var-button{
  margin: 10px;
}
</style>
