<template>
    <v-container fill-height max-width="80vw">
        <v-row class="pa-2 ma-2">
            <a style="font-size: xx-large;color: azure;">裝置 {{ this.$route.params.mac_address }}</a>
        </v-row>
        <v-divider></v-divider>
        <v-row v-for="(item,index) in this.data" >
            
            <v-card height="auto" width="30vw"  round background-opacity="0.2" color="#27293d" class="pa-5 ma-5" v-on:click="$router.push({path:'/device/'+this.$route.params.mac_address+'/date/' +item.name })" >
               
                <v-card-text>
                    <v-row align="center" justify="center">
                        <v-col cols="4" >
                            <h2><mdicon name="calendar-range" size="35" style="margin-right: 8px;"/>{{$t('DEVICE.DATE')}} </h2>
                        </v-col>
                        <v-col cols="8" >
                           <a style="color:#fcdb03;font-size:2rem;">{{ item.name }}</a>  
                        </v-col>
                    </v-row>
                    
                </v-card-text>      
            </v-card>
        </v-row>
       
        
     
   
    </v-container>
</template>
<script>
import axios from 'axios'

export default {
    data() {
        return {
            data:[]
        }
    },
    beforeMount() {
        this.test()
        this.getDate()
    },
    methods: {
        test(){
            console.log(this.$route.params.mac_address)
        },
        getDate(){
            axios.get("/api/food_history/device/"+ this.$route.params.mac_address).then((res)=>{
                console.log(res.data)
                this.data = res.data
                
            })
        }
    },
}
</script>
<style lang="">
    
</style>