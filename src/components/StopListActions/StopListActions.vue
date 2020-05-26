<template>
  <div class="stop-list__actions">
    <Search />
    <add-phone></add-phone>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Search from "./Search.vue";
import AddPhone from "./AddPhone.vue";

export default Vue.extend({
  name: "stop-list-actions",
  components: {
    Search,
    AddPhone
  }
});
</script>

<style lang="scss" scoped>
.stop-list__actions {
  display: flex;
  justify-content: space-between;
  margin-top: 25px;
  margin-bottom: 10px;
}
</style>