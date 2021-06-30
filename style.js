var productNameInput = document.getElementById("productName") ;

var productPriceInput = document.getElementById("productPrice") ;

var productCategoryInput = document.getElementById("productCategory") ;

var productDescInput = document.getElementById("productDesc") ;

var productsContainer ;

if (localStorage.getItem("productslist")==null)
{
    var productsContainer = [];
}
else
{
    productsContainer = JSON.parse( localStorage.getItem("productslist"));
    displayProducts();
}


function addProduct(){

    if (checkInputs()==true){

        var Product = {

            name :productName.value,
    
            price : productPrice.value,
    
            category: productCategory.value,
    
            desc: productDesc.value,
        };
         
        productsContainer.push(Product);
        //console.log(productsContainer)
        localStorage.setItem("productslist", JSON.stringify(productsContainer));
        displayProducts();

        clearForm();
    }
      else
      {
          window.alert("please complete all inputs")
      }
};


function clearForm(){
    productName.value = "";
    productPrice.value = "";
    productCategory.value = "";
    productDesc.value = "";
};


function displayProducts(){

    var cartona =``;

    for (var i = 0 ; i < productsContainer.length ; i++)
    {
         cartona +=`<tr>
         <td>${i}</td>  
         <td>${productsContainer[i].name}</td>  
         <td>${productsContainer[i].price}</td>
         <td>${productsContainer[i].category}</td> 
         <td>${productsContainer[i].desc}</td>
         <td><button onclick="updateForm(${i})" class=" btn btn-outline-warning ">update</button></td>
         <td><button onclick="deleteProduct(${i})" class=" btn btn-outline-danger ">delete</button></td>  
         </tr> `
    }
         document.getElementById("tableBody").innerHTML = cartona;
    

};

function checkInputs(){

    if ( productName.value !="" && productPrice.value!="" && productCategory.value!="" && productDesc.value!=""){
             return true;
         }
         else
         {
             return false;
         }
};

function deleteProduct(productIndex){
     
    productsContainer.splice(productIndex,1);
    localStorage.setItem("productslist", JSON.stringify(productsContainer));

    displayProducts();

};

function searchProduct(searchTerm){

    var cartona = ``;
    for (var i = 0 ; i < productsContainer.length ; i++)
    if(productsContainer[i].name.toLowerCase().includes(searchTerm.toLowerCase()) == true)
    {
         cartona +=`<tr>
         <td>${i}</td>  
         <td>${productsContainer[i].name}</td>  
         <td>${productsContainer[i].price}</td>
         <td>${productsContainer[i].category}</td> 
         <td>${productsContainer[i].desc}</td>
         <td><button class=" btn btn-outline-warning ">update</button></td>
         <td><button onclick="deleteProduct(${i})" class=" btn btn-outline-danger ">delete</button></td>  
         </tr> `
         document.getElementById("tableBody").innerHTML = cartona;
    }
    else
    {
        console.log("not found")
    }

};
var globalIndex;
function updateForm(productIndex){

    productNameInput.value = productsContainer[productIndex].name ;
    productPriceInput.value = productsContainer[productIndex].price ;
    productCategoryInput.value = productsContainer[productIndex].category ;
    productDescInput.value = productsContainer[productIndex].desc ;
    document.querySelector("button").style.display="none" 
    document.querySelector(".btn-success").style.display="block";
    globalIndex=productIndex;

};

function update()
{
   productsContainer[globalIndex].name=productNameInput.value;
   productsContainer[globalIndex].Price=productPrice.value;
   displayProducts();
   localStorage.setItem("productslist", JSON.stringify(productsContainer));
}











