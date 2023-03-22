var secText = document.querySelector('.sec span');
var minText = document.querySelector('.min span');
sec =00;
min=00;

function start() {
    vxid = setInterval(timer, 1000);
    function timer() {
        sec++;
        if(sec==60){
            sec=00;
            min++;
        }
        secText.innerText = sec;
        minText.innerText=min;
        
    }
}

function stop() {
    clearInterval(vxid);
    secText.innerText = sec;
    minText.innerText=min;
}

function reset() {
    clearInterval(vxid);
    sec = 0;
    min =0;
    secText.innerText = sec;
    minText.innerText=min;
}
