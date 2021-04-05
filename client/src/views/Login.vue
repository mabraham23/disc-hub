<template 
>
    <v-row
    >
        <v-spacer></v-spacer>
        <v-col 
            sm="6"
        >
        <v-form
            ref="form"
            v-model="valid"
            lazy-validation
            class="elevation-10 pa-5 rounded-md"
        >
            <div>
                Login to Disc Hub
            </div>

            <v-text-field
                v-model="user.email"
                :rules="emailRules"
                label="Email"
                required
            ></v-text-field>

            <v-text-field
                v-model="user.plainPassword"
                :rules="[rules.required ]"
                :type="show1 ? 'text' : 'password'"
                :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                label="Password"
                hint="At least 8 characters"
                counter
                required
                @click:append="show1 = !show1"
            ></v-text-field>

            <div class="red--text" v-if="errorMessage != ''">
              {{ errorMessage }}
            </div>

            <span>
                Not a member yet? Register
                <router-link
                to="/register"
                >
                Here
                </router-link>
            </span>
            <br>
            <v-btn
                :disabled="!valid"
                color="primary"
                @click="login"
                class="ma-4"
            >
                Login
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
          plainPassword: '', 
      },
      rules: {
        required: value => !!value || 'Required.',
        min: v => v.length >= 8 || 'Min 8 characters',
        emailMatch: () => (`The email and password you entered don't match`),
      },
      email: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
      ],
      select: null,
    }),
    computed: {
        ...mapGetters({
            errorMessage: 'message'
        })
    },
    methods: {
        login () {
            if ( this.$refs.form.validate()) {
                this.$store.dispatch('loginUser', this.user)
            }
        },
        reset () {
            this.$refs.form.reset()
            this.$store.commit('updateMessage', '')
        },
        resetValidation () {
            this.$refs.form.resetValidation()
        },
        ...mapActions({
          loginUser: 'loginUser'
        }),
    },
  }
</script>


<style>
.hyperlink {
    color: blue;
}
</style>


