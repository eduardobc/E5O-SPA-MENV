<template lang="html">
    <div>
        <app-header></app-header>
        <div class="container-fluid">
            <router-view></router-view>
        </div>
        <app-footer></app-footer>
    </div>
</template>

<script>
import Header from './components/header.vue'
import Footer from './components/footer.vue'
export default {
    components: {
        'app-header': Header,
        'app-footer': Footer
    }
}
</script>

<style lang="css">
</style>
