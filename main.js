
/* For information on Vue check out https://vuejs.org */
var app = new Vue({
  el: '#app',
  data: {
  	main_content:true,
  	sub_content: false,
    about:false,
    portfolio: false, 
    exper: false, 
    other: false, 
    contact: false,
  },
    methods: {

    toggle: function(value){
      //Hide main content and show sub content
    this.main_content = !this.main_content;
    this.sub_content = !this.sub_content;

    if(value == 1){
			this.about = !this.about;
		}else if(value == 2 ){
			this.portfolio = !this.portfolio;
		}else if(value == 3){
			this.exper = !this.exper;
		}else if(value == 4){
			this.other = !this.other;
		}else
			value = value; // This case should never be reached
    }
  }
})

