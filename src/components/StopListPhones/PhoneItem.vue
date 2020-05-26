<template>
  <div class="phone-item">
    <span>{{ phoneItem.phone }}</span>
    <div class="phone-item__actions">
      <i @click="openPhoneModal" class="fa fa-pencil"></i>
      <i @click="deletePhone" class="fa fa-trash"></i>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { mapGetters } from "vuex";

export default Vue.extend({
  name: "phone-item",
  props: {
    phoneItem: Object,
  },
  methods: {
    openPhoneModal() {
      // открытие модального окна
      this.$store.dispatch("setActiveEditModalAction", true);

      for (const id in this.phonesList) {
        if (this.phonesList[id].phone === this.phoneItem.phone) {
          this.$store.dispatch("setPhoneIndexAction", id);
        }
      }

      this.$store.dispatch("setPhoneNumberAction", this.phoneItem.phone);
      this.$store.dispatch("setOperationAction", "edit");
    },
    deletePhone() {
      // удаление номера телефона
      for (const id in this.phonesList) {
        if (this.phonesList[id].phone === this.phoneItem.phone) {
          this.$store.dispatch("deletePhoneAction", id);
        }
      }
    },
  },
  computed: {
    ...mapGetters(["phonesList"]),
  },
});
</script>

<style lang="scss" scoped>
.phone-item {
  display: flex;
  justify-content: space-between;
  padding: 20px;
  border-bottom: 1px solid #000;

  span {
    font-size: 14px;
  }

  &__actions {
    i {
      margin-right: 35px;
      cursor: pointer;

      &:nth-child(2) {
        margin-right: 15px;
        color: #f00;
      }
    }
  }
}
</style>
