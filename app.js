'use strict'



Books.globalArray = [];

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}
function Books(name, price ,pages){
    this.name = name ;
    this.price = price ;
    this.pages = pages;
    Books.globalArray.push(this);
}
let parent = document.getElementById('displaybooks')


function makeHeader(){
    let headerRow = document.createElement('tr')
    parent.appendChild(headerRow);

    let displayHName = document.createElement('td')
    headerRow.appendChild(displayHName);
    displayHName.textContent = `Book Name `;

    let displayHPrice = document.createElement('td')
    headerRow.appendChild(displayHPrice);
    displayHPrice.textContent = `Book Price`;

    let displayHPages = document.createElement('td')
    headerRow.appendChild(displayHPages);
    displayHPages.textContent = `Book Page\'s Number `;

}makeHeader();

Books.prototype.renderBooks = function(){
    let RowData = document.createElement('tr');
    parent.appendChild(RowData);

    let displayName = document.createElement('td')
    RowData.appendChild(displayName);
    displayName.textContent = this.name;

    let displayPrice = document.createElement('td')
    RowData.appendChild(displayPrice);
    displayPrice.textContent = this.price;

    let displayPages = document.createElement('td')
    RowData.appendChild(displayPages);
    displayPages.textContent = this.pages;
}

function renderSaved(){
    for (let i = 0; i < Books.globalArray.length; i++) {
        let RowData = document.createElement('tr');
        parent.appendChild(RowData);
    
        let displayName = document.createElement('td')
        RowData.appendChild(displayName);
        displayName.textContent = Books.globalArray[i].name;
    
        let displayPrice = document.createElement('td')
        RowData.appendChild(displayPrice);
        displayPrice.textContent = Books.globalArray[i].price;
    
        let displayPages = document.createElement('td')
        RowData.appendChild(displayPages);
        displayPages.textContent = Books.globalArray[i].pages;
        
    }
}
let form = document.getElementById('booksform');
form.addEventListener('submit', handlesubmit);

function handlesubmit(event){
    

    let newName = event.target.bookname.value;
    let newPrice = event.target.bookprice.value;
    let newPages = getRandomInt(1,500)

    let newBook = new Books(newName , newPrice , newPages)
    newBook.renderBooks();
    saveData();
    // event.PreventDefault();

    // Total();
    
}

function saveData (){
    localStorage.setItem('book', JSON.stringify(Books.globalArray))
}
let TotalPages = 0;
function Total(){
    for (let i = 0; i < Books.globalArray.length; i++) {
        TotalPages = TotalPages + (Books.globalArray[i]).pages;
    }

        let TotalRow = document.createElement('tr')
        parent.appendChild(TotalRow);
        TotalRow.textContent = `Total : ${TotalPages}`
        
}
function getSaved(){
    if(JSON.parse(localStorage.getItem('book')) !== null){
        Books.globalArray = JSON.parse(localStorage.getItem('book'))
        renderSaved();
        Total();
    }

}
getSaved();