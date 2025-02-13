<template>
	<v-text-field class="mt-4 mb-4" label="Input task" v-model="taskinput" @keyup.enter="addTask"></v-text-field>
	<template v-for="a in tasks" :key="a">
		<v-card :text="a" class="mb-4" color="green" variant="tonal"></v-card>
	</template>
</template>
<script type="text/javascript">
	export default{
		name:'TaskMaker',
		data(){
			return{
				tasks:[],
				taskinput:'',
			}
		},
		methods:{
			addTask(){

				if(this.taskinput!==''){
				this.tasks.push(this.taskinput);
				

				this.taskinput='';
			}
			}
		}
	}
</script>