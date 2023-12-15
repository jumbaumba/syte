let menuToggler = document.querySelector(".button");
let nav = document.getElementById("cont-menu");

if(menuToggler){


    menuToggler. addEventListener("click", (e)=>{
        if  (menuToggler.classList.contains("pushed"))
        
        {
            menuToggler.classList.remove("pushed");
            nav.classList.remove("opened")
        } else{
            menuToggler.classList.add("pushed");
            nav.classList.add("opened");
        }
    });
}

function sendForm(event){
    let error = {};
    let address = event.target[6].value;
    if(address.length < 10){
        error.address ="Слишком короткий адрес!";
        let addressField = document.getElementById("address-error");
        addressField.innerHTML = error.address;
        address.previousElementSibling.classList.add("error");
    }
    else{
        error.address = null;
        let addressField = document.getElementById("adsress-error");
        addressField.innerHTML = '';
        addressField.previousElementSibling.classList.remove("error");
    }
    let name = event.target[0].value;
    let nameTamplate = /^[А-Я][а-яА-Я\s]*[а-я]$/g;
    if(!nameTamplate.test(name)){
        error.name = "введите корректное имя";
        let nameField = document.getElementById("name-error")
        nameField.innerHTML = error.name;
        nameField.previousElementSibling.classList.add("error");
    }
    else{
    error.name = null;
    let nameField = document.getElementById("name-error");
    nameField.innerHTML = '';
    nameField.previousElementSibling.classList.remove("error");
    }
    return false;
}