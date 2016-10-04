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
    console.log(xhr);

    $('.start').on('click', function() {
    $("img").remove()
    var inputValue = $('.text-field').val();
    getData(inputValue, 6);
});
  