<template>
  <v-container fluid class="wrapper">
    <v-row class="flex-grow-0">
      <v-col class="pa-0">
        <v-toolbar flat color="primary" dark>
          <v-toolbar-title>Discs</v-toolbar-title>
        </v-toolbar>
      </v-col>
    </v-row>
    <v-row class="flex-grow-1">
      <v-col cols="2" class="pa-0 tab-bar">
        <v-tabs v-model="tab" vertical>
          <v-tab v-for="(d, index) in discs" :key="'tab-label' + index">{{ d.name }}</v-tab>
        </v-tabs>
      </v-col>
      <v-col cols="10">
        <AddDisc></AddDisc>
        <v-tabs-items class="tab-window" v-model="tab" vertical>
          <v-tab-item class="tab-window" v-for="(item, index) in discs" :key="'disc-label' + index">
            <Disc :disc="item"></Disc>
          </v-tab-item>
        </v-tabs-items>
      </v-col>
    </v-row>
  </v-container>
</template> 

<script>
// import { mapState } from 'vuex'
// import Disc from "../components/Disc";
// import AddDisc from "../components/AddDisc";
// export default {
//   data: () => ({
//     tab: null
//   }),
//   name: 'Discs',
//   components: { Disc, AddDisc },
//   created () {
//     this.$store.dispatch('loadDiscs')
//   },
//   computed: mapState([
//     'discs'
//   ])
// }

import Disc from "../components/Disc";
import AddDisc from "../components/AddDisc";
import { mapGetters } from 'vuex'
export default {
  name: 'Discs',
  components: {
    Disc, AddDisc
  },
  data: () => ({
    tab: null
  }),
  computed: mapGetters({
    discs: 'allDiscs',
    messages: 'messages'
  }),
  // methods: mapActions([
  //   'destroy'
  // ]),
  created () {
    this.$store.dispatch('getAllDiscs')
  }
}
//   function createDiscOnServer(disc) {
//     var discData = "name=" + encodeURIComponent(disc.name);
//     discData += "&brand=" + encodeURIComponent(disc.brand);
//     discData += "&type=" + encodeURIComponent(disc.type);
//     discData += "&weight=" + encodeURIComponent(disc.weight);
//     discData += "&speed=" + encodeURIComponent(disc.speed);
//     discData += "&glide=" + encodeURIComponent(disc.glide);
//     discData += "&turn=" + encodeURIComponent(disc.turn);
//     discData += "&fade=" + encodeURIComponent(disc.fade);
//     discData += "&color=" + encodeURIComponent(disc.color);
//     return fetch("http://localhost:3000/discs", {
//       method: "POST",
//       body: discData,
//       headers: {
//         "Content-Type": "application/x-www-form-urlencoded"
//       }
//     });
//   }

//   // retrieve list of discs from server
//   // GET /discs
//   function getDiscsListFromServer() {
//     return fetch("http://localhost:3000/discs");
//   }

// import Disc from "../components/Disc";
// import AddDisc from "../components/AddDisc";
// export default {
//   data: () => ({
//     addMode: true,
//     disc: {
//         name: '',
//         brand: '',
//         type: '',
//         weight: '',
//         speed: '',
//         glide: '',
//         turn: '',
//         fade: '',
//         color: '',
//     },   
//     // discName: "",
//     // discBrand: "",
//     // discType: "",
//     // discWeight: "",
//     // discSpeed: "",
//     // discGlide: "",
//     // discTurn: "",
//     // discFade: "",
//     // discColor: "",
//     discs: [],
//     speeds: [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14],
//     glides: [1, 2, 3, 4, 5, 6],
//     turns: [-2, -1, 0, 1, 2, 3, 4, 5],
//     fades: [-2, -1, 0, 1, 2, 3, 4, 5],
//     tab: null
//   }),
//   components: { Disc, AddDisc },
//   methods: {
//     // addPizza: function() {
//     //   if (this.addMode == true) {
//     //     this.addMode = false;
//     //   } else {
//     //     this.addMode = true;
//     //   }
//     // },
//     submitNewDisc: function() {
//       createDiscOnServer({
//         name: this.disc.name,
//         brand: this.disc.brand,
//         type: this.disc.type ,
//         weight: this.disc.weight,
//         speed: this.disc.speed,
//         glide: this.disc.glide,
//         turn: this.disc.turn,
//         fade: this.disc.fade,
//         color: this.disc.color
//       }).then(response => {
//         if (response.status == 201) {
//           this.loadDiscs();
//         } else {
//           alert("Load discs failed");
//         }
//       });
//       this.disc.name = "";
//       this.disc.brand = "";
//       this.disc.type = "";
//       this.disc.weight = "";
//       this.disc.speed = "";
//       this.disc.glide = "";
//       this.disc.turn = "";
//       this.disc.fade = "";
//       this.disc.color = "";
//       // this.addMode = false;
//     },
//     loadDiscs: function() {
//       getDiscsListFromServer().then(response => {
//         response.json().then(data => {
//           console.log("discs loaded from server:", data);
//           this.discs = data;
//         });
//       });
//     }
//   },
//   created: function() {
//     // called when the Vue app is loaded and ready ( aka created )
//     // load the pizza when the page loads
//     this.loadDiscs();
//   }
// };
</script>


<style>
.wrapper {
    height: 100%;
    display: flex;
    flex-direction: column;
}

.tab-window {
  height: 100%;
}

.tab-bar {
  border-right: 2px solid rgb(43, 43, 43);
}
</style>