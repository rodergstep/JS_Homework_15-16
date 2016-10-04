var xhr = new XMLHttpRequest();

function getData(word, quantity) {
    xhr.open('GET', 'https://api.riffsy.com/v1/search?key=LIVDSRZULELA&tag='+word+'&limit='+quantity);
    xhr.onreadystatechange = function() {
        if (xhr.status === 200 && xhr.readyState === 4) {
            var resText = JSON.parse(xhr.responseText);

            for(var i = 0; i<quantity; i++) {
                var imgSrc = resText.results[i].url;
                $('.image').append('<img class="picture" src="'+imgSrc+'">');
            }
        } else if (xhr.status !== 200) {
          console.log('false');
        }
    }
    xhr.send();
    }

    $('.start').on('click', function() {
    $("img").remove()
    var inputValue = $('.text-field').val();
    getData(inputValue, 6);
});

                 /*CLASSES*/

function Human() {
    this.name = "Oleksa";
    this.age = 33;
    this.male = true;
    this.height = 200;
    this.weight = 88;
}

Worker.prototype = new Human();

function Worker() {
  this.company = "Granary";
  this.wage = 3333;
  this.work = function () {
    alert(this.name + " works");
  }
}

var ornithologist = new Worker();
ornithologist.age = 22;
ornithologist.weight = 77;
ornithologist.wage = 13333;

console.log("Ornithologist's height:", ornithologist.height);

Student.prototype = new Human();

function Student() {
  this.school = "LNU";
  this.grants = 888;
  this.watchMovie = function () {
    alert(this.name + " watch serials");
  }
}

var yasheck = new Student();
yasheck.grants = 999;
yasheck.age = 19;
yasheck.name = "Yasheck";

console.log("Yasheck's weight:", yasheck.weight);