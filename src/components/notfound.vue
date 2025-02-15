<template>
	<v-main height="90vh" class="align-center">
		<v-container>
			<v-empty-state image="404.png" headline="Oops" text="The page you searched for doesn't exist.">
				<template #actions>
					<v-btn to="/">Back to home</v-btn>
				</template>
			</v-empty-state>
		</v-container>
	</v-main>
</template>
<script>
	export default{
		name:'Page not found',
		mounted(){
		  document.title='Page not found'
		}
	}
</script>