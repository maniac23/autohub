var filterOpen = document.querySelector(".button__filter");
var filterClose = document.querySelector(".sidebar__close");
var sidebar = document.querySelector(".sidebar");
var modal = document.querySelector(".modal_form");
var modalForm = document.getElementById("add");
var modalOpenButton = document.querySelector(".button__add");
var modalOpenIcon = document.querySelector(".button__plus");
var modalClose = document.querySelector(".close_form");

// open & close sidebar
function openSideBar(){
	sidebar.style.width = "300px";
	sidebar.style.padding = "1rem";
	sidebar.style.paddingTop = "6rem";
}
function closeSidebar(){
	sidebar.style.width = "0";
	sidebar.style.padding = "0";
}

filterOpen.addEventListener("click", openSideBar);
filterClose.addEventListener("click", closeSidebar);

// open & close modal form
function openModal(){
	modal.style.display = "block";
	modalForm.style.top = "10%";
}
function closeModal(){
	modal.style.display = "none";
	modalForm.style.top = "-100%";
}
modalOpenButton.addEventListener("click", openModal);
modalOpenIcon.addEventListener("click", openModal);
modalClose.addEventListener("click", closeModal);

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// getting cars list from template
var cars = [];
var container = document.querySelector('.content');
getCars();
function renderCars(cars){
  cars.forEach(function(car) {
    var element = getElementFromTemplate(car);
    container.appendChild(element);
  });
};


function getElementFromTemplate(data) {
  var template = document.querySelector('#car-template');
  if ('content' in template) {
    var element = template.content.children[0].cloneNode(true);
  } else {
    var element = template.children[0].cloneNode(true);
  }
  
  element.querySelector('.item__name').textContent = data.name;
  element.querySelector('.item__price').textContent = data.price + " $";
  element.querySelector('.item__year').textContent = data.year;
  element.querySelector('.item__distance').textContent = data.distance + " km";
  element.querySelector('.item__gas').textContent = data.gas;
  element.querySelector('.item__gear').textContent = data.gear;

  var img = new Image();
  img.onload = function(){
    element.querySelector('.item__img').setAttribute("src", img.src );
  }
  img.src = data.url;

  return element;
};





function getCars() {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', '../auto_data.json');
  xhr.onload = function(e) {
    var rawData = e.target.response;
    var loadedCars = JSON.parse(rawData);

    // drawing loaded data to DOM
    renderCars(loadedCars);
  }
  xhr.send();

};