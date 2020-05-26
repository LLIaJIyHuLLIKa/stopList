<template>
  <div class="add-phone">
    <button @click="openEditModal" class="add-phone__add">ДОБАВИТЬ</button>
    <button class="add-phone__save">
      <i class="fa fa-save"></i>
    </button>
    <button class="add-phone__save">
      <i class="fa fa-save"></i>
    </button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
    name: "add-phone",
    methods: {
      openEditModal() {
        // открытие модального окна
        this.$store.dispatch("setOperationAction", "creation");
        this.$store.dispatch("setActiveEditModalAction", true);
      }
    }
})
</script>

<style lang="scss" scoped>
.add-phone {
  button {
    margin-right: 10px;
    border: 0;
    cursor: pointer;

    i {
      font-size: 14px;
      color: #fff;
    }
  }

  &__add {
    padding: 5px 10px;
    border-radius: 20px;
    background-color: #4caf50;
    color: #fff;
  }

  &__save {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    box-shadow: 0px 2px 4px 0px rgba(0,0,0,0.75);

    &:nth-child(2) {
      background-color: #2196f3;
    }
    &:nth-child(3) {
      background-color: #3f51b5;
    }
  }
}
</style>