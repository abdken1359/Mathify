<style type="text/css">

</style>
<template>
    <v-app :theme="current">
      <nav-bar :iscurrent="iscurrentb" :icondesc="myIcon" :coloract="coloraction"  @change-theme="changedder"/>
      
      <router-view></router-view>
    
      
<footer-my v-if="go"/>

</v-app>

  </template>
  
  <script>
/*import { VBtnGroup, VRow, VTabsWindow } from 'vuetify/components';
import { VBtn } from 'vuetify/components/VBtn';
import { VCheckboxBtn } from 'vuetify/components/VCheckbox';
import { blue } from 'vuetify/util/colors';*/

  export default {
  name: 'App',

  data() {
    return {
      isValid: false,
      changed: false,
      firstDialog: false,
      isfav: false,
      h: 'Type to see magic!',
      myval: '',
      current: 'light',
      coloraction: 'blue',
      myIcon: 'mdi-weather-night',
      go:false,
      converters: {
        currency: {
          modal: false,
        },
        temperature:{
          modal:false
        },
         time:{
          modal:false
        }
      },
    };
  },

  computed: {
    iscurrentb() {
      if (this.current === 'light') {
        return 'teal-lighten1';
      } else {
        return 'teal-accent-3';
      }
    },
  },

  methods: {
    changeState() {
      this.statebutton = 'Danger Red';
    },
    renderFooter(){
      setTimeout(()=>{
        this.go=true
      },800)

    },
    changedder() {
      const letdark = localStorage.getItem('darkmode');

      this.current = this.current === 'light' ? 'dark' : 'light';
      this.coloraction = this.current === 'light' ? 'blue' : 'yellow';
      this.myIcon = this.current === 'light' ? 'mdi-weather-night' : 'mdi-white-balance-sunny';
      localStorage.setItem('darkmode', this.current);
      localStorage.setItem('darkmodeicon', this.myIcon);
      localStorage.setItem('darkmodecolor', this.coloraction);
      console.log('hey!');
    },
    changedderonmout() {
      const letdark = localStorage.getItem('darkmode');
      const darkicon = localStorage.getItem('darkmodeicon');
      const darkcolor = localStorage.getItem('darkmodecolor');
      if (letdark && darkicon && darkcolor) {
        this.current = letdark;
        this.coloraction = darkcolor;
        this.myIcon = darkicon;
      }
    },
  },

  mounted() {
    this.changedderonmout();
    this.renderFooter();
  },
};

  </script>



  