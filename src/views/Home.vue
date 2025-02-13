<style scoped>
	.hero-title{
		font-family: 'Roboto','Georgia';
		font-weight: bolder;
	}
	.hero{
		background: linear-gradient(109.6deg, rgb(204, 228, 247) 11.2%, rgb(237, 246, 250) 100.2%);
	}
	.hero-dark{
		background: linear-gradient(180deg, rgb(25, 50, 100) 0%, rgb(38, 50, 70) 50%, rgb(15, 25, 40) 100%);

	}
	  .v-enter-from,.v-leave-to{
    transform: translateY(-50px);
    opacity:0;

  }
  .v-enter-to,.v-leave-from{
    transform: translateX(0);
    opacity: 1;
  }
  .v-enter-active,.v-leave-active{
    transition: all 0.7s ease;
  }

</style>
<template>

	<v-main>
		<v-img :src="$vuetify.display.lgAndUp?'testit.png':'testit.png'" cover height="90vh" class="align-center">
		
		<v-container>
			<div class="my-5">
			<v-row justify="center" align="center">
			<!--<v-col cols="12" md="6" class="d-block d-md-none">
			<v-img src="/Mathlogo.svg" alt="Robot illustration" max-width="80%" class="mx-auto"></v-img>
		</v-col>-->
			<v-col cols="12" md="6">
			<h1 class="text-h3 text-center text-lg-h2 hero-title">Effortless Maths at Your <span class="font-weight-black text-blue">Fingertips</span></h1>

			<p class=" mt-4 font-weight-light text-h4" v-show="false">Mathify is your all-in-one tool for seamless unit conversions, quick calculations, and efficient problem-solving. Whether you’re working with numbers, formulas, or generators, Mathify helps you get accurate results in just a few clicks, making math simpler and more accessible for everyone, anytime, anywhere.</p>
			<v-row class="mt-6 d-none d-md-flex" align="center" justify="center" >
				<v-col cols="12" lg="6">
				<v-btn size="x-large" to="/converters" variant="flat" block color="deep-purple-darken-3" prepend-icon="mdi-tune-variant">Converters</v-btn>
			</v-col>
			<v-col cols="12" lg='6'>
				<v-btn size="x-large" variant="flat" block color="green-darken-2" prepend-icon="mdi-variable" to="/algebra_solver">Algebra Solver</v-btn>
			</v-col>
			<template v-if="improvement">
			<v-col cols="12" lg="6">
				<v-btn size="large" variant="flat" block color="red" prepend-icon="mdi-calculator" to="/calculator">Calculator</v-btn>
			</v-col>
			<v-col cols="auto" md="6">
				<v-btn size="large" variant="flat" block color="orange-accent-4" prepend-icon="mdi-alpha-g-box-outline">Generator</v-btn>
			</v-col>
		</template>
				
			</v-row>
			<v-row class="mt-6 d-flex d-md-none" align="center" justify="center" >
				<v-col cols="12">
				<v-btn size="large" to="/converters" variant="flat" block color="deep-purple-darken-3" prepend-icon="mdi-tune-variant">Converters</v-btn>
			</v-col>
			<v-col cols="12">
				<v-btn size="large" variant="flat" block color="green-darken-2" prepend-icon="mdi-variable" to="/algebra_solver">Algebra Solver</v-btn>
			</v-col>
			<template v-if="improvement">
			<v-col cols="12">
				<v-btn size="large" variant="flat" block color="red" prepend-icon="mdi-calculator">Calculator</v-btn>
			</v-col>
			<v-col cols="12">
				<v-btn size="large" variant="flat" block color="orange-accent-4" prepend-icon="mdi-alpha-g-box-outline">Generator</v-btn>
			</v-col>
		</template>
				
			</v-row>
		</v-col>
		
		<!--<v-col cols="12" lg="6" class="d-none d-md-block">
			<v-img src="/Mathlogo.svg" alt="Robot illustration" max-width="85%" class="mx-auto"></v-img>
		</v-col>-->
	
	</v-row>
		</div>
		</v-container>
	</v-img>
	
	</v-main>

</template>
<script>
import { useDisplay } from 'vuetify';
import {project} from '../stores/project_evolution.js'
	export default{
		name:'Home',
		data(){
			return{
        improvement:project.improvement
			}
		},
		methods:{
			setMeta(){
				document.title='Mathify'
			}
		},
		mounted(){
			this.setMeta()
		}

	}
</script>