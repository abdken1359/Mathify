<style scoped>
.v-enter-from,.v-leave-to{
	
	opacity: 0;
}
.v-enter-to,.v-leave-from{
	
	opacity: 1;
}
.v-enter-active,.v-leave-active{
	transition: opacity 0.2s ease;
}
	
</style>
<template>
	<Transition>
	<div>
			<div class="d-flex align-center">
	                <h2 class="text-deep-purple-accent-2 mb-2">Temperature Converter</h2>
	                <v-btn icon="mdi-dots-vertical" color="indigo" @click="optionsa=!optionsa" variant="text" class="mb-2" style="margin-left:auto" aria-label="See more options"></v-btn>
	               </div>
	               <v-dialog max-width="450"  transition="slide-y-transition" v-model="optionsa">
	              	<v-card   class="overflow-auto">
	              	<v-list>
	              		<v-list-subheader>Show Fields</v-list-subheader>
	              		<v-list-item>
	              			
	              				<v-switch label="Celsuis" @change="celsuischanger" v-model="views.celsuis" color="deep-purple-accent-2" hide-details></v-switch>
	              		
	              		</v-list-item>
	              		<v-list-item>
	              			
	              				<v-switch label="Kelvin"  v-model="views.kelvin" @change="kelvinchanger" color="deep-purple-accent-2" hide-details></v-switch>
	              		
	              		</v-list-item>
	              		<v-list-item>
	              			
	              				<v-switch label="Fahrenheit" v-model="views.fahrenheit" @change="fahrenheitchanger" color="deep-purple-accent-2" hide-details></v-switch>
	              		
	              		</v-list-item>
	              		<v-list-item>
	              			
	              				<v-switch label="Rankine" v-model="views.rankine" @change="rankinechanger" color="deep-purple-accent-2" hide-details></v-switch>
	              		
	              		</v-list-item>
	              		<v-list-item >
	           
	              				<v-slider class="mt-8" min="1" max="5" step="1" thumb-label="always" v-model="precision" label="Precision" color="deep-purple-accent-2"></v-slider>
	              		
	              		</v-list-item>
	              	</v-list>
	              </v-card>
	          </v-dialog>
	         <v-divider color="indigo-lighten-2"></v-divider>
	         
	         <v-row justify="center" class="my-4">
	         	<v-col cols="12" md="6" v-show="views.celsuis">
	         		<v-text-field variant="outlined" label="Celsuis"  v-model="units.celsuis"  color="deep-purple-accent-2"  @keypress.e.prevent clearable @input="fromCelsuis(units.celsuis)" type="number"></v-text-field>
	         		
	         	</v-col>
	         	<v-col cols="12" md="6" v-show="views.kelvin">
	         		<v-text-field variant="outlined" label="Kelvin" v-model="units.kelvin" color="deep-purple-accent-2"  @keypress.e.prevent clearable @input="fromKelvin(units.kelvin)" type="number" min="1"></v-text-field>
	         		<p class="text-red" v-show="errors.kel">Kelvin can't be negative</p>

	         	</v-col>
	         	<v-col cols="12" md="6" v-show="views.fahrenheit">
	         		<v-text-field variant="outlined" label="Fahrenheit" v-model="units.fahrenheit" color="deep-purple-accent-2"   @keypress.e.prevent  clearable @input="fromFahrenheit(units.fahrenheit)" type="number"></v-text-field>

                  
	         	</v-col>
	         	<v-col cols="12" md="6" v-show="views.rankine">
	         		<v-text-field variant="outlined" min="1" label="Rankine"  @input="fromRankine(units.rankine)" v-model="units.rankine" color="deep-purple-accent-2"  @keypress.e.prevent clearable type="number"></v-text-field>
	         		<p class="text-red" v-show="errors.ran">Rankine can't be negative</p>

	         	</v-col>
	         </v-row>

	         <v-snackbar timeout="2000" color="indigo" rounded="xl"   v-model="snackbars.cel">{{celSnack}}</v-snackbar>
                <v-snackbar timeout="2000" color="indigo" rounded="xl"  v-model="snackbars.kel">{{kelSnack}}</v-snackbar>
                <v-snackbar timeout="2000" color="indigo"  rounded="xl" v-model="snackbars.far">{{farSnack}}</v-snackbar>
                <v-snackbar timeout="2000" color="indigo" rounded="xl" v-model="snackbars.ran">{{ranSnack}}</v-snackbar>
	         
</div>
</Transition>
</template>
<script>
	export default{
		name:'Temperature Converter',
		data(){
			return{
			units:{
				celsuis:'',
				 kelvin:'',
				 fahrenheit:'',
				 rankine:''

			},
			errors:{
				kel:false,
				ran:false
			},
			views:{
				celsuis:true,
				fahrenheit:true,
				kelvin:true,
				rankine:true
			},
			snackbars:{
         	cel:false,
         	kel:false,
         	far:false,
         	ran:false,
         },
         optionsa:false,
         precision:2
		}
		},
		computed:{
         celSnack(){
         	if (this.views.celsuis===true) {
         		return 'Celsuis field added!'
         	}else {
         		return 'Celsuis field removed!'
         	}
         },
         kelSnack(){
         	if (this.views.kelvin===true) {
         		return 'Kelvin field added!'
         	}else {
         		return 'Kelvin field removed!'
         	}
         },
         farSnack(){
         	if (this.views.fahrenheit===true) {
         		return 'Fahrenheit field added!'
         	}else {
         		return 'Fahrenheit field removed!'
         	}
         },
         ranSnack(){
         	if (this.views.rankine===true) {
         		return 'Rankine field added!'
         	}else {
         		return 'Rankine field removed!'
         	}
         }
		},
		methods:{
			celsuischanger(){
				this.snackbars.cel=true
			},
			kelvinchanger(){
				this.snackbars.kel=true
			},
			fahrenheitchanger(){
				this.snackbars.far=true
			},
			rankinechanger(){
				this.snackbars.ran=true
			},
			fromCelsuis(value){
				setTimeout(()=>{
					if (value==='') {
						this.units.kelvin='';
						this.units.fahrenheit='';
						this.units.rankine='';
						this.errors.kel=false;
						this.errors.ran=false;
					}
					else if (Number(value)<-273.15) {
						this.units.kelvin='';
						this.units.rankine='';
						this.errors.kel=true;
						this.errors.ran=true;
						
					}
					else {
						this.errors.kel=false;
						this.errors.ran=false;
						let celsuis=Number(value)
						this.units.kelvin=Number(math.evaluate(`${celsuis} + 273.15`).toFixed(this.precision))
						this.units.fahrenheit=Number(math.evaluate(`(${celsuis} * (9/5)) + 32 `).toFixed(this.precision))
						this.units.rankine=Number(math.evaluate(`(${celsuis} + 273.15) * 9/5 `).toFixed(this.precision))

					}
				},100)
			},
			fromKelvin(value){
				setTimeout(()=>{
					if (value==='') {
						this.units.celsuis='';
						this.units.fahrenheit='';
						this.units.rankine='';
						this.errors.kel=false;
						this.errors.ran=false;
					}
					else if (Number(value) < 0) {
						
						this.units.rankine='';
						this.units.celsuis='';
						this.units.fahrenheit='';
						this.errors.kel=true;
						this.errors.ran=true;
						
					}
					else {
						this.errors.kel=false;
						this.errors.ran=false;
						let kelvin=Number(value)
						this.units.celsuis=Number(math.evaluate(`${kelvin} - 273.15`).toFixed(this.precision))
						this.units.fahrenheit=Number(math.evaluate(`(${kelvin} - 273.15) * 9/5 + 32 `).toFixed(this.precision))
						this.units.rankine=Number(math.evaluate(`${kelvin} * (9/5) `).toFixed(this.precision))

					}
				},100)
			},
			fromFahrenheit(value){
				setTimeout(()=>{
					if (value==='') {
						this.units.celsuis='';
						this.units.kelvin='';
						this.units.rankine='';
						this.errors.kel=false;
						this.errors.ran=false;
					}
					else if (Number(value)< -459.67) {
						this.units.kelvin='';
						this.units.rankine='';
						this.units.celsuis=Number(math.evaluate(`(5/9) * (${Number(value)} - 32 ) `).toFixed(this.precision));
						this.errors.kel=true;
						this.errors.ran=true;
						
					}
					else {
						this.errors.kel=false;
						this.errors.ran=false;
						let fahrenheit=Number(value)
						this.units.kelvin=Number(math.evaluate(`((5/9) * (${fahrenheit} - 32 )) + 273.15`).toFixed(this.precision))
						this.units.celsuis=Number(math.Number(evaluate(`(5/9) * (${fahrenheit} - 32 ) `).toFixed(this.precision)))
						this.units.rankine=Number(math.Number(evaluate(`${fahrenheit} + 459.67`).toFixed(this.precision)))

					}
					if (Number(value)===-459.67) {
						this.units.kelvin=0
					}
				},100)
			},
			fromRankine(value){
				setTimeout(()=>{
					if (value==='') {
						this.units.celsuis='';
						this.units.fahrenheit='';
						this.units.kelvin='';
						this.errors.kel=false;
						this.errors.ran=false;
					}
					else if (Number(value) < 0) {
						
						this.units.kelvin='';
						this.units.celsuis='';
						this.units.fahrenheit='';
						this.errors.kel=true;
						this.errors.ran=true;
						
					}
					else {
						this.errors.kel=false;
						this.errors.ran=false;
						let rankine=Number(value)
						this.units.celsuis=Number(math.evaluate(`(${rankine} - 491.67) * (5/9)`).toFixed(this.precision))
						this.units.fahrenheit=Number(math.evaluate(`(${rankine} - 459.67)`).toFixed(this.precision))
						this.units.kelvin=Number(math.evaluate(`${rankine} * (5/9) `).toFixed(this.precision))
						if (rankine===0) {
						this.units.celsuis=-273.15
					}

					}

				},100)
			},
		}
	}
</script>