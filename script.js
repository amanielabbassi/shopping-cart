// console.log(document)
// console.log(document.getElementById("image"))
// console.log(document.querySelector(".title"))
// console.log(document.querySelectorAll(".title"))



//boutton minus
var btnAddTag= document.getElementsByClassName("minus");
for (let i = 0; i < btnAddTag.length; i++) {
   btnAddTag[i].addEventListener("click",dincrement)
    
}

function dincrement(event) {
    var btnminus=event.target;
    
    var divelmt= btnminus.parentElement;
    
    var quantityTag=divelmt.querySelector("p");
    //  console.log(quantityTag);
     var quantity=quantityTag.innerHTML;
   //   console.log(quantity)
     var quantity=event.target.parentElement.querySelector("p").innerHTML; 
     if (quantity > 0)
     { quantity-- ;}
   //   console.log(quantity)
     event.target.parentElement.querySelector("p").innerHTML=quantity;
     quantityTag.innerHTML=quantity;
   var UnitpriceTag=divelmt.parentElement.parentElement.querySelector(".unitPrice");
   // console.log(UnitpriceTag)
   var priceTag=divelmt.parentElement.parentElement.querySelector(".Price");
   // console.log(priceTag)
   var unitprice=UnitpriceTag.innerHTML;
   // console.log(unitprice)
   var price=quantity*unitprice;
   console.log(price)
   priceTag.innerHTML=price;


}
// boutton plus
var btnAddTag= document.getElementsByClassName("plus");
for (let i = 0; i < btnAddTag.length; i++) {
   btnAddTag[i].addEventListener("click",increment)
    
}


function increment(event) {
    var btnplus=event.target;
    var btnminus= event.target;
    // console.log(btnplus);
    var divelmt=btnplus.parentElement;
    var divelmt=btnminus.parentElement;
    // console.log(divelmt);
    var quantityTag=divelmt.querySelector("p");
    //  console.log(quantityTag);
     var quantity=quantityTag.innerHTML;
   //   console.log(quantity)
    var quantity=event.target.parentElement.querySelector("p").innerHTML; 
     quantity++ ;
   //   console.log(quantity)
     event.target.parentElement.querySelector("p").innerHTML=quantity;
     quantityTag.innerHTML=quantity;
   var UnitpriceTag=divelmt.parentElement.parentElement.querySelector(".unitPrice");
   // console.log(UnitpriceTag)
   var priceTag=divelmt.parentElement.parentElement.querySelector(".Price");
   // console.log(priceTag)
   var unitprice=UnitpriceTag.innerHTML;
   // console.log(unitprice)
   var price=quantity*unitprice;
   console.log(price)
   priceTag.innerHTML=price;


  
      


}
//boutton total
var checkTag =document.getElementsByClassName("check");
for (let i = 0; i < checkTag.length; i++) {
   checkTag[i].addEventListener("click",Total);
   
}
function Total(e) {
   var checktag=e.target;
   var trtag=checktag.parentElement.parentElement;
   var pricetag=trtag.querySelector(".Price");
   var price=Number(pricetag.innerHTML);
   var totaltag=document.getElementById("total");
   var total=Number(totaltag.innerHTML);
   var btnplus=checktag.parentElement.parentElement.querySelector(".plus");

   if (checktag.checked==true) {
      total+=price;
    btnplus.setAttribute("disabled",true);
    
   } else {
      total-=price;
      btnplus.removeAttribute("disabled");
      
   }
   totaltag.innerHTML=total;
   
}


//var likes=document.getElementsByClassName("like")
//console.log(likes)
//for (const like of likes) {
    //like.addEventListener('click',function () {
        //like.classList.toggle('active')
        
    //})
// }  
let remove = Array.from(document.querySelectorAll(".remove"))
remove.forEach((x) => {
  x.addEventListener("click",(Event) =>{
  let del = Event.target
  .parentElement
  .parentElement
  .parentElement
  .parentElement
  

  
  del.parentElement.removeChild(del)

  

})
})
let likes = Array.from(document.querySelectorAll(".likes"))
likes.forEach((x) => {
  x.addEventListener("click",(Event) =>{
    if (Event.target.style.color !="red"){
      Event.target.style.color !="red"
    }else { Event.target.style.color ="#AAB8C2"}})
})


