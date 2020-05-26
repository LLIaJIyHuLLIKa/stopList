<template>
  <div class="stop-list__phones">
    <div class="stop-list__phones-header">
      <span>Телефон</span>
      <span>Действия</span>
    </div>
    <phone-item
      v-for="phone in paginatedPhonesList"
      :key="phone.phone"
      :phoneItem="phone"
    ></phone-item>
    <div class="stop-list__phones-pagination">
      <div class="select__items">
        <label for="items-count">Строк на странице:</label>
        <select v-model="itemsCount" id="items-count">
          <option>5</option>
          <option>10</option>
          <option>15</option>
          <option>20</option>
          <option>25</option>
        </select>
      </div>
      <div class="pages">
        <span>{{ currentPage }} из {{ pagesCount }}</span>
      </div>
      <div class="buttons">
        <button @click="prevPage" :class="{ noVisible: currentPage === 1 }">&lt;</button>
        <button @click="nextPage" :class="{ noVisible: currentPage === pagesCount }">&gt;</button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { mapGetters } from "vuex";
import { PhonesType } from "@/store/types";
import PhoneItem from "./PhoneItem.vue";

export default Vue.extend({
  name: "stop-list-phones",
  components: {
    PhoneItem,
  },
  data() {
    return {
      itemsCount: 5 as number, // количество строк на странице
      currentPage: 1 as number, // текущая страница
    }
  },
  methods: {
    prevPage() {
      // переход на предыдущую страницу
      if (this.currentPage > 1) this.currentPage--;
    },
    nextPage() {
      // переход на следующую страницу
      if (this.currentPage < this.pagesCount) this.currentPage++;
    },
  },
  computed: {
    ...mapGetters(["searchQuery", "phonesList"]),

    filteredPhonesList(): PhonesType[] {
      // отфильтрованный список номеров телефонов
      let filteredPhones: PhonesType[] = this.phonesList;

      filteredPhones = filteredPhones.filter(
        (phoneItem) =>
          this.searchQuery === "" || phoneItem.phone.includes(this.searchQuery)
      );

      return filteredPhones;
    },
    pagesCount(): number {
      // кол-во страниц
      return Math.ceil(this.filteredPhonesList.length / this.itemsCount);
    },
    paginatedPhonesList(): PhonesType[] {
      const from: number = (this.currentPage * this.itemsCount) - this.itemsCount;
      const to: number = (this.currentPage * this.itemsCount);

      return this.filteredPhonesList.slice(from, to);
    }
  },
  watch: {
    phonesList() {
      this.currentPage = 1;
    }
  }
});
</script>

<style lang="scss" scoped>
.stop-list__phones {
  margin: 0 7px;
  background-color: #fff;
  box-shadow: 0px 1px 1px 0px rgba(0, 0, 0, 0.75);

  .noVisible {
    visibility: hidden;
  }

  &-header {
    display: flex;
    justify-content: space-between;
    padding: 20px;
    border-bottom: #000;
    font-size: 14px;
  }

  &-pagination {
    padding: 15px;
    font-size: 14px;
    text-align: right;

    div {
      display: inline-block;
      margin-right: 25px;
    }

    .select__items {
      select {
        width: 60px;
        margin-left: 20px;
      }
    }

    .buttons {
      button {
        width: 15px;
        padding: 0;
        border: 0;
        font-size: 16px;
        background-color: #fff;
        cursor: pointer;

        &:nth-child(1) {
          margin-right: 20px;
        }
      }
    }
  }
}
</style>
