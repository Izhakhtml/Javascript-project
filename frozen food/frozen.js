for (let i = 0; i < products.length; i++) {
  if (products[i].category=="Frozen food") {

/////////////////////////////////   זה כדי להראות את הדרך של הלולאה המקוננת
      // for (let j = 0; j < products[i].image.length; j++) {
      // if (products[i].category=="Frozen food") {
      // container.innerHTML += `<img src =${products[i].image[j]}>`
      // }}
////////////////////////////////  

       container.innerHTML += 
       `<section>
         <article class = "milks">
         <img src =${products[i].image[0]}>
         <h1 class ="changeFont">${products[i].name}</h1><br>
         <b>description:${products[i].description}</b><br>
         <b class = "price">${products[i].price}$</b><br>
         <button class = "btn">aad to cart</button>
       </article>
       </section>`
  }  
  
}
let btn = document.getElementsByClassName("btn")
// for (let i = 0; i < btn.length; i++) {
//    let button = btn[i]
//    button.onclick = ()=>{
//       cartProducts.push(products[i])
//       console.log(cartProducts);
//    }
// }
let count = 0;
function countTheNumber() {
  for (let i = 0; i < btn.length; i++) {
    btn[i].onclick=()=>{
    count++;
    counter_pro.innerHTML=`${count}`;
    counter_pro.style="position: relative;border:1px solid honeydew;bottom: 14px;border-radius:40px;padding:2px;background: rgb(184, 180, 180);";
    }
  }
}
countTheNumber()