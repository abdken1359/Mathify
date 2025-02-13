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
	                <h2 class="text-deep-purple-accent-2 mb-2">Distance Converter</h2>
	                <v-btn icon="mdi-dots-vertical" color="indigo" @click="options=!options" variant="text" class="mb-2" style="margin-left:auto" aria-label="See more options"></v-btn>
	               </div>
	              <v-dialog max-width="450" transition="slide-x-transition" v-model="options" >
	              	<v-card   class="overflow-auto">
	              	<v-list>
	              		<v-list-subheader>Show Fields</v-list-subheader>
	              		<v-list-item>
	              			
	              				<v-switch label="Kilometer" @change="kilochanger" v-model="views.km" color="deep-purple-accent-2" hide-details></v-switch>
	              		
	              		</v-list-item>
	              		<v-list-item>
	              			
	              				<v-switch label="Miles"  v-model="views.mi" @change="milechanger" color="deep-purple-accent-2" hide-details></v-switch>
	              		
	              		</v-list-item>
	              		<v-list-item>
	              			
	              				<v-switch label="Meter" v-model="views.m" @change="meterchanger" color="deep-purple-accent-2" hide-details></v-switch>
	              		
	              		</v-list-item>
	              		<v-list-item>
	              			
	              				<v-switch label="Yards" v-model="views.yd" @change="yardchanger" color="deep-purple-accent-2" hide-details></v-switch>
	              		
	              		</v-list-item>
	              		<v-list-item>
	              			
	              				<v-switch label="Centimeter" v-model="views.cm" @change="centichanger" color="deep-purple-accent-2" hide-details></v-switch>
	              		
	              		</v-list-item>
	              		<v-list-item>
	              			
	              				<v-switch label="Feet" v-model="views.ft" @change="feetchanger" color="deep-purple-accent-2" hide-details></v-switch>
	              		
	              		</v-list-item>
	              		<v-list-item>
	              			
	              				<v-switch label="Milimeter" v-model="views.mm" @change="milichanger" color="deep-purple-accent-2" hide-details></v-switch>
	              		
	              		</v-list-item>
	              		<v-list-item>
	              			
	              				<v-switch label="Inches" v-model="views.in" @change="inchchanger" color="deep-purple-accent-2" hide-details></v-switch>
	              		
	              		</v-list-item>
	              		<v-list-item >
	           
	              				<v-slider class="mt-8" min="1" max="5" step="1" thumb-label="always" v-model="precision" label="Precision" color="deep-purple-accent-2"></v-slider>
	              		
	              		</v-list-item>
	              	</v-list>
	              </v-card>
	              </v-dialog>
                <v-divider color="indigo-lighten-2"></v-divider>
                <v-row justify="center" class="my-4">
                	<v-col cols="12" md="6" v-show="views.km">
                		<v-text-field variant="outlined" clearable label="Kilometer (km)"  v-model="units.metric.km" @keypress.e.prevent  @input="fromKilo(units.metric.km)"color="deep-purple-accent-2" type="number"  ></v-text-field>

                	</v-col>
                	<v-col cols="12" md="6" v-show="views.mi">
                		<v-text-field variant="outlined" clearable  @keypress.e.prevent v-model="units.imperial.mi" @input="fromMiles(units.imperial.mi)" label="Miles (mi)" color="deep-purple-accent-2" type="number"  ></v-text-field>
                	</v-col>
                	<v-col cols="12" md="6" v-show="views.m">
                		<v-text-field variant="outlined" clearable @keypress.e.prevent v-model="units.metric.m" @input="fromMeter(units.metric.m)" label="Meter (m)" color="deep-purple-accent-2" type="number" ></v-text-field>
                	</v-col>

                	<v-col cols="12" md="6" v-show="views.yd">
                		<v-text-field variant="outlined" clearable  @keypress.e.prevent v-model="units.imperial.yd" @input="fromYard(units.imperial.yd)" label="Yards (yd)" color="deep-purple-accent-2" type="number"  ></v-text-field>
                	</v-col>

                	<v-col cols="12" md="6" v-show="views.cm">
                		<v-text-field variant="outlined" clearable @keypress.e.prevent v-model="units.metric.cm" @input="fromCenti(units.metric.cm)" label="Centimeter (cm)" color="deep-purple-accent-2" type="number"></v-text-field>
                	</v-col>
                	<v-col cols="12" md="6" v-show="views.ft">
                		<v-text-field variant="outlined" clearable @keypress.e.prevent v-model="units.imperial.ft" @input="fromFeet(units.imperial.ft)" label="Feet (ft)" color="deep-purple-accent-2" type="number"></v-text-field>
                	</v-col>
                	<v-col cols="12" md="6" v-show="views.mm">
                		<v-text-field variant="outlined" clearable @keypress.e.prevent v-model="units.metric.mm" @input="fromMilli(units.metric.mm)" label="Millimeter (mm)" color="deep-purple-accent-2" type="number" ></v-text-field>
                	</v-col>
                	<v-col cols="12" md="6" v-show="views.in">
                		<v-text-field variant="outlined" clearable @keypress.e.prevent v-model="units.imperial.in" @input="fromInch(units.imperial.in)" label="Inches (in)" color="deep-purple-accent-2" type="number"></v-text-field>
                	</v-col>
                </v-row>
                <v-snackbar timeout="2000" color="indigo" rounded="xl"   v-model="snackbars.km">{{kiloSnack}}</v-snackbar>
                <v-snackbar timeout="2000" color="indigo" rounded="xl"  v-model="snackbars.mi">{{mileSnack}}</v-snackbar>
                <v-snackbar timeout="2000" color="indigo"  rounded="xl" v-model="snackbars.m">{{meterSnack}}</v-snackbar>
                <v-snackbar timeout="2000" color="indigo" rounded="xl" v-model="snackbars.yd">{{yardSnack}}</v-snackbar>
                <v-snackbar timeout="2000" color="indigo" rounded="xl" v-model="snackbars.cm">{{centiSnack}}</v-snackbar>
                <v-snackbar timeout="2000" color="indigo" rounded="xl" v-model="snackbars.ft">{{feetSnack}}</v-snackbar>
                <v-snackbar timeout="2000" color="indigo" rounded="xl" v-model="snackbars.mm">{{milliSnack}}</v-snackbar>
                <v-snackbar timeout="2000" color="indigo" rounded="xl" v-model="snackbars.in">{{inchSnack}}</v-snackbar>
            </div>
             </Transition>  
</template>
<script>
	export default{
		name:'Distance',
		data(){
         return{
         	
         	test:math.sqrt(25),
         	
         	units:{
         	  metric:{
         	  	km:'',
         	  	m:'',
         	  	cm:'',
         	  	mm:'',

         	  },
         	  imperial:{
         	  	mi:'',
         	  	yd:'',
         	  	ft:'',
         	  	in:'',
         	  }
         	},
         views:{
         	km:true,
         	mi:true,
         	m:true,
         	yd:true,
         	cm:true,
         	ft:true,
         	mm:true,
         	in:true
         },
         snackbars:{
         	km:false,
         	mi:false,
         	m:false,
         	yd:false,
         	cm:false,
         	ft:false,
         	mm:false,
         	in:false
         }	,
         options:false,
         precision:2
         
         }

		},
		computed:{
			kiloSnack(){
				if (this.views.km===true) {
					return 'Kilometer field added!'
				}else {
					return 'Kilometer field removed!'
				}
			},
			mileSnack(){
				if (this.views.mi===true) {
					return 'Miles field added!'
				}else {
					return 'Miles field removed!'
				}
			},
			meterSnack(){
				if (this.views.m===true) {
					return 'Meter field added!'
				}else {
					return 'Meter field removed!'
				}
			},
			yardSnack(){
				if (this.views.yd===true) {
					return 'Yards field added!'
				}else {
					return 'Yards field removed!'
				}
			},
			centiSnack(){
				if (this.views.cm===true) {
					return 'Centimeter field added!'
				}else {
					return 'Centimeter field removed!'
				}

			},
			feetSnack(){
				if (this.views.ft===true) {
					return 'Feet field added!'
				}else {
					return 'Feet field removed!'
				}
			},
			milliSnack(){
				if (this.views.mm===true) {
					return 'Millimeter field added!'
				}else {
					return 'Millimeter field removed!'
				}
			},
			inchSnack(){
				if (this.views.in===true) {
					return 'Inches field added!'
				}else {
					return 'Inches field removed!'
				}
			}
		},
		methods:{
			kilochanger(){
				this.snackbars.km=true
			},
			milechanger(){
				this.snackbars.mi=true
			},
			meterchanger(){
				this.snackbars.m=true
			},
			yardchanger(){
				this.snackbars.yd=true
			},
			centichanger(){
				this.snackbars.cm=true
			},
			feetchanger(){
				this.snackbars.ft=true
			},
			milichanger(){
				this.snackbars.mm=true
			},
			inchchanger(){
				this.snackbars.in=true
			},

			fromKilo(value){
				setTimeout(()=>{
					if (value==='') {
					this.units.metric.m='';
					this.units.metric.cm='';
					this.units.metric.mm='';
					this.units.imperial.mi='';
					this.units.imperial.yd='';
					this.units.imperial.ft='';
					this.units.imperial.in='';
				}else{
				let kilo=Number(value);

				this.units.metric.m =Number(math.evaluate(`${kilo} * 1000`).toFixed(this.precision)) ;
				this.units.metric.cm =Number(math.evaluate(`${kilo} * 100000`).toFixed(this.precision)) ;
				this.units.metric.mm =Number(math.evaluate(`${kilo} * 1000000`).toFixed(this.precision)) ;
				this.units.imperial.mi =Number(math.evaluate(`${kilo} * 0.621`).toFixed(this.precision)) ;
				this.units.imperial.yd =Number(math.evaluate(`${kilo} * 1093.613`).toFixed(this.precision)) ;
				this.units.imperial.ft =Number(math.evaluate(`${kilo} * 3280.839`).toFixed(this.precision)) ;
				this.units.imperial.in =Number(math.evaluate(`${kilo} * 39370.079`).toFixed(this.precision)) ;


			}

                	
                },100)
				

			},
			fromMiles(value){
				setTimeout(()=>{
					if (value==='') {
					this.units.metric.km=''
					this.units.metric.m='';
					this.units.metric.cm='';
					this.units.metric.mm='';
					this.units.imperial.yd='';
					this.units.imperial.ft='';
					this.units.imperial.in='';
				}else{
				let mile=Number(value);
        	this.units.metric.km =Number(math.evaluate(`${mile} * 1.609`).toFixed(this.precision)) ;
				this.units.metric.m =Number(math.evaluate(`${mile} * 1609.34`).toFixed(this.precision) );
				this.units.metric.cm =Number(math.evaluate(`${mile} * 160934`).toFixed(this.precision)) ;
				this.units.metric.mm =Number(math.evaluate(`${mile} * 1609340`).toFixed(this.precision)) ;
				
				this.units.imperial.yd =Number(math.evaluate(`${mile} * 1760`).toFixed(this.precision)) ;
				this.units.imperial.ft =Number(math.evaluate(`${mile} * 5280`).toFixed(this.precision)) ;
				this.units.imperial.in =Number(math.evaluate(`${mile} * 63360`).toFixed(this.precision)) ;


			}

				},100)
				


			},
			fromMeter(value){
				setTimeout(()=>{
					if (value==='') {
					this.units.metric.km=''
					this.units.metric.cm='';
					this.units.metric.mm='';
					this.units.imperial.mi='';
					this.units.imperial.yd='';
					this.units.imperial.ft='';
					this.units.imperial.in='';
				}else{
				let meter=Number(value);
        	    this.units.metric.km =Number(math.evaluate(`${meter} * 0.001`).toFixed(this.precision)) ;
				this.units.metric.cm =Number(math.evaluate(`${meter} * 100`).toFixed(this.precision)) ;
				this.units.metric.mm =Number(math.evaluate(`${meter} * 1000`).toFixed(this.precision)) ;

				this.units.imperial.mi =Number(math.evaluate(`${meter} * 0.000621`).toFixed(this.precision)) ;
				this.units.imperial.yd =Number(math.evaluate(`${meter} * 1.094`).toFixed(this.precision) );
				this.units.imperial.ft =Number(math.evaluate(`${meter} * 3.289`).toFixed(this.precision) );
				this.units.imperial.in =Number(math.evaluate(`${meter} * 39.370`).toFixed(this.precision) );


			}


				},100)
				

			},
			fromYard(value){
				setTimeout(()=>{
					if (value==='') {
					this.units.metric.km=''
					this.units.metric.m='';
					this.units.metric.cm='';
					this.units.metric.mm='';

					this.units.imperial.mi='';
					this.units.imperial.ft='';
					this.units.imperial.in='';
				}else{
				let yard=Number(value);
        	    this.units.metric.km =Number(math.evaluate(`${yard} * 0.000914`).toFixed(this.precision)) ;
        	    this.units.metric.m =Number(math.evaluate(`${yard} * 0.914`).toFixed(this.precision)) ;
				this.units.metric.cm =Number(math.evaluate(`${yard} * 91.44`).toFixed(this.precision) );
				this.units.metric.mm =Number(math.evaluate(`${yard} * 914.4`).toFixed(this.precision) );

				this.units.imperial.mi =Number(math.evaluate(`${yard} * 0.000568`).toFixed(this.precision)) ;
				this.units.imperial.ft =Number(math.evaluate(`${yard} * 3`).toFixed(this.precision) );
				this.units.imperial.in =Number(math.evaluate(`${yard} * 36`).toFixed(this.precision) );


			}

				},100)
				

			},
			fromCenti(value){
				setTimeout(()=>{
					if (value==='') {
					this.units.metric.km=''
					this.units.metric.m='';
					this.units.metric.mm='';

					this.units.imperial.mi='';
					this.units.imperial.yd='';
					this.units.imperial.ft='';
					this.units.imperial.in='';
				}else{
				let centi=Number(value);
        	    this.units.metric.km =Number(math.evaluate(`${centi} * 0.00001`).toFixed(this.precision)) ;
        	    this.units.metric.m =Number(math.evaluate(`${centi} *0.01`).toFixed(this.precision) );
				this.units.metric.mm =Number(math.evaluate(`${centi} * 10`).toFixed(this.precision)) ;

				this.units.imperial.mi =Number(math.evaluate(`${centi} * 0.00000621`).toFixed(this.precision)) ;
				this.units.imperial.yd =Number(math.evaluate(`${centi} * 0.0109`).toFixed(this.precision)) ;
				this.units.imperial.ft =Number(math.evaluate(`${centi} * 0.0328`).toFixed(this.precision) );
				this.units.imperial.in =Number(math.evaluate(`${centi} * 0.394`).toFixed(this.precision)) ;


			}


				},100)
				

			},

			fromFeet(value){
				setTimeout(()=>{
					if (value==='') {
					this.units.metric.km=''
					this.units.metric.m='';
					this.units.metric.cm='';
					this.units.metric.mm='';

					this.units.imperial.mi='';
					this.units.imperial.yd='';
					this.units.imperial.in='';
				}else{
				let feet=Number(value);
        	    this.units.metric.km =Number(math.evaluate(`${feet} *0.000305`).toFixed(this.precision) );
        	    this.units.metric.m =Number(math.evaluate(`${feet} *0.3048`).toFixed(this.precision)) ;
        	    this.units.metric.cm =Number(math.evaluate(`${feet} * 30.48`).toFixed(this.precision)) ;
				this.units.metric.mm =Number(math.evaluate(`${feet} * 304.8`).toFixed(this.precision) );

				this.units.imperial.mi =Number(math.evaluate(`${feet} * 0.000189`).toFixed(this.precision)) ;
				this.units.imperial.yd =Number(math.evaluate(`${feet} * 0.333`).toFixed(this.precision)) ;
				this.units.imperial.in =Number(math.evaluate(`${feet} * 12`).toFixed(this.precision)) ;


			}


				},100)
				

			},

			fromMilli(value){
				setTimeout(()=>{
					if (value==='') {
					this.units.metric.km=''
					this.units.metric.m='';
					this.units.metric.cm='';
					

					this.units.imperial.mi='';
					this.units.imperial.yd='';
					this.units.imperial.ft='';
					this.units.imperial.in='';
				}else{
				let mili=Number(value);
        	    this.units.metric.km =Number(math.evaluate(`${mili} *0.000001`).toFixed(this.precision) );
        	    this.units.metric.m =Number(math.evaluate(`${mili} *0.001`).toFixed(this.precision)) ;
        	    this.units.metric.cm =Number(math.evaluate(`${mili} * 0.1`).toFixed(this.precision)) ;
				

				this.units.imperial.mi =Number(math.evaluate(`${mili} * 0.000000621371`).toFixed(this.precision)) ;
				this.units.imperial.yd =Number(math.evaluate(`${mili} * 0.00109361`).toFixed(this.precision)) ;
				this.units.imperial.ft =Number(math.evaluate(`${mili} * 0.00328084`).toFixed(this.precision) );
				this.units.imperial.in =Number(math.evaluate(`${mili} * 0.0393701`).toFixed(this.precision)) ;


			}


				},100)
				

			},
			fromInch(value){
				setTimeout(()=>{
					if (value==='') {
					this.units.metric.km=''
					this.units.metric.m='';
					this.units.metric.cm='';
					this.units.metric.mm='';
					
					this.units.imperial.mi='';
					this.units.imperial.yd='';
					this.units.imperial.ft='';
					
				}else{
				let mili=Number(value);
        	    this.units.metric.km =Number(math.evaluate(`${mili} * 0.0000254`).toFixed(this.precision)) ;
        	    this.units.metric.m =Number(math.evaluate(`${mili} * 0.0254`).toFixed(this.precision)) ;
        	    this.units.metric.cm =Number(math.evaluate(`${mili} * 2.54`).toFixed(this.precision)) ;
        	    this.units.metric.mm =Number(math.evaluate(`${mili} * 25.4`).toFixed(this.precision)) ;
				

				this.units.imperial.mi =Number(math.evaluate(`${mili} * 0.0000157828`).toFixed(this.precision)) ;
				this.units.imperial.yd =Number(math.evaluate(`${mili} * 0.0277778`).toFixed(this.precision)) ;
				this.units.imperial.ft =Number(math.evaluate(`${mili} /12`).toFixed(this.precision)) ;
				


			}

				},100)
				

			},
		},
		mounted(){
			
			
		}
	}
</script>