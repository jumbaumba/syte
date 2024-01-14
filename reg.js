if(window.localStorage.getItem("id")&& window.localStorage.getItem("name") && window.localStorage.getItem("age")){
    let cardList = document.getElementsByClassName("card-list")[0];

    if(cardList){
        
        let newCard = `<div class="card">
        <img src="user.png">
        <div class="card-name">${name}</div>
        <div class="card-age">Возраст: ${age}</div>
        <button class="">Инфо</button>
        </div>`;
    }
}
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
    event.preventDefault();
    let error = {};
    let address = event.target[5].value;
    let addressTamplate = /[\w\W\d\D]{10,}/g;

    if(address.length < 10){
        error.address ="Слишком короткий адрес!";
        let addressField = document.getElementById("address-error");
        addressField.innerHTML = error.address;
        addressField.previousElementSibling.classList.add("error");
    }
    else{
        
        let addressField = document.getElementById("address-error");
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
    
    let nameField = document.getElementById("name-error");
    nameField.innerHTML = '';
    nameField.previousElementSibling.classList.remove("error");
    }
    
4688268446826
    let date = event.target[1].value;
    let gender = event.target[2].value;
    let email = event.target[3].value;
    let url = event.target[4].value;
    let errors = 0;
    for(key in error){
        errors++;

    }

    if(errors){
        return false;
    }
    else{
        let cardList = document.getElementsByClassName("card-list")[0];
        if(cardList){
        let now = new Date();
        let birthday = new Date(date);
        let age = now.getFullYear() - birthday.getFullYear();
    

    let newCard = cardList.insertAdjacentHTML("beforeend",
        `<div class="card">
        <img src="user.png">
        <div class="card-name">${name}</div>
        <div class="card-age">Возраст: ${age}</div>
        <button class="">Инфо</button>
        </div>`);


        let cards = document.getElementsByClassName("card");
        if(cards.length > 0){
            cardList.insertAdjacentHTML("beforeEnd", newCard);
        }
        else{
            cardList.innerHTML = newCard;
        }
        let user = {
            id: id,
            name: event.target[0].value,
            birthday: event.target[1].value,
            age: now.getFullYear() - birthday.getFullYear(),
            sex: event.target[2].value,
            phone: event.target[3].value,
            email: event.target[4].value,
            url: event.target[5].value,
            address: event.target[6].value
        }
        let users = [];
        if(window.localStorage.getItem("users")){
            users = JSON.parse(window.localStorage.getItem("users"));
        }
        users.push(user);
        window.localStorage.setItem("users", JSON.stringify(users));
    }
    return false;


    
    function startDrag(event){
        event.dataTransfer.setData("text/html", event.target.id);
        event.dataTransfer.effectAllowed = "move"
    }
    function enterDrag(event){
        event.dataTransfer.dropEffect = "move"
        event.target.classList.add("active");
    }

    function leaveDrag(event){
        event.target.classList.remove("active");
    }
    return false;
}
}
