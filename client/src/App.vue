<template>
  <v-app>
    <v-app-bar app>
      <Navigation></Navigation>
    </v-app-bar>
    <v-main>
        <router-view/>
    </v-main>
  </v-app>
</template>

<script>
import Navigation from '@/layout/Navigation'
export default {
  name: 'App',
  components: {
      Navigation
  }
};
</script>

<style>
#nav-column {
    padding-top: 2rem;
    padding-left: 2rem;
}

#nav-column > v-btn {
    margin-left: 2rem;
}
</style>
