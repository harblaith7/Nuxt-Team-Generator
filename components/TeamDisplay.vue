<template>
    <div class="team-display">
        <div class="team-card" v-for="team in teams" :key="team">
            <h2 v-for="member in team" :key="member.id">
                {{member.name}}
            </h2>
        </div>
    </div>
</template>

<script>
    import {mapState} from "vuex"
    export default {
        computed : {
            ...mapState({
                teams: (state) => state.teams
            })
        }
        
    }
</script>

<style scoped>
    .team-display {
        height: 90vh;
        width: 100%;
        padding: 2rem;
    }

    .team-card {
        background-color: rgba(149, 235, 235, 0.486);
        margin: 2rem;
        width: 10rem;
        height: fit-content;
        padding: 1rem;
        text-align: center;
        border-radius: 0.5rem;
        border: .1rem solid rgba(0, 0, 0, 0.589);
        float: left;
    }
</style>