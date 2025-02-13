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
	                <h2 class="text-deep-purple-accent-2 mb-2">Mass Converter</h2>
	                <v-btn icon="mdi-dots-vertical" color="indigo" @click="optionsb=!optionsb" variant="text" class="mb-2" style="margin-left:auto" aria-label="See more options"></v-btn>
	               </div>
	               <v-dialog v-model="optionsb" max-width="450" transition="slide-y-transition" >
	              	<v-card  >
	              	<v-list>
	              		<v-list-subheader>Show Fields</v-list-subheader>
	              		<v-list-item>
	              			
	              				<v-switch label="Tonnes" @change="tonneschanger" v-model="views.t" color="deep-purple-accent-2" hide-details></v-switch>
	              		
	              		</v-list-item>
	              		<v-list-item>
	              			
	              				<v-switch label="Pounces"  v-model="views.p" @change="poundschanger" color="deep-purple-accent-2" hide-details></v-switch>
	              		
	              		</v-list-item>
	              		<v-list-item>
	              			
	              				<v-switch label="Kilograms" v-model="views.kg" @change="kilogramschanger" color="deep-purple-accent-2" hide-details></v-switch>
	              		
	              		</v-list-item>
	              		<v-list-item>
	              			
	              				<v-switch label="Ounces" v-model="views.o" @change="ounceschanger" color="deep-purple-accent-2" hide-details></v-switch>
	              		
	              		</v-list-item>
	              		<v-list-item>
	              			
	              				<v-switch label="Grams" v-model="views.g" @change="gramschanger" color="deep-purple-accent-2" hide-details></v-switch>
	              		
	              		</v-list-item>
	              		<v-list-item>
	              			
	              				<v-switch label="Centigrams" v-model="views.cg" @change="centigramschanger" color="deep-purple-accent-2" hide-details></v-switch>
	              		
	              		</v-list-item>
	              		<v-list-item>
	              			
	              				<v-switch label="Milligrams" v-model="views.mg" @change="milligramschanger" color="deep-purple-accent-2" hide-details></v-switch>
	              		
	              		</v-list-item>
	              		<v-list-item >
	           
	              				<v-slider class="mt-8" min="1" max="5" step="1" thumb-label="always" v-model="precision" label="Precision" color="deep-purple-accent-2"></v-slider>
	              		
	              		</v-list-item>
	              	</v-list>
	              </v-card>
	          </v-dialog>
	       <v-divider color="indigo-lighten-2"></v-divider>

	         <v-row justify="center" class="my-4">
                	<v-col cols="12" md="6" v-show="views.t">
                		<v-text-field variant="outlined" clearable label="Tonnes (T)"  v-model="units.metric.t" @keypress.e.prevent  @input="fromTonnes(units.metric.t)"color="deep-purple-accent-2" type="number"  ></v-text-field>

                	</v-col>
                	<v-col cols="12" md="6" v-show="views.p">
                		<v-text-field variant="outlined" clearable  @keypress.e.prevent v-model="units.imperial.p" @input="fromPounds(units.imperial.p)" label="Pounces (lbs)" color="deep-purple-accent-2" type="number"  ></v-text-field>
                	</v-col>
                	<v-col cols="12" md="6" v-show="views.kg">
                		<v-text-field variant="outlined" clearable @keypress.e.prevent v-model="units.metric.kg" @input="fromKilograms(units.metric.kg)" label="Kilogram (kg)" color="deep-purple-accent-2" type="number" ></v-text-field>
                	</v-col>

                	<v-col cols="12" md="6" v-show="views.o">
                		<v-text-field variant="outlined" clearable  @keypress.e.prevent v-model="units.imperial.o" @input="fromOunces(units.imperial.o)" label="Ounces (oz)" color="deep-purple-accent-2" type="number"  ></v-text-field>
                	</v-col>

                	<v-col cols="12" md="6" v-show="views.g">
                		<v-text-field variant="outlined" clearable @keypress.e.prevent v-model="units.metric.g" @input="fromGrams(units.metric.g)" label="Grams (g)" color="deep-purple-accent-2" type="number"></v-text-field>
                	</v-col>
                	<v-col cols="12" md="6" v-show="views.cg">
                		<v-text-field variant="outlined" clearable @keypress.e.prevent v-model="units.metric.cg" @input="fromCentigrams(units.metric.cg)" label="Centigrams (cg)" color="deep-purple-accent-2" type="number"></v-text-field>
                	</v-col>
                	<v-col cols="12" md="6" v-show="views.mg">
                		<v-text-field variant="outlined" clearable @keypress.e.prevent v-model="units.metric.mg" @input="fromMilligrams(units.metric.mg)" label="Milligrams (mg)" color="deep-purple-accent-2" type="number" ></v-text-field>
                	</v-col>
                	
                </v-row>

                <v-snackbar timeout="2000" color="indigo" rounded="xl"   v-model="snackbars.t">{{tSnack}}</v-snackbar>
                <v-snackbar timeout="2000" color="indigo" rounded="xl"  v-model="snackbars.p">{{pSnack}}</v-snackbar>
                <v-snackbar timeout="2000" color="indigo"  rounded="xl" v-model="snackbars.kg">{{kgSnack}}</v-snackbar>
                <v-snackbar timeout="2000" color="indigo" rounded="xl" v-model="snackbars.o">{{oSnack}}</v-snackbar>
                <v-snackbar timeout="2000" color="indigo" rounded="xl"   v-model="snackbars.g">{{gSnack}}</v-snackbar>
                <v-snackbar timeout="2000" color="indigo" rounded="xl"  v-model="snackbars.cg">{{cgSnack}}</v-snackbar>
                <v-snackbar timeout="2000" color="indigo"  rounded="xl" v-model="snackbars.mg">{{mgSnack}}</v-snackbar>


		</div>
	</Transition>
</template>
<script>
	export default{
		name:'Mass Converter',
		data(){
			return{
			units:{
				metric:{
					t:'',
					kg:'',
					g:'',
					cg:'',
					mg:''
				},
				imperial:{
					p:'',
					o:''

				}
			},
			views:{
         	t:true,
         	kg:true,
         	g:true,
         	cg:true,
         	mg:true,
         	p:true,
         	o:true,
         	
         },
         snackbars:{
         	t:false,
         	kg:false,
         	g:false,
         	cg:false,
         	mg:false,
         	p:false,
         	o:false,
         	
         }	,
         precision:2,
         optionsb:false
         
		}
	},
	computed:{
tSnack(){
         	if (this.views.t===true) {
         		return 'Tonnes field added!'
         	}else {
         		return 'Tonnes field removed!'
         	}
         },
         pSnack(){
         	if (this.views.p===true) {
         		return 'Pounces field added!'
         	}else {
         		return 'Pounces field removed!'
         	}
         },
         kgSnack(){
         	if (this.views.kg===true) {
         		return 'Kilograms field added!'
         	}else {
         		return 'Kilograms field removed!'
         	}
         },
         oSnack(){
         	if (this.views.o===true) {
         		return 'Ounces field added!'
         	}else {
         		return 'Ounces field removed!'
         	}
         },
         gSnack(){
         	if (this.views.g===true) {
         		return 'Grams field added!'
         	}else {
         		return 'Grams field removed!'
         	}
         },
         cgSnack(){
         	if (this.views.cg===true) {
         		return 'Centigrams field added!'
         	}else {
         		return 'Centigrams field removed!'
         	}
         },
         mgSnack(){
         	if (this.views.mg===true) {
         		return 'Milligrams field added!'
         	}else {
         		return 'Milligrams field removed!'
         	}
         }
	},
	methods:{
		tonneschanger(){
      this.snackbars.t=true
		},
		poundschanger(){
				this.snackbars.p=true
			},
			kilogramschanger(){
				this.snackbars.kg=true
			},
			ounceschanger(){
				this.snackbars.o=true
			},
			gramschanger(){
				this.snackbars.g=true
			},
			centigramschanger(){
				this.snackbars.cg=true
			},
			milligramschanger(){
				this.snackbars.mg=true
			},
			
		fromTonnes(value){
			setTimeout(()=>{
              if (value==='') {
                
                this.units.metric.kg='';
                this.units.metric.g='';
                this.units.metric.cg='';
                this.units.metric.mg=''

              	this.units.imperial.p='';
              	this.units.imperial.o=''

              }
              else {
              	let tonnes=Number(value);
              	this.units.metric.kg=Number(math.evaluate(`${tonnes} * 1000`).toFixed(this.precision));
              	this.units.metric.g=Number(math.evaluate(`${tonnes} * 1000000`).toFixed(this.precision));
              	this.units.metric.cg=Number(math.evaluate(`${tonnes} * 100000000`).toFixed(this.precision));
              	this.units.metric.mg=Number(math.evaluate(`${tonnes} * 1000000000`).toFixed(this.precision));

              	this.units.imperial.p=Number(math.evaluate(`${tonnes} * 2204.62`).toFixed(this.precision));
              	this.units.imperial.o=Number(math.evaluate(`${tonnes} *  1000 * 3527396`).toFixed(this.precision));
              	
              }
			}, 100)
		},
		fromPounds(value){
			setTimeout(()=>{
              if (value==='') {
                this.units.metric.t='';
                this.units.metric.kg='';
                this.units.metric.g='';
                this.units.metric.cg='';
                this.units.metric.mg=''

              	
              	this.units.imperial.o=''

              }
              else {
              	let tonnes=Number(value);
              	this.units.metric.t=Number(math.evaluate(`${tonnes} / 2204.62`).toFixed(this.precision));
              	this.units.metric.kg=Number(math.evaluate(`${tonnes} * 0.453592`).toFixed(this.precision));
              	this.units.metric.g=Number(math.evaluate(`${tonnes} * 2267.96`).toFixed(this.precision));
              	this.units.metric.cg=Number(math.evaluate(`${tonnes} * 45359.2`).toFixed(this.precision));
              	this.units.metric.mg=Number(math.evaluate(`${tonnes} * 453592.37`).toFixed(this.precision));

              	
              	this.units.imperial.o=Number(math.evaluate(`${tonnes} *  1000 * 3527396`).toFixed(this.precision));
              	
              }
			}, 100)
		},
		fromKilograms(value){
			setTimeout(()=>{
              if (value==='') {
                this.units.metric.t='';
                this.units.metric.g='';
                this.units.metric.cg='';
                this.units.metric.mg=''

              	
              	this.units.imperial.o=''
              	this.units.imperial.p=''

              }
              else {
              	let kilogram=Number(value);
              	this.units.metric.t=Number(math.evaluate(`${kilogram}  / 1000`).toFixed(this.precision));
              	this.units.metric.g=Number(math.evaluate(`${kilogram} * 1000`).toFixed(this.precision));
              	this.units.metric.cg=Number(math.evaluate(`${kilogram} * 100000`).toFixed(this.precision));
              	this.units.metric.mg=Number(math.evaluate(`${kilogram} * 1000000`).toFixed(this.precision));

              	
              	this.units.imperial.o=Number(math.evaluate(`${kilogram} * 35.27396`).toFixed(this.precision));
              	this.units.imperial.p=Number(math.evaluate(`${kilogram} *  2.20462`).toFixed(this.precision));
              	
              }
			}, 100)
		},
		fromOunces(value){
			setTimeout(()=>{
              if (value==='') {
                this.units.metric.t='';
                this.units.metric.kg='';
                this.units.metric.g='';
                this.units.metric.cg='';
                this.units.metric.mg=''

              	
              	
              	this.units.imperial.p=''

              }
              else {
              	let ounces=Number(value);
              	this.units.metric.t=Number(math.evaluate(`${ounces}   * 2.83495 * pow(10,-5)`).toFixed(this.precision));
              	this.units.metric.kg=Number(math.evaluate(`${ounces} * 0.0283495`).toFixed(this.precision));
              	this.units.metric.g=Number(math.evaluate(`${ounces} * 28.3495`).toFixed(this.precision));
              	this.units.metric.cg=Number(math.evaluate(`${ounces} * 2834.95`).toFixed(this.precision));
              	this.units.metric.mg=Number(math.evaluate(`${ounces} * 2834.95`).toFixed(this.precision));

              	
              	//this.units.imperial.o=Number(math.evaluate(`${kilogram} * 35.27396`).toFixed(2));
              	this.units.imperial.p=Number(math.evaluate(`${ounces} /  16`).toFixed(this.precision));
              	
              }
			}, 100)
		},
		fromGrams(value){
			setTimeout(()=>{
              if (value==='') {
                this.units.metric.t='';
                this.units.metric.kg='';
                //this.units.metric.g='';
                this.units.metric.cg='';
                this.units.metric.mg=''

              	
              	this.units.imperial.o=''
              	this.units.imperial.p=''

              }
              else {
              	let grams=Number(value);
              	this.units.metric.t=Number(math.evaluate(`${grams} / 1000000`).toFixed(this.precision));
              	this.units.metric.kg=Number(math.evaluate(`${grams} / 1000`).toFixed(this.precision));
              	//this.units.metric.g=Number(math.evaluate(`${ounces} * 28.3495`).toFixed(2));
              	this.units.metric.cg=Number(math.evaluate(`${grams} * 100`).toFixed(this.precision));
              	this.units.metric.mg=Number(math.evaluate(`${grams} * 1000`).toFixed(this.precision));

              	
              	this.units.imperial.o=Number(math.evaluate(`${grams} / 453.592`).toFixed(this.precision));
              	this.units.imperial.p=Number(math.evaluate(`${grams}  / 28.3495`).toFixed(this.precision));
              	
              }
			}, 100)
		},
		fromCentigrams(value){
			setTimeout(()=>{
              if (value==='') {
                this.units.metric.t='';
                this.units.metric.kg='';
                this.units.metric.g='';
                //this.units.metric.cg='';
                this.units.metric.mg=''

              	
              	this.units.imperial.o=''
              	this.units.imperial.p=''

              }
              else {
              	let centigrams=Number(value);
              	this.units.metric.t=Number(math.evaluate(`${centigrams} / 100000000 `)).toFixed(this.precision);
              	this.units.metric.kg=Number(math.evaluate(`${centigrams} / 100000`).toFixed(this.precision));
              	this.units.metric.g=Number(math.evaluate(`${centigrams} / 100`).toFixed(this.precision));
              	//this.units.metric.cg=Number(math.evaluate(`${centigrams} * 100`).toFixed(2));
              	this.units.metric.mg=Number(math.evaluate(`${centigrams} * 10`).toFixed(this.precision));

              	
              	this.units.imperial.p=Number(math.evaluate(`${centigrams} / 453592.37`).toFixed(this.precision));
              	this.units.imperial.o=Number(math.evaluate(`${centigrams} / 28349.5`).toFixed(this.precision));
              	
              }
			}, 100)
		},
		fromMilligrams(value){
			setTimeout(()=>{
              if (value==='') {
                this.units.metric.t='';
                this.units.metric.kg='';
                this.units.metric.g='';
                this.units.metric.cg='';
                //this.units.metric.mg=''

              	
              	this.units.imperial.o=''
              	this.units.imperial.p=''

              }
              else {
              	let milligrams=Number(value);
              	this.units.metric.t=Number(math.evaluate(`${milligrams} / 1000000000 `)).toFixed(this.precision);
              	this.units.metric.kg=Number(math.evaluate(`${milligrams} / 1000000`).toFixed(this.precision));
              	this.units.metric.g=Number(math.evaluate(`${milligrams} / 1000`).toFixed(this.precision));
              	this.units.metric.cg=Number(math.evaluate(`${milligrams} / 10`).toFixed(this.precision));
              	//this.units.metric.mg=Number(math.evaluate(`${centigrams} * 10`).toFixed(2));

              	
              	this.units.imperial.o=Number(math.evaluate(`${milligrams} / 28349.5`).toFixed(this.precision));
              	this.units.imperial.p=Number(math.evaluate(`${milligrams} / 453592.37`).toFixed(this.precision));
              	
              }
			}, 100)
		}
	}
	}
</script>