<template>
    <v-row class="justify-content-center">
        <v-btn
          @click="subScore"
          class="mx-2"
          fab
          dark
          small
          color="primary"
        >
          <v-icon dark>
            mdi-minus
          </v-icon>
        </v-btn>
        <h1>{{ formattedScore }}</h1>
        <v-btn
          @click="addScore"
          class="mx-2"
          fab
          dark
          small
          color="primary"
        >
          <v-icon dark>
            mdi-plus
          </v-icon>
        </v-btn>
    </v-row>
</template>

<script>
import {mapGetters } from 'vuex'
  export default {
    data() {
      return {
      } 
    },  
    computed: {
      ...mapGetters({
        playerScore: 'getScore'
      }),
      formattedScore() {
        if ( this.playerScore > 0 ) {
          return "+" + this.playerScore
        } else {
          return this.playerScore
        }
      }

    },
    methods: {
      // ... mapActions({
      //   addScore: 'addScore',
      //   subScore: 'subScore'
      // }),
      addScore() {
        this.$store.dispatch('addScore').then(() => {
          this.sendPlayerUpdate()
        })
      },
      subScore() {
        this.$store.dispatch('subScore').then(()=> {
          this.sendPlayerUpdate()
        })
      },
      sendPlayerUpdate() {
        this.$parent.sendPlayerUpdate()
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>