<template>
  <var-app-bar title="Title">
    <template #left>
      <var-button color="transparent" text-color="#fff" round text>
        <var-icon name="chevron-left" :size="24" />
      </var-button>
    </template>

    <template #right>
      <var-menu>
        <var-button color="transparent" text-color="#fff" round text>
          <var-icon name="menu" :size="24" />
        </var-button>

        <template #menu>
          <var-cell ripple>OPTION</var-cell>
          <var-cell ripple>OPTION</var-cell>
          <var-cell ripple>OPTION</var-cell>
        </template>
      </var-menu>
    </template>
  </var-app-bar>
</template>

<script>

export default ({
    name: "AppBar",
    setup(){
        
    }
});

</script>