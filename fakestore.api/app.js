// define variable:

let renderData = document.querySelector(".renderData");
let renderCartData = document.querySelector(".renderCartData");
let dynamic_count = document.querySelector(".dynamic-count");
let arr = [];

//GET DATA FROM API

async function getData(){
   const res = await fetch("https://fakestoreapi.com/products");
   const data = await res.json();
   //console.log(data);

   data.map((ele)=>{
    //console.log(ele);
   let productsMainDiv = document.createElement('div');
   let createImgEle = document.createElement("img");
   let createTitle = document.createElement("P");
   let createPriceEle = document.createElement("P");
   let btnEle = document.createElement("button");
   let btnText = document.createTextNode("Add To Cart");
   let createPriceText = document.createTextNode(`Price: $${ele.price}`);
   let createTextTitle = document.createTextNode(`${ele.title.slice(0,25)}...`);
   createImgEle.setAttribute("src", ele.image)
   createImgEle.setAttribute("class", "myImages")
   productsMainDiv.setAttribute("class","box-main");
   createTitle.appendChild(createTextTitle);
   createPriceEle.setAttribute("class","price-element");
   btnEle.setAttribute("class","btn-element");
   createPriceEle.appendChild(createPriceText);
   dynamic_count.innerHTML = arr.length;
   createTitle.setAttribute("class","productTitle");
   btnEle.appendChild(btnText);
   productsMainDiv.appendChild(createImgEle);
   productsMainDiv.appendChild(createTitle);   
   productsMainDiv.appendChild(createPriceEle); 
   productsMainDiv.appendChild(btnEle);  
   renderData.appendChild(productsMainDiv);

function addToCart(img, price){
   arr.push({ii : img , pp : price});
   console.log(arr);
   let myCData = [];
   let d = {img, price};
   myCData.push(d);
   console.log(myCData);
   alert("product Added to cart");
    let createImgEle = document.createElement("img");
    let cartTrashBtn = document.createElement("i");
    cartTrashBtn.setAttribute("class", "fa-solid fa-trash");
    createImgEle.setAttribute("src", img);
    createImgEle.setAttribute("class", "cartImgElement");
    let createPriceEle = document.createElement("p");
    let cartPriceText = document.createElement("price");
    createPriceEle.appendChild(cartPriceText);

    renderCartData.appendChild(createImgEle);
    renderCartData.appendChild(createPriceEle);    
    renderCartData.appendChild(cartTrashBtn);    
    console.log("MyImg : " + img);
    console.log("MyPrice : " + price);
}

   btnEle.addEventListener("click", () => addToCart(ele.image, ele.price));
   
   })
   
}

getData();