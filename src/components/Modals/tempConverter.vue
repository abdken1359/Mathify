<template>
	<v-dialog fullscreen  transition="dialog-bottom-transition">
		<v-toolbar :color="curcolor" >
			<v-toolbar-title><v-icon>mdi-thermometer</v-icon> Temperature Converter</v-toolbar-title>
			<v-spacer></v-spacer>
			<v-btn aria-label="Close Currency Converter Modal" @click="closeModal" icon="mdi-close"></v-btn>
		</v-toolbar>
		
		<v-card class="pa-5">
  <v-sheet elevation="0" style="margin-top:25px; margin-bottom:50px">
      <v-row>
      	<v-col cols="12" md="6">
      		<v-text-field label="Celsuis" v-model="celsuis" @keydown.e.prevent type="number" @input="toCelsuis(celsuis)" color="red" variant="outlined"></v-text-field>
      	</v-col>
      	<v-col cols="12" md="6">
      		<v-text-field label="Fahrenheit" v-model="fahrenheit" @keydown.e.prevent type="number" @input="toFahrenheit(fahrenheit)" color="red" variant="outlined"></v-text-field>
      	</v-col>
      	<v-col cols="12" md="6">
      		<v-text-field label="Rankin" v-model="rankin"  @keydown.e.prevent type="number" color="red" @input="toRankin(rankin)" variant="outlined"></v-text-field>
      		<p class="text-red" v-show="rankerror">Rankin can't be negative.</p>
      	</v-col>
      	<v-col cols="12" md="6">
      		<v-text-field label="Kelvin" v-model="kelvin"  @keydown.e.prevent type="number" @input="toKelvin(kelvin)" color="red" variant="outlined"></v-text-field>
      		<p class="text-red" v-show="kelerror" transition="scale-transition">Kelvin can't be negative.</p>

      	</v-col>
      </v-row>

  </v-sheet>
</v-card>
</v-dialog>
</template>

<script type="text/javascript">
	export default{
		name:'Temperature Converter',
		props:{
			curcolor:{
				type:String,
				required:false
			}
		},
		data(){
			return{
				celsuis:'',
				fahrenheit:'',
				rankin:'',
				kelvin:'',
				rankerror:false,
				kelerror:false

			}
		},

		methods:{
			closeModal(){
				this.$emit('temp-close');
			},
			toCelsuis(value){
				let celvalue= parseFloat(value);
				if (isNaN(celvalue)) {
					this.fahrenheit='';
					this.rankin='';
					this.kelvin='';
				}else {
					this.fahrenheit= (9/5 * celvalue) + 32;
					this.rankin= (celvalue+273.15) * (9/5);
					this.kelvin= celvalue + 273.15;
				}
				if (celvalue<-273.15) {
					this.rankin='';
					this.kelvin='';
					this.rankerror=true;
					this.kelerror=true;
				}else {
					this.rankerror=false;
					this.kelerror=false;
				}
			},
			toFahrenheit(value){
				let farvalue= parseFloat(value);
				if (isNaN(farvalue)) {
					this.celsuis='';
					this.rankin='';
					this.kelvin='';
				}else {
					this.celsuis= (5/9) * (farvalue - 32);
					this.rankin= farvalue + 459.67;
					if (Math.abs(farvalue + 459.67) < 0.0001) {
                    this.kelvin = 0;  // Treat as absolute zero
                  } else {
                      this.kelvin = (5 / 9) * (farvalue - 32) + 273.15;
                       }
				}
				if (farvalue < -459.67) {
					this.rankin='';
					this.kelvin='';
					this.rankerror=true;
					this.kelerror=true;
				}else {
					this.rankerror=false;
					this.kelerror=false;
				}
			},
			toRankin(value){
				let ravalue= parseFloat(value);
				if (isNaN(ravalue)) {
					this.fahrenheit='';
					this.celsuis='';
					this.kelvin='';
					this.rankerror=false;
					
					
				}else if (ravalue < 0) {
					this.rankerror=true;
					
					this.kelvin='';
					this.fahrenheit='';
					this.celsuis='';
					
				}
				else {
					this.rankerror=false;
					
					this.fahrenheit= ravalue - 459.67;
					this.celsuis= (ravalue - 491.67) * 5/9;
					this.kelvin= ravalue * (5/9);
				}
				
			},
			toKelvin(value){
				let kelvalue= parseFloat(value);
				if (isNaN(kelvalue)) {
					this.fahrenheit='';
					this.celsuis='';
					this.rankin='';
					this.kelerror=false;
					
					
				}else if (kelvalue < 0) {
					this.kelerror=true;
					
					this.rankin='';
					this.fahrenheit='';
					this.celsuis='';
					
				}
				else {
					this.kelerror=false;
					
					this.fahrenheit= (kelvalue - 273.15) * (9/5) +32;
					this.celsuis= kelvalue - 273.15;
					this.rankin= kelvalue * (9/5);
				}
				
			},
		}
	}
</script>