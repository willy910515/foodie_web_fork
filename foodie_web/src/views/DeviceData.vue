<template>
    <v-container max-width="80vw" height="80vh" class="container">
        <v-row class="pa-2 ma-2">
            <a style="font-size: xx-large;color: azure;">裝置 {{ this.$route.params.mac_address }}</a>
        </v-row>
        <v-divider></v-divider>

        <v-row>
            <v-col>
                <div class="scrollable-container">
                    <v-row v-for="(item, index) in this.data" :key="index" >
                        <v-col>

                            <v-card   round background-opacity="0.2" color="#27293d" class="card" v-on:click="$router.push({path:'/device/'+this.$route.params.mac_address+'/date/' +item.name })">
                                <v-card-text>
                                    <v-row align="center" justify="center">
                                        <v-col cols="3">                                   
                                            <mdicon name="calendar-range"  size="35" />
                                        </v-col>
                                        <v-col cols="9">
                                            <a class="a" style="color:#fcdb03;">{{ item.name }}</a>
                                        </v-col>
                                    </v-row>
                                </v-card-text>
                            </v-card>
                        </v-col>
                    </v-row>
                </div>
            </v-col>
        </v-row>
    </v-container>
</template>
<script>
import axios from 'axios'
import { useDate } from 'vuetify'
export default {
    data() {
        return {
            data:[],
            size:35
        }
    },
    beforeMount() {
   
        this.getDate()
    },
    

    methods: {
       
        getDate(){
            axios.get("/api/food_history/device/"+ this.$route.params.mac_address).then((res)=>{
                console.log(res.data)
                this.data = res.data
                
            })
        },

    },
}
</script>


<style scoped>
.scrollable-container {
    max-height: 80vh; /* 設置最大高度 */
    overflow-y: auto; /* 添加垂直滾動條 */
    padding-right: 15px; /* 增加右側內邊距以確保滾動條不會被遮擋 */

    border-radius: 8px; /* 圓角 */

    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1); /* 添加陰影 */
    margin: 20px 0; /* 增加外邊距 */
}

/* 自定義滾動條樣式 */
.scrollable-container::-webkit-scrollbar {
    width: 10px; /* 滾動條寬度 */
}

.scrollable-container::-webkit-scrollbar-thumb {
    background-color: #888; /* 滾動條顏色 */
    border-radius: 5px; /* 圓角 */
}

.scrollable-container::-webkit-scrollbar-thumb:hover {
    background-color: #555; /* 滾動條懸停顏色 */
}

.scrollable-container::-webkit-scrollbar-track {
    background-color: #f1f1f1; /* 滾動條軌道顏色 */
    border-radius: 5px; /* 圓角 */
}

@media (max-width: 600px) {
    
    .container{
        margin: 0%;
        padding: 0%
    }
    .card{
        padding: 0.5rem;
        margin: 0.5rem;
        width: 70vw;
    }
    .a{
        font-size:1.2rem
    }
    .small-icon {
        font-size: 32px;  
    }
}
@media (min-width: 600px){
    .card{
        padding: 1.5rem;
        margin: 1rem;
        width: 20vw;
    }
    .a{
        font-size:2rem
    }   

}


</style>