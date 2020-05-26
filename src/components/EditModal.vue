<template>
  <div class="edit-modal">
    <div class="edit-modal__header">
      <span class="edit-modal__header-title">Стоп-лист</span>
      <Breadcrumbs :breadcrumbsList="$route.meta.breadcrumbs" />
    </div>
    <div class="edit-modal__input">
      <input
        v-if="operation === 'creation'"
        v-model="phone"
        type="text"
        placeholder="Телефон"
      />
      <input
        v-else
        :value="phoneNumber"
        @input="phone = $event.target.value"
        type="text"
        placeholder="Телефон"
      />
      <button v-if="operation === 'creation'" @click="addPhone" class="submit">
        <i class="fa fa-check"></i>
      </button>
      <button v-else @click="editPhone" class="submit">
        <i class="fa fa-check"></i>
      </button>
    </div>
    <div class="edit-modal__return">
      <button @click="closeEditModal">НАЗАД</button>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Breadcrumbs from "./Breadcrumbs.vue";
import { mapGetters } from "vuex";

export default Vue.extend({
  name: "edit-modal",
  props: {
    breadcrumbsList: Array,
  },
  components: {
    Breadcrumbs,
  },
  data() {
    return {
      phone: "" as string, // номер телефона
    };
  },
  methods: {
    closeEditModal() {
      // закрытие модального окна
      this.$store.dispatch("setActiveEditModalAction", false);
    },
    addPhone() {
      // добавление нового номера
      if (
        this.phone.match(/^((8|\+7)[- ]?)?(\(?\d{3}\)?[- ]?)?[\d- ]{7,10}$/g)
      ) {
        this.$store.dispatch("addPhoneAction", this.phone);
        this.phone = "";

        this.closeEditModal();
      }
    },
    editPhone() {
      // редактирование номера телефона
      if (
        this.phone.match(/^((8|\+7)[- ]?)?(\(?\d{3}\)?[- ]?)?[\d- ]{7,10}$/g)
      ) {
        this.$store.dispatch("editPhoneAction", {
          phoneIndex: this.phoneIndex,
          phoneNumber: this.phone,
        });
        this.$store.dispatch("setActiveEditModalAction", false);
        this.phone = "";

        this.closeEditModal();
      }
    },
  },
  computed: {
    ...mapGetters(["operation", "phoneIndex", "phoneNumber"]),
  },
});
</script>

<style lang="scss" scoped>
.edit-modal {
  position: absolute;
  width: 50%;
  min-height: 200px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.75);
  z-index: 2;

  &__header {
    padding: 10px;
    margin-bottom: 25px;

    &-title {
      font-size: 18px;
      font-weight: 500;
    }
  }

  &__input {
    input[type="text"] {
      width: 87%;
      margin: 0 10px;
      padding: 4px 2px;
      border: 0;
      border-bottom: 1px solid #000;

      &::placeholder {
        font-size: 14px;
      }
    }

    & .submit {
      width: 35px;
      height: 35px;
      border-radius: 50%;
      border: 0;
      background-color: #2196f3;
      box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.75);
      cursor: pointer;

      i {
        font-size: 14px;
        color: #fff;
      }
    }
  }

  &__return {
    margin-top: 25px;
    margin-left: 15px;

    button {
      padding: 6px 15px;
      border: 0;
      border-radius: 20px;
      font-weight: 700;
      background-color: #f6f6f6;
      box-shadow: 0px 2px 2px 0px rgba(0, 0, 0, 0.75);
      cursor: pointer;
    }
  }
}
</style>
