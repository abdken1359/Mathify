<template>
	 <v-footer class="border-t-thin text-center">
	 	<v-container>
	 	&copy; 2025 Mathify, by <a href="https://abdielportfolio.netlify.app" class="text-blue" target="_blank"><em>Abdiel</em></a>
	 </v-container>
	 </v-footer>
</template>
<script>
	export default {
  name: 'Footer',
  data() {
    return {
      footerData: {
        desc: {
          title: 'Convx',
          description:'Effortless Conversions at Your Fingertips'
        },
        builtWith:{
        	title:'Built With',
        	links:{
        		vue:{
        			text:'Vue 3',
        			link:'https://vuejs.org/'
        		},
        		vuetify:{
        			text:'Vuetify 3',
        			link:'https://vuetifyjs.com/en/'
        		}
        	},
        	copyright:{
        		
        		author:'By Abdiel',
        		link:'https://abdielportfolio.netlify.app'
        	}
        }
      }
    };
  }
};

</script>