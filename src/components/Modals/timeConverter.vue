<template>
	<v-dialog fullscreen  transition="dialog-bottom-transition">
		<v-toolbar :color="curcolor" >
			<v-toolbar-title><v-icon>mdi-clock</v-icon> Time Converter</v-toolbar-title>
			<v-spacer></v-spacer>
			<v-btn aria-label="Close Time Converter Modal" @click="closeModal" icon="mdi-close"></v-btn>
		</v-toolbar>
		
		<v-card class="pa-5">
  <v-sheet elevation="0" style="margin-top:25px; margin-bottom:50px">
  	<v-row>
  		<v-col cols="12" md="6">
  			<v-text-field :style="{visibility:yeardis.hidden?'hidden':'visible'}" variant="outlined" ref="year" v-model="year" :label="yeardis.hidden?'':'Year'" color="amber" @input="toYear(year)" type="number" min="1"></v-text-field>
  			<p class="text-red" v-show="errors[0]">Please enter a value greater than 0</p>
  			<!--<v-btn :color="yeardis.color" variant="flat" :prepend-icon="yeardis.icon" @click="yearfate=!yearfate">{{yeardis.text}}</v-btn>-->

  		</v-col>
  		<v-col cols="12" md="6">
  			<v-text-field variant="outlined" v-model="month" label="Months" color="amber" @input="toMonth(month)" type="number" min="1"></v-text-field>
  			<p class="text-red" v-show="errors[1]">Please enter a value greater than 0</p>
  			<!--<v-btn :color="monthdis.color" variant="flat" :prepend-icon="monthdis.icon" @click="monthfate=!monthfate">{{monthdis.text}}</v-btn>-->
  			
  		</v-col>
  		<v-col cols="12" md="6">
  			<v-text-field variant="outlined" v-model="day" label="Days" color="amber" @input="toDay(day)" type="number" min="1"></v-text-field>
  			<p class="text-red" v-show="errors[2]">Please enter a value greater than 0</p>
  		</v-col>
  		<v-col cols="12" md="6">
  			<v-text-field variant="outlined" v-model="hour" label="Hours"  color="amber" @input="toHour(hour)" type="number" min="1"></v-text-field>
  			<p class="text-red" v-show="errors[3]">Please enter a value greater than 0</p>
  			
  		</v-col>
  		<v-col cols="12" md="6">
  			<v-text-field variant="outlined" v-model="minute" label="Minutes" color="amber" @input="toMinute(minute)" type="number" min="1"></v-text-field>
  			<p class="text-red" v-show="errors[4]">Please enter a value greater than 0</p>
  			
  		</v-col>
  		<v-col cols="12" md="6">
  			<v-text-field variant="outlined" v-model="second" label="Seconds" color="amber" @input="toSecond(second)" type="number" min="1"></v-text-field>
  			<p class="text-red"  v-show="errors[5]">Please enter a value greater than 0</p>
  			
  		</v-col>
  		<!--<v-col cols="12">
  			<div class="d-flex flex-wrap ga-4 justify-center">
  				<section style="width:max(25%,200px)">
  			<h2 class="text-red">Red</h2>
  			<v-slider v-model="red" max="100" step="1" color="red"></v-slider>
  		</section>
  		<section style="width:max(25%,200px)">
  			<h2 class="text-green">Green</h2>
  			<v-slider v-model="green" min="0" step="1" max="100" color="green"></v-slider>
  		</section>
  		<section style="width:max(25%,200px)">
  			<h2 class="text-blue">Blue</h2>

  			<v-slider v-model="blue" min="0" step="1" max="100" color="blue"></v-slider>
  		</section>
  		</div>
      <h1 class="mt-5 mb-5">{{red}} {{green}} {{blue}} jdhjdh</h1>
  			<div class="w-50" :style="{height:'105px', background:'rgb('+red+','+blue+','+green+')'}"></div>

  		</v-col>-->
  	</v-row>
  </v-sheet>
</v-card>
</v-dialog>
</template>

<script>
	export default{
		name:'Time Converter',
		props:{
			curcolor:{
				type:String,
				required:false
			}
		},
		data(){
           
           return{
           	year:'' ,
           month:'' ,
           day:'' ,
           hour:'' ,
           minute:'' ,
           second:'',
           test:'',
           red:0,
           blue:0,
           green:0,
         yeardis:{
         	hidden:false,
         	text:'Disable',
         	icon:'mdi-circle-off-outline',
         	color:'red'
         
         },
         yearfate:false,
           testval:['Abdiel','Parfait','Nickel'],
           errors:[false,false,false,false,false,false]
       }

		},
		watch:{
			yearfate(){
				if (this.yearfate) {
					this.yeardis.value=true;
					this.yeardis.text='Show';
					this.yeardis.icon='mdi-eye';
					this.yeardis.color='blue';
					this.year='';
					this.yeardis.hidden=true;
					
				}else {
					console.warn('Can\'t continue!!');
					this.yeardis.hidden=false;
					this.yeardis.text='Hide';
					this.yeardis.icon='mdi-circle-off-outline';
					this.yeardis.color='red';
					
					
				}
			},
		},
			
		

		methods:{
			closeModal(){
				this.$emit('time-close');
			},
			toYear(value){
				let yearvalue= parseFloat(value);
				if (isNaN(yearvalue)) {
					this.errors[0]=false
					this.month='';
					this.day='';
					this.hour='';
					this.minute='';
					this.second='';


				}else if (yearvalue<1) {
					this.errors[0]=true;
					this.month='';
					this.day='';
					this.hour='';
					this.minute='';
					this.second='';

					
				}else {
					this.errors[0]=false;
					this.month= yearvalue * 12;
					this.day= yearvalue * 365;
					this.hour= yearvalue * 8760;
					this.minute=yearvalue * 525600;
					this.second= yearvalue * 31536000;
				}
			},
			toMonth(value){
				let monthvalue= parseFloat(value);
				if (isNaN(monthvalue)) {
					this.errors[1]=false
					this.year='';
					this.day='';
					this.hour='';
					this.minute='';
					this.second='';


				}else if (monthvalue<1) {
					this.errors[1]=true;
					this.year='';
					this.day='';
					this.hour='';
					this.minute='';
					this.second='';

					
				}else {
					this.errors[1]=false;
					this.year= monthvalue / 12;
					this.day= monthvalue * 30.5;
					this.hour= monthvalue  * 732;
					this.minute=monthvalue * 43920;
					this.second= monthvalue * 2679120;
				}
			},
			toDay(value){
				let dayvalue= parseFloat(value);
				if (isNaN(dayvalue)) {
					this.errors[2]=false
					this.year='';
					this.month='';
					this.hour='';
					this.minute='';
					this.second='';


				}else if (dayvalue<1) {
					this.errors[2]=true;
					this.year='';
					this.month='';
					this.hour='';
					this.minute='';
					this.second='';

					
				}else {
					this.errors[2]=false;
					this.year= dayvalue / 365;
					this.month= dayvalue / 30.5;
					this.hour= dayvalue  * 24;
					this.minute=dayvalue * 1440;
					this.second= dayvalue * 86400;
				}
			},
			toHour(value){
				let hourvalue= parseFloat(value);
				if (isNaN(hourvalue)) {
					this.errors[3]=false
					this.year='';
					this.month='';
					this.day='';
					this.minute='';
					this.second='';


				}else if (hourvalue<1) {
					this.errors[3]=true;
					this.year='';
					this.month='';
					this.day='';
					this.minute='';
					this.second='';

					
				}else {
					this.errors[3]=false;
					this.year= hourvalue / 8760;
					this.month= hourvalue / 732;
					this.day= hourvalue  / 24;
					this.minute=hourvalue * 60;
					this.second= hourvalue * 3600;
				}
			},
			toMinute(value){
				let minutevalue= parseFloat(value);
				if (isNaN(minutevalue)) {
					this.errors[4]=false
					this.year='';
					this.month='';
					this.day='';
					this.hour='';
					this.second='';


				}else if (minutevalue<1) {
					this.errors[4]=true;
					this.year='';
					this.month='';
					this.day='';
					this.hour='';
					this.second='';

					
				}else {
					this.errors[4]=false;
					this.year= minutevalue / 525600;
					this.month= minutevalue / 43920;
					this.day= minutevalue  / 1440;
					this.hour=minutevalue / 60;
					this.second= minutevalue * 60;
				}
			},
			toSecond(value){
				let secondvalue= parseFloat(value);
				if (isNaN(secondvalue)) {
					this.errors[5]=false
					this.year='';
					this.month='';
					this.day='';
					this.hour='';
					this.minute='';


				}else if (secondvalue<1) {
					this.errors[5]=true;
					this.year='';
					this.month='';
					this.day='';
					this.hour='';
					this.minute='';

					
				}else {
					this.errors[5]=false;
					this.year= secondvalue / 31536000;
					this.month= secondvalue / 2679120;
					this.day= secondvalue  / 86400;
					this.hour=secondvalue / 3600;
					this.minute= secondvalue / 60;
				}
			},


		}
	}
</script>