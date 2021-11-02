//alert('Hello, world');

function onclickFunc(){
    //alert('Hello, world');
    var text = document.getElementById('decorationTest');
    var fontSize = window.getComputedStyle(text, null).getPropertyValue('font-size');
    var currentSize = parseInt(fontSize);
    currentSize += 2;
   document.getElementById('decorationTest').style.fontSize = currentSize + "pt";

}

var timer = null;
function textSizeChanger() {
    if (timer === null) {
        timer = setInterval(onclickFunc, 500);
    } else {
        clearInterval(timer);
        timer = null;
    }
}
    
    function textchange(){
        var blingcheck = document.getElementById('bling');
    if(blingcheck.checked == true){
        document.getElementById('decorationTest').style.color='green'
        document.getElementById('decorationTest').style.textDecoration ='underline'
        document.body.style.backgroundImage = "url('background.jpg')";
       
    }else{
        document.getElementById('decorationTest').style.color='black'
        document.getElementById('decorationTest').style.textDecoration ='none'
        document.body.style.backgroundImage = "none";
    }
}

function replaceWords() {
    const text = document.getElementById('decorationTest').value;
    const words = text.split(" ");
    words.map((word, i, arr) => {
        if (word.length >= 5) {
            arr[i] = "Malcovitch";
        }
        return document.getElementById('decorationTest').value = arr.join(" ");
    })
}
