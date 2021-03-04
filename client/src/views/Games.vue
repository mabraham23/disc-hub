<template>
    <v-container >
        <v-row >
            <v-col>
                <v-card
                    class="mx-auto"
                    max-width="344"
                >
                    <v-card-title>
                        Crazy Caddy
                    </v-card-title>
                    <v-card-text>
                        A card game that gives you a challenge for each throw
                    </v-card-text>
                    <v-card-actions>
                    <v-btn
                        to="/crazycaddy"
                    >
                        Play  
                    </v-btn>
                    </v-card-actions>
                </v-card> 
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