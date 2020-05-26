<template>
    <div class="main-page">
        <header class="main-page__header">
            <span class="main-page__header-title">Главная страница</span>
            <Breadcrumbs :breadcrumbsList="$route.meta.breadcrumbs" />
        </header>
        <section class="main-page__link">
            <router-link to="/stopList">Перейти к редактированию стоп-листа</router-link>
        </section>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Breadcrumbs from './Breadcrumbs.vue';

export default Vue.extend({
    name: "main-page",
    components: {
        Breadcrumbs
    }
})
</script>

<style lang="scss" scoped>
.main-page {
    &__header {
        padding: 10px;

        &-title {
            font-size: 18px;
            font-weight: 500;
        }
    }

    &__link {
        margin-top: 50px;
        text-align: center;
        font-size: 40px;

        a {
            color: #000;
            text-decoration: none;
            cursor: pointer;

            &:hover {
                text-decoration: underline;
            }
        }
    }
}
</style>