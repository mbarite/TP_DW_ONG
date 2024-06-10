let darkmode_toggle=document.getElementById('toggle');
let header=document.querySelector('header')
let footer=document.querySelector('footer')
toggle.addEventListener('change',(event)=>{
    let cheked=event.target.cheked;
    document.body.classList.toggle('dark');
    header.classList.toggle('dark');
    footer.classList.toggle('dark');
})