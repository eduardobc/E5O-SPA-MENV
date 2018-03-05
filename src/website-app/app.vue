<template lang="html">
    <div>
        <app-header></app-header>
        <router-view></router-view>
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
body {
    font-family: 'Roboto', sans-serif;
    -webkit-font-smoothing: antialiased;
    font-smoothing: antialiased;
}

.angle-block-content {
    position: relative;
    display: flex;
}
.angle-block-content .angle-container {
    margin-bottom: 60px;
}
.angle-block-content .decoration-top {
    position: absolute;
    width: 100%;
    height: 60px;
    left: 0;
    bottom: 100%;
}
.angle-block-content .angle-svg {
    display: block;
    position: relative;
    margin: 0 auto;
}
.angle-block-content.angle-block-color-white {
    background-color: #fff;
}
.angle-block-content.angle-block-color-blue {
    background-color: #0070bf;
}
.angle-block-content .angle-svg-color-white {
    fill: #fff;
}
.angle-block-content .angle-svg-color-blue {
    fill: #0070bf;
}
</style>
