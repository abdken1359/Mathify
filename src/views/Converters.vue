<style scoped>
	  .v-enter-from{
    transform: translateY(-50px);
    opacity:0;

  }
  .v-enter-to{
    transform: translateX(0);
    opacity: 1;
  }
  .v-enter-active{
    transition: all 0.7s ease;
  }
  .con-container{
  	box-shadow: 0 0px 0 20px #7C4DFF,  0 0 40px 15px #7C4DFF;
  }
    @media  (max-width:600px) {
  	.con-container{
  		/*border: 2px solid #7C4DFF;*/
  		box-shadow: 0 0 0px 8px #7C4DFF;

  	}
  	
  }
</style>
<template>
	<Transition>
	<v-main>
		<v-container>
			<v-sheet class="my-10 con-container mx-auto rounded overflow-hidden">
				<v-toolbar density="compact" color="deep-purple-accent-2">
					<v-app-bar-nav-icon @click="nav=!nav"></v-app-bar-nav-icon>
					<v-toolbar-title>Converters</v-toolbar-title>
					<v-spacer></v-spacer>
				
				</v-toolbar>
                <v-layout min-height="450">
       <v-navigation-drawer v-model="nav">
       <v-list>
       	<v-list-subheader>Converters</v-list-subheader>
       	<v-divider></v-divider>
       	<template v-for="(i,index) in conItems" :key="index">
       		<v-list-item :value="i.value" @click="componentChanger(i.value)" color="indigo-lighten-1" :active="i.isActive">
       			<template v-slot:append>
       				<v-icon>{{i.append}}</v-icon>
       			</template>
       			<v-list-item-title>{{i.text}}</v-list-item-title>
       		</v-list-item>
       	</template>
       </v-list>
</v-navigation-drawer>
<v-main>
	<v-container>

		<KeepAlive>
  <component :is="current"></component>
</KeepAlive>
            </v-container>
            </v-main>
                </v-layout>

			</v-sheet>
		</v-container>
	</v-main>
</Transition>
</template>
<script>
import { useHead } from '@unhead/vue'
	export default{
		name:'Converters',
		data(){
         return{
         	isdark:false,
         	nav:false,
         	current:'distance',
         	test:math.sqrt(25),
         	conItems:[
         		{text:'Distance Converter',append:'mdi-map-marker-distance',value:1,isActive:true},
         		{text:'Temperature Converter',append:'mdi-thermometer',value:2,isActive:false},
         		{text:'Mass Converter',append:'mdi-scale',value:3,isActive:false},
         		{text:'Number base Converter', append:'mdi-numeric',value:4,isActive:false}
         	]
         }

		},
		computed:{
			
		},
		methods:{
			setMeta(){
				 useHead({
      title: 'Converters | vuetify',
      meta: [
        { name: 'description', content: 'Convert units with Mathify User friendly converter.' },
        { property: 'og:title', content: 'Converters | Mathify' },
        { property: 'og:description', content: 'Convert units with Mathify User friendly converter.' }
      ]
    });
				
			},
			componentChanger(value){
       switch (value) {
       	case 1:
       	  this.current='distance'
       	  this.conItems[0].isActive=true;
       	  this.conItems[1].isActive=false;
       	  this.conItems[2].isActive=false;
       	  this.conItems[3].isActive=false;

       		break;
       	case 2:
       	
       	  this.current='temperature'
       	  this.conItems[0].isActive=false;
       	  this.conItems[1].isActive=true;
       	  this.conItems[2].isActive=false;
       	  this.conItems[3].isActive=false;
       	  break;

       case 3:
       	
       	  this.current='mass'
       	  this.conItems[0].isActive=false;
       	  this.conItems[1].isActive=false;
       	  this.conItems[2].isActive=true;
       	  this.conItems[3].isActive=false;
       	  break;
       case 4:
       	
       	  this.current='number'
       	  this.conItems[0].isActive=false;
       	  this.conItems[1].isActive=false;
       	  this.conItems[2].isActive=false;
       	  this.conItems[3].isActive=true;
       	  break; 	  
       	default:
       		// statements_def
       		break;

       	}
			},
			themeToggler(){
				this.isdark=!this.isdark
				localStorage.setItem('DarkConverter', this.isdark);
				console.log('Theme changed!')
			},
			themePutter(){
				const dark=localStorage.getItem('DarkConverter');
				if (dark==='true') {
					this.isdark=true;
				}else {
					this.isdark=false;
				}
			},
				},

		mounted(){
			this.setMeta();
			if (this.$vuetify.display.lgAndUp) {
				this.nav=true
			}else {
				this.nav=false
			}
			
		}
	}
</script>