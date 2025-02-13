<template>
  <v-dialog max-width="800">
    <v-card>
      <v-card-text>
        <v-empty-state
  headline="Favorites not Found "
  title="Page not found"
  text="The page you were looking for does not exist"
  image="/Illustrations/not.svg"
></v-empty-state>
      </v-card-text>
      <v-card-actions>
        <v-btn @click="toggleFav">Toggle Fav</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: 'FavModal',
  
  
  methods: {
    // Emit the update event whenever localFav changes
    toggleFav() {
      
      this.$emit('close-fav');
    }
  }
}
</script>
