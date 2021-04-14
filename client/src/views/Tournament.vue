<template>
  <div>
    <v-row>
      <v-spacer></v-spacer>
      <v-col sm="6">
        <v-btn @click="changeTournament">{{ switchValue }}</v-btn>
        <v-data-table 
          :headers="headers"
          :items="playerData"
          :items-per-page="15"
          class="elevation-1"
        ></v-data-table>
      </v-col>
      <v-spacer></v-spacer>
    </v-row>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        scorecard: true,
        headers: [
          {
            text: 'Player Position',
            value: 'playerPosition'
            // align: 'start',
            // sortable: false,
          },
          { text: 'Player Name', value: 'playerName' },
          { text: 'Player Score', value: 'playerScore' },
        ],
        playerData: [
          {
            playerPosition: 1,
            playerName: 'Will Dickinson',
            playerScore: 45,
          },
        ],
      }
    },
    methods: {
      switch() {
        if ( this.switchValue == "scorecard") {
          this.switchValue = "Tournament"
        }
        else {
          this.switchValue = "Scorecard"
        }
      }
    }
  }
</script>

<style>

</style>