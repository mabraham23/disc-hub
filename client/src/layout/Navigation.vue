<template>
    <v-app-bar app >
        <v-btn color="primary" to="/">
            Home
        </v-btn>
        <v-btn color=primary to="/discs">
            Discs
        </v-btn>
        <v-btn color=primary to="/games">
            Games
        </v-btn>
        <v-btn color=primary to="/tournament">
            Tournament
        </v-btn>
        <v-spacer></v-spacer>
        <ProfileMenu></ProfileMenu>
    </v-app-bar>
</template>

<script>
import ProfileMenu from '../components/ProfileMenu.vue'
export default {
    name: 'AppNavigation',
    components: {
        ProfileMenu,
    }
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
a{
  text-decoration: none;
}
</style>

