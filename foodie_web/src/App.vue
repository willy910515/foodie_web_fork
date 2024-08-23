<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
</script>
<template>
  
  <v-layout >
    <v-navigation-drawer
      color="#1d1d2e"
      
      theme="dark"
      v-model="drawer"
      
    >
      
      <v-list nav density="compact">
        <!-- <v-list-item  value="/" to="/"  width="10vw"><mdicon name="home" style="color: aliceblue;margin-right: 8px;" />HOME </v-list-item> -->
        <v-list-item  value="device" to="/device" width="50vw"><mdicon name="devices" style="color: aliceblue;margin-right: 8px;"/>DEVICE</v-list-item>
        <v-list-item  value="Infomation" to="/personalInfo" width="50vw"><mdicon name="man" style="color: aliceblue;margin-right: 8px;"/>INFO</v-list-item>
        <!-- <v-list-item title="ALL DATA" value="supervisors" to="/getData" width="300px"><mdicon name="database-outline" /></v-list-item> -->
        
      </v-list>
    </v-navigation-drawer>
    <div id="background" >

    </div>
    
    <v-container fluid class="primary fill-height" background-color="#696969">
    
      <RouterView />
    </v-container>
      
    
  </v-layout>
  
</template>
<script>
export default {
    data () {
      return {
        drawer: true,
        rail: true,
      }
    },
  }
</script>
<style scoped>
#route {
  position: relative;
  right: 0;

}

#background{
  position: absolute;
  right: 0;
  left:0px;
  top: 0;
  /* height: 100%; */
  background-color:#1d1d2e;  
}
/* header {
  line-height: 1.5;
  max-height: 100vh;
} */

/* .logo {
  display: block;
  margin: 0 auto 2rem;
} */

/* nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
} */

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}


</style>
