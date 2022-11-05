let already_displayed = [];


let book1 = [{name: "Big-pant", description: "keeps your smart", date: "9/02/2023", price: "2234",cat: "for men", img: "gallery-2", id: 1},
{name: "Shirt", description: "Good in spring", date: "1/05/2023", price: "2200",cat: "for all", img: "category-2", id: 2},
{name: "Pirana", description: "Your winter choice", date: "5/03/2023", price: "1034",cat: "for women",img: "buy-1", id: 3},
{name: "Sink", description: "Never dissapoint at work", date: "3/12/2023", price: "2294",cat: "for boys",img: "buy-3", id: 4},
{name: "Tower clothe", description: "Helps you store things", date: "9/02/20223", price: "2280",cat: "for kids",img: "category-2", id: 5}]


// unique identifier of every contact
var id = 6;


// displaying names for the user to choose the name on the left side
function displayNames(){
    for (let i = 0; i < book1.length; i++){
        if (! already_displayed.includes(book1[i].name)){   
            let li = document.createElement('li')
            li.id = `${book1[i].id}`
            li.innerHTML = `<i class="fa fa-cart-arrow-down" aria-hidden="true"></i><div class="disp">${book1[i].name}</div><i class="fa fa-trash-o out" aria-hidden="true" id="trash" data-id="${book1[i].id}"></i>`        
            document.querySelector('#choose').append(li)
            already_displayed.push(book1[i].name);

        }

    }

    // add event listener to all new names
    document.querySelectorAll('.disp').forEach(function(li) {
        let name = li.innerHTML;
        li.onclick = function () {
            details(name)
        }
        
    })
    
    document.querySelectorAll('#trash').forEach(function(trash){
        trash.onclick = function(){
            console.log(trash.dataset.id)
            delete_person(trash.dataset.id);

            
        }
    })   
}

// deleting a person
function delete_person(id){
    let okay = document.querySelector("#okay")
    let cancel = document.querySelector('#cancel')
    let box = document.querySelector('#box1')
    let our_id = id
    box.style.display = "block";
    cancel.onclick = function(){
        box.style.display = "none";    

    }

    okay.onclick = function(){
        for(let i = 0; i < book1.length; i++){
            // remove it from the array
            if(book1[i].id == our_id)
            {
                book1.splice(i,1);      
            }
        }
        // then delete this name in our html
        document.querySelectorAll('li').forEach(function(li){
            if (li.id == our_id){
                li.parentNode.removeChild(li);
            }
        })
        

        
        box.style.display = "none";      
    }
}

// let adress = {};
// adress.name = document.querySelector('#name').value
// adress.description = document.querySelector('#desc').value
// adress.date = document.querySelector('#date').value
// adress.price = document.querySelector('#price').value
// adress.cat = document.querySelector('#category').value
// var link = document.querySelector('#image-link').value
// adress.img = document.querySelector(`photos/${link}.png`)
// adress.id = id
// id++


// updating our object with new inputs
function newContact(){
    let adress = {};
    adress.name = document.querySelector('#name').value
    adress.description = document.querySelector('#desc').value
    adress.date = document.querySelector('#date').value
    adress.price = document.querySelector('#price').value
    adress.cat = document.querySelector('#category').value
    adress.img = document.querySelector('#image-link').value
    adress.id = id;
    id++

    book1.push(adress);

    displayNames(book1);
    // document.querySelector('#contact_form').style.display = "none";

    return false

}




// updating the inner html of our table data
function details (name){
    for (let i = 0; i < book1.length; i++){
        if (book1[i].name === name){
            document.querySelector('#tname').innerHTML = book1[i].name;
            document.querySelector('#tdesc').innerHTML = book1[i].description;
            document.querySelector('#tdate').innerHTML = book1[i].date;
            document.querySelector('#tprice').innerHTML = book1[i].price;
            document.querySelector('#tcategory').innerHTML = book1[i].cat;
            document.querySelector('img').src =`https://github.com/Gabriel-mdv/convenience-store-app/blob/main/photos/${book1[i].img}.jpg?raw=true`;
        }
    }

}

// toogle height function 
function toggleHeight(){
    let form = document.querySelector('#contact_form')
    form.classList.toggle('second');
}

// add a delete image on each present li element


document.addEventListener('DOMContentLoaded', function () {
    
    // then get the book1 from the local storage. it may be empty or not
    
    document.querySelector('form').onsubmit = newContact;
    displayNames(book1)


    // bringing down the contact form
    document.querySelector('#add_button').onclick = () =>{
        toggleHeight();
    }
    
})