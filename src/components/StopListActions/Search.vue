<template>
  <div class="search">
    <i class="fa fa-search"></i>
    <input
      v-model="searchQuery"
      @keypress="findPhones($event)"
      type="text"
      placeholder="Искать"
    />
    <button @click="findPhones" class="find-phones">НАЙТИ</button>
    <button @click="clearSearch" class="clear">
      <i class="fa fa-times-circle"></i>
    </button>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "search",
  data() {
    return {
      searchQuery: "" as string, // поисковый запрос
    };
  },
  methods: {
    findPhones(e?: KeyboardEvent) {
      // поиск номеров телефонов
      if (e) {
        if (e.key === "Enter") {
          this.$store.dispatch("setSearchQueryAction", this.searchQuery);
        }
      } else {
        this.$store.dispatch("setSearchQueryAction", this.searchQuery);
      }
    },
    clearSearch() {
      // очистка поиска
      this.searchQuery = "";
      this.$store.dispatch("setSearchQueryAction", this.searchQuery);
    }
  },
});
</script>

<style lang="scss" scoped>
.search {
  input[type="text"] {
    width: 400px;
    margin: 0 10px;
    padding: 4px 2px;
    border: 0;
    border-bottom: 1px solid #000;
    background-color: #fafafa;

    &::placeholder {
      font-size: 14px;
    }
  }

  button {
    border: 0;
    cursor: pointer;

    &.find-phones {
      padding: 5px 15px;
      margin-right: 15px;
      border-radius: 20px;
      background-color: #027e8f;
      color: #fff;
    }

    &.clear {
      width: 30px;
      height: 30px;
      background-color: #f00;
      border-radius: 50%;
      box-shadow: 0px 2px 4px 0px rgba(0,0,0,0.75);

      i {
        font-size: 14px;
        color: #fff;
      }
    }
  }
}
</style>
