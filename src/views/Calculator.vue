<style scoped>
	 .v-enter-from,.v-leave-to{
    transform: translateY(-50px);
    opacity:0;

  }
  .v-enter-to,.v-leave-from{
    transform: translateX(0);
    opacity: 1;
  }
  .v-enter-active,.v-leave-active{
    transition: all 0.7s ease;
  }
  .con-container{
  	box-shadow: 0 0px 0 20px #43A047
,  0 0 40px 15px #43A047;
  }
  @media  (max-width:600px) {
  	.con-container{
  		/*border: 2px solid #00E676;*/
  		box-shadow: 0 0 0px 8px #43A047
;

  	}
  	
  }
</style>
<template>
	<Transition>
		<v-main>
			<v-container>
				<h2>JFHDJFHDJ</h2>
			</v-container>
		</v-main>
	</Transition>
</template>
<script>
import {useHead} from '@unhead/vue'
	export default{
		name:'Calculator'

	}
</script>