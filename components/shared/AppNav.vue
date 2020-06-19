<template>
    <nav class="box-border bg-indigo h-20">
        <ul class="h-full flex items-center justify-between px-10">
            <li class="cursor-pointer">
                <nuxt-link to="/">Todoey</nuxt-link>
            </li>
            <div class="flex">
                <li class="mr-8 cursor-pointer">
                    <nuxt-link to="/about">About</nuxt-link>
                </li>
                <li class="mr-8 cursor-pointer">
                    <nuxt-link to="/todo">Todo</nuxt-link>
                </li>
            </div>
        </ul>
    </nav>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>

</style>