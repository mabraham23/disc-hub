<template>
    <v-row>
        <v-spacer></v-spacer>
        <v-col sm="6">
          <v-form
            ref="form"
            v-model="valid"
            lazy-validation
            class="elevation-10 pa-5 rounded-md"
          >

            <div>
              Register for Disc Hub
            </div>

            <v-text-field
              v-model="user.firstName"
              :rules="[rules.required]"
              label="First Name"
              required
            ></v-text-field>

            <v-text-field
              v-model="user.lastName"
              :rules="[rules.required]"
              label="Last Name"
              required
            ></v-text-field>

            <v-text-field
              v-model="user.email"
              :rules="[]"
              label="Email"
              required
            ></v-text-field>

            <div class="red--text" v-if="errorMessage != ''">
              {{ errorMessage }}
            </div>

            <v-text-field
              v-model="user.plainPassword"
              :rules="[rules.required, rules.min]"
              :type="show1 ? 'text' : 'password'"
              :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
              label="Password"
              hint="At least 8 characters"
              counter
              required
              @click:append="show1 = !show1"
            ></v-text-field>

            <span>
                Already a member? Login
                <router-link
                to="/login"
                >
                Here
                </router-link>
            </span>

            <br>

            <v-btn
                :disabled="!valid"
                color="primary"
                @click="register"
                class="ma-4"
            >
              Register
            </v-btn>

            <v-btn
                color="error"
                class="mr-4"
                @click="reset"
                >
                Clear
            </v-btn>
          </v-form>
        </v-col>
        <v-spacer></v-spacer>
    </v-row>
</template>

<script>
  import { mapActions, mapGetters } from 'vuex'
  export default {
    data: () => ({
      valid: true,
      show1: false,
      user: {
        email: '',
        firstName: '',
        lastName: '',
        plainPassword: ''
      },
      rules: {
        required: value => !!value || 'Required.',
        min: v => v.length >= 8 || 'Min 8 characters',
      },
      select: null,
    }),
    computed: {
      ...mapGetters({
        errorMessage: 'message'
      })
    },
    methods: {
        register () {
            this.$store.dispatch('createUser', this.user)
        },
        reset () {
            this.$refs.form.reset()
            this.$store.commit('updateMessage', '')
        },
        resetValidation () {
            this.$refs.form.resetValidation()
        },
        ...mapActions({
          createUser: 'createUser',
        }),
    },
  }
</script>


<style>
.hyperlink {
    color: blue;
}
</style>