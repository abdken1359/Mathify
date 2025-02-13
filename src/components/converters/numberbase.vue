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
	                <h2 class="text-deep-purple-accent-2 mb-2">Number Base Converter</h2>
	                <v-btn icon="mdi-dots-vertical" color="indigo" @click="optionsc=!optionsc" variant="text" class="mb-2" style="margin-left:auto" aria-label="See more options"></v-btn>
	                 <v-dialog v-model="optionsc" max-width="450" transition="slide-y-transition" >
	              	<v-card  >
	              	<v-list>
	              		<v-list-subheader>Show Fields</v-list-subheader>
	              		
	              		<v-list-item>
	              			
	              				<v-switch label="Decimal" v-model="views.d" @change="decimalchanger" color="deep-purple-accent-2" hide-details></v-switch>
	              		
	              		</v-list-item>
	              		<v-list-item>
	              			
	              				<v-switch label="Hexadecimal" v-model="views.h" @change="hexadecimalchanger" color="deep-purple-accent-2" hide-details></v-switch>
	              		
	              		</v-list-item>
	              		<v-list-item>
	              			
	              				<v-switch label="Octal" v-model="views.o" @change="octalchanger" color="deep-purple-accent-2" hide-details></v-switch>
	              		
	              		</v-list-item>
	              		<v-list-item>
	              			
	              				<v-switch label="Binary" v-model="views.b" @change="binarychanger" color="deep-purple-accent-2" hide-details></v-switch>
	              		
	              		</v-list-item>
	              	</v-list>
	              </v-card>
	          </v-dialog>
	               </div>
	        <v-row class="my-4" justify="center">

	        	<v-col cols="12" md="6" v-show="views.d">
	        		<v-text-field label="Decimal (base 10)" type="number" variant="outlined" v-model="units.decimal" @keypress.e.prevent @keypress._.prevent  @input="fromdecimal(units.decimal)" color="deep-purple-accent-2"></v-text-field>
	        	</v-col>
	        	<v-col cols="12" md="6" v-show="views.h">
	        		<v-text-field label="Hexadecimal (base 16)" type="text" @input="fromhexadecimal(units.hexadecimal)" variant="outlined" v-model="units.hexadecimal" color="deep-purple-accent-2"></v-text-field>
	        	</v-col>
	        	<v-col cols="12" md="6" v-show="views.o">
	        		<v-text-field label="Octal (base 8)" type="number" @input="fromoctal(units.octal)" @keypress.e.prevent @keypress._.prevent variant="outlined" v-model="units.octal" color="deep-purple-accent-2"></v-text-field>
	        	</v-col>
	        	<v-col cols="12" md="6" v-show="views.b">
	        		<v-text-field label="Binary (base 2)" type="number" @input="frombinary(units.binary)" @keypress.e.prevent @keypress._.prevent variant="outlined" v-model="units.binary" color="deep-purple-accent-2"></v-text-field>
	        	</v-col>
	        </v-row>
	          <v-snackbar timeout="2000" color="indigo" rounded="xl"   v-model="snackbars.d">{{dSnack}}</v-snackbar>
                <v-snackbar timeout="2000" color="indigo" rounded="xl"  v-model="snackbars.h">{{hSnack}}</v-snackbar>
                <v-snackbar timeout="2000" color="indigo"  rounded="xl" v-model="snackbars.o">{{oSnack}}</v-snackbar>
                <v-snackbar timeout="2000" color="indigo" rounded="xl" v-model="snackbars.b">{{bSnack}}</v-snackbar>
	       
	
</div>
</Transition>
</template>
<script>
	export default{
		name:'Number Base Converter',
		data(){
			return{
				units:{
					decimal:'',
					hexadecimal:'',
					octal:'',
					binary:''
				},
				optionsc:false,
				text:111043595,
				views:{
         	                d:true,
         	               h:true,
         	               o:true,
         	               b:true,
                          },
           snackbars:{
         	d:false,
         	h:false,
         	o:false,
         	b:false,
         }
				

			}
		},
		computed:{
			result(){
				return this.t.test(this.text)
			},
		dSnack(){
         	if (this.views.d===true) {
         		return 'Decimal field added!'
         	}else {
         		return 'Decimal field removed!'
         	}
         },
         hSnack(){
         	if (this.views.h===true) {
         		return 'Hexadecimal field added!'
         	}else {
         		return 'Hexadecimal field removed!'
         	}
         },
         oSnack(){
         	if (this.views.kg===true) {
         		return 'Octal field added!'
         	}else {
         		return 'Octal field removed!'
         	}
         },
         bSnack(){
         	if (this.views.b===true) {
         		return 'Binary field added!'
         	}else {
         		return 'Binary field removed!'
         	}
         },

		},
		methods:{
	decimalchanger(){
                         this.snackbars.d=true
		      },
      hexadecimalchanger(){
				this.snackbars.h=true
			},
	octalchanger(){
				this.snackbars.o=true
			},
	binarychanger(){
				this.snackbars.b=true
			},
       fromdecimal(value){
       	setTimeout(()=>{
       			if (value==='') {
       		this.units.hexadecimal='',
       		this.units.octal='',
       		this.units.binary=''
       	}else {
       		let decimal= Number(value);
       		this.units.hexadecimal=decimal.toString(16).toUpperCase();
       		this.units.octal=decimal.toString(8);
       		this.units.binary=decimal.toString(2);
       	}
       	},100)
       
       },
       fromhexadecimal(value){
         	setTimeout(()=>{
         		const pattern=/^[0-9A-Fa-f]+$/
         		let test=pattern.test(value);
       			if (value===''||!test) {
       		this.units.decimal=''
       		//this.units.hexadecimal='',
       		this.units.octal='',
       		this.units.binary=''
       	}else {
       		let hexadecimal= parseInt(value,16);
             this.units.decimal=hexadecimal.toString(10);
       		//this.units.hexadecimal=decimal.toString(16).toUpperCase();
       		this.units.octal=hexadecimal.toString(8);
       		this.units.binary=hexadecimal.toString(2);
       	}
       	},100)
       
            
       },
       fromoctal(value){
         	setTimeout(()=>{
         		const pattern=/[8-9]/g
         		let result=pattern.test(value)
         	
       			if (value===''||result) {
       		this.units.decimal=''
       		this.units.hexadecimal='',
       		//this.units.octal='',
       		this.units.binary=''
       	}else {
       		let octal= parseInt(value,8);
             this.units.decimal=octal.toString(10);
       		this.units.hexadecimal=octal.toString(16).toUpperCase();
       		//this.units.octal=hexadecimal.toString(8);
       		this.units.binary=octal.toString(2);
       	}
       	},100)
       
            
       },
       frombinary(value){
         	setTimeout(()=>{
         		const pattern=/[0-1]+$/g
         		let result=pattern.test(value)
         	
       			if (value===''||!result) {
       		this.units.decimal=''
       		this.units.hexadecimal=''
       		this.units.octal=''
       		//this.units.binary=''
       	}else {
       		let binary= parseInt(value,2);
             this.units.decimal=binary.toString(10);
       		this.units.hexadecimal=binary.toString(16).toUpperCase();
       		this.units.octal=binary.toString(8);
       		//this.units.binary=octal.toString(2);
       	}
       	},100)

       
            
       },

		},
		mounted(){
			
                 
		}
	}
</script>