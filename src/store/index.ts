import Vue from "vue";
import Vuex from "vuex";
import { PhonesType, PayloadType } from "../store/types";
import phonesData from "../assets/json/phones.json";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    searchQuery: "" as string, // поисковый запрос
    phones: [] as Array<PhonesType>, // список номеров стоп-листа
    activeEditModal: false as boolean,
    phoneIndex: 0 as number, // индекс записи с номером телефона
    phoneNumber: "" as string, // сам номер
    operation: "" as string // действие, выполняемое с номером 
  },
  mutations: {
    setSearchQuery(state, searchQuery: string) {
      // изменение поискового запроса
      state.searchQuery = searchQuery;
    },
    addPhone(state, newPhone: string) {
      // добавление нового номера
      state.phones.push({ phone: newPhone });
    },
    deletePhone(state, id: number) {
      // удаление номера
      state.phones.splice(id, 1);
    },
    editPhone(state, payload: PayloadType) {
      // редактирование номера
      state.phones[payload.phoneIndex].phone = payload.phoneNumber;
    },
    fetchData(state, data) {
      // сбор данных из json
      state.phones = data;
    },
    setActiveEditModal(state, activeEditModal: boolean) {
      // открытие/закрытие модального окна
      state.activeEditModal = activeEditModal;
    },
    setPhoneIndex(state, phoneIndex: number) {
      // изменение индекса записи
      state.phoneIndex = phoneIndex;
    },
    setPhoneNumber(state, phoneNumber: string) {
      // изменение телефонного номера (для модального окна)
      state.phoneNumber = phoneNumber;
    },
    setOperation(state, operation: string) {
      // изменение действия
      state.operation = operation;
    }
  },
  actions: {
    setSearchQueryAction({ commit }, searchQuery) {
      commit("setSearchQuery", searchQuery);
    },
    addPhoneAction({ commit }, newPhone) {
      commit("addPhone", newPhone);
    },
    deletePhoneAction({ commit }, id) {
      commit("deletePhone", id);
    },
    editPhoneAction({ commit }, payload) {
      commit("editPhone", payload);
    },
    fetchDataAction({ commit }) {
      commit("fetchData", phonesData.phones);
    },
    setActiveEditModalAction({ commit }, activeEditModal) {
      commit("setActiveEditModal", activeEditModal);
    },
    setPhoneIndexAction({ commit }, phoneIndex) {
      commit("setPhoneIndex", phoneIndex);
    },
    setPhoneNumberAction({ commit }, phoneNumber) {
      commit("setPhoneNumber", phoneNumber);
    },
    setOperationAction({ commit }, operation) {
      commit("setOperation", operation);
    }
  },
  getters: {
    searchQuery: (state) => state.searchQuery,
    phonesList: (state) => state.phones,
    activeEditModal: (state) => state.activeEditModal,
    phoneIndex: (state) => state.phoneIndex,
    phoneNumber: (state) => state.phoneNumber,
    operation: (state) => state.operation
  },
});
