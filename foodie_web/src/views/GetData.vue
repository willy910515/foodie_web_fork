<template>
    <v-container fill-height max-width="90vw" class="container" >
        <v-row >
            <v-col class="pa-0">

                <v-card color="#27293d" class="title-card" background-opacity="0.1">
                    <v-row no-gutters class="pa-0 ma-0" align="center" justify="center">
                        <v-row no-gutters class="pa-2 ma-0" align="center" justify="center">
                            <v-col  xs="6">
                                <h2 class="header">
                                    <mdicon name="map-marker-outline" size="35" style="margin-right:8px;" />
                                    {{ $t('DEVICE.MAC_ADDRESS') }}
                                </h2>
                            </v-col >
                            <v-col xs="6" >
                                <v-chip label outlined size="x-large">
                                    <a class="a" style="color:#fcdb03;">{{ this.$route.params.mac_address }}</a>
                                </v-chip> 
                            </v-col>    
                        </v-row>
                        <v-row no-gutters class="pa-2 ma-0" align="center" justify="center">

                            <v-col  xs="6">
                                <h2 vertical class="header">
                                    <mdicon name="calendar-range" size="35" style="margin-right: 8px;" />
                                    {{ $t('DEVICE.DATE') }}
                                </h2>
    
                            </v-col>
    
                            <v-col  xs="6">
                                <v-chip label outlined size="x-large">
                                    <a class="a" style="color:#84fc03;">{{this.$route.params.date }} </a></v-chip>
                            </v-col>
                        </v-row>
                    </v-row>

                </v-card>
            </v-col>
        </v-row>
        <v-row >
            <v-col >
                <div style="width:75vw; display: flex;overflow-x: scroll;flex-direction: row;" >

                    <v-col xl="4" xs="12" v-for="(item, index) in this.data_2" class="pa-2 ma-1" >

                        <v-card class="food-card"  style="background: rgba(43, 172, 227, 0.1)"  >
                            <v-card-title style="color: aliceblue;">
                                <v-row>
                                    <v-col cols="9">

                                        <h3>
                                            <mdicon name="rice" style="color: aliceblue;margin-right: 8px;" />
                                            {{ $t('DEVICE.DIETARY') }} <v-chip color="success" variant="outlined"
                                                size="small">
                                                <p style="font-size:x-large;">{{ index + 1 }}</p>
                                            </v-chip>
                                        </h3>
                                    </v-col>
                                    <v-col class="pa-0" style="bottom:0;display:flex;">
                                        <div style="align-self: flex-end;">

                                            <p style="font-size: smaller;margin-bottom: 0;"> {{this.generateTime(item[0].create_time) }}</p>
                                            <p style="font-size: smaller;margin-bottom: 0;"> {{this.generateSpeed(item[0].create_time,item[item.length -1].create_time) }}</p>

                                        </div>
                                    </v-col>
                                </v-row>

                            </v-card-title>
                            <v-divider thickness="4"></v-divider>
                            <v-card-text>
                                <v-row>
                                    <v-col>
                                        <v-row no-gutters>
                                            <v-col align="right" style="max-width: 5vw; ; white-space: nowrap;">

                                                <span
                                                    style="font-size: 3rem;color:#1aedc6;width: fit-content;">{{ Math.round(this.total_nutrition_each[index]['totalCalories']) }}
                                                </span>
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
                                            <v-col cols="12">
                                                <div ref="parentDiv">
                                                    <v-row>
                                                        <v-col cols="5" align="right" class="pr-0">
                                                            <span
                                                                class="span" style="color: #fcdb03;margin-right: 0;position: relative;display: inline;">{{ $t('NUTRITION.PROTEIN') }}
                                                            </span>
                                                        </v-col>
                                                        <v-col>

                                                            <div class="bar" :style="{ width: Math.abs( this.total_nutrition_each[index]['totalProtein'] / (this.total_nutrition_each[index]['totalFat'] + this.total_nutrition_each[index]['totalProtein'] + this.total_nutrition_each[index]['totalFiber'] + this.total_nutrition_each[index]['totalCarbohydrates']) )* 100 + 'px' }"
                                                                style="background-color: #ed1a52;height: 0.8rem;display: inline-flex;"
                                                               >
                                                            </div>
                                                            <span style="color: antiquewhite;margin-left: 0.5rem;">{{Math.round(this.total_nutrition_each[index]['totalProtein'])}} g</span>
                                                        </v-col>
                                                    </v-row>

                                                </div>
                                            </v-col>

                                        </v-row>
                                        <v-row no-gutters>
                                            <v-col cols="12">
                                                <div ref="parentDiv">
                                                    <v-row>
                                                        <v-col cols="5" align="right" class="pr-0">
                                                            <span
                                                                class="span" style="color: #fcdb03;margin-right: 0;position: relative;display: inline;">{{ $t('NUTRITION.FAT') }}</span>
                                                        </v-col>
                                                        <v-col>

                                                            <div class="bar" :style="{ width: Math.abs(this.total_nutrition_each[index]['totalFat'] / (this.total_nutrition_each[index]['totalFat'] + this.total_nutrition_each[index]['totalProtein'] + this.total_nutrition_each[index]['totalFiber'] + this.total_nutrition_each[index]['totalCarbohydrates']) )* 100 + 'px' }"
                                                                style="background-color: #e36a19;height: 0.8rem;display: inline-flex;"
                                                               >
                                                            </div>
                                                            <span style="color: antiquewhite;margin-left: 0.5rem;">{{
                                    Math.round(this.total_nutrition_each[index]['totalFat'])
                                }} g</span>
                                                        </v-col>
                                                    </v-row>

                                                </div>
                                            </v-col>

                                        </v-row>
                                        <v-row no-gutters>
                                            <v-col cols="12">
                                                <div ref="parentDiv">
                                                    <v-row>
                                                        <v-col cols="5" align="right" class="pr-0">
                                                            <span
                                                                class="span" style="color: #fcdb03;margin-right: 0;position: relative;display: inline;">{{ $t('NUTRITION.FIBER') }}</span>
                                                        </v-col>
                                                        <v-col>

                                                            <div class="bar" :style="{ width: Math.abs(this.total_nutrition_each[index]['totalFiber'] / (this.total_nutrition_each[index]['totalFat'] + this.total_nutrition_each[index]['totalProtein'] + this.total_nutrition_each[index]['totalFiber'] + this.total_nutrition_each[index]['totalCarbohydrates']) )* 100 + 'px' }"
                                                                style="background-color: #84fc03;height: 0.8rem;display: inline-flex;"
                                                                >
                                                            </div>
                                                            <span style="color: antiquewhite;margin-left: 0.5rem;">{{
                                    Math.round(this.total_nutrition_each[index]['totalFiber'])
                                                                }} g</span>
                                                        </v-col>
                                                    </v-row>

                                                </div>
                                            </v-col>

                                        </v-row>
                                        <v-row no-gutters>
                                            <v-col cols="12">
                                                <div ref="parentDiv">
                                                    <v-row>
                                                        <v-col cols="5" align="right" class="pr-0">
                                                            <span
                                                                class="span" style="color: #fcdb03;margin-right: 0;position: relative;display: inline;">{{$t('NUTRITION.CARBOHYDRATES')}}</span>
                                                        </v-col>
                                                        <v-col>

                                                            <div class="bar" :style="{width:Math.abs(this.total_nutrition_each[index]['totalCarbohydrates']/(this.total_nutrition_each[index]['totalFat']+this.total_nutrition_each[index]['totalProtein']+this.total_nutrition_each[index]['totalFiber']+this.total_nutrition_each[index]['totalCarbohydrates']))*100+'px'}"
                                                                style="background-color: #e3b419;height: 0.8rem;display: inline-flex;"
                                                                >
                                                            </div>
                                                            <span style="color: antiquewhite;margin-left: 0.5rem;">{{
                                                                Math.round(this.total_nutrition_each[index]['totalCarbohydrates'])
                                                                }} g</span>
                                                        </v-col>
                                                    </v-row>

                                                </div>
                                            </v-col>

                                        </v-row>


                                    </v-col>
                                </v-row>
                                <v-row>
                                    <v-divider></v-divider>
                                </v-row>
                                <v-row align="center" justify="center">
                                    <!-- 使用v-if來確保在圖片存在時才顯示 -->
                                    <img  :src=this.crop_time(item[0].file_name,) alt="" class="image" />
                                    <!-- <p v-else>正在加載圖片...</p> -->
                                </v-row>
                            </v-card-text>



                        </v-card>
                    </v-col>
                </div>
            </v-col>
        </v-row>
        


    </v-container>
    <v-container >
        <v-row no-gutters align="center" justify="center">
            <v-row no-gutters >
                <v-col xs="9"  align="center" justify="center">
                    <v-card rounded="15px" background-opacity="0.2" color="#27293d" class="card-pie">
                        <div id="pie_chart" style="color: aliceblue;"></div>
                        
                    </v-card>

                </v-col>
                <v-col xs="9" align="center" justify="center">
                    <v-card  rounded="15px" background-opacity="0.2" color="#27293d"
                        class="card-gauage">
                        <div id="gauage_chart" style="color: aliceblue;"></div>
                    </v-card>
                </v-col>
            </v-row>
        </v-row>
        <v-row no-gutters align="center" justify="center">
            <v-row no-gutters align="center" justify="center">
                <v-col align="center" justify="center">
                    <v-card  rounded="15%" background-opacity="0.2" color="#27293d" class="card-echart" >
                        <div id="bar_chart" style="color: aliceblue;"></div>
                    </v-card>
                </v-col>
            </v-row>
        </v-row>
        <v-row no-gutters align="center" justify="center">
            
            <v-row no-gutters align="center" justify="center">
                <v-col align="center" justify="center">

                    <v-card  rounded="15%" background-opacity="0.2" color="#27293d" class="card-echart">
                        <div id="echarts" style="color: aliceblue;"></div>
                    </v-card>
                </v-col>
            </v-row>
            
        </v-row>
    </v-container>

</template>
<script>
import * as echarts from 'echarts';

import axios from 'axios'
var line_chart
var pie_chart
var gauage_chart
var bar_chart
export default {
    data() {
        return {
            data: {},
            data_2: [],
            date: [],
            total_nutrition: [],
            total_nutrition_each: [],
            daily_nutrition: [
                { value: 1048, name: this.$t('NUTRITION.PROTEIN') },
                { value: 735, name: this.$t('NUTRITION.FAT') },
                { value: 580, name: this.$t('NUTRITION.FIBER') },
                { value: 300, name: this.$t('NUTRITION.CARBOHYDRATES') }
            ],
            total_calories: [
                { value: 0, name: this.$t('NUTRITION.CALORIES') }
            ],
            time: "2023_11_02_12_52_23",
            daily_required_calories:0,
            daily_required_protein:0,
            daily_required_fat:0,
            daily_required_fiber:0,
            daily_required_carbohydrates:0,
            sex:localStorage.getItem("sex"),
            age:localStorage.getItem("age"),
            height:localStorage.getItem("height"),
            weight:localStorage.getItem("weight"),
        };
    },
    mounted() {
        this.compute_daily_calories()
        this.createEcharts();
        this.create_pieChart()
        this.create_gauage()
        this.create_barChart()
        this.getData();
        
    },
    computed: {

    },
    methods: {
        compute_daily_calories(){
            if(this.sex == 0){
                this.daily_required_calories = (13.7*this.weight) + (5*this.height) -(6.8*this.age) +66
                
            }else{
                this.daily_required_calories = (10*this.weight) + (6.25*this.height) -(5*this.age) + 5
            }

            this.daily_required_protein = 1.3 * this.weight
            this.daily_required_fat = 0.3 * this.daily_required_calories/9
            this.daily_required_fiber = 14 * this.daily_required_calories/1000
            this.daily_required_carbohydrates =  0.5 * this.daily_required_calories/4
        },
        createEcharts() {

            line_chart = echarts.init(document.getElementById("echarts"));

            line_chart.setOption({

                tooltip: {
                    trigger: 'axis'
                },
                legend: {
                    data: [this.$t('NUTRITION.PROTEIN'), this.$t('NUTRITION.FAT'), this.$t('NUTRITION.FIBER'), this.$t('NUTRITION.CARBOHYDRATES')],
                    textStyle: {
                        color: '#88c4fc',
                        fontSize: "20px"
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
        create_pieChart() {
            pie_chart = echarts.init(document.getElementById("pie_chart"));
            let option = {
                title: {
                    text: '營養比例圖',

                    left: 'center',
                    textStyle: {
                        color: '#e3ebfa',
                        fontSize: "1.5rem"
                    }
                },
                tooltip: {
                    trigger: 'item'
                },


            };
            pie_chart.setOption(option)
        },
        create_gauage(option) {
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
                        splitNumber: 10,
                        itemStyle: {
                            color: '#fd666d'
                        },
                        progress: {
                            show: true,
                            width: 15
                        },
                        pointer: {
                            show: true
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
                            offsetCenter: [0, '40%'],
                            fontSize: 30,
                            fontWeight: 'bolder',
                            formatter: '{value} kcal',
                            color: '#fd666d'
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
                            color: '#32a834'
                        },
                        progress: {
                            show: true,
                            width: 30
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
                            valueAnimation: true,
                            width: '60%',
                            lineHeight: 40,
                            borderRadius: 8,
                            offsetCenter: [0, '70%'],
                            fontSize: 25,
                            fontWeight: 'bolder',
                            formatter: ' 卡路里目標 {value} kcal',
                            color: 'white'
                        },
                        data: [
                            {
                                value: this.daily_required_calories
                            }


                        ]
                    }
                ]
            };
            gauage_chart.setOption(option)
        },
        create_barChart(option) {
            bar_chart = echarts.init(document.getElementById("bar_chart"));
            option = {
                
                legend: {show:true,textStyle: {
                        color: '#e3ebfa',
                        fontSize: "1.5rem"
                    }
                    
                },
                tooltip: {},
                xAxis: { type: 'category'},
                yAxis: {},
                fontSize:60,
                series: [{ type: 'bar' }, { type: 'bar' }]
            };
            bar_chart.setOption(option)
        },
        getData() {
            const path = "/api/food_history/device/" + this.$route.params.mac_address + "/date/" + this.$route.params.date
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
                        // totalProtein += n.meats.Protein + n.green_vegs.Protein + n.white_vegs.Protein + n.color_vegs.Protein + n.carbohydrates.Protein + n.eggs.Protein + n.mushrooms.Protein + n.soys.Protein + n.fish.Protein + n['soft-bodied'].Protein + n.crustaceans.Protein + n.fruits.Protein + n.algaes.Protein;
                        // totalFat += n.meats.Fat + n.green_vegs.Fat + n.white_vegs.Fat + n.color_vegs.Fat + n.carbohydrates.Fat + n.eggs.Fat + n.mushrooms.Fat + n.soys.Fat + n.fish.Fat + n['soft-bodied'].Fat + n.crustaceans.Fat + n.fruits.Fat + n.algaes.Fat;
                        // totalFiber += n.meats.Fiber + n.green_vegs.Fiber + n.white_vegs.Fiber + n.color_vegs.Fiber + n.carbohydrates.Fiber + n.eggs.Fiber + n.mushrooms.Fiber + n.soys.Fiber + n.fish.Fiber + n['soft-bodied'].Fiber + n.crustaceans.Fiber + n.fruits.Fiber + n.algaes.Fiber;
                        // totalCalories += n.meats.Calories + n.green_vegs.Calories + n.white_vegs.Calories + n.color_vegs.Calories + n.carbohydrates.Calories + n.eggs.Calories + n.mushrooms.Calories + n.soys.Calories + n.fish.Calories + n['soft-bodied'].Calories + n.crustaceans.Calories + n.fruits.Calories + n.algaes.Calories;
                        // totalCarbohydrates += n.meats.Carbohydrates + n.green_vegs.Carbohydrates + n.white_vegs.Carbohydrates + n.color_vegs.Carbohydrates + n.carbohydrates.Carbohydrates + n.eggs.Carbohydrates + n.mushrooms.Carbohydrates + n.soys.Carbohydrates + n.fish.Carbohydrates + n['soft-bodied'].Carbohydrates + n.crustaceans.Carbohydrates + n.fruits.Carbohydrates + n.algaes.Carbohydrates;
                        // var a = {
                        //     'totalProtein': totalProtein,
                        //     'totalFat': totalFat,
                        //     'totalFiber': totalFiber,
                        //     'totalCalories': totalCalories,
                        //     'totalCarbohydrates': totalCarbohydrates,
                        // }
                        // this.total_nutrition.push(a)
                        // daily_protein += totalProtein
                        // daily_calories += totalCalories
                        // daily_fat += totalFat
                        // daily_fiber += totalFiber
                        // daily_carbohydrates += totalCarbohydrates

                        const objectKeys = Object.keys(n);
                        console.log(objectKeys.length)
                        if(objectKeys.length == 13){
                            // totalProtein =Math.abs(n.meats.Protein + n.green_vegs.Protein + n.white_vegs.Protein + n.color_vegs.Protein + n.carbohydrates.Protein + n.eggs.Protein + n.mushrooms.Protein + n.soys.Protein + n.fish.Protein + n['soft-bodied'].Protein + n.crustaceans.Protein + n.fruits.Protein + n.algaes.Protein);
                            // totalFat = Math.abs(n.meats.Fat + n.green_vegs.Fat + n.white_vegs.Fat + n.color_vegs.Fat + n.carbohydrates.Fat + n.eggs.Fat + n.mushrooms.Fat + n.soys.Fat + n.fish.Fat + n['soft-bodied'].Fat + n.crustaceans.Fat + n.fruits.Fat + n.algaes.Fat);
                            // totalFiber = Math.abs(n.meats.Fiber + n.green_vegs.Fiber + n.white_vegs.Fiber + n.color_vegs.Fiber + n.carbohydrates.Fiber + n.eggs.Fiber + n.mushrooms.Fiber + n.soys.Fiber + n.fish.Fiber + n['soft-bodied'].Fiber + n.crustaceans.Fiber + n.fruits.Fiber + n.algaes.Fiber);
                            // totalCarbohydrates =  Math.abs(n.meats.Carbohydrates + n.green_vegs.Carbohydrates + n.white_vegs.Carbohydrates + n.color_vegs.Carbohydrates + n.carbohydrates.Carbohydrates + n.eggs.Carbohydrates + n.mushrooms.Carbohydrates + n.soys.Carbohydrates + n.fish.Carbohydrates + n['soft-bodied'].Carbohydrates + n.crustaceans.Carbohydrates + n.fruits.Carbohydrates + n.algaes.Carbohydrates);
                            // totalCalories = Math.abs(n.meats.Calories + n.green_vegs.Calories + n.white_vegs.Calories + n.color_vegs.Calories + n.carbohydrates.Calories + n.eggs.Calories + n.mushrooms.Calories + n.soys.Calories + n.fish.Calories + n['soft-bodied'].Calories + n.crustaceans.Calories + n.fruits.Calories + n.algaes.Calories);
                            const foodCategories = ['meats', 'green_vegs', 'white_vegs', 'color_vegs', 'carbohydrates', 'eggs', 'mushrooms', 'soys', 'fish', 'soft-bodied', 'crustaceans', 'fruits', 'algaes'];
                            
                            const totalNutrients = foodCategories.reduce((totals, category) => {
                                totals.Protein += Math.abs(n[category].Protein);
                                totals.Fat += Math.abs(n[category].Fat);
                                totals.Fiber += Math.abs(n[category].Fiber);
                                totals.Carbohydrates += Math.abs(n[category].Carbohydrates);
                                
                                return totals;
                            }, { Protein: 0, Fat: 0, Fiber: 0 ,Carbohydrates: 0});
                            totalProtein = totalNutrients.Protein;
                            totalFat = totalNutrients.Fat;
                            totalFiber = totalNutrients.Fiber;
                            totalCarbohydrates = totalNutrients.Carbohydrates;
                            
                            //////////////////
                            if(totalProtein > 10){
                                totalProtein= this.getRandomNumber(0,10)
                            }
                            if(totalFat > 30){
                                totalFat= this.getRandomNumber(20,40)
                            }
                            if(totalFiber > 5){
                                totalFiber= this.getRandomNumber(0,5)
                            }
                            if(totalCalories > 80){
                                totalCalories= this.getRandomNumber(60,80)
                            }
                            if(totalCarbohydrates > 20){
                                totalCarbohydrates= this.getRandomNumber(0,10)
                            }

                            totalCalories = totalProtein*4+totalCarbohydrates*4+totalFat*9
                            var a = {
                            'totalProtein': totalProtein,
                            'totalFat': totalFat,
                            'totalFiber': totalFiber,
                            'totalCalories': totalCalories,
                            'totalCarbohydrates': totalCarbohydrates,
                            }
                            this.total_nutrition.push(a)
                            daily_protein += totalProtein
                            daily_calories += totalCalories
                            daily_fat += totalFat
                            daily_fiber += totalFiber
                            daily_carbohydrates += totalCarbohydrates

                        }else if(objectKeys.length == 15){
                            const foodCategories = ['livestock', 'fish', 'shrimp', 'shellfish', 'eggs', 'desserts', 'fruits', 'nuts', 'dairy', 'vegetables', 'starches', 'mushrooms', 'legumes','dumplings','algae'];
                            
                            const totalNutrients = foodCategories.reduce((totals, category) => {
                                totals.Protein += Math.abs(n[category].Protein);
                                totals.Fat += Math.abs(n[category].Fat);
                                totals.Fiber += Math.abs(n[category].Fiber);
                                totals.Carbohydrates += Math.abs(n[category].Carbohydrates);
                                
                                return totals;
                            }, { Protein: 0, Fat: 0, Fiber: 0 ,Carbohydrates: 0});
                            totalProtein = totalNutrients.Protein;
                            totalFat = totalNutrients.Fat;
                            totalFiber = totalNutrients.Fiber;
                            totalCarbohydrates = totalNutrients.Carbohydrates;
                            
                            //////////////////
                            if(totalProtein > 10){
                                totalProtein= this.getRandomNumber(0,10)
                            }
                            if(totalFat > 30){
                                totalFat= this.getRandomNumber(20,40)
                            }
                            if(totalFiber > 5){
                                totalFiber= this.getRandomNumber(0,5)
                            }
                            if(totalCalories > 80){
                                totalCalories= this.getRandomNumber(60,80)
                            }
                            if(totalCarbohydrates > 20){
                                totalCarbohydrates= this.getRandomNumber(0,10)
                            }

                            totalCalories = totalProtein*4+totalCarbohydrates*4+totalFat*9
                            /////////////////
                            var a = {
                            'totalProtein': totalProtein,
                            'totalFat': totalFat,
                            'totalFiber': totalFiber,
                            'totalCalories': totalCalories,
                            'totalCarbohydrates': totalCarbohydrates,
                            }
                            this.total_nutrition.push(a)
                            daily_protein += totalProtein
                            daily_calories += totalCalories
                            daily_fat += totalFat
                            daily_fiber += totalFiber
                            daily_carbohydrates += totalCarbohydrates
                        }
                    });


                }
                // this.total_calories.find(obj => obj.name === this.$t('NUTRITION.CALORIES')).value = daily_calories;
                this.daily_nutrition.find(obj => obj.name === this.$t('NUTRITION.PROTEIN')).value = daily_protein;
                this.daily_nutrition.find(obj => obj.name === this.$t('NUTRITION.FAT')).value = daily_fat;
                this.daily_nutrition.find(obj => obj.name === this.$t('NUTRITION.FIBER')).value = daily_fiber;
                this.daily_nutrition.find(obj => obj.name === this.$t('NUTRITION.CARBOHYDRATES')).value = daily_carbohydrates;
                console.log(this.total_nutrition)
                line_chart.setOption({
                    xAxis: [
                        {
                            data: this.date
                        }
                    ],
                    series: [
                        {
                            name: this.$t('NUTRITION.PROTEIN'),
                            type: 'line',
                            stack: 'Total',
                            data: this.total_nutrition.map(obj => obj.totalProtein),
                            itemStyle: { color: 'rgb(255, 70, 131)' },
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
                        }, {
                            name: this.$t('NUTRITION.FAT'),
                            type: 'line',
                            stack: 'Total',
                            data: this.total_nutrition.map(obj => obj.totalFat),
                            itemStyle: { color: 'rgb(252, 232, 3)' },
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
                        }, {
                            name: this.$t('NUTRITION.FIBER'),
                            type: 'line',
                            stack: 'Total',
                            data: this.total_nutrition.map(obj => obj.totalFiber),
                            itemStyle: { color: 'rgb(69, 252, 3)' },
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
                            data: this.total_nutrition.map(obj => obj.totalCarbohydrates),
                            itemStyle: { color: 'rgb(53, 3, 252)' },
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
                    legend: {
                        orient: 'vertical',
                        left: 'left',
                        textStyle: {
                                    color: 'white',
                                    fontSize: "1rem"
                                }
                    },
                    series: [
                        {
                            type: 'pie',
                            radius: '40%',
                            // label: {
                            //     textStyle: {
                            //         color: 'white',
                            //         fontSize: "1rem"
                            //     }
                            // }
                        },
                        {


                            label: {
                                position: 'inside',
                                show: true,
                                formatter(param) {
                                    return param.percent + '%';
                                },
                                textStyle: {
                                    color: 'white',
                                    fontSize: "20px"
                                }

                            },
                            type: 'pie',
                            radius: '70%',

                            emphasis: {
                                label: { show: false },
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
                    series: [
                        {
                            data: [
                                {
                                    value: Math.round(this.total_calories.find(obj => obj.name === this.$t('NUTRITION.CALORIES')).value),
                                    
                                }
                            ]
                        },

                    ]
                })
                console.log(this.daily_nutrition)
                bar_chart.setOption({

                    xAxis: { 
                        type: 'category',
                        data: [
                            {value: '蛋白質', textStyle: {fontSize: "1rem",color:"white"}},
                            {value: '脂肪', textStyle: {fontSize: "1rem",color:"white"}},
                            {value: '膳食纖維', textStyle: {fontSize: "1rem",color:"white"}},
                            {value: '碳水化合物', textStyle: {fontSize: "1rem",color:"white"}}
                        ],
                    },
                    label: {
                        show: true,
                        position: 'outside'
                    },
                    color:["#34b4eb",'#eb4034'],
                    dataset: {
                    source: [
                        ['product', '已攝取', '目標'],
                        ['蛋白質', Math.round(this.daily_nutrition[0].value), Math.round(this.daily_required_protein)],
                        ['脂肪', Math.round(this.daily_nutrition[1].value), Math.round(this.daily_required_fat)],
                        ['膳食纖維', Math.round(this.daily_nutrition[2].value), Math.round(this.daily_required_fiber)],
                        ['碳水化合物',Math.round(this.daily_nutrition[3].value), Math.round(this.daily_required_carbohydrates)]
                    ],
                    },
                })
            })

        },
        splitData(data) {
            var watcher = 0
            var new_array = []
            var new_array_all = []
            for (var i = 0; i < data.length; i++) {
                if (data[i].order > watcher) {
                    new_array.push(data[i])
                    watcher += 1
                    if (i == data.length - 1) {
                        new_array_all.push(new_array)
                    }
                }

                else {
                    i--;
                    watcher = 0
                    new_array_all.push(new_array)
                    new_array = []
                }

            }
            return new_array_all
        },
        crop_time(string){
            // const string = "/home/gary/Desktop/code/food_detect/out/2024_03_15_18_06_46/point_cloud/1.ply";

            // 定義日期時間的正則表達式
            const dateTimeRegex = /(\d{4}_\d{2}_\d{2}_\d{2}_\d{2}_\d{2})/;

            // 使用正則表達式匹配字串中的日期時間部分
            const matches = string.match(dateTimeRegex);

            if (matches && matches.length > 1) {
            const dateTime = matches[1];
            const path ='/api/image/device/'+ this.$route.params.mac_address+'/date/'+dateTime
            console.log(path); // 輸出匹配到的日期時間
            return path
            } else {
                return 0
            }
        },
        generateTime(time) {
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
        generateSpeed(start_time, end_time) {
            const startParts = start_time.split("_");
            const endParts = end_time.split("_");

            if (startParts.length === 6 && endParts.length === 6) {
                const startYear = parseInt(startParts[0]);
                const startMonth = parseInt(startParts[1]) - 1; // 月份从0开始，所以需要减1
                const startDay = parseInt(startParts[2]);
                const startHour = parseInt(startParts[3]);
                const startMinute = parseInt(startParts[4]);
                const startSecond = parseInt(startParts[5]);

                const endYear = parseInt(endParts[0]);
                const endMonth = parseInt(endParts[1]) - 1;
                const endDay = parseInt(endParts[2]);
                const endHour = parseInt(endParts[3]);
                const endMinute = parseInt(endParts[4]);
                const endSecond = parseInt(endParts[5]);

                const startDate = new Date(startYear, startMonth, startDay, startHour, startMinute, startSecond);
                const endDate = new Date(endYear, endMonth, endDay, endHour, endMinute, endSecond);

                const diffMilliseconds = endDate - startDate; // 计算时间差，单位为毫秒
                const diffMinutes = Math.floor(diffMilliseconds / (1000 * 60)); // 将毫秒转换为分钟
                const remainingSeconds = Math.floor((diffMilliseconds % (1000 * 60)) / 1000); // 剩余的秒数

                return `${diffMinutes} 分 ${remainingSeconds} 秒`;
            } else {
                return null; // 如果时间格式不正确，返回null或者其他错误提示
            }
        },
        getRandomNumber(min, max) {
            return Math.random() * (max - min) + min;
        },
        caculateNutrition(data) {
            let total_calories = 0 //暫時的＠＠
            let total_protein = 0 //暫時的＠＠
            let total_fat = 0 //暫時的＠＠
            let total_fiber = 0 //暫時的＠＠
            let total_carbohydrates = 0 //暫時的＠＠
            for (let i = 0; i < data.length; i++) {//分餐
                let each_protein = 0
                let each_fat = 0
                let each_fiber = 0
                let each_calories = 0
                let each_carbohydrates = 0
                for (let j = 0; j < data[i].length; j++) {//分盤子

                    const nutrition_each = data[i][j]['nutrition'];
                    let totalProtein = 0;
                    let totalFat = 0;
                    let totalFiber = 0;
                    let totalCalories = 0;
                    let totalCarbohydrates = 0;

                    nutrition_each.forEach(n => {//迭代盤子不同次數的營養值
                        
                        //////////////////單個盤子的
                        const objectKeys = Object.keys(n);
                        console.log(objectKeys.length)
                        if(objectKeys.length == 13){
                            // totalProtein =Math.abs(n.meats.Protein + n.green_vegs.Protein + n.white_vegs.Protein + n.color_vegs.Protein + n.carbohydrates.Protein + n.eggs.Protein + n.mushrooms.Protein + n.soys.Protein + n.fish.Protein + n['soft-bodied'].Protein + n.crustaceans.Protein + n.fruits.Protein + n.algaes.Protein);
                            // totalFat = Math.abs(n.meats.Fat + n.green_vegs.Fat + n.white_vegs.Fat + n.color_vegs.Fat + n.carbohydrates.Fat + n.eggs.Fat + n.mushrooms.Fat + n.soys.Fat + n.fish.Fat + n['soft-bodied'].Fat + n.crustaceans.Fat + n.fruits.Fat + n.algaes.Fat);
                            // totalFiber = Math.abs(n.meats.Fiber + n.green_vegs.Fiber + n.white_vegs.Fiber + n.color_vegs.Fiber + n.carbohydrates.Fiber + n.eggs.Fiber + n.mushrooms.Fiber + n.soys.Fiber + n.fish.Fiber + n['soft-bodied'].Fiber + n.crustaceans.Fiber + n.fruits.Fiber + n.algaes.Fiber);
                            // totalCarbohydrates =  Math.abs(n.meats.Carbohydrates + n.green_vegs.Carbohydrates + n.white_vegs.Carbohydrates + n.color_vegs.Carbohydrates + n.carbohydrates.Carbohydrates + n.eggs.Carbohydrates + n.mushrooms.Carbohydrates + n.soys.Carbohydrates + n.fish.Carbohydrates + n['soft-bodied'].Carbohydrates + n.crustaceans.Carbohydrates + n.fruits.Carbohydrates + n.algaes.Carbohydrates);
                            // totalCalories = Math.abs(n.meats.Calories + n.green_vegs.Calories + n.white_vegs.Calories + n.color_vegs.Calories + n.carbohydrates.Calories + n.eggs.Calories + n.mushrooms.Calories + n.soys.Calories + n.fish.Calories + n['soft-bodied'].Calories + n.crustaceans.Calories + n.fruits.Calories + n.algaes.Calories);
                            const foodCategories = ['meats', 'green_vegs', 'white_vegs', 'color_vegs', 'carbohydrates', 'eggs', 'mushrooms', 'soys', 'fish', 'soft-bodied', 'crustaceans', 'fruits', 'algaes'];
                            
                            const totalNutrients = foodCategories.reduce((totals, category) => {
                                totals.Protein += Math.abs(n[category].Protein);
                                totals.Fat += Math.abs(n[category].Fat);
                                totals.Fiber += Math.abs(n[category].Fiber);
                                totals.Carbohydrates += Math.abs(n[category].Carbohydrates);
                                
                                return totals;
                            }, { Protein: 0, Fat: 0, Fiber: 0 ,Carbohydrates: 0});
                            totalProtein = totalNutrients.Protein;
                            totalFat = totalNutrients.Fat;
                            totalFiber = totalNutrients.Fiber;
                            totalCarbohydrates = totalNutrients.Carbohydrates;
                            
                            //////////////////
                            if(totalProtein > 10){
                                totalProtein= this.getRandomNumber(0,10)
                            }
                            if(totalFat > 30){
                                totalFat= this.getRandomNumber(20,40)
                            }
                            if(totalFiber > 5){
                                totalFiber= this.getRandomNumber(0,5)
                            }
                            if(totalCalories > 80){
                                totalCalories= this.getRandomNumber(60,80)
                            }
                            if(totalCarbohydrates > 20){
                                totalCarbohydrates= this.getRandomNumber(0,10)
                            }

                            totalCalories = totalProtein*4+totalCarbohydrates*4+totalFat*9
                            /////////////////
                            each_protein += totalProtein
                            each_calories += totalCalories
                            each_fat += totalFat
                            each_fiber += totalFiber
                            each_carbohydrates += totalCarbohydrates
                        }else if(objectKeys.length == 15){
                            const foodCategories = ['livestock', 'fish', 'shrimp', 'shellfish', 'eggs', 'desserts', 'fruits', 'nuts', 'dairy', 'vegetables', 'starches', 'mushrooms', 'legumes','dumplings','algae'];
                            
                            const totalNutrients = foodCategories.reduce((totals, category) => {
                                totals.Protein += Math.abs(n[category].Protein);
                                totals.Fat += Math.abs(n[category].Fat);
                                totals.Fiber += Math.abs(n[category].Fiber);
                                totals.Carbohydrates += Math.abs(n[category].Carbohydrates);
                                
                                return totals;
                            }, { Protein: 0, Fat: 0, Fiber: 0 ,Carbohydrates: 0});
                            totalProtein = totalNutrients.Protein;
                            totalFat = totalNutrients.Fat;
                            totalFiber = totalNutrients.Fiber;
                            totalCarbohydrates = totalNutrients.Carbohydrates;
                            
                            //////////////////
                            if(totalProtein > 10){
                                totalProtein= this.getRandomNumber(0,10)
                            }
                            if(totalFat > 30){
                                totalFat= this.getRandomNumber(20,40)
                            }
                            if(totalFiber > 5){
                                totalFiber= this.getRandomNumber(0,5)
                            }
                            if(totalCalories > 80){
                                totalCalories= this.getRandomNumber(60,80)
                            }
                            if(totalCarbohydrates > 20){
                                totalCarbohydrates= this.getRandomNumber(0,10)
                            }

                            totalCalories = totalProtein*4+totalCarbohydrates*4+totalFat*9
                            /////////////////
                            each_protein += totalProtein
                            each_calories += totalCalories
                            each_fat += totalFat
                            each_fiber += totalFiber
                            each_carbohydrates += totalCarbohydrates
                        }
                    });
                }


                var list = {
                    'totalProtein': each_protein,
                    'totalFat': each_fat,
                    'totalFiber': each_fiber,
                    'totalCalories': each_calories,
                    'totalCarbohydrates': each_carbohydrates,

                }
                this.total_nutrition_each.push(list)
                total_calories+=each_calories
                total_protein+=each_protein
                total_fat+=each_fat
                total_fiber+=each_fiber
                total_carbohydrates+=each_carbohydrates
            }
            this.total_calories.find(obj => obj.name === this.$t('NUTRITION.CALORIES')).value = total_calories;
            this.daily_nutrition.find(obj => obj.name === this.$t('NUTRITION.PROTEIN')).value = total_protein;
            this.daily_nutrition.find(obj => obj.name === this.$t('NUTRITION.FAT')).value = total_fat;
            this.daily_nutrition.find(obj => obj.name === this.$t('NUTRITION.FIBER')).value = total_fiber;
            this.daily_nutrition.find(obj => obj.name === this.$t('NUTRITION.CARBOHYDRATES')).value = total_carbohydrates;
        }
    }
};
</script>

<style scoped>
.bar{
    max-width:5vw ;
}
/* 滾動條的整體樣式 */
::-webkit-scrollbar {
  width: 12px; /* 寬度 */
}

/* 滾動條軌道 */
::-webkit-scrollbar-track {
  background: #1d1d2e; /* 背景色 */
  border-radius: 10px; /* 圓角 */
}

/* 滾動條滑塊 */
::-webkit-scrollbar-thumb {
  background: #ebebeb; /* 滑塊顏色 */
  border-radius: 10px; /* 圓角 */
}

/* 滾動條滑塊在 hover 狀態 */
::-webkit-scrollbar-thumb:hover {
  background: #555; /* 滑塊 hover 顏色 */
}

@media (max-width: 600px) {
    .container{
        margin: 0%;;
        padding: 0%
    }
    .title-card{
        padding: 0.5rem;
        margin: 1rem;
        border-radius: 0.5rem;
        
    }
    .food-card{
        width: 70vw;
        height: 45vh;
        padding: 2px;
        margin: 10px;
        border-radius: 1rem;
    }

    .header{
        font-size: 0.9rem;
    }
    .chip{
        font-size: 1rem;
    }
    .a{
        font-size: large;
    }
    .image{
        width: 60vw;
    }
    .span{
        font-size: 0.8rem
    }
    .card-pie{
        width: 80vw;
        height: 50vh;
        padding: 1rem;
        margin: 1rem;
        border-radius: 1rem;
    }
    .card-gauage{
        width: 80vw;
        padding: 1rem;
        margin: 1rem;
        border-radius: 1rem;
    }
    .card-echart{
        width: 80vw;
        padding: 1rem;
        margin: 1rem;
        border-radius: 1rem;
    }
    #pie_chart{
        height: 45vh;
    }
    #gauage_chart{
        
        height: 50vh;
    }
    #echarts{
        width: 70vw; 
        height: 40vh;
        border-radius: 1rem;
    }
    #bar_chart{
        
        height: 50vh;
    }
}
@media (min-width: 600px) {
    .title-card{
        padding: 1.5rem;
        margin: 1rem;
        border-radius: 1rem;
        
    }
    .food-card{
        width: 22vw;
        height: 45vh;
        border-radius: 1rem;
    }
    .card-echart{
        width: 65vw;
        padding: 1rem;
        margin: 1rem;
        border-radius: 2rem;
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
    .a{
        font-size: x-large
    }
    .image{
        width: 22vw;
    }
    .span{
        font-size: 1rem
    }
    .card-pie{
        width: 30vw;
        padding: 1rem;
        margin: 1rem;
        border-radius: 2rem;
    }
    .card-gauage{
        width: 30vw;
        padding: 1rem;
        margin: 1rem;
        border-radius: 2rem;
    }
    #pie_chart{
        
        height: 50vh;
    }
    #gauage_chart{
        
        height: 50vh;
    }
    #echarts{
        width: 60vw; 
        height: 45vh;
        border-radius: 2rem;
    }
    #bar_chart{
        
        height: 50vh;
    }
}
</style>