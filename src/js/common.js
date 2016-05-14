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