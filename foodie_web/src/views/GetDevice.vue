<template >
    <v-container fill-height class="container">
        <v-row class="pa-2 ma-2">
            <a style="font-size: xx-large;color: azure;">裝置 Devices</a>
        </v-row>
        <v-divider></v-divider>
        <v-row v-for="(item,index) in this.data" >
            
            <v-card height="auto"   round background-opacity="0.2" color="#27293d" class="card" v-on:click="$router.push({path:'/device/'+ item.device_mac })" >
               
                
                    <v-row align="center" justify="center">
                        <v-col cols="6" class="pa-3">
                            <h2 class="header"><mdicon name="devices" class="icon" style="margin-right: 8px;"/>{{$t('DEVICE.DEVICE_NAME')}} </h2>
                        </v-col>
                        <v-col cols="6" class="pa-3">
                           <v-chip close ><a class="chip" style="color:#fcdb03;">{{ item.device_name }}</a>  </v-chip> 
                        </v-col>
                    </v-row>
                    <v-row align="center" justify="center">
                        <v-col cols="6" class="pa-3">
                            <h2 class="header"><mdicon name="map-marker-outline" class="icon" style="margin-right: 8px;"/>{{$t('DEVICE.MAC_ADDRESS')}}</h2> 
                        </v-col>
                        <v-col cols="6" class="pa-3">
                            <v-chip close><a class="chip" style=" color: cadetblue; text-align: center;"> {{ item.device_mac }}</a></v-chip>
                        </v-col>
                    </v-row>
                    
                
                
                
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
            axios.get("/api/food_history/device").then((res)=>{
                this.data = res.data
                console.log(this.data)
            })
        }
    },
}
</script>
<style scoped>
@media (max-width: 600px) {
    .container{
        margin: 0%;;
        padding: 0%
    }
    .card{
        padding: 0.5rem;
        margin: 1rem;
        width: 100%;
        border-radius: 0.5rem;
    }

    .header{
        font-size: 0.9rem;
    }
    .chip{
        font-size: 1rem;
    }

}
@media (min-width: 600px) {
    .card{
        padding: 1.5rem;
        margin: 1rem;
        width: 40vw;
        border-radius: 1rem;
    }
    .header{
        font-size: 2rem;
    }
    .chip{
        font-size: 1.5rem;
    }
    .icon{
        font-size: 50px;
    }
}
</style>