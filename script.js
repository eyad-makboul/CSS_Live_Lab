let copy$=document.getElementById(1);
let copy$1=document.getElementById(2);
let copy$2=document.getElementById(3);
let text$=document.getElementById("i");
let text$1=document.getElementById("ii");
let text$2=document.getElementById("iii")
let teaxtarea$=document.getElementsByTagName("textarea")[0];
let cssarea$=document.getElementById("cssarea");
let hover$=document.getElementById("hover");

copy$.addEventListener("click",()=>{
    copy$.value="Copyd";
    navigator.clipboard.writeText(text$.innerText);
    
});
copy$1.addEventListener("click",()=>{
    copy$1.value="Copyd";
    navigator.clipboard.writeText(text$1.innerText);
    
});
copy$2.addEventListener("click",()=>{
    copy$2.value="Copyd";
    navigator.clipboard.writeText(text$2.innerText);
    
});
teaxtarea$.addEventListener("input",()=>{
   if(teaxtarea$.value==text$.innerText){
    cssarea$.style.cssText=`
    display: flex;
    flex-direction: column;
    justify-content:center;
    align-items:center   `
}else{ cssarea$.style.cssText=""}
});
teaxtarea$.addEventListener("input",()=>{
   if(teaxtarea$.value==text$1.innerText){
    hover$.style.cssText=`
    background-color: rgb(32, 32, 80);
    color:white;
    border: none;
    transition:0.3s;
    `
}else{ hover$.style.cssText=""}
});
teaxtarea$.addEventListener("input",()=>{
   if(teaxtarea$.value===text$2.innerText){
    hover$.style.cssText=`
       background:white;
      border-radius: 8px;
       box-shadow: 0 5px 15px rgba(0,0,0,.2);
    `
}
});
copy$.addEventListener("click",()=>{
    if(copy$.value=="Copyd")
   setTimeout(()=>{
    copy$.value="Copy";
 },1000)  ;
})
copy$1.addEventListener("click",()=>{
    if(copy$1.value=="Copyd")
   setTimeout(()=>{
    copy$1.value="Copy";
 },1000)  ;
})
copy$2.addEventListener("click",()=>{
    if(copy$2.value=="Copyd")
   setTimeout(()=>{
    copy$2.value="Copy";
 },1000)  ;
})