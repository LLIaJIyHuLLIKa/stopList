<template>
  <div class="breadcrumbs">
    <div
      v-for="(breadcrumb, index) in breadcrumbsList"
      :key="breadcrumb.name"
      class="breadcrumb"
    >
      <span
        @click="moveTo(breadcrumb.link)"
        :class="{ linked: !breadcrumb.link }"
      >
        {{ breadcrumb.name }}
      </span>
      <span
        v-if="
          breadcrumbsList.length > 1 && index !== breadcrumbsList.length - 1
        "
        class="etc"
        >/</span>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "breadcrumbs",
  props: {
    breadcrumbsList: Array,
  },
  methods: {
    moveTo(route: string) {
      // изменение маршрута
      if(route) this.$router.push(route);
    }
  }
});
</script>

<style lang="scss" scoped>
.breadcrumbs {
  margin-top: 15px;

  & .breadcrumb {
    display: inline-block;
    font-size: 12px;

    span {
      color: blue;
      text-decoration: underline;
      cursor: pointer;

      &.linked, &.etc {
        color: #ccc;
        text-decoration: none;
        cursor: auto;
      }

      &.etc {
        margin-left: 20px;
        margin-right: 20px;
      }
    }
  }
}
</style>
