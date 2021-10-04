let trTitle = document.getElementsByClassName("tr")
let imageDisplay = document.getElementsByClassName("img")
let tdPrice = document.getElementsByClassName("td")
let sum = 0 
var cartProducts =
[
 {    
 name:"Charger",
 description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
 price:50.90,
 category:"teachnology products",
 id: 51,
 image:[
       "https://cdn.pixabay.com/photo/2018/07/01/13/28/two-pin-3509490__480.jpg",
       "https://cdn.pixabay.com/photo/2013/07/13/12/21/charge-159707__480.png",
]},
 {    
 name:"headphones",
 description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
 price:68.90,
 category:"teachnology products",
 id: 52,
 image:[
       "https://cdn.pixabay.com/photo/2016/10/06/22/29/headphones-1720164__480.jpg",
       "https://cdn.pixabay.com/photo/2016/11/29/09/08/headphones-1868612__340.jpg",
]},
 {    
 name:"JBL box",
 description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
 price:399.90,
 category:"teachnology products",
 id: 53,
 image:[
       "https://cdn.pixabay.com/photo/2020/12/03/10/33/speaker-5800162__340.jpg",
       "https://cdn.pixabay.com/photo/2020/04/22/12/11/brand-5077789__340.jpg",
]},
]
///////////////////////////////// display products
for (let i = 0; i < cartProducts.length; i++) {
     trTitle[i].innerText = cartProducts[i].name
     imageDisplay[i].src = cartProducts[i].image[0] 
     tdPrice[i].innerHTML = cartProducts[i].price
     remove.innerText = "remove"
     remove2.innerText = "remove"
     remove3.innerText = "remove"

////////////////////////////////////////// tried by javascript
// //      container.innerHTML += 
// //      `<article class = "article">
// //        <table>
// //                <tr>
// //                    <th>produndts</th>
// //                    <th>price</th>
// //                    <th>remove products</th>
// //                </tr> 
// //                <tr>
// //                    <td>${cartProducts[i].name}</td><td><img src = ${cartProducts[i].image[0]}></td><td>${cartProducts[i].price}</td><td class = "td"><button class="remove">remove</button></td>
// //                </tr>
// //        </table>
// //      </article>` 
}
//////////////////////////////// display total
function displayTotal() {
      for (let i = 0; i < cartProducts.length; i++) {
           sum += cartProducts[i].price 
           p1.innerText = `${sum} $` 
      } return sum 
}
displayTotal()

/////////////////////////////// remove products 
function removeItems(name) {
      for (let i = 0; i < cartProducts.length; i++) {
         if (cartProducts[i].name == name) { 
               let changeTotal = Math.floor(sum -= cartProducts[i].price)
               p1.innerHTML = changeTotal
               cartProducts.splice(i,1)
               return 
         }           
      }
}

remove.onclick=()=>{
      removeItems("Charger")
      article.innerHTML=""
      console.log(cartProducts);
}
remove2.onclick=()=>{
      removeItems("headphones")
      article2.innerHTML=""
     console.log(cartProducts);
}
remove3.onclick=()=>{
      removeItems("JBL box")
      article3.innerHTML=""
      console.log(cartProducts);  
}



















