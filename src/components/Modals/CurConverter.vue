<template>
	<v-dialog fullscreen  transition="dialog-bottom-transition">
		<v-toolbar :color="curcolor" >
			<v-toolbar-title><v-icon>mdi-map-marker-distance</v-icon> Distance Converter</v-toolbar-title>
			<v-spacer></v-spacer>
			<v-btn aria-label="Close Currency Converter Modal" @click="closeModal" icon="mdi-close"></v-btn>
		</v-toolbar>
		
		<v-card class=" pa-5    ">
  <v-sheet elevation="0" style="margin-top:25px; margin-bottom:50px">
  	<v-row>
  	<v-col cols="12" md="6">
  	<v-text-field v-model="kilo" @input="toKilo(kilo)" @keydown.e.prevent variant="outlined" label="Kilometer" type="number" color="teal"></v-text-field>
</v-col>
<v-col cols="12" md="6">
  	<v-text-field variant="outlined" @input="toMiles(miles)" @keydown.e.prevent  v-model="miles" label="Miles" type="number" color="teal"></v-text-field>
</v-col>
<v-col cols="12" md="6">
  	<v-text-field variant="outlined" @input="toMeter(meter)" label="Meter" @keydown.e.prevent  v-model="meter" type="number" color="teal"></v-text-field>
</v-col>
<v-col cols="12" md="6">
  	<v-text-field variant="outlined" label="Yards" @input="toYard(yard)" @keydown.e.prevent  v-model="yard" type="number" color="teal"></v-text-field>
</v-col>
<v-col cols="12" md="6">
  	<v-text-field variant="outlined" label="Centimeter" @input="toCenti(centi)" @keydown.e.prevent  v-model="centi" color="teal" type="number" ></v-text-field>
</v-col>
<v-col cols="12" md="6">
  	<v-text-field variant="outlined" label="Feet" @input="toFeet(foot)" @keydown.e.prevent  v-model="foot" color="teal" type="number" ></v-text-field>
</v-col>
<v-col cols="12" md="6">
  	<v-text-field variant="outlined" label="Millimeter" @input="toMili(mili)" @keydown.e.prevent  v-model="mili" color="teal" type="number" ></v-text-field>
</v-col>
<v-col cols="12" md="6">
  	<v-text-field variant="outlined" label="Inch" @input="toInch(inch)"  @keydown.e.prevent type="number"   v-model="inch" color="teal"></v-text-field>
</v-col>


</v-row>
  </v-sheet>
</v-card>
	</v-dialog>
</template>

<script>
	export default{
		name:'Currency Converter',
		props:{
			curcolor:{
				type:String,
				required:false
			}
		},
		data(){
		  return{
             
             kilo:'',
             miles:'',
             meter:'',
             yard:'',
             centi:'',
             foot:'',
             mili:'',
             inch:'',

		  }
		},
		 
		methods:{
			closeModal(){
				this.$emit('currency-close');
			},
			toKilo(value){
				let kiloval=parseFloat(value);
				 if (isNaN(kiloval)) {
                        this.miles = '';
                     this.meter = '';
                      this.yard = '';
                     this.centi = '';
                       this.foot = '';
                  this.mili = '';
                  this.inch='';
                 } else {
				
					
				this.miles=kiloval * 0.62;
				this.meter=kiloval * 1000;
				this.yard=kiloval * 1093.613;
				this.centi= kiloval * 100000;
				this.foot= kiloval *  3280.84;
				this.mili= kiloval *  1000000;
				this.inch= kiloval * 39370.1;

			
			}

			},
			toMiles(value){
				let milesval=parseFloat(value);
				 if (isNaN(milesval)) {
                        this.kilo = '';
                     this.meter = '';
                      this.yard = '';
                     this.centi = '';
                       this.foot = '';
                  this.mili = '';
                  this.inch='';
                 } else {
				
					
				this.kilo=milesval / 0.62;
				this.meter=milesval * 1609.34 ;
				this.yard=milesval * 1760;
				this.centi= milesval * 160934.4;
				this.foot= milesval *   5280;
				this.mili= milesval * 1609344;
				this.inch= milesval * 63360;

			
			}

			},
			toMeter(value){
				let meterval=parseFloat(value);
				 
				 if (isNaN(meterval)) {
				 	this.kilo = '';
                  this.miles = '';
                  this.yard = '';
                  this.centi = '';
                  this.foot = '';
                  this.mili = '';
                  this.inch='';
                       
                 } else {
				
					
				this.kilo=meterval / 1000;
				this.miles=meterval / 1609.34 ;
				this.yard=meterval *  1.09361;
				this.centi= meterval * 100;
				this.foot= meterval * 3.28084;
				this.mili= meterval * 1000;
				this.inch= meterval * 39.3701;

			
			}

			},
			toYard(value){
				let yardval=parseFloat(value);
				 
				 if (isNaN(yardval)) {
				 	this.kilo = '';
                  this.miles = '';
                  this.meter = '';
                  this.centi = '';
                  this.foot = '';
                  this.mili = '';
                  this.inch='';
                       
                 } else {
				
					
				this.kilo=yardval *  0.0009144 ;
				this.miles=yardval / 0.00057 ;
				this.meter= yardval *  0.9144 ;
				this.centi=yardval * 91.44;
				this.foot= yardval * 3;
				this.mili= yardval * 914.4 ;
				this.inch= yardval * 36;

			
			}

			},
			toCenti(value){
				let centival=parseFloat(value);
				 
				 if (isNaN(centival)) {
				 	this.kilo = '';
                  this.miles = '';
                  this.meter = '';
                  this.yard = '';
                  this.foot = '';
                  this.mili = '';
                  this.inch='';
                       
                 } else {
				
					
				this.kilo=centival / 100000 ;
				this.miles=centival * 0.0000062137 ;
				this.meter= centival *  0.01 ;
				this.yard=centival * 0.0109361 ;
				this.foot= centival * 0.0328084;
				this.mili= centival * 10 ;
				this.inch= centival * 0.393701;

			
			}

			},
			toFeet(value){
				let feetval=parseFloat(value);
				 
				 if (isNaN(feetval)) {
				 	this.kilo = '';
                  this.miles = '';
                  this.meter = '';
                  this.yard = '';
                  this.centi = '';
                  this.mili = '';
                  this.inch='';
                       
                 } else {
				
					
				this.kilo=feetval * 0.0003048 ;
				this.miles=feetval * 0.000189394 ;
				this.meter= feetval *  0.3048 ;
				this.yard=feetval * 0.3333 ;
				this.centi= feetval * 30.48;
				this.mili= feetval * 304.8 ;
				this.inch= feetval * 12;

			
			}

			},
			toMili(value){
				let milival=parseFloat(value);
				 
				 if (isNaN(milival)) {
				 	this.kilo = '';
                  this.miles = '';
                  this.meter = '';
                  this.yard = '';
                  this.centi = '';
                  this.foot = '';
                  this.inch='';
                       
                 } else {
				
					
				this.kilo= milival / 1000000  ;
				this.miles=milival *  0.000000621371  ;
				this.meter= milival /  1000 ;
				this.yard= milival * 0.00109361  ;
				this.centi= milival/10;
				this.foot= milival * 0.00328084 ;
				this.inch= milival * 0.0393701;

			
			}

			},
			toInch(value){
				let inchval=parseFloat(value);
				 
				 if (isNaN(inchval)) {
				 	        this.kilo = '';
                  this.miles = '';
                  this.meter = '';
                  this.yard = '';
                  this.centi = '';
                  this.foot = '';
                  this.mili='';
                       
                 } else {
				
					
				this.kilo= inchval * 0.0000254   ;
				this.miles=inchval *  0.000015783  ;
				this.meter= inchval *  0.0254 ;
				this.yard= inchval * 0.0277778  ;
				this.centi= inchval* 2.54;
				this.foot= inchval * 0.0833333 ;
				this.mili= inchval * 25.4;

			
			}

			}
		}
		
 
	}
</script>