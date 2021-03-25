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
  created () {
    this.$store.dispatch('getAllDiscs')
  }
}
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