for (let i = 0; i < products.length; i++) {
  if (products[i].category=="milks products") {

/////////////////////////////////   זה כדי להראות את הדרך של הלולאה המקוננת
      // for (let j = 0; j < products[i].image.length; j++) {
      // if (products[i].category=="milks products") {
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
for (let i = 0; i < btn.length; i++) {
   let button = btn[i]
   button.onclick = ()=>{
      cartProducts.push(products[i])
      console.log(cartProducts);
   }
}













