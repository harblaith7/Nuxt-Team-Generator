<template>
    <nav class="nav">
        <ul class="list">
            <nuxt-link class="list-item list-item-home" exact-active-class="active" to="/" tag="li">
                <a>Home</a>
            </nuxt-link>
            <nuxt-link class="list-item" active-class="active" to="/about" tag="li">
                <a>About</a>
            </nuxt-link>
            <nuxt-link class="list-item" active-class="active" to="/generator" tag="li">
                <a>Generator</a>
            </nuxt-link>
        </ul>
    </nav>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
    .nav {
        height: 10vh;
        background-color: rgba(238, 143, 20, 0.705)
    }

    .list {
        display: flex;
        align-items: center;
        height: 100%;
        margin-left: 5rem
    }

    .list-item {
        margin-right: 5rem;
        color: rgb(58, 57, 57);
        font-size: 1.25rem
    }

    .list-item-home {
        margin-right: auto;
    }

    .active {
        color: black;
    }

    a {
        transition: 0.5s
    }
</style>