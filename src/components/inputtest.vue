<template>
  <div>
    <v-sheet elevation="5" rounded class="pa-5">
      <h2 class="mb-4 text-indigo">Get Updated</h2>
      <p class="mb-4">Get notified whenever new converters are added or when exciting new features are introduced to the website. You will receive only relevant updates about this site—nothing else, no spam.</p>
      <p class="mb-4 text-success" v-if="hasSubmitted">You have already subscribed. To unsubscribe, you can block the sender email address.</p>

      <!-- Formspree Form -->
      <v-form v-if="!hasSubmitted" @submit.prevent="validateProcess" method="POST" action="https://formspree.io/f/meoqraro" novalidate>
        <!-- Email input field -->
        <v-text-field v-model="usevaldata" :label="uselabel" @input="error = false" autocomplete="on" color="indigo" variant="underlined" type="email" name="email" required />

        <!-- Error message -->
        <p class="text-red mb-4" v-show="error">Please enter a valid email.</p>

        <!-- Submit button -->
        <v-btn block type="submit" text="Subscribe" color="indigo" :loading="isLoading"></v-btn>
      </v-form>
    </v-sheet>

    <!-- Confirmation Dialog -->
    <v-dialog v-model="confirmation" max-width="400">
      <v-card>
        <v-card-title class="text-green"><v-icon>mdi-check-bold</v-icon> You're All Set!</v-card-title>
        <v-btn icon="mdi-close" style="position:absolute; top:10px; right:10px" variant="text" color="red" aria-label="Close This Confirmation Dialog" @click.stop="confirmation = false"></v-btn>
        <v-card-text>Your subscription was successful. You’ll now receive updates about new converters and features—straight to your inbox. Thanks for staying connected!</v-card-text>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  name: 'InputTest',

  props: {
    uselabel: {
      type: String,
      required: true
    },
  },
  data() {
    return {
      hasSubmitted: false,
      isLoading: false,
      usevaldata: '',
      error: false,
      confirmation: false,
    };
  },
  methods: {
    validateProcess() {
      this.isLoading = true;

      if (!this.usevaldata || !this.isValidEmail(this.usevaldata)) {
        
        this.isLoading = true;
        setTimeout(() => {
        this.isLoading = false;
        this.error = true;
        
      }, 1500);
        
        return;
      }

      // After validation, we proceed to show the confirmation dialog
      

      // Simulate a small delay before resetting the loading state
      setTimeout(() => {
        this.isLoading = false;
        this.confirmation = true;
        
        localStorage.setItem('Has', 'true');
        console.log('localStorage set: Has = true');
      }, 1500);
    },

    isValidEmail(email) {
      const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      return emailRegex.test(email);
    }
  ,
  seal(){
    let fet=localStorage.getItem('Has');
    if(fet==='true'){
    this.hasSubmitted=true;
  }else {
    this.hasSubmitted=false;

  }
   console.log('seal() called, hasSubmitted:', this.hasSubmitted);
  },
  mounted(){
     console.log("Mounted hook executed");
    this.seal();
  }
}
};
</script>
