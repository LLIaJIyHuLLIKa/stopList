<template>
  <div class="stop-list">
    <header class="stop-list__header">
      <span class="stop-list__header-title">Стоп-лист</span>
      <Breadcrumbs :breadcrumbsList="$route.meta.breadcrumbs" />
    </header>
    <section class="stop-list__content">
      <stop-list-actions></stop-list-actions>
      <stop-list-phones></stop-list-phones>
      <edit-modal
        v-show="activeEditModal === true"
        :breadcrumbsList="$route.meta.breadcrumbs"
      ></edit-modal>
    </section>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Breadcrumbs from "./Breadcrumbs.vue";
import StopListActions from "./StopListActions/StopListActions.vue";
import StopListPhones from "./StopListPhones/StopListPhones.vue";
import EditModal from "./EditModal.vue";
import { mapGetters } from "vuex";

export default Vue.extend({
  name: "stop-list",
  components: {
    Breadcrumbs,
    StopListActions,
    StopListPhones,
    EditModal,
  },
  computed: {
    ...mapGetters(["activeEditModal"]),
  },
});
</script>

<style lang="scss" scoped>
.stop-list {
  &__header {
    padding: 10px;

    &-title {
      font-size: 18px;
      font-weight: 500;
    }
  }

  &__content {
    margin-top: 10px;
    padding: 10px;
    background-color: #fafafa;
  }
}
</style>
