<template>
    <v-dialog
      v-model="dialog"
      persistent
      max-width="600px"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          color="primary"
          dark
          v-bind="attrs"
          v-on="on"
          class="elevation-2"
        >
        Add Disc
        </v-btn>
      </template>
      <v-form
        ref="form"
        v-model="valid"
        lazy-validation
      >
      <v-card>
        <v-card-title>
          <span class="headline">Configure Disc</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col
                cols="12"
                sm="6"
                md="6"
              >
                <v-text-field
                  label="Disc Name*"
                  required
                  v-model="disc.name"
                  :rules="nameRules"
                ></v-text-field>
              </v-col>
              <v-col
                cols="12"
                sm="6"
                md="6"
              >
                <v-select
                  :items="['Innova', 'Discraft', 'Streamline', 'Infinite', 'Dynamic Discs', 'Latitude 64', 'Westside Discs']"
                  label="Brand*"
                  required
                  :rules="brandRules"
                  v-model="disc.brand"
                ></v-select>
              </v-col>
              <v-col
                cols="12"
                sm="6"
                md="6"
              >
                <v-select
                  :items="['Distance Driver', 'Fairway Driver', 'Midrange', 'Putter']"
                  label="Type*"
                  required
                  v-model="disc.type"
                  :rules="typeRules"
                ></v-select>
              </v-col>
              <v-col
                cols="12"
                sm="6"
                md="6"
              >
                <v-text-field
                  label="Weight(g)"
                  v-model="disc.weight"
                  :rules="weightRules"
                ></v-text-field>
              </v-col> 
              <v-col
                cols="12"
                sm="12"
                md="12"
              >
                <v-row>
                  <v-col
                    cols="3"
                  >
                    <v-text-field
                    label="Speed"
                    outlined
                    v-model="disc.speed"
                    :rules="speedRules"
                    ></v-text-field>
                  </v-col>
                  <v-col
                    cols="3"
                  >
                    <v-text-field
                    label="Glide"
                    outlined
                    v-model="disc.glide"
                    :rules="glideRules"
                    ></v-text-field>
                  </v-col>
                  <v-col
                    cols="3"
                  >
                    <v-text-field
                    label="Turn"
                    outlined
                    v-model="disc.turn"
                    :rules="turnRules"
                    ></v-text-field>
                  </v-col>
                  <v-col
                    cols="3"
                  >
                    <v-text-field
                    label="Fade"
                    outlined
                    v-model="disc.fade"
                    :rules="fadeRules"
                    ></v-text-field>
                  </v-col>
                </v-row>
              </v-col>
              <v-row>
                <v-col cols=8>
                  Color:
                  <v-color-picker
                    class="ma-2"
                    hide-canvas
                    hide-inputs
                    hide-sliders
                    :swatches="swatches"
                    show-swatches
                    v-model="disc.color"
                  ></v-color-picker> 
                </v-col>
                <v-col>
                  <v-avatar
                    :color=disc.color
                    size="114"
                  ></v-avatar>
                </v-col>
              </v-row>
            </v-row>
          </v-container>
          <small>*indicates required field</small>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="blue darken-1"
            text
            @click="dialog = false"
          >
            Close
          </v-btn>
          <v-btn
            :disabled="!valid"
            color="blue darken-1"
            text
            @click="validate"
          >
            Save
          </v-btn>
        </v-card-actions>
      </v-card>
     </v-form>
    </v-dialog>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
  export default {

    data: () => ({
      valid: true,
      nameRules: [
        v => ( v.length <= 30) || 'Name must be less than 30 characters',
        v => !!v || 'Name is required',
      ],
      brandRules: [
        v => !!v || 'Brand is Required',
      ],
      typeRules: [
        v => !!v || 'Type is required',
      ],
      weightRules: [
        v => ( v.length <= 3) || 'Weight must be less than 3 characters',
        v => ( v == " " || v >= 120 && v <= 230) || 'Weight must be a number and be between 120 and 230',
      ],
      speedRules: [
        v => ( v.length <= 2) || 'Speed must be two digits or less',
        v => ( v >= 0 && v <= 14) || 'Must be a number and between 1 and 14',
      ],
      glideRules: [
        v => ( v.length <= 1) || 'Glide must be a single digit',
        v => ( v >= 0 && v <= 7) || 'Must be a number and between 1 and 7',
      ],
      turnRules: [
        v => ( v.length <= 2) || 'Turn must be two digits or less',
        v => ( v >= -5 && v <= 1) || 'Must be a number and between -5 and 1',
      ],
      fadeRules: [
        v => ( v.length <= 1) || 'Fade must be a single digit',
        v => ( v >= 0 && v <= 5) || 'Must be a number and between 0 and 5',
      ],
      dialog: false,
      color: '',
      disc: {
        name: '',
        brand: '',
        type: '',
        weight: '',
        speed: '',
        glide: '',
        turn: '',
        fade: '',
        color: '',
      },
      swatches: [
        ['#FF0000', '#AA0000', '#550000'],
        ['#FFFF00', '#AAAA00', '#555500'],
        ['#00FF00', '#00AA00', '#005500'],
        ['#00FFFF', '#00AAAA', '#005555'],
        ['#0000FF', '#0000AA', '#000055'],
      ],
    }),
    computed: mapGetters({
      messages: 'messages',
    }),
    methods: {
      validate () {
        if ( this.$refs.form.validate() ) {
          this.saveDisc(this.disc);
          this.disc.name = " ";
          this.disc.brand = " ";
          this.disc.type = " ";
          this.disc.weight = " ";
          this.disc.speed = "";
          this.disc.glide = "";
          this.disc.turn = "";
          this.disc.fade = "";
          this.disc.color = "";
          this.dialog = false;
        }
      },
      ...mapActions({
        saveDisc: 'saveDisc'
      }),
    }
  }
</script>


<style>
.header {
    text-align: center;
}
</style>