<template >
    <v-container fill-height max-width="80vw">
        <v-row class="pa-2 ma-2">
            <a style="font-size: xx-large;color: azure;">裝置 Devices</a>
        </v-row>
        <v-divider></v-divider>
        <v-row v-for="(item,index) in this.data" >
            
            <v-card height="auto" width="30vw"  round background-opacity="0.2" color="#27293d" class="pa-5 ma-5" v-on:click="$router.push({path:'/device/'+ item.device_mac })" >
               
                <v-card-text>
                    <v-row align="center" justify="center">
                        <v-col cols="5" >
                            <h2><mdicon name="devices" size="35" style="margin-right: 8px;"/>{{$t('DEVICE.DEVICE_NAME')}} </h2>
                        </v-col>
                        <v-col cols="7" >
                           <v-chip close><a style="color:#fcdb03;">{{ item.device_name }}</a>  </v-chip> 
                        </v-col>
                    </v-row>
                    <v-row align="center" justify="center">
                        <v-col cols="5">
                            <h2><mdicon name="map-marker-outline" size="35" style="margin-right: 8px;"/>{{$t('DEVICE.MAC_ADDRESS')}}</h2> 
                        </v-col>
                        <v-col cols="7" >
                            <v-chip close><a style="font-size: large; color: cadetblue; text-align: center;"> {{ item.device_mac }}</a></v-chip>
                        </v-col>
                    </v-row>
                    
                </v-card-text>
                
                
            </v-card>

            
            

        </v-row>
        <v-row>
            <v-col align="center" justify="center">
                <mdicon name="plus-circle" size="100" />
            </v-col>
            
        </v-row>
        
     
   
    </v-container>
</template>
<script>
import axios from 'axios';

export default {
    data() {
        return {
            data:[]
        }
    },
    beforeMount() {
        this.getDeice()
    },
    methods: {
        getDeice(){
            axios.get("http://114.32.9.225:3030/api/food_history/device").then((res)=>{
                this.data = res.data
                console.log(this.data)
            })
        }
    },
}
</script>
<style >
    
</style>