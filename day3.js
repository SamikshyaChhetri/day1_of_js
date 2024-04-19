const ipp=document.getElementById('ip');
const ch=document.getElementById('check');
ch.addEventListener('click',function(){
    const element=ipp.value;
    const display=document.getElementById('disp');
    display.innerHTML+=element+"<br>";
})

