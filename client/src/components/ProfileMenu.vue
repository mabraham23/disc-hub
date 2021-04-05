<template>
  <div class="text-center">
    <v-menu
      open-on-hover
      bottom
      :offset-y="offset"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          color="primary"
          dark
          v-bind="attrs"
          v-on="on"
          y-offset
          icon
        >
        <v-icon>mdi-account</v-icon>
        </v-btn>
      </template>

      <v-list>
        <v-list-item v-on:click="myprofile()">
          <v-list-item-title >My Profile</v-list-item-title>
        </v-list-item>
        <v-list-item v-on:click="logout()">
          <v-list-item-title >Logout</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
  export default {
    data: () => ({
      offset: true
    }),
    methods: {
        logout() {
            this.logout()
        },
        myprofile() {
            console.log("thanks for clicking me")
        },
        ...mapActions({
            logout: 'logoutUser'
        }),
    }
  }
</script>
