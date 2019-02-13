var timmer = document.getElementsByClassName('rewind')[0];
var wordcontent = document.getElementsByClassName('paragraph')[0].innerHTML;
var wrapper = document.getElementsByClassName('paragraph')[0];
var str2 =  wordcontent.split(" ");
var count = 0 ;
var words = 0 ;
var correctLetters = 0 ;
var wrongWord = 0 ;
var clock ;
var text = document.getElementsByClassName('text')[0]; 
var i=59;
var result = document.getElementsByTagName('span');
var resultBox = document.getElementsByClassName('results')[0];
var resultOption = Array.from(result) ;

text.addEventListener("keyup",function(e){
    if(event.keyCode!=32)
    {
        count++;
    }
    if(count===1)
    {
        clock = setInterval(show,1000);
    }
    if(event.keyCode===32)
    {
        var str1 = text.value ;
        if(str1.localeCompare(str2[words])>0){
            correctLetters+=str1.length;
        }
        document.getElementsByClassName('paragraph')[0].innerHTML =
        document.getElementsByClassName('paragraph')[0].innerHTML.replace(str2[words++],' ');
        text.value = "";
    }
})


function show(){
    //Timer function which is used to show the clock 
    document.getElementsByClassName('clocktime')[0].innerHTML = Math.floor(i/60)+" : "+(i%60);
    i--;
    timmer.addEventListener("click",function(e){
        i=60;
        document.getElementsByClassName('clocktime')[0].innerHTML = Math.floor(i/60)+" : "+(i%60);
        clearInterval(clock);
        count = 0; 
        correctWords = 0 ;
        words = 0 ;
        document.getElementsByClassName('paragraph')[0].innerHTML = wordcontent;
        str2 =  wordcontent.split(" ");
        wrapper.style.display = "block";
        // resultBox.style.display="none";
        resultOption[0].innerHTML = "Keystrokes :";
        resultOption[1].innerHTML = "Accuracy :";
        resultOption[2].innerHTML = "Correct words :";
        resultOption[3].innerHTML =  "Wrong words :";
    }) 
    if(i<0){
        i=60;
        document.getElementsByClassName('clocktime')[0].innerHTML = Math.floor(i/60)+" : "+(i%60);
        console.log(count);
        clearInterval(clock);
        console.log('your spped is ' + correctLetters/5); 
        document.getElementsByClassName('paragraph')[0].innerHTML = wordcontent ; 
        wrapper.style.display = "none";


        // Result time 
        resultBox.style.display="block";
        resultOption[0].innerHTML += " " + count ;
        resultOption[1].innerHTML += " " + (((correctLetters)/count).toFixed(2))*100;
        resultOption[2].innerHTML += " " + Math.floor(correctLetters/5) ;
        resultOption[3].innerHTML += " " + Math.floor((count-correctLetters)/5);
        count = 0; 
        correctWords = 0 ;
        words = 0 ;
        correctLetters = 0 ;
    }
}

