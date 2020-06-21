<template>
    <div v-if="getUserById($route.params.id)" class="user-page">
        <p v-for="(item, key) in getUserById($route.params.id)" :key="item.id">
            {{key !== "id" ? item : ""}} 
        </p>
        <button @click="deleteUser">Delete User</button>
    </div>
    <div v-else class="user-page">
        No user found with that ID
    </div>
</template>

<script>
    import {mapState, mapGetters, mapMutations} from "vuex";

    export default {
        computed: {
            ...mapGetters(["getUserById"])
        },
        methods: {
            ...mapMutations(['removeUser']),
            created(){
                console.log(this.getUserById("2"))
            },
            deleteUser(){
                this.removeUser(this.$route.params.id)
                this.$router.push("/generator")
            }
        },
        
    }
</script>

<style scoped>
    .user-page {
        padding: 5rem;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
    }

    button {
        padding: 0.5rem 3rem;
        background-color: rgba(98, 235, 189, 0.418);
        margin: 1rem
    }
</style>