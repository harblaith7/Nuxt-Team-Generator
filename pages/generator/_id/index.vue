<template>
    <div v-if="getUserById($route.params.id)">
        <p v-for="property in getUserById($route.params.id)">
            {{property}}
        </p>
    </div>
</template>

<script>
    import {mapState, mapGetters} from "vuex";

    export default {
        computed: {
            ...mapGetters(["getUserById"])
        },
        created(){
            console.log(this.getUserById("2"))
        }
    }
</script>

<style lang="scss" scoped>

</style>