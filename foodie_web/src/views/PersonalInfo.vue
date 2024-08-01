<template>
    <v-container grid-list-xs >
        <v-card   background-opacity="0.2" color="#27293d" class="card" >
            <v-row class="pa-1 ma-1" justify="center">
                <v-col  justify="center"><h1>個人身體數據</h1></v-col>
            </v-row>
            <v-row class="pa-1 ma-1">
                <v-col cols="5">
                    <h3>
                        性別
                    </h3>
                </v-col>
                <v-col>
                    <input type="radio" id="male" name="contact" value="0" v-model="sex">
                        <label for="male">男</label>
                    <input type="radio" id="female" name="contact" value="1" v-model="sex">
                        <label for="female">女</label>
                </v-col>
            </v-row>
            <v-row class="pa-1 ma-1">
                <v-col cols='5'>
                    <h3>
                        年齡
                    </h3>
                </v-col>
                <v-col>
                    <input class ="input" type="number" id="age" name="age" min="5" max="100" v-model="age"/>
                </v-col>
            </v-row>
            <v-row class="pa-1 ma-1">
                <v-col cols='5'>
                    <h3>
                        身高
                    </h3>
                </v-col>
                <v-col>
                    <input class ="input" type="number" id="height" name="height" min="100" max="250" v-model="height" />
                </v-col>
            </v-row>
            <v-row class="pa-1 ma-1">
                <v-col cols='5'>
                    <h3>
                        體重
                    </h3>
                </v-col>
                <v-col>
                    <input class ="input" type="number" id="weight" name="weight" min="20" max="250"  v-model="weight" />
                </v-col>
            </v-row>
            <v-row class="pa-1 ma-1" justify="center">
                <v-btn color="success" @click="saveToLocalStorage">ok</v-btn>
            </v-row>
            
        </v-card> 
    </v-container>
    <v-snackbar
      v-model="snackbar"
      :timeout="timeout"
    >
      {{ text }}

      <template v-slot:actions>
        <v-btn
          color="blue"
          variant="text"
          @click="snackbar = false"
        >
          Close
        </v-btn>
      </template>
    </v-snackbar>
</template>
<script>
export default {
    data() {
        return {
            sex : 0,
            age : 60,
            height : 170,
            weight : 60,
            snackbar: false,
            text: '',
            timeout: 4000,
        }
    },
    methods:{
        saveToLocalStorage(){
            localStorage.setItem('sex', this.sex);
            localStorage.setItem('age', this.age);
            localStorage.setItem('height', this.height);
            localStorage.setItem('weight', this.weight);
            this.text = `Saved`
            this.snackbar = true
        }
    }
}
</script>
<style>
.class{
    padding: 1rem;
    margin: 1rem
}
.input{
    color: white;
    font-size: medium;
}
</style>