let list1 = document.getElementById("list-d-1");
let list2 = document.getElementById("list-d-2");
let list3 = document.getElementById("list-d-3");

function show() {


    if (list1.style.display == "block") {
        list1.style.display = "none";


    }
    else {
        list1.style.display = "block";


    }


}
function show2() {
    if (list2.style.display == "block") {
        list2.style.display = "none";

    }
    else {
        list2.style.display = "block";

    }
}
function show3() {
    if (list3.style.display == "block") {
        list3.style.display = "none";

    }
    else {
        list3.style.display = "block";

    }
}



let fullImageBox = document.getElementById("full-image");
let fullImg = document.getElementById("mini-image");
let info = document.getElementById("information-pic");






function openFullImage(pic, text) {
    fullImageBox.style.display = "flex";
    fullImg.src = pic;
    info.innerHTML = text;

    
    




}
function closeFullImage() {
    
    
    fullImageBox.style.display = "none";
    
    
}


let sections = document.querySelectorAll('section');
window.addEventListener('scroll', checkSections);
checkSections();

function checkSections() {
    let trigger = window.innerHeight / 5 * 4;
    sections.forEach(sec => {
        let secTop = sec.getBoundingClientRect().top;

        if (secTop < trigger) {
            sec.classList.add('show-animate');
        }
       

    });


}





