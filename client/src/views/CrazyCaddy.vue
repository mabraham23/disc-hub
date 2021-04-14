<template>
    <v-container >
        <v-btn
            to="/games"
        >
            Back
        </v-btn>
        <v-row >
            <v-col class="games-page">
                <v-card
                    class="mx-auto"
                    max-width="344"
                >
                    <v-card-title>
                        Throw Lefty
                    </v-card-title>

                    <v-card-subtitle >
                        You have to throw left handed on this upcoming throw
                    </v-card-subtitle>

                    <v-img
                    src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
                    height="200px"
                    ></v-img>

                    <v-card-actions>
                    <v-btn
                        color="orange lighten-2"
                        text
                    >
                        Explore
                    </v-btn>

                    <v-spacer></v-spacer>

                    <v-btn
                        icon
                        @click="show = !show"
                    >
                        <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
                    </v-btn>
                    </v-card-actions>
                </v-card>
                <v-btn>
                    Add Card
                </v-btn>
                <v-btn>
                    Shuffle Deck
                </v-btn>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
    export default {
        data () {
            return {
                msg: ''
            }
        }
    }
</script>


<style>
.games-page {
    text-align: center;
}
</style>