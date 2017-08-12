function getRandomColor() {

    var letters = "0123456789ABCDEF";
    var color = "#";
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function setRandomColor(){
    let rName = document.getElementById("rName");
    let oName = document.getElementById("oName");

    rName.style.color = getRandomColor();
    oName.style.color = getRandomColor();
}
  
window.onload = function () {
    setRandomColor();
    particlesJS.load('particles-js', 'particles.json', function() {
        console.log('particles.js config loaded');
      });
}

function setCouplepic(){
    let gif = document.getElementById("cat-gif");
    gif.src = "rbirthday.jpg";
}

function getCatpic(){
    $.ajax({
        url: "http://api.giphy.com/v1/gifs/search?q=cats&api_key=0f55bfb206064713a1fa43987a6a04f4&limit=250",
    }).done(function(content) {
        console.log(content.data);
        catURL = content.data[Math.floor(Math.random()*250)].images.fixed_width.url;
        let gif = document.getElementById("cat-gif");
        gif.src = catURL;
    });
}


let app = new Vue({
    el: "#app", 
    data: {
        message:  "Rishika's birthday June 7th 2017",
        showCouple: true,
        showCats: false
    }, 
    methods:{
        toggle: function(num){
            if(num === 1){
                this.message = "Rishika's birthday June 7th 2017";
                this.showCouple = !this.showCouple;
                this.showCats = !this.showCats;
                setRandomColor();
                setCouplepic();
            }else if (num === 2){
                this.showCouple = !this.showCouple;
                this.showCats = !this.showCats;
                setRandomColor();
                data = getCatpic();
                this.message = "Rishika probably loves cats more than Oscar (Oscar is okay with that...)";
            }
        }
    }
});