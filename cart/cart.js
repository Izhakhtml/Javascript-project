
let articleContain = document.getElementsByClassName("article")
let removeButton = document.getElementsByClassName("remove")
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
     tdPrice[i].innerHTML =cartProducts[i].price
     removeButton[i].innerText = "remove"

//////////////////////////////////////// tried by javascript
//      container.innerHTML += 
//      `<article class = "article">
//         <table>
//         <th>
//              <tr><b>${cartProducts[i].name}</b></tr>
//         </th>
//         <th>
//              <td><img src = ${cartProducts[i].image[0]}></td>
//         </th>
//         <th>
//              <td class = "td">${cartProducts[i].price} $</td>
//         </th>
//         <th>
//              <td class = "td"><button class="remove">remove</button></td>
//         </th>
//         </table>
//       </article>`   
}
////////////////////////////////// display total
for (let i = 0; i < cartProducts.length; i++) {
    sum += cartProducts[i].price
    p1.innerText = `${sum} $`
} 
///////////////////////////////// remove products 
 for (let i = 0; i < removeButton.length; i++) {
      removeProducts = removeButton[i]
      removeProducts.onclick = ()=>{
      let changePrice = Math.floor(sum -= cartProducts[i].price)  //reduce price     
      articleContain[i].style = "display:none;"  //remove article
      // cartProducts.splice(i,1)   //remove index from array
      // console.log(cartProducts);
      p1.innerText = `${changePrice} $`
      if (changePrice == 0) {
      p1.innerText = `${changePrice}` 
      }
      }     
}





