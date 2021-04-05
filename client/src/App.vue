<template>
  <v-app
  >
    <Navigation v-if="$store.state.authenticated" ></Navigation>
    <v-main
      :class="{ 'align-center': !$store.state.authenticated }"
    >
        <router-view/>
    </v-main>
  </v-app>
</template>

<script>
import Navigation from '@/layout/Navigation'
import { mapActions } from 'vuex'

export default {
  name: 'App',
  data: () => ({
    tab: null,
  }),
  components: {
      Navigation
  },
  computed: {

  },
  methods: {
    ...mapActions({ 
      checkLoggedIn: 'checkLoggedIn'
    })
  },
  created() {
    this.checkLoggedIn()
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

.Centered {
}
</style>
