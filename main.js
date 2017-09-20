
Vue.component('about-content', {
  template: '<div>Hey my name is Oscar</div>'
});


Vue.component('experience-content', {
  template: '<div> This is my experience</div>'
});

Vue.component('writing-content', {
  template: '<div>Here is my current writing </div>'
});

Vue.component('portfolio-content',{
  template: '<div> This is my current portfolio</div>'
});

/* For information on Vue check out https://vuejs.org */
var app = new Vue({
  el: '#app',
  data: {
  	main: true,
    about: false,
    experience: false,
    writing: false,
    portfolio: false, 
  },
    methods: {
      toggle: function(number){
        if(number == 0){
          this.main = true;
          this.about = false; 
          this.experience = false;
          this.writing = false;
          this.portfolio = false;
        }else if(number == 1){
          this.main = false;
          this.about = true; 
          this.experience = false;
          this.writing = false;
          this.portfolio = false;
        }else if(number == 2){
          this.main = false;
          this.about = false; 
          this.experience = true;
          this.writing = false;
          this.portfolio = false;
        }else if(number == 3){
          this.main = false;
          this.about = false; 
          this.experience = false;
          this.writing = true;
          this.portfolio = false;
        }else{
          this.main = false;
          this.about = false; 
          this.experience = false;
          this.writing = false;
          this.portfolio = true;
        }
      } 
    }
});

