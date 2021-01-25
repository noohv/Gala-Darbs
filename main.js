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

    // Checks if fields are empty
    if(fname=="" || time=="" || email==""){
        fnameField.style.borderColor = "red";
        timeField.style.borderColor = "red";
        emailField.style.borderColor = "red";

        returnable = false;
    }
    else {
        // Not too long names
        if(fname.length>50){
            fnameField.style.borderColor = "red";
            returnable = false;
        }
        else{
            fnameField.style.borderColor = "green";
        }

        // Check if the time is number
        if(!(isNaN(time))) {
            // Number is higher than 0 and less than 168 (hours in a week)
            if(time<0 || time>168){
                timeField.style.borderColor = "red";
                returnable = false;
            }
            else{
                timeField.style.borderColor = "green";
            }
        }
        else{
            timeField.style.borderColor = "red";
            returnable = false;
        }

        // Check if email matches the right format
        if(!email.match(emailFormat)){
            emailField.style.borderColor = "red";
            returnable = false;
        }
        else{
            emailField.style.borderColor = "green";
        }
    }

    return returnable; //return true or false/ submit or not to submit the form
}


// Read More
const more = document.querySelector(".readmore");
const text = document.querySelector(".more-text");
const space = document.querySelector(".userinput");

// Listens on clicks
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
            }, 6000); //6000ms time for change
        }
    };
}());
slideshow.startSlideshow();

// TO DO list
const button = document.getElementById("enter");
const input = document.getElementById("todo-input");
const ul = document.querySelector(".todo-things");
let counter=0;

let inputLength = () => {
	return input.value.length; //Gets lengths of the TODO thing
}

let createListElement = () => {
    if(counter<5){
        let li = document.createElement("li");
        li.appendChild(document.createTextNode(input.value));
        ul.appendChild(li);
        input.value = "";
        counter+=1;
    }
}

let addListAfterClick = () => {
	if (inputLength() > 0) { //adds to list if TODO thing was not blank
		createListElement();
	}
}

let addListAfterKeypress = (event) => {
	if (inputLength() > 0 && event.keyCode === 13) { //Works with ENTER button
		createListElement();
	}
}
button.addEventListener("click", addListAfterClick); //Works with button click
input.addEventListener("keypress", addListAfterKeypress); //Works with ENTER press


// Smooth scroll
$("#btn1").click(() => { //first button scrolls to home
    $('html, body').animate({
        scrollTop: $("#home").offset().top
    }, 700);
});

$("#btn2").click(() => { //second button scrolls to form
    $('html, body').animate({
        scrollTop: $("#userinput").offset().top
    }, 500);
});

$("#btn3").click(() => { //third button scrolls to todo list
    $('html, body').animate({
        scrollTop: $("#todo-list").offset().top
    }, 450);
});


// Dark mode toggle
document.documentElement.setAttribute("color-mode", "light"); //Enables light theme
const themeSwitcher = document.querySelector(".color-toggle"); //Button which changes the theme

themeSwitcher.onclick = () => {
    let currentTheme = document.documentElement.getAttribute("color-mode"); //gets current theme
    let switchToTheme = currentTheme === "dark" ? "light" : "dark"; //if dark theme them change to light, else to dark
    document.documentElement.setAttribute("color-mode", switchToTheme); //sets the theme
};