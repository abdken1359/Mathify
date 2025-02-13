<style scoped>
	 .v-enter-from,.v-leave-to{
    
    opacity:0;
     transform: translateY(0);

  }
  .v-enter-to,.v-leave-from{
    
    opacity: 1;
     transform: translateY(0);
  }
  .v-enter-active,.v-leave-active{
    transition: opacity 0.4s ease, transform 0s ease;
  }
 

</style>
<template>
	
	<div>
		<div class="d-flex align-center">
	                <h2 class="text-green mb-2">Quadratic Equation Solver</h2>
	                <v-btn icon="mdi-dots-vertical" color="green" @click="optionsb=!optionsb" variant="text" class="mb-2" style="margin-left:auto" aria-label="See more options"></v-btn>

	               </div>
	              <v-divider color="green-darken-1"></v-divider>


	              <v-dialog max-width="450" v-model="optionsb">

	         	<v-card>
	         		<v-list>
	         		<v-list-item >
	         		<v-slider class="my-8" label="Precision" color="green-lighten-1" step="1" thumb-label="always" v-model="precisionb" min="1" max="5"></v-slider>
	         	</v-list-item>
	         	</v-list>
	         	</v-card>
	         </v-dialog>

	               <v-row  justify="center" class="my-5">
			
			<v-col cols="12" md="auto"><v-text-field aria-label="Input the value corresponding to A" color="green" @keypress.e.prevent :disabled="isSolvingb" @input="showFinalAnswer=false" density="compact" v-model="variables.a" label="a" variant="outlined" type="number">
				<template #append-inner>
					x<sup>2</sup>
				</template>
				
			</v-text-field></v-col>
						<v-col cols="12" md="auto"><h4 class="mt-2 text-center">+</h4></v-col>
			<v-col cols="12" md="auto"><v-text-field aria-label="Input the value corresponding to B" color="green" @keypress.e.prevent :disabled="isSolvingb" @input="showFinalAnswer=false"  density="compact" v-model="variables.b" label="b" variant="outlined" type="number" >
				<template #append-inner>
					x
				</template>
			</v-text-field></v-col>
			<v-col cols="12" md="auto"><h4 class="mt-2 text-center">+</h4></v-col>
			<v-col cols="12" md="auto">
				<v-text-field @keypress.e.prevent aria-label="Input the value corresponding to C" :disabled="isSolvingb"   @input="showFinalAnswer=false" density="compact" label="c" v-model="variables.c" color="green" variant="outlined" type="number"></v-text-field>
			</v-col>

		  <v-col cols="12" md="auto"><h4 class="mt-2 text-center">= 0</h4></v-col>
		</v-row>
		<v-btn color="green" text="Solve" class="w-50 mx-auto d-block" @click="quadraticSolver" :loading="loadingb" rounded :disabled="emptyFields"></v-btn>


		<div class="mt-10 text-center border-thin pa-2" v-show="showFinalAnswer">
			<div v-if="errorb"><strong class="text-red">Sorry an error occurred. The determinant (b-4ac) may have returned a negative number.</strong></div>
			<div v-if="!errorb">
				<p class="mb-3">x = ( &minus;b &plusmn; &radic;(b&sup2; &minus; 4ac)) &frasl; 2a</p>

				

				<p class="mb-3">x= &minus;{{variables.b}} &plusmn; &radic;( ({{variables.b}})&sup2; &minus; 4 ( ({{variables.a}}) ({{variables.c}}) ) &frasl; 2({{variables.a}}))</p>

				<p class="mb-3">x= ({{Number(-variables.b)}} &plusmn; &radic;( {{Number(Math.pow(variables.b,2))}} &minus; {{Number((4)* (variables.a * variables.c))}}  )) &frasl; ({{Number(2*variables.a)}})</p>

				<p class="mb-3">x= ({{Number(-variables.b)}} &plusmn; &radic; {{Number((Math.pow(variables.b,2))-((4)* (variables.a * variables.c)))}}  ) &frasl; ({{Number(2*variables.a)}})</p>

                <p class="mb-3">
                 x = ({{Number(-variables.b)}} &plusmn; {{squareRoot}}) &frasl; ({{Number(2 * variables.a)}})
                 </p>






				
           
				
				<strong class="text-pink"> x = {{rootA}}</strong> || <strong class="text-pink"> x = {{rootB}}</strong> </div>

		</div>
	
	           </div>
	     </template>
<script>
	export default{
		name:'Quadratic Equation Solver',
		data(){
			return{
				optionsb:false,
				variables:{
				a:2,
			   b:6,
				c:4
			},

			showFinalAnswer:null,
			date:'',
			showFinalb:false,
			loadingb:false,
			precisionb:2,
			errorb:false,
			optionsb:false,
			isSolvingb:false,

			
			}
		},
		computed:{
			emptyFields(){
				return !(this.variables.a!==''&&this.variables.b!==''&&this.variables.c!=='');

			},
			squareRoot(){
				const result = Math.sqrt(Math.pow(this.variables.b, 2) - (4 * this.variables.a * this.variables.c))
				if (isNaN(result)) {
					return false

				}else {
					return Number(result)
				}
			},
			rootA(){
				const result =((-this.variables.b + Math.sqrt(Math.pow(this.variables.b, 2) - (4 * this.variables.a * this.variables.c)))/(2*this.variables.a)).toFixed(this.precisionb)
				if (isNaN(result)) {
					
					return false
				}else {
					return Number(result)
				}
			},
			rootB(){
				const result =((-this.variables.b - Math.sqrt(Math.pow(this.variables.b, 2) - (4 * this.variables.a * this.variables.c)))/(2*this.variables.a)).toFixed(this.precisionb)
				if (isNaN(result)) {
					
					return false
				}else {
					return Number(result)
				}
			},


		},
		methods:{
			quadraticSolver(){
				this.loadingb=true;
				this.isSolvingb=true;
				this.showFinalAnswer=false;
				setTimeout(()=>{
					try {
						
               if (this.squareRoot&&this.rootA&&this.rootB) {
               	console.log(true)
               	this.showFinalAnswer=true;
               	this.errorb=false
               }else {
               	
               	this.showFinalAnswer=true;
               	this.errorb=true;
               }

					} catch(e) {
						this.errorb=true;
						// statements
						console.log(e);
					} finally {
						this.loadingb=false;
						this.showFinalAnswer=true;
						this.isSolvingb=false
					}

				}, 1500)
			},

		},


	}
</script>