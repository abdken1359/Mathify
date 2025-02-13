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
				<v-sheet class="my-10 con-container mx-auto rounded overflow-auto">
				<v-toolbar density="compact" color="green-darken-1">
					<v-app-bar-nav-icon aria-label="Open navigation menu" @click="nav=!nav"></v-app-bar-nav-icon>
					<v-toolbar-title>Algebra Solvers</v-toolbar-title>
					<v-spacer></v-spacer>
				
				</v-toolbar>
				<v-layout min-height="450" class="overflow-auto">
       <v-navigation-drawer v-model="nav">
       <v-list>
       	<v-list-subheader>Converters</v-list-subheader>
       	<v-divider></v-divider>
       	<template v-for="(i,index) in alItems" :key="index">
       		<v-list-item @click="changer(i.value)" :value="i.value" color="green-darken-1" :active="i.isActive">
       			<template v-slot:append>
       				<v-icon>{{i.append}}</v-icon>
       			</template>
       			<v-list-item-title>{{i.text}}</v-list-item-title>
       		</v-list-item>
       	</template>
       </v-list>
</v-navigation-drawer>
<v-main class="overflow-auto">
	<v-container>
		<KeepAlive>
		<component :is="solver"></component>
	</KeepAlive>
	</v-container>
</v-main>
</v-layout>
			</v-sheet>
</v-container>
</v-main>
</Transition>
</template>
<script>
import { useHead } from '@unhead/vue'

	export default {
		name: 'Algebra',
		data() {
			return {
				nav: false,
				alItems: [{ text: 'Linear Equation', append: 'mdi-alpha-x', value: 1, isActive: true },{ text: 'Quadratic Equation', append: 'mdi-alpha-x', value: 2, isActive: false }],
				
				d: null,
				solver:'linear',
				url:'https://www.w3schools.com/cs/trycs.php?filename=demo_helloworld'
			};
		},
		methods: {
			setMeta() {
				useHead({
					title: 'Algebra Solver | vuetify',
					meta: [
						{ name: 'description', content: 'Solve linear and quadratic equations with Mathify User friendly algebra solver.' },
						{ property: 'og:title', content: 'Converters | Mathify' },
						{ property: 'og:description', content: 'Convert units with Mathify User friendly converter.' }
					]
				});
			},
			async asTemp(work, time) {
				try {
					await new Promise(resolve => {
						setTimeout(() => {
							work();
							resolve();
						}, time);
					});
				} catch (error) {
					console.log('NOOOOOOO', error);
				}
			},
			getDomain(url){
				const urlObj=new URL(url)
				return urlObj.hostname + urlObj.protocol
			},
			changer(value){
				switch (value) {
					case 1:
						this.alItems[0].isActive=true;
						this.alItems[1].isActive=false;
						this.solver='linear'
						break;
					case 2:
						this.alItems[0].isActive=false;
						this.alItems[1].isActive=true;
						this.solver='quadratic'
					default:
						// statements_def
						break;
				}
			}
		},
		mounted() {
			this.setMeta()
			const domain=this.getDomain(this.url);
			this.d=domain
			if (this.$vuetify.display.lgAndUp) {
				this.nav=true;
			}else {
				this.nav=false
			}
		}
	};
</script>
