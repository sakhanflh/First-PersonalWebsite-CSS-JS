var TxtType = function(el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
    };
    
    TxtType.prototype.tick = function() {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];
    
    if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
    }
    
    this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';
    
    var that = this;
    var delta = 200 - Math.random() * 100;
    
    if (this.isDeleting) { delta /= 2; }
    
    if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
    }
    
    setTimeout(function() {
    that.tick();
    }, delta);
    };
    
    window.onload = function() {
    var elements = document.getElementsByClassName('typewrite');
    for (var i=0; i<elements.length; i++) {
    var toRotate = elements[i].getAttribute('data-type');
    var period = elements[i].getAttribute('data-period');
    if (toRotate) {
    new TxtType(elements[i], JSON.parse(toRotate), period);
    }
    }
    // INJECT CSS
    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
    document.body.appendChild(css);
    };


//About
const aboutImg = document.querySelector('.about-img-wrapper');
const aboutDesc = document.querySelector('.about-desc-wrapper');


window.addEventListener('scroll', function(){
    if(this.window.scrollY > 350) {
        aboutImg.classList.add('about-img-wrapper-active');
        aboutDesc.classList.add('about-desc-wrapper-active');
    } else {
        aboutImg.classList.remove('about-img-wrapper-active');
        aboutDesc.classList.remove('about-desc-wrapper-active');
    }
})


//skill
const tech = document.getElementById("tech-stack");
const techBtn = document.querySelector('.tech-btn');
const tools = document.getElementById("tools");
const toolsBtn = document.querySelector('.tools-btn');


// Kedua
tools.style.visibility = "hidden";

function showTools(){
    tools.style.visibility = "visible";
    tech.style.display = "none";
    document.getElementById("tools-btn").style.backgroundColor = "#221c0a";
    document.getElementById("tools-btn").style.color = "#ffdd44";
    document.getElementById("tech-btn").style.backgroundColor = "black";
    document.getElementById("tech-btn").style.color = "white";
    techBtn.classList.add('.tools-btn-active');
}
function showTech(){
    tools.style.visibility = "hidden";
    tech.style.display = "flex";
    document.getElementById("tools-btn").style.backgroundColor = "black";
    document.getElementById("tech-btn").style.backgroundColor = "#221c0a";
    document.getElementById("tools-btn").style.color = "white";
    document.getElementById("tech-btn").style.color = "#ffdd44";
} 

// Ketiga

// toolsBtn.addEventListener('click' ,function() {
//         tools.style.display = "block";
//         tech.style.display = "none";
// })


// Tech
const tech1 = document.querySelector('.tech-line1');

window.addEventListener('scroll', function(){
    if(this.window.scrollY > 850) {
        tech1.classList.add('tech-line1-active');
    } else {
        tech1.classList.remove('tech-line1-active');
    }
})

// Project
const project1 = document.querySelector('.project1');
const project2 = document.querySelector('.project2');
const project3 = document.querySelector('.project3');
window.addEventListener('scroll', function() {
    if(this.window.scrollY > 1400) {
        project1.classList.add('project1-active');
        project2.classList.add('project2-active');
        project3.classList.add('project3-active');
    } else {
        project1.classList.remove('project1-active');
        project2.classList.remove('project2-active');
        project3.classList.remove('project3-active');
    }
})

// Mobile 
// Menu
const navbar = document.querySelector('.nav');
const hamburgerButton = document.querySelector('.navbar-extra');

hamburgerButton.addEventListener('click', function() {
    navbar.classList.toggle('nav-reveal');
});
// Menu