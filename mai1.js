let page = 0;
document.addEventListener("DOMContentLoader", () => {
    loadContent();
})
function loadContent(){
    let xhr = new XMLHttpRequest();
    let url = new URL("http://jey.of.by/");


    if(page > 0){
        url.searchParams.set("page", page);
    }

    xhr.open("GET", url);
    xhr.setRequestHeader(`Content-Type`, `application/json`);
    xhr.setRequestHeader(`X-requested-With`, `XMLHttpRequest`);
    xhr.responseType=`json`;
    xhr.send();


    xhr.onload = function(){
        if(xhr.status != 200){
            alert(`Ошибка ${xhr.status}: ${xhr.statusText}`);
        }
        else{
            let products = xhr.response;
            renderProducts(products);
            page +=1;
        }
    }
    
}
function renderProducts(products){
    if(products.length > 0){
        let productsList = document.getElementsByClassName("container")[0];
        let productsCode = '';

        products.forEach(product =>{
            let price = (product.price.new > 0) $ ''
        })
    }
}