
/* For information on Vue check out https://vuejs.org */
var app = new Vue({
  el: '#app',
  data: {
  	main_content: true,
  	sub_content: false,
    about:false,
    exp: false, 
    skills: false, 
    proj: false, 
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
			this.exp = !this.exp;
		}else if(value == 3){
			this.skills = !this.skills;
		}else if(value == 4){
			this.proj = !this.proj;
		}else
			this.contact = !this.contact;
    }
  }
})

$("#first").hover(function () {
  $("#desc").slideToggle("fast");
});

$("#second").hover(function () {
  $("#desc2").slideToggle("fast");
});

$("#third").hover(function () {
  $("#desc3").slideToggle("fast");
});
$("#fourth").hover(function () {
  $("#desc4").slideToggle("fast");
});
$("#fifth").hover(function () {
  $("#desc5").slideToggle("fast");
});
