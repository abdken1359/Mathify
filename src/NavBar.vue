<style type="text/css">
    .logo{
        background: linear-gradient(to bottom right,#0892d0 ,#00b7eb ,#1e90ff);
        color: transparent;
        background-clip: text;
        width: max-content;
    }
</style>
<template>
   
	<v-app-bar  app  elevation="0" class="border-b-thin">


       <v-hover v-slot:default="{ isHovering, props }" >
        <v-btn
        v-bind="props"
        :color="isHovering ? 'blue-accent-2' : ''"
        ripple
         aria-label="Open converters menu"
        @click="drawer=!drawer"
        :active="drawer"
        active-color="blue-accent-2"

    icon="mdi-menu"  class="d-sm-flex d-md-none"></v-btn>
</v-hover>
		
        <v-app-bar-title > <router-link to="/" class="text-decoration-none  text-h6 d-flex align-center  font-weight-bold" style="width:max-content"><img src="./assets/mathify_images/Mathifysmall.svg" height="40" alt="App Logo" width="40"></img><span class="logo">{{ navbarTitle }}</span></router-link></v-app-bar-title>
     
      <template v-slot:append >
      	

        <v-hover v-slot:default="{ isHovering, props }">
        <v-btn
        v-bind="props"
        :color="isHovering ? 'blue' : ''"
        ripple
        active-color="blue"
         
        prepend-icon="mdi-tune-variant" class="d-none d-md-flex" to="/converters"> Converters
        
    </v-btn>
</v-hover>
 <v-hover v-slot:default="{ isHovering, props }">
        <v-btn
        v-bind="props"
        :color="isHovering ? 'blue' : ''"
        ripple
        active-color="blue"
         
        prepend-icon="mdi-variable" class="d-none d-md-flex" to="/algebra_solver">Algebra Solver
        
    </v-btn>
</v-hover>
<template v-if="improvement">
<v-hover v-slot:default="{ isHovering, props }">
        <v-btn
        v-bind="props"
        :color="isHovering ? 'blue' : ''"
        ripple
        active-color="blue"
        
         
        prepend-icon="mdi-calculator" class="d-none d-md-flex" to="/calculator"> Calculator
        
    </v-btn>
</v-hover>
<v-hover v-slot:default="{ isHovering, props }">
        <v-btn
        v-bind="props"
        :color="isHovering ? 'blue' : ''"
        ripple
        active-color="blue"
        
         
        prepend-icon="mdi-alpha-g-box-outline" class="d-none d-md-flex">Generator
        
    </v-btn>
</v-hover>
</template>
 <!--<v-btn
        v-bind="props"
        :color="isHovering ? 'blue' : ''"
        ripple
        
         id="more"
        icon="mdi-dots-horizontal" class="d-none d-md-flex" aria-label="See other menu options">
        
    </v-btn>
    <v-menu activator="#more">
        <v-list>
            <v-list-item title="About" link append-icon="mdi-information-outline"></v-list-item>
        </v-list>
    </v-menu>-->
 



       




<v-divider inset class="mx-2 d-none d-md-flex" vertical></v-divider>
<!--ABOUT-->

        <v-btn
        
        
        ripple
    
        active-color="blue-accent-2"
        icon="mdi-github" aria-label="View project on github"  href="https://github.com/abdken1359/Mathify">
           
        </v-btn>

<!--Menu SMALL-->




 <v-btn
        
        :color="coloract"
        ripple
        
        
        :icon="icondesc" @click="toggleTheme" aria-label="Toggle Light and Dark theme">
           
        </v-btn>
      </template>
	</v-app-bar>
<!--NAVDRAWER-->
  <!-- Conditional Rendering for Drawer (Wrapper) -->
  
     <template  v-if="$vuetify.display.smAndDown">
    <v-navigation-drawer
      v-model="drawer"
      location="right"
      temporary
    >
      

        
             
            <v-list>
                <template v-for="(i,index) in utilities" :key="index">
                 <v-list-item role="button" :aria-label="i.title" :title="i.title" :to="i.location" :color="i.color" :prepend-icon="i.icon" :value="index">
                     
                 </v-list-item>
             </template>
            <!-- <v-list-item value="about" role="button" title="About" subtitle="About App" color="indigo" prepend-icon="mdi-information-outline" @click="about=!about" :active="about"></v-list-item>-->
            </v-list>

       

       

          
       
     
    </v-navigation-drawer>
  </template>


 <!--ABOUT DIALOG-->
  <v-dialog
      v-model="about"
      width="auto"
    >
      <v-card
        max-width="600"
        
       
        
      >
      <v-card-item >
      <v-card-title class=" text-sm-h5 text-md-h4 font-weight-bold text-blue-darken-2" ><v-icon>mdi-information-outline</v-icon>  About Mathify</v-card-title>

  </v-card-item>
  <v-card-text class="text">
    <p class="mb-4">Mathify is your all-in-one solution for quick and easy mathematical calculations, conversions, and problem-solving. Whether you're converting units, solving equations, or generating values, Mathify makes math simple and accessible for everyone. </p>

<p>Designed with simplicity and user-friendliness in mind, Mathify brings together powerful tools in a clean and intuitive interface, helping you perform everyday math tasks with ease.


</p></v-card-text>
        <template v-slot:actions>
          <v-btn
            class="ms-auto"
            text="Close"
            color="red"
            aria-label="Close About dialog"
            @click="about = false"
          ></v-btn>
        </template>
      </v-card>
    </v-dialog>
</template>
<script type="text/javascript">
import { useDisplay } from 'vuetify';
import {project} from './stores/project_evolution.js'
	export default{
     name:'NavBar',
      emits: ['change-theme'],
      props:{
        icondesc:{
            type:String,
            required:false,

      },
      coloract:{
        type:String,
        required:false
      },
      iscurrent:{
        type:String
      }
  },
     data(){
     	return{
            about:false,
            drawer:false,
            current:this.iscurrent,
            improvement:project.improvement,
     		navbarTitle:'Mathify',
            utilities:[{title:'Converter',icon:'mdi-tune-variant',color:'blue-accent-2',location:'/converters'},{title:'Algebra Solver',icon:'mdi-variable',color:'blue-accent-2',location:'/algebra_solver'}],
            themes:[{title:'Light Theme', icon:'mdi-brightness-6',color:'yellow'},{title:'Dark theme',icon:'mdi-weather-night',color:'blue'}],
            isfav:false,
            darkb:this.dark,
            convertersB:{
            currency:{
              modal:false,
            },
            temperature:{
                modal:false
            },
            time:{
                modal:false
            }
           }

     	}
     },
     methods:{
        toggleTheme(index){
           this.$emit('change-theme',[index]);

        },
       
        curClose(){
            this.convertersB.currency.modal=false;
        },
        tempClose(){
            this.convertersB.temperature.modal=false;
        },
        timeClose(){
      this.convertersB.time.modal=false;
    }
     }
      
	}
</script>