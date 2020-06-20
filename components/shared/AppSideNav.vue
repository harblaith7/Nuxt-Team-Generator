<template>
    <div class="side-nav">
        <form action="" class="form">
            <input type="text" class="input input-top" placeholder="Member Name">
            <input type="text" class="input" placeholder="Email">
            <input type="text" class="input" placeholder="Role">
            <input type="submit" class="input input-submit" value="Add Member">
        </form>
        <div class="members-container">
            changes
        </div>
    </div>
</template>

<script>
   //import {mapState} from "vuex"
    export default {
        
    }
</script>

<style scoped>
    .side-nav {
        width: 25rem;
        height: 90vh;
        background-color: rgba(124, 124, 120, 0.192);
        
    }

    /* FORM STYLING */
    .form {
        display: flex;
        flex-direction: column;
        width: 75%;
        margin: 0 auto;
    }

    .input {
        margin: 0.25rem;
        padding: 0.5rem;
        border-radius: 0.2rem;
    }

    .input-top {
        margin-top: 5rem
    }

    .input-submit {
        background-color: rgba(50, 230, 26, 0.295);
        cursor: pointer
    }

    /* Members container */
    .members-container {
        width: 75%;
        margin: 0 auto;
        height: 30vh;
        background-color: aliceblue;
        margin-top: 1rem
    }
</style>