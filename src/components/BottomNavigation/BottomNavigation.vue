<template>
  <var-bottom-navigation v-model:active="active">
    <template v-for="route in mainRoutes">
      <var-bottom-navigation-item :label="t(`pages.${route.meta.title}`)" :icon="route.meta.icon" @click="handleClick(route)"/>
    </template>
  </var-bottom-navigation>
</template>

<script>
import { ref, onMounted } from "vue";
import { mainRoutes } from "../../router/modules/mainRoutes";
import { useI18n } from "vue-i18n";
import { useRoute, useRouter } from "vue-router";

export default {
  name: "Bottom Navigation",
  setup() {
    const active = ref(0);
    const isEven = ref(true);
    const { t } = useI18n();
    const route = useRoute();
    const router = useRouter();

    /**
     * CHANGE PAGE ACCORDING TO ROUTE
     * @param {String} route 
     */
    const handleClick = (clickRoute) => {
      if(route.path === clickRoute.path){
        return;
      }
      else{
        router.push({
          path: clickRoute.path
        })
      }
    }

    const currentActiveTab = () => {
      mainRoutes.map((routes, index) => {
        if(routes.path === route.path){
          active.value = index;
        }
      })
    }

    onMounted(() => {
      currentActiveTab();
    })

    return {
      t,
      active,
      isEven,
      mainRoutes,
      handleClick,
    };
  },
};
</script>

<style lang="scss" scoped>
    .var-bottom-navigation{
        position: fixed;
        bottom: 0;
    }
</style>
