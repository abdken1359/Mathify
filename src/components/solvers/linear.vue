<style scoped>
	 .v-enter-from, .v-leave-to{
    
    opacity:0;

  }
  .v-enter-to, .v-leave-from{
    
    opacity: 1;
  }
  .v-enter-active, .v-leave-active{
    transition: opacity 0.4s ease;
  }

</style>
<template>
	
	<div>
		<div class="d-flex align-center">
	                <h2 class="text-green mb-2">Linear Equation Solver</h2>
	                <v-btn icon="mdi-dots-vertical" color="green" @click="options=!options" variant="text" class="mb-2" style="margin-left:auto" aria-label="See more options"></v-btn>

	               </div>
<v-divider color="green-lighten-1"></v-divider>
	         <v-dialog max-width="450" v-model="options">

	         	<v-card>
	         		<v-list>
	         		<v-list-item >
	         		<v-slider class="my-8" label="Precision" color="green-lighten-1" step="1" thumb-label="always" v-model="precision" min="1" max="5"></v-slider>
	         	</v-list-item>
	         	</v-list>
	         	</v-card>
	         </v-dialog>

	<v-row  justify="center" class="my-5">
			
			<v-col cols="12" md="auto"><v-text-field aria-label="Input the value corresponding to the coefficient of X" color="green-darken-1" @keypress.e.prevent :disabled="isSolving" @input="showFinal=false" density="compact" v-model="variables.coefficient" label="a" variant="outlined" type="number" append-inner-icon="mdi-alpha-x"></v-text-field></v-col>
						<v-col cols="12" md="auto"><p class="mt-2 text-center">+</p></v-col>
			<v-col cols="12" md="auto"><v-text-field aria-label="Input the value corresponding to an integer" color="green-darken-1" @keypress.e.prevent :disabled="isSolving" @input="showFinal=false" density="compact" v-model="variables.integer" label="b" variant="outlined" type="number" ></v-text-field></v-col>
			<v-col cols="12" md="auto"><p class="mt-2 text-center">=</p></v-col>
			<v-col cols="12" md="auto">
				<v-text-field @keypress.e.prevent aria-label="Input the value corresponding to the answer" color="green-darken-1" :disabled="isSolving"  @input="showFinal=false" density="compact" label="c" v-model="variables.answer" variant="outlined" type="number"></v-text-field>
			</v-col>
		</v-row>
		<v-btn color="green-darken-1" text="Solve" class="w-50 mx-auto d-block" :disabled="disabled" :loading="loading" @click="linearSolve" rounded></v-btn>
        
       
		<div class="mt-10 text-center border-thin pa-2" v-if="showFinal">
			<div v-if="error"><strong class="text-red">Sorry an error occurred</strong></div>
			<div v-if="!error">
				<p class="mb-2">{{variables.coefficient}}x = {{variables.answer}} - ({{variables.integer}})</p>
				<p class="mb-2">{{variables.coefficient}}x = {{variables.answer - variables.integer}}</p>
				<p class="mb-2">x = ({{variables.answer - variables.integer}}) / ({{variables.coefficient}})</p>
           
				
				<strong class="text-pink"> x = {{finalAnswer}}</strong>
			</div>

		</div>
	
	</div>

</template>
<script>
	export default{
		name:'Linear Equation Solver',
		data(){
			return{
			variables:{
				coefficient:2,
			    integer:3,
				answer:4
			},

			finalAnswer:null,
			date:'',
			showFinal:false,
			loading:false,
			precision:2,
			error:false,
			isSolving:false,
			options:false
		}
	},
	computed:{
      disabled(){
      	return !(this.variables.coefficient!==''&&this.variables.integer!==''&&this.variables.answer!=='')
      }
	},
	methods:{
		linearSolve(){

			this.loading=true;
			this.isSolving=true
			this.showFinal=false
            
			setTimeout(()=>{
				try{
				const a=Number(this.variables.coefficient);
			const b=Number(this.variables.integer);
			const c= Number(this.variables.answer);

			let otherSide= Number((c-b).toFixed(this.precision));
			let finalSide= Number((otherSide/a).toFixed(this.precision))
			this.showFinal=true
			this.finalAnswer=finalSide;
			this.error=false
			this.loading=false
		} catch(error){
			this.finalAnswer=true
			this.error=true
		}finally{
			this.loading=false
			this.isSolving=false
		}



			},1500)
			




		}
	}
}
</script>