var cartProducts =
[
      {    
      name:"CHARGER",
      description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
      price:50.90,
      category:"teachnology products",
      id: 51,
      image:[
            "https://cdn.pixabay.com/photo/2018/07/01/13/28/two-pin-3509490__480.jpg",
            "https://cdn.pixabay.com/photo/2013/07/13/12/21/charge-159707__480.png",
     ]},
      {    
      name:"HEADPHONES",
      description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
      price:68.90,
      category:"teachnology products",
      id: 52,
      image:[
            "https://cdn.pixabay.com/photo/2016/10/06/22/29/headphones-1720164__480.jpg",
            "https://cdn.pixabay.com/photo/2016/11/29/09/08/headphones-1868612__340.jpg",
     ]},
      {    
      name:"JBL",
      description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
      price:399.90,
      category:"teachnology products",
      id: 53,
      image:[
            "https://cdn.pixabay.com/photo/2020/12/03/10/33/speaker-5800162__340.jpg",
            "https://cdn.pixabay.com/photo/2020/04/22/12/11/brand-5077789__340.jpg",
     ]},
     ]
     
     
     for (let i = 0; i < cartProducts.length; i++) {
     table.innerHTML +=
     `
     <tr class="allDetails">
     <td class="nameProduct">${cartProducts[i].name}</td>
     <td><img src="${cartProducts[i].image[0]}"></td>
     <td id="${cartProducts[i].name}_${i}">${cartProducts[i].price}</td>
     <td><div id ="wrapButton"><button class="${cartProducts[i].name}">+</button><input type="text" id="${cartProducts[i].name}"><button class="${cartProducts[i].name}">-</button></div></td>
     <td><button class="rem_btn">REMOVE</button></td>
     </tr>
     `
     }  
     let sum = 0
     let priceProduct = document.getElementsByClassName("priceProduct")
     let removeButton = document.getElementsByClassName("rem_btn")
     let allDetailsTd = document.getElementsByClassName("allDetails")
     let ChargerButton = document.getElementsByClassName("CHARGER")
     let HeadphonsButton = document.getElementsByClassName("HEADPHONES")
     let JblButton = document.getElementsByClassName("JBL")
     function calculatePriceProducts() { 
      for (let i = 0; i < cartProducts.length; i++) {
           sum+=cartProducts[i].price
         }
         show_price.innerHTML = `TOTAL PRICE : ${sum}<i id="icon_shakel" class="fas fa-shekel-sign"></i>`
     }
     calculatePriceProducts()
     
     function removeTdFromTable() {
         let newArray = []
     for (let j = 0; j < removeButton.length; j++) {
             removeButton[j].onclick=()=>{
             allDetailsTd[j].style.display = "none"
             Math.floor(sum-=cartProducts[j].price)
             show_price.innerHTML = `TOTAL PRICE : ${Math.floor(sum)}<i id="icon_shakel" class="fas fa-shekel-sign"></i>`
             newArray.push(cartProducts[j])
             if (newArray.length == 3) {
             main.innerHTML = `<div id="emptyPage"><h1>The Cart empty</h1></div>`
             }
           }
         }  
     }
     removeTdFromTable()
     
     function calSomthing(array,input,id,pricePro) {
     let counter = 1
     let priceProduct;
     input.value=counter
     for (let i = 0; i < array.length; i++) {
             let arrayButtons = array[i]
             arrayButtons.onclick = ()=>{
                 switch (arrayButtons.innerHTML) {
                     case "+":
                     priceProduct = pricePro
                     counter++
                     input.value = `${counter}`
                    //  id.innerHTML = counterNumber+=priceProduct
                     sum+=priceProduct
                     show_price.innerHTML = `TOTAL PRICE : ${sum}<i id="icon_shakel" class="fas fa-shekel-sign"></i>`
                     break;
                         case "-":
                         if(counter<=0)return false;
                         priceProduct = pricePro
                         counter--
                         input.value = `${counter}`
                        //  id.innerHTML=counterNumber-=priceProduct
                         if(id.innerHTML<"10"||id.innerHTML<"0")id.innerHTML=0;
                         console.log(id.innerHTML);
                         sum-=priceProduct
                         show_price.innerHTML = `TOTAL PRICE : ${sum}<i id="icon_shakel" class="fas fa-shekel-sign"></i>`
                         if(sum<10){
                         sum = 0;
                         show_price.innerHTML = `TOTAL PRICE : ${sum}<i id="icon_shakel" class="fas fa-shekel-sign"></i>`};
                         break;
                             default:
                             console.log("error");
                             break;
                 }
           }
             
     }
     }
     //////////////////////////////////!   PRODUCTE CHARGER
     calSomthing(ChargerButton,CHARGER,CHARGER_0,cartProducts[0].price)
     //////////////////////////////////!  PRODUCTE HEADPHONES
     calSomthing(HeadphonsButton,HEADPHONES,HEADPHONES_1,cartProducts[1].price)
     //////////////////////////////////!  PRODUCTE JBL
     calSomthing(JblButton,JBL,JBL_2,cartProducts[2].price)


















