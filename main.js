// Form Validation

let validateForm = () => {
    const fnameField = document.querySelector("#fname");
    const timeField = document.querySelector("#time");
    const emailField = document.querySelector("#email");
    const email = document.forms["myForm"]["email"].value;
    const fname = document.forms["myForm"]["fname"].value;
    const time = document.forms["myForm"]["time"].value;
    const emailFormat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    let returnable;

    if(fname=="" || time=="" || email==""){
        fnameField.style.borderColor = "red";
        timeField.style.borderColor = "red";
        emailField.style.borderColor = "red";
        alert("You must fill out all the fields!");

        returnable = false;
    }
    else {
        if(fname.length>50){
            fnameField.style.borderColor = "red";
            alert("The name was too long!");
            returnable = false;
        }
        else if(isNaN(fname)){
            alert("Your name contains numbers!");
            returnable = false;
        }
        else{
            fnameField.style.borderColor = "green";
        }

        if(!(isNaN(time))) {
            if(time<0 || time>168){
                timeField.style.borderColor = "red";
                alert("Your number was either less than 0 or more than 168!");
                returnable = false;
            }
            else{
                timeField.style.borderColor = "green";
            }
        }
        else{
            timeField.style.borderColor = "red";
            alert("You didnt enter a number!");
            returnable = false;
        }

        if(!email.match(emailFormat)){
            emailField.style.borderColor = "red";
            alert("Your email is not in correct format!");
            returnable = false;
        }
        else{
            emailField.style.borderColor = "green";
        }
    }

    return returnable;
}


// Read More

const more = document.querySelector(".readmore");
const text = document.querySelector(".more-text");
const space = document.querySelector(".userinput");

more.addEventListener('click', () =>{
    space.classList.toggle("show-more");

    if(more.innerHTML=="+"){
        more.innerHTML="-";
        text.style.display = "inline";

    }
    else{
        more.innerHTML="+";
        text.style.display = "";
    }
});


// Slideshow
let slideshow = (function () {
    let counter = 0,i,j,
        slides =  $("#slideshow .slide"),
        slidesLen = slides.length - 1;
    for (i = 0, j = 10; i < slides.length; i += 1, j -= 1) {
        $(slides[i]).css("z-index", j);
    }
    return {
        startSlideshow: () => {
            window.setInterval(() => {
                if (counter === 0) {
                    slides.eq(counter).fadeOut();
                    counter += 1;
                } else if (counter === slidesLen) {
                    counter = 0;
                    slides.eq(counter).fadeIn(() => {
                        slides.fadeIn();
                    });
                } else {
                    slides.eq(counter).fadeOut();
                    counter += 1;
                }
            }, 6000);
        }
    };
}());
slideshow.startSlideshow();

// TO DO list

const button = document.getElementById("enter");
const input = document.getElementById("todo-input");
const ul = document.querySelector(".todo-things");
let counter=0;

function inputLength() {
	return input.value.length;
}

function createListElement() {
    if(counter<5){
        let li = document.createElement("li");
        li.appendChild(document.createTextNode(input.value));
        ul.appendChild(li);
        input.value = "";
        counter+=1;
    }
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);