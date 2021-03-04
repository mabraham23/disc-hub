<template>
    <div>
        <v-btn color=primary to="/">
            Home
        </v-btn>
        <v-btn color=primary to="/discs">
            discs
        </v-btn>
        <v-btn color=primary to="/games">
            games
        </v-btn>
    </div>
</template>

<script>
export default {
    name: 'AppNavigation',
};
</script>

<style scoped>
.v-btn {
    margin-left: 0.5rem;
    margin-right: 0.5rem;
}
#nav-column {
    margin-left: 4rem;
}
</style>

