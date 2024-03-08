var dropDown = document.getElementById("dropdown");
dropDown.addEventListener("click", () => {
    var elements = document.querySelector('.containerDropDown');
   elements.classList.toggle('show');
});
