<template>
  <div>
    <v-row>
      <v-spacer></v-spacer>
      <v-col sm="10">
        <br>
        <v-btn @click="switchTournamentPage" class="primary">{{ tournamentPage }}</v-btn>
        <br>
        <br>
        <div class="text-center" v-if="pageValue">
          <h1>Input your score for hole: {{playerHole}}</h1>
          <h2>Par: {{ getHolePar() }}</h2>
          <br>

          <ScoreKeeper></ScoreKeeper>

          <br>
          <br>
          <v-pagination
            v-model="playerHole"
            :length="18"
            :total-visible="5"
            circle
            @input="resetScore"
          ></v-pagination>
        </div>
        <v-data-table 
          v-else
          :headers="headers"
          :items="playerUpdates"
          :items-per-page="15"
          class="elevation-1"
        ></v-data-table>
      </v-col>
      <v-spacer></v-spacer>
    </v-row>
  </div>
</template>

<script>
import ScoreKeeper from '../components/ScoreKeeper'
import {mapGetters, mapActions} from 'vuex'
  export default {
    components: {
      ScoreKeeper,
    },
    data () {
      return {
        playerHole: 1, 
        playerTotalScore: '',
        playerUpdates: [],
        tournamentPage: 'Score Page',
        pageValue: true,
        scorecard: true,
        headers: [
          {
            // text: 'Player Position', value: 'playerPosition'
            // align: 'start',
            // sortable: false,
          },
          { text: 'Player Name', value: 'playerName' },
          { text: '1', value: 'hole1' },
          { text: '2', value: 'hole2' },
          { text: '3', value: 'hole3' },
          { text: '4', value: 'hole4' },
          { text: '5', value: 'hole5' },
          { text: '6', value: 'hole6' },
          { text: '7', value: 'hole7' },
          { text: '8', value: 'hole8' },
          { text: '9', value: 'hole9' },
          { text: '10', value: 'hole10' },
          { text: '11', value: 'hole11' },
          { text: '12', value: 'hole12' },
          { text: '13', value: 'hole13' },
          { text: '14', value: 'hole14' },
          { text: '15', value: 'hole15' },
          { text: '16', value: 'hole16' },
          { text: '17', value: 'hole17' },
          { text: '18', value: 'hole18' },
          { text: 'Total Score', value: 'totalScore' },
        ],
        parList: {
          1: 3,
          2: 3,
          3: 4,
          4: 3,
          5: 3,
          6: 4,
          7: 3,
          8: 3,
          9: 4,
          10: 3,
          11: 5,
          12: 3,
          13: 4,
          14: 3,
          15: 3,
          16: 4,
          17: 3,
          18: 3,
        }
      }
    },
    computed: {
      ...mapGetters({
        playerScore: 'getScore',
      }),
      findMe() {
        return this.playerUpdates.findIndex(( item => item.userId == this.$store.state.user._id )) 
      }
    },
    methods: {
      ...mapActions({
        resetScore: 'resetScore'
      }),
      getHolePar() {
        return this.parList[this.playerHole]
      },
      switchTournamentPage() {
        if ( this.pageValue == true ) {
          this.tournamentPage = "Score Page"
          this.pageValue = false
        } else {
          this.tournamentPage = "Golf Page"
          this.pageValue = true 
        }
      },
      switch() {
        if ( this.switchValue == "scorecard") {
          this.switchValue = "Tournament"
        }
        else {
          this.switchValue = "Scorecard"
        }
      },
      connectSocket: function() {
        this.socket = new WebSocket("wss://${document.location.host}");
        this.socket.onmessage = (event) => {
          this.receivedUpdates(event);
        };
      },
      sendPlayerUpdate: function() {
        let update = {}
        update["playerName"] = this.$store.state.user.firstName
        update["hole" + this.playerHole] = this.playerScore
        update["userId"] = this.$store.state.user._id
        update["totalScore"] = this.$store.state.totalScore
        this.socket.send(JSON.stringify(update))
      },
      receivedUpdates: function( update ) {
        let data = JSON.parse(update.data)
        let ind = this.playerUpdates.findIndex(( item => item.userId == data.userId ))
        if ( ind != -1) {
          this.$set(this.playerUpdates, ind, Object.assign({}, this.playerUpdates[ind], data));
        } else {
          this.playerUpdates.push(data)
        }
      },
    },
    created: function() {
      this.connectSocket()
    }
  }
</script>

<style>

.inputOutline {
  border: solid red;
}

</style>