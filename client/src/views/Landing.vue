<template>
    <v-container class="landing" fill-height fluid>
        <v-col>
            <h1 class="white--text mb-2 display-1 text-xs-center" style="font-weight: 900; text-shadow: 3px 2px #000000">Welcome to Disc Hub!</h1>
            <v-btn class="blue lighten-2 mt-5" dark large to='/discs'>
                Get Started
            </v-btn>
        </v-col>
    </v-container>
</template>

<script>

export default {
    components: {
    },
    data () {
        return {
        }
    },
}
</script>


<style>
.landing {
    text-align: center;
    background: url('../assets/images/hero.jpeg') no-repeat center center fixed;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    height: 100%; 

    /* Center and scale the image nicely */
    background-position: center;
    background-repeat: no-repeat;
    /* background-size: cover; */
}

.landing-image {
    text-align: center;
    align-items: center;
}
</style>
