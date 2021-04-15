<template>
  <div>
    <order-header />
    <div class="container"></div>
    <nav-footer />
  </div>
</template>

<script>
import OrderHeader from "@/components/OrderHeader";
import NavFooter from "@/components/NavFooter";
export default {
  components: {
    OrderHeader,
    NavFooter,
  },
};
</script>
<style lang="scss" scoped></style>
