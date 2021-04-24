<template>
  <div>
    <router-view />
    <service-bar />
    <nav-footer />
  </div>
</template>

<script>
import NavFooter from "@/components/NavFooter";
import ServiceBar from "@/components/ServiceBar";
export default {
  components: {
    ServiceBar,
    NavFooter,
  },
};
</script>
<style lang="scss"></style>
