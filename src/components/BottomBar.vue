<template>
	<v-bottom-navigation grow  color="green" active>
		<v-btn value="favorite">
			<v-icon>mdi-heart</v-icon>
		</v-btn>
		<v-btn value="carrot">
			<v-icon>mdi-carrot</v-icon>
		</v-btn>
	</v-bottom-navigation>
</template>


<script type="text/javascript">
	export default{
		name:'BottomBar',
		data(){
			return{
				myColor:'green-lighten-2'
			}
		}
	}
</script>