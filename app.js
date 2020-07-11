var min = 0;
var sec = 0;
var msec = 0;
var minute = document.getElementById('min');
var second = document.getElementById('sec');
var millisecond = document.getElementById('msec');
var interval;
var a = document.querySelector('button')

function stopWatch()
{
    msec++
    millisecond.innerHTML = msec;
    if(msec === 100)
    {
        sec++
        second.innerHTML = sec;
        msec = 0
    }
    else if(sec === 60)
    {
        min++
        sec = 0
        minute.innerHTML = min;
    }
}

function start()
{
    interval = setInterval(stopWatch,10)
    a.disabled = true
}

function pause()
{
    clearInterval(interval)
    a.disabled = false
}

function reset()
{
    msec = 0
    sec = 0
    min = 0
    millisecond.innerHTML = msec
    second.innerHTML = msec
    minute.innerHTML = min
}


