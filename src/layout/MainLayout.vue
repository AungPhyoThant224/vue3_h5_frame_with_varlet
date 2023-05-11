<template>
    <div class="main-layout">
        <router-view></router-view>
    </div>
    <BottomNavigation></BottomNavigation>
</template>

<script>
import BottomNavigation from '../components/BottomNavigation/BottomNavigation.vue';

export default({
    name: 'Main Layout',
    components: { BottomNavigation },
    setup(){
        
    }
})
</script>

<style lang="scss" scoped>
    .main-layout{
        margin-bottom: calc(20px + var(--bottom-navigation-height));
    }
</style>