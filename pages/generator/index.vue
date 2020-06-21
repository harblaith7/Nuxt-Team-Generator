<template>
    <div class="generator-page">
        <app-side-nav></app-side-nav>
        <team-display></team-display>
    </div>
</template>

<script>
    import AppSideNav from "@/components/shared/AppSideNav"
    import TeamDisplay from "@/components/TeamDisplay"
    export default {
        components: {
            AppSideNav,
            TeamDisplay
        }
    }
</script>

<style scoped>
    .generator-page {
        display: flex
    }

    
</style>