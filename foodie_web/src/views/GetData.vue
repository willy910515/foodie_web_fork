<template>
    <v-container fill-height max-width="80vw" >
        <v-row  >
            <v-col cols="12">
                
                <v-card color="#27293d" class="pa-2 ma-2 rounded-xl"  background-opacity="0.1">
                    <v-row class="pa-0 ma-0" align="center" justify="center">
                        
                        <v-col cols="2">
                            <h2><mdicon name="map-marker-outline" size="35" style="margin-right:8px;"/>{{$t('DEVICE.MAC_ADDRESS')}}</h2> 
                        </v-col>
                        <v-col cols="3"><v-chip label outlined size="x-large"><a style="color:#fcdb03;font-size: x-large;">{{ this.$route.params.mac_address }}</a>  </v-chip> </v-col>
                        <v-col cols="2">
                            <h2 vertical><mdicon name="calendar-range" size="35" style="margin-right: 8px;"/>{{$t('DEVICE.DATE')}} </h2>
                            
                        </v-col>
                        
                        <v-col cols="3">
                            <v-chip label outlined size="x-large"><a style="color:#84fc03;font-size: x-large;">{{ this.$route.params.date }} </a></v-chip>
                        </v-col>
                    </v-row>
                    
                </v-card>
            </v-col>
        </v-row>
        <v-row >
            <v-col >
                <div style="width:70vw; display: flex;overflow-x: scroll;flex-direction: row;" >

                    <v-col cols="4"   v-for="(item, index) in this.data_2" class="pa-2 ma-0">
                       
                        <v-card   class="rounded-xl" height="17vh"  style="background: rgba(43, 172, 227, 0.1)"    >
                           <v-card-title style="color: aliceblue;">
                            <v-row>
                                <v-col cols="9">

                                    <h3><mdicon name="rice" style="color: aliceblue;margin-right: 8px;" />{{$t('DEVICE.DIETARY')}} <v-chip color="success"  variant="outlined" size="small" ><p style="font-size:x-large;">{{index+1}}</p></v-chip> </h3>
                                </v-col>
                                <v-col class="pa-0" style="bottom:0;display:flex;"  >
                                    <div style="align-self: flex-end;">

                                       <p style="font-size: smaller;margin-bottom: 0;"> {{ this.generateTime(item[0].create_time) }}</p>
                                        
                                    </div>
                                </v-col>
                            </v-row>
                            
                           </v-card-title>
                           <v-divider  thickness="4"></v-divider>
                           <v-card-text>
                            <v-row>
                                <v-col  >
                                    <v-row no-gutters >
                                        <v-col align="right">

                                            <span style="font-size: 3rem;color:#1aedc6;width: fit-content;">{{Math.round( this.total_nutrition_each[index]['totalCalories'])}}</span>
                                        </v-col>

                                    </v-row>
                                    <v-row no-gutters>
                                        <v-col align="right" class="ma-1">

                                            <span style="font-size: 1.7rem;color:#1aedc6;">kcal</span>
                                        </v-col>

                                    </v-row>
                                </v-col>
                                <v-col cols="8" class="pa-0">
                                    <v-row no-gutters>
                                        <v-col cols="12"  >
                                            <div ref="parentDiv" >
                                                <v-row>
                                                    <v-col cols="5" align="right" class="pr-0" >
                                                        <span style="color: #fcdb03;font-size: 1rem;margin-right: 0;position: relative;display: inline;">{{$t('NUTRITION.PROTEIN')}}</span>
                                                    </v-col>
                                                    <v-col>

                                                        <div :style="{width:this.total_nutrition_each[index]['totalProtein']/(this.total_nutrition_each[index]['totalFat']+this.total_nutrition_each[index]['totalProtein']+this.total_nutrition_each[index]['totalFiber']+this.total_nutrition_each[index]['totalCarbohydrates'])*100+'px'}"  style="background-color: #ed1a52;height: 0.8rem;display: inline-flex;"></div>
                                                        <span style="color: antiquewhite;margin-left: 0.5rem;">{{ Math.round(this.total_nutrition_each[index]['totalProtein']) }} g</span>
                                                    </v-col>
                                                </v-row>
     
                                            </div>
                                        </v-col>

                                    </v-row>
                                    <v-row no-gutters>
                                        <v-col cols="12"  >
                                            <div ref="parentDiv" >
                                                <v-row>
                                                    <v-col cols="5" align="right" class="pr-0" >
                                                        <span style="color: #fcdb03;font-size: 1rem;margin-right: 0;position: relative;display: inline;">{{$t('NUTRITION.FAT')}}</span>
                                                    </v-col>
                                                    <v-col>

                                                        <div :style="{width:this.total_nutrition_each[index]['totalFat']/(this.total_nutrition_each[index]['totalFat']+this.total_nutrition_each[index]['totalProtein']+this.total_nutrition_each[index]['totalFiber']+this.total_nutrition_each[index]['totalCarbohydrates'])*100+'px'}"  style="background-color: #e36a19;height: 0.8rem;display: inline-flex;"></div>
                                                        <span style="color: antiquewhite;margin-left: 0.5rem;">{{ Math.round(this.total_nutrition_each[index]['totalFat']) }} g</span>
                                                    </v-col>
                                                </v-row>
     
                                            </div>
                                        </v-col>

                                    </v-row>
                                    <v-row no-gutters>
                                        <v-col cols="12"  >
                                            <div ref="parentDiv" >
                                                <v-row>
                                                    <v-col cols="5" align="right" class="pr-0" >
                                                        <span style="color: #fcdb03;font-size: 1rem;margin-right: 0;position: relative;display: inline;">{{$t('NUTRITION.FIBER')}}</span>
                                                    </v-col>
                                                    <v-col>

                                                        <div :style="{width:this.total_nutrition_each[index]['totalFiber']/(this.total_nutrition_each[index]['totalFat']+this.total_nutrition_each[index]['totalProtein']+this.total_nutrition_each[index]['totalFiber']+this.total_nutrition_each[index]['totalCarbohydrates'])*100+'px'}"  style="background-color: #84fc03;height: 0.8rem;display: inline-flex;"></div>
                                                        <span style="color: antiquewhite;margin-left: 0.5rem;">{{ Math.round(this.total_nutrition_each[index]['totalFiber']) }} g</span>
                                                    </v-col>
                                                </v-row>
     
                                            </div>
                                        </v-col>

                                    </v-row>
                                    <v-row no-gutters>
                                        <v-col cols="12"  >
                                            <div ref="parentDiv" >
                                                <v-row>
                                                    <v-col cols="5" align="right" class="pr-0" >
                                                        <span style="color: #fcdb03;font-size: 1rem;margin-right: 0;position: relative;display: inline;">{{$t('NUTRITION.CARBOHYDRATES')}}</span>
                                                    </v-col>
                                                    <v-col>

                                                        <div :style="{width:this.total_nutrition_each[index]['totalCarbohydrates']/(this.total_nutrition_each[index]['totalFat']+this.total_nutrition_each[index]['totalProtein']+this.total_nutrition_each[index]['totalFiber']+this.total_nutrition_each[index]['totalCarbohydrates'])*100+'px'}"  style="background-color: #e3b419;height: 0.8rem;display: inline-flex;"></div>
                                                        <span style="color: antiquewhite;margin-left: 0.5rem;">{{ Math.round(this.total_nutrition_each[index]['totalCarbohydrates']) }} g</span>
                                                    </v-col>
                                                </v-row>
     
                                            </div>
                                        </v-col>

                                    </v-row>
                                    
                                    
                                </v-col>
                            </v-row>
                           </v-card-text>
                          
                           
        
                        </v-card>
                    </v-col>
                </div>
            </v-col>
        </v-row>
        <v-row >
            <v-col cols="6">
                <v-card height="40vh"  rounded="15px" ma-3 background-opacity="0.2" color="#27293d" class="pa-2 ma-2 rounded-xl">
                    <div id="pie_chart" style="height: 40vh;color: aliceblue;"></div>
                </v-card>

            </v-col>
            <v-col cols="6">
                <v-card height="40vh" rounded="15px" ma-3 background-opacity="0.2" color="#27293d" class="pa-2 ma-2  rounded-xl">
                    <div id="gauage_chart" style="height: 40vh;color: aliceblue;"></div>
                </v-card>
            </v-col>

        </v-row>
        <v-row no-gutters>
            <v-card  width="70vw" rounded="15%" background-opacity="0.2" color="#27293d" class="pa-2 ma-2  rounded-xl">
                <div id="echarts" style="width: 70vw; height: 45vh;color: aliceblue;"></div>
            </v-card>

        </v-row>
     
   
    </v-container>
       
    
</template>
<script>
import * as echarts from 'echarts';

import axios from 'axios'
var line_chart 
var pie_chart
var gauage_chart

export default {
    data() {
        return {
            data:{},
            data_2:[],
            date:[],
            total_nutrition:[],
            total_nutrition_each:[],
            daily_nutrition:[
                { value: 1048, name: this.$t('NUTRITION.PROTEIN')},
                { value: 735, name: this.$t('NUTRITION.FAT') },
                { value: 580, name: this.$t('NUTRITION.FIBER') },
                { value: 300, name: this.$t('NUTRITION.CARBOHYDRATES') }
            ],
            total_calories:[
                {value:0,name:this.$t('NUTRITION.CALORIES')}
            ],
            time:"2023_11_02_12_52_23"
        };
    },
    mounted() {
        this.createEcharts();
        this.create_pieChart()
        this.create_gauage()
        this.getData();
        // console.log(this.$refs.parentDiv.clientWidth)
        // this.createEcharts();
    },
    computed: {
      
    },
    methods: {
        createEcharts() {
  
            line_chart = echarts.init(document.getElementById("echarts"));
            
            line_chart.setOption({
                title: {
                    text: this.$t('DEVICE.NUTRITION_INTAKE_TIME_LINE'),
                    textStyle:{
                        color:"#42daf5"
                    }
                },
                tooltip: {
                    trigger: 'axis'
                },
                legend: {
                    data: [this.$t('NUTRITION.PROTEIN'), this.$t('NUTRITION.FAT'), this.$t('NUTRITION.FIBER'), this.$t('NUTRITION.CARBOHYDRATES')],
                    textStyle: {
                        color: '#88c4fc',
                        fontSize:"20px"
                    }
                },
                dataZoom: [
                    {
                    type: 'inside',
                    start: 0,
                    end: 100
                    },
                    {
                    start: 0,
                    end: 100
                    }
                ],
                grid: {
                    left: '1%',
                    right: '4%',
                    bottom: '9%',
                    containLabel: true
                },
                toolbox: {
                    feature: {
                    saveAsImage: {}
                    }
                },
                xAxis: {
                    type: 'category',
                    boundaryGap: false,
                    data: this.date,
                    
                },
                yAxis: {
                    type: 'value',
                    axisLabel: {
                    formatter: '{value} 公克'
                    },
                    axisPointer: {
                    snap: true
                    }
                },
                series: [
               
                ]
            });
        },
        create_pieChart(){
            pie_chart = echarts.init(document.getElementById("pie_chart"));
            let option = {
                title: {
                    text: '營養比例圖',
                    
                    left: 'center',
                    textStyle: {
                            color: '#e3ebfa',
                            fontSize:"20px"
                        }
                },
                tooltip: {
                    trigger: 'item'
                },
                
                
                };
            pie_chart.setOption(option)
        },
        create_gauage(option){
            gauage_chart = echarts.init(document.getElementById("gauage_chart"));
            option = {
                series: [
                    {
                    type: 'gauge',
                    center: ['50%', '60%'],
                    startAngle: 200,
                    endAngle: -20,
                    min: 0,
                    max: 3000,
                    splitNumber: 12,
                    itemStyle: {
                        color: '#FFAB91'
                    },
                    progress: {
                        show: true,
                        width: 30
                    },
                    pointer: {
                        show: false
                    },
                    axisLine: {
                        lineStyle: {
                        width: 30
                        }
                    },
                    axisTick: {
                        distance: -45,
                        splitNumber: 5,
                        lineStyle: {
                        width: 2,
                        color: '#999'
                        }
                    },
                    splitLine: {
                        distance: -52,
                        length: 14,
                        lineStyle: {
                        width: 3,
                        color: '#999'
                        }
                    },
                    axisLabel: {
                        distance: -20,
                        color: '#999',
                        fontSize: 16
                    },
                    anchor: {
                        show: false
                    },
                    title: {
                        show: false
                    },
                    detail: {
                        valueAnimation: true,
                        width: '60%',
                        lineHeight: 40,
                        borderRadius: 8,
                        offsetCenter: [0, '-15%'],
                        fontSize: 30,
                        fontWeight: 'bolder',
                        formatter: '{value} kcal',
                        color: 'inherit'
                    },
                    data: [
                        {
                        value: 2000
                        }
                    ]
                    },
                    {
                    type: 'gauge',
                    center: ['50%', '60%'],
                    startAngle: 200,
                    endAngle: -20,
                    min: 0,
                    max: 3000,
                    itemStyle: {
                        color: '#FD7347'
                    },
                    progress: {
                        show: true,
                        width: 8
                    },
                    pointer: {
                        show: false
                    },
                    axisLine: {
                        show: false
                    },
                    axisTick: {
                        show: false
                    },
                    splitLine: {
                        show: false
                    },
                    axisLabel: {
                        show: false
                    },
                    detail: {
                        show: false
                    }
                    }
                ]
                };
            gauage_chart.setOption(option)
        },
        getData(){
            const path ="/api/food_history/device/"+this.$route.params.mac_address+"/date/"+this.$route.params.date
            axios.get(path).then((response) => {
                // console.log(response.data)
                this.data = response.data
                console.log(this.data)
                this.data_2 = this.splitData(response.data)
                this.caculateNutrition(this.data_2)
                let daily_protein = 0
                let daily_fat = 0
                let daily_fiber = 0
                let daily_calories = 0
                let daily_carbohydrates = 0
                for (let index = 0; index < this.data.length; index++) {
                    const element = this.data[index];
                    const create_time = element['create_time'];
                    // const dateString = "2023_11_02_20_03_54";
                    const dateParts = create_time.split("_");

                    

                    if (dateParts.length === 6) {
                        const year = parseInt(dateParts[0]);
                        const month = parseInt(dateParts[1]) - 1; // 月份从0开始，所以需要减1
                        const day = parseInt(dateParts[2]);
                        const hour = parseInt(dateParts[3]);
                        const minute = parseInt(dateParts[4]);
                        const second = parseInt(dateParts[5]);

                        const date = new Date(year, month, day, hour, minute, second);
                        var new_date = date.toLocaleTimeString('zh-TW');
                        this.date.push(new_date)
                        // console.log(this.date);
                    }

                    const nutrition = element['nutrition'];
                    let totalProtein = 0;
                    let totalFat = 0;
                    let totalFiber = 0;
                    let totalCalories = 0;
                    let totalCarbohydrates = 0;

                    nutrition.forEach(n => {
                        totalProtein += n.meats.Protein + n.green_vegs.Protein + n.white_vegs.Protein + n.color_vegs.Protein+ n.carbohydrates.Protein+ n.eggs.Protein+ n.mushrooms.Protein+ n.soys.Protein+ n.fish.Protein+ n['soft-bodied'].Protein+ n.crustaceans.Protein+ n.fruits.Protein+ n.algaes.Protein;
                        totalFat += n.meats.Fat + n.green_vegs.Fat + n.white_vegs.Fat + n.color_vegs.Fat + n.carbohydrates.Fat + n.eggs.Fat + n.mushrooms.Fat + n.soys.Fat + n.fish.Fat + n['soft-bodied'].Fat + n.crustaceans.Fat + n.fruits.Fat + n.algaes.Fat;
                        totalFiber += n.meats.Fiber + n.green_vegs.Fiber + n.white_vegs.Fiber + n.color_vegs.Fiber + n.carbohydrates.Fiber + n.eggs.Fiber + n.mushrooms.Fiber + n.soys.Fiber + n.fish.Fiber + n['soft-bodied'].Fiber + n.crustaceans.Fiber + n.fruits.Fiber + n.algaes.Fiber;
                        totalCalories += n.meats.Calories + n.green_vegs.Calories + n.white_vegs.Calories + n.color_vegs.Calories + n.carbohydrates.Calories + n.eggs.Calories + n.mushrooms.Calories + n.soys.Calories + n.fish.Calories + n['soft-bodied'].Calories + n.crustaceans.Calories + n.fruits.Calories + n.algaes.Calories;
                        totalCarbohydrates += n.meats.Carbohydrates + n.green_vegs.Carbohydrates + n.white_vegs.Carbohydrates + n.color_vegs.Carbohydrates + n.carbohydrates.Carbohydrates + n.eggs.Carbohydrates + n.mushrooms.Carbohydrates + n.soys.Carbohydrates + n.fish.Carbohydrates + n['soft-bodied'].Carbohydrates + n.crustaceans.Carbohydrates + n.fruits.Carbohydrates + n.algaes.Carbohydrates;
                        var a = {
                            'totalProtein':totalProtein,
                            'totalFat':totalFat,
                            'totalFiber':totalFiber,
                            'totalCalories':totalCalories,
                            'totalCarbohydrates':totalCarbohydrates,
                            
                        }
                        this.total_nutrition.push(a)
                        daily_protein+= totalProtein
                        daily_calories+= totalCalories
                        daily_fat+=totalFat
                        daily_fiber+= totalFiber
                        daily_carbohydrates += totalCarbohydrates
                    });
                    
                    
                }
                this.total_calories.find(obj => obj.name === this.$t('NUTRITION.CALORIES')).value = daily_calories;
                this.daily_nutrition.find(obj => obj.name === this.$t('NUTRITION.PROTEIN')).value = daily_protein;
                this.daily_nutrition.find(obj => obj.name === this.$t('NUTRITION.FAT')).value = daily_fat;
                this.daily_nutrition.find(obj => obj.name === this.$t('NUTRITION.FIBER')).value = daily_fiber;
                this.daily_nutrition.find(obj => obj.name === this.$t('NUTRITION.CARBOHYDRATES')).value = daily_carbohydrates;
                console.log(this.total_nutrition)
                line_chart.setOption({
                    xAxis:[
                        {
                            data:this.date
                        }
                    ],
                    series: [
                        {
                        name: this.$t('NUTRITION.PROTEIN'),
                        type: 'line',
                        stack: 'Total',
                        data: this.total_nutrition.map(obj=>obj.totalProtein),
                        itemStyle: {color: 'rgb(255, 70, 131)'},
                        areaStyle: {
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                            {
                                offset: 0,
                                color: 'rgb(255, 158, 68)'
                            },
                            {
                                offset: 1,
                                color: 'rgb(255, 70, 131)'
                            }
                            ])
                        },
                        },{
                        name: this.$t('NUTRITION.FAT'),
                        type: 'line',
                        stack: 'Total',
                        data: this.total_nutrition.map(obj=>obj.totalFat),
                        itemStyle: {color: 'rgb(252, 232, 3)'},
                        areaStyle: {
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                            {
                                offset: 0,
                                color: 'rgb(252, 232, 3)'
                            },
                            {
                                offset: 1,
                                color: 'rgb(202, 252, 3)'
                            }
                            ])
                        },
                        },{
                        name: this.$t('NUTRITION.FIBER'),
                        type: 'line',
                        stack: 'Total',
                        data: this.total_nutrition.map(obj=>obj.totalFiber),
                        itemStyle: {color: 'rgb(69, 252, 3)'},
                        areaStyle: {
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                            {
                                offset: 0,
                                color: 'rgb(69, 252, 3)'
                            },
                            {
                                offset: 1,
                                color: 'rgb(3, 252, 132)'
                            }
                            ])
                        },
                        },
                        {
                        name: this.$t('NUTRITION.CARBOHYDRATES'),
                        type: 'line',
                        stack: 'Total',
                        data: this.total_nutrition.map(obj=>obj.totalCarbohydrates),
                        itemStyle: {color: 'rgb(53, 3, 252)'},
                        areaStyle: {
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                            {
                                offset: 0,
                                color: 'rgb(53, 3, 252)'
                            },
                            {
                                offset: 1,
                                color: 'rgb(157, 3, 252)'
                            }
                            ])
                        },
                        },
                    ]
                })
                pie_chart.setOption({
                    dataset: [{
                        source: this.daily_nutrition    
                    }],
                    series: [
                        {
                            type: 'pie',
                            radius: '70%',
                            label:{
                                textStyle: {
                                    color: 'white',
                                    fontSize:"20px"
                                }
                            }
                        },
                        {

                            
                            label:{
                                position: 'inside',
                                show:true,
                                formatter(param){
                                    return  param.percent + '%';
                                },
                                textStyle: {
                                    color: 'black',
                                    fontSize:"20px"
                                }
                                
                            },
                            type: 'pie',
                            radius: '70%',

                            emphasis: {
                                label: {show: true},
                                itemStyle: {
                                    shadowBlur: 100,
                                    shadowOffsetX: 0,
                                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                                }
                            }
                        }
                    ]
                })
                gauage_chart.setOption({
                    series:[
                        {
                            data:[
                                {
                                    value:Math.round(this.total_calories.find(obj => obj.name === this.$t('NUTRITION.CALORIES')).value) 
                                }
                            ]
                        },
                        {
                            data:[
                                {
                                    value:Math.round(this.total_calories.find(obj => obj.name ===this.$t('NUTRITION.CALORIES')).value) 

                                }
                            ]
                        }
                    ]
                })
            })
            
        },
        splitData(data){
            var watcher = 0
            var new_array = []
            var new_array_all = []
            for(var i =0;i<data.length;i++){
                if(data[i].order > watcher){
                    new_array.push(data[i])
                    watcher+=1
                    if(i==data.length-1){
                        new_array_all.push(new_array)
                    }
                }
   
                else{
                    i--;
                    watcher = 0
                    new_array_all.push(new_array)
                    new_array = []
                }

            }
            return new_array_all
        },
        generateTime(time){
            const dateParts = time.split("_");

                    

            if (dateParts.length === 6) {
                const year = parseInt(dateParts[0]);
                const month = parseInt(dateParts[1]) - 1; // 月份从0开始，所以需要减1
                const day = parseInt(dateParts[2]);
                const hour = parseInt(dateParts[3]);
                const minute = parseInt(dateParts[4]);
                const second = parseInt(dateParts[5]);

                const date = new Date(year, month, day, hour, minute, second);
                var new_date = date.toLocaleTimeString('en-TW');
                
                // console.log(this.date);
            }
            return new_date

        },
        caculateNutrition(data){
            for (let i = 0; i < data.length; i++) {
                let each_protein = 0
                let each_fat = 0
                let each_fiber = 0
                let each_calories = 0
                let each_carbohydrates = 0
                for(let j =0;j<data[i].length;j++){

                    const nutrition_each = data[i][j]['nutrition'];
                    let totalProtein = 0;
                    let totalFat = 0;
                    let totalFiber = 0;
                    let totalCalories = 0;
                    let totalCarbohydrates = 0;
        
                    // nutrition_each.forEach(n => {
                    //     totalProtein += n.meat.Protein + n.vegetables.Protein + n.carbohydrates.Protein + n.ovo_lacto.Protein;
                    //     totalFat += n.meat.Fat + n.vegetables.Fat + n.carbohydrates.Fat + n.ovo_lacto.Fat;
                    //     totalFiber += n.meat.Fiber + n.vegetables.Fiber + n.carbohydrates.Fiber + n.ovo_lacto.Fiber;
                    //     totalCalories += n.meat.Calories + n.vegetables.Calories + n.carbohydrates.Calories + n.ovo_lacto.Calories;
                    //     totalCarbohydrates += n.meat.Carbohydrates + n.vegetables.Carbohydrates + n.carbohydrates.Carbohydrates + n.ovo_lacto.Carbohydrates;
                    //     each_protein+= totalProtein
                    //     each_calories+= totalCalories
                    //     each_fat+=totalFat
                    //     each_fiber+= totalFiber
                    //     each_carbohydrates += totalCarbohydrates
                    // });
                    nutrition_each.forEach(n => {
                        console.log(n)
                        totalProtein += n.meats.Protein + n.green_vegs.Protein + n.white_vegs.Protein + n.color_vegs.Protein+ n.carbohydrates.Protein+ n.eggs.Protein+ n.mushrooms.Protein+ n.soys.Protein+ n.fish.Protein+ n['soft-bodied'].Protein+ n.crustaceans.Protein+ n.fruits.Protein+ n.algaes.Protein;
                        totalFat += n.meats.Fat + n.green_vegs.Fat + n.white_vegs.Fat + n.color_vegs.Fat + n.carbohydrates.Fat + n.eggs.Fat + n.mushrooms.Fat + n.soys.Fat + n.fish.Fat + n['soft-bodied'].Fat + n.crustaceans.Fat + n.fruits.Fat + n.algaes.Fat;
                        totalFiber += n.meats.Fiber + n.green_vegs.Fiber + n.white_vegs.Fiber + n.color_vegs.Fiber + n.carbohydrates.Fiber + n.eggs.Fiber + n.mushrooms.Fiber + n.soys.Fiber + n.fish.Fiber + n['soft-bodied'].Fiber + n.crustaceans.Fiber + n.fruits.Fiber + n.algaes.Fiber;
                        totalCalories += n.meats.Calories + n.green_vegs.Calories + n.white_vegs.Calories + n.color_vegs.Calories + n.carbohydrates.Calories + n.eggs.Calories + n.mushrooms.Calories + n.soys.Calories + n.fish.Calories + n['soft-bodied'].Calories + n.crustaceans.Calories + n.fruits.Calories + n.algaes.Calories;
                        totalCarbohydrates += n.meats.Carbohydrates + n.green_vegs.Carbohydrates + n.white_vegs.Carbohydrates + n.color_vegs.Carbohydrates + n.carbohydrates.Carbohydrates + n.eggs.Carbohydrates + n.mushrooms.Carbohydrates + n.soys.Carbohydrates + n.fish.Carbohydrates + n['soft-bodied'].Carbohydrates + n.crustaceans.Carbohydrates + n.fruits.Carbohydrates + n.algaes.Carbohydrates;
                        each_protein+= totalProtein
                        each_calories+= totalCalories
                        each_fat+=totalFat
                        each_fiber+= totalFiber
                        each_carbohydrates += totalCarbohydrates
                    });
                }
                var a = {
                    'totalProtein':each_protein,
                    'totalFat':each_fat,
                    'totalFiber':each_fiber,
                    'totalCalories':each_calories,
                    'totalCarbohydrates':each_carbohydrates,
                    
                }
                this.total_nutrition_each.push(a)
            }
        }
    }
};
</script>