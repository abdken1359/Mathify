<template>
	<v-dialog persistent max-width="auto">
     <v-card title="Good news!" :subtitle="myText" text="I can use v-model instead of $emit hell!!!">
         <v-card-actions>
             <v-btn color="green" @click="nop">I don't care</v-btn>
         </v-card-actions>
     </v-card>   
    </v-dialog>

</template>

<script type="text/javascript">
	export default{
       name:'Text',
       props:['desc','myText'],
       methods:{
        nop(){
            this.$emit('no-more');
        }
       }
      
	}
</script>