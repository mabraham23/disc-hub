<template>
    <v-container fill-height>
        <v-col>
            <v-card elevation="10" class="disc-card">
                <v-row
                    align="center"
                >
                    <v-col cols="4" class="header">
                        <v-avatar
                        :style="{'background-color': disc.color}"
                        size="300"
                        class="outlined"
                        >
                        <span class="text-capitalize h3" v-bind:class="{ 'white--text': darkDisc } ">{{ disc.name }}</span>
                        </v-avatar>
                    </v-col>
                    <v-col cols="7" class="header">
                        <v-card>
                        <v-data-table
                        :headers="headers"
                        :items="discs"
                        hide-default-footer
                        class="elevation-1"
                        ></v-data-table>

                        </v-card>
                    </v-col>
                    <v-col cols="1"></v-col>
                </v-row>
                <v-row class="bottom">
                    <EditDisc :disc="disc"></EditDisc>
                    <button @click="destroy(disc._id)" class="elevated-10 btn btn-danger delete-button">
                        Delete Disc 
                    </button> 
                </v-row>
            </v-card>
        </v-col>
    </v-container>
</template>

<script>
    import { mapActions } from 'vuex'
    import EditDisc from '../components/EditDisc'
    export default {
        props: {
            disc: Object,
        },
        components: {
            EditDisc,
        },
        data () {
            return {
                headers: [
                    {text:'Name', value: "name"}, 
                    {text:'Brand', value: "brand"},
                    {text:'Type', value: "type"},
                    {text:'Weight', value: "weight"},
                    {text:'Speed', value: "speed"},
                    {text:'Glide', value: "glide"},
                    {text:'Turn', value: "turn"},
                    {text:'Fade', value: "fade"}
                ],
                discs:[
                    this.disc
                ]
            }
        },
        methods: mapActions([
            'destroy'
        ]),
        computed: {
            darkDisc: function () {
                let darkcolors= [
                    '#FF0000FF', '#550000FF', '#AA0000FF',
                    '#AAAA00FF', '#555500FF',
                    '#00AA00FF', '#005500FF',
                    '#00AAAAFF', '#005555FF',
                    '#0000FFFF', '#0000AAFF', '#000055FF',
                ]
                if ( darkcolors.includes(this.disc.color)){
                    return true;
                }
                else {
                    return false;
                }
            }
        }
    }
</script>


<style>
.header {
    text-align: center;
}
.bottom {
    position: absolute;
    right: 0;
    bottom: 0;
    margin-bottom: 20px;
    margin-right: 20px;
}
.delete-button{
    margin-left: 10px; 
}
.disc-card {
    background-color: lightgray !important ;
}
.v-avatar.outlined {
                  border: 2px solid currentColor;
                  border-radius:50%;
                  height: 56px;
                  width: 56px;
}
</style>