<template lang="html">
    <div id='app-header'>
        <div class="container">
            <div class="content-wrapper">
                <div class="block-logo">
                    <a class="achor-item" href="/">
                        <img class="header-logo" src="shared-images/logo.png">
                        <span class="logo-title">Alpha & Omega</span>
                    </a>
                </div>
                <div class="white-space"></div>
                <div class="block">
                    <a class="achor-item" href="/who-i-am">Who I am?</a>
                </div>
                <div class="block">
                    <a class="achor-item" href="/who-i-am">Background</a>
                </div>
                <div class="block">
                    <a class="achor-item" href="/who-i-am">Blog</a>
                </div>
                <div class="block">
                    <a class="achor-item" href="/who-i-am">Contact</a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {}
    },
    created() {

    },
    methods: {

    },
}
</script>

<style lang="css">
#app-header {
    background-color: #0070bf;
    left: 0;
    position: fixed;
    right: 0;
    top: 0;
}
.content-wrapper {
    height: 70px;
    padding: 10px;
    display: flex;
}
.header-logo {
    max-height: 50px;
    margin-right: 10px;
}
.achor-item {
    color: white;
    font-size: 16px;
    font-weight: 400;
    display: flex;
    align-self: center;
    text-decoration: none;
    margin: auto;
}
.content-wrapper .block-logo {
    display: flex;
    flex-grow: 1;
}
.content-wrapper .white-space {
    display: flex;
    flex-grow: 20;
}
.content-wrapper .block {
    display: flex;
    flex-grow: 1;
}
.logo-title {
    align-self: center;
}



.content-wrapper .block .achor-item {
    border-bottom: 2px solid transparent;
    transition: all 150ms;
}
.content-wrapper .block .achor-item:hover {
    border-color: #fff;
}

</style>

