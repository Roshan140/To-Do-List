let content = document.querySelector(".content");
let input = document.querySelector("input");

function add() {


    if (input.value == "") {
        alert("You must write something")
    }
    else {

        let li = document.createElement("li");
        li.innerHTML = input.value;
        content.appendChild(li);
        event.preventDefault();

        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);

        savedata();

    }
    input.value = "";
}
content.addEventListener('click', function (e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked")
        savedata();
    }
    else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        savedata();
    }
}, false)
function savedata() {
    localStorage.setItem("data", content.innerHTML);

}

function showdata() {
    content.innerHTML = localStorage.getItem("data");
}

function myFunction() {
    showdata()
}