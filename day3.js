const ipp=document.getElementById('ip');
const ch=document.getElementById('check');
ch.addEventListener('click',()=>{
    const element=ipp.value;
    if(element!==''){
    const display=document.getElementById('disp');
    display.innerHTML+=`<div class="item">${element}</div>`;
    ipp.value='';
    }
    else{
        alert("Type something.Empty input cannot be listed");
    }
})


