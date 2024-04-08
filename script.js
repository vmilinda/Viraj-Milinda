let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');


menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};


let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop -150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top => offset && top < offset + height){
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });

    let header = document.querySelector('header');

    header.classList.toggle('sticky' , window.scrollY > 100)
};

    

ScrollReveal({
    // reset: true,
    distance: '80px',
    duration:2000,
    delay:200
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });



const typed = new Typed('.multiple-text', {
    strings: ['Fronted Developer' ,'Youtuber' ,'Website Developer'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});

const form = document.querySelector("form");
const name = document.getElementById("name");
const email = document.getElementById("email");
const number = document.getElementById("number");
const subject = document.getElementById("subject");
const Message = document.getElementById("Message");

function sendEmail(){


    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "virajmilinda0831@gmail.com",
        Password : "7B57AC2B6F73C941BC6EB7F627326085426E",
        To : 'virajmilinda0831@gmail.com',
        From : "virajmilinda0831@gmail.com",
        Subject : subject.value,
        Body : "Name: "+ document.getElementById("name").value
        +"<br> Email: "+document.getElementById("email").value
        +"<br> Phone Number: "+document.getElementById("number").value
        +"<br> Message: "+document.getElementById("Message").value

    }).then(
      message => {
        if (message == "OK") {
            Swal.fire({
                title: "Good job!",
                text: "Message sent Successfully!",
                icon: "success"
              });
        }
      }
    );
}

form.addEventListener("submit",(e) => {
    e.preventDefault();

    sendEmail();
    form.reset();
    return false
});