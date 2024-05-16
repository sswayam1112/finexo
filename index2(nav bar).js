// nav bar button 

let display = 0;
let tripleDot = document.querySelector(".navBarOpen");
let navContent = document.querySelector(".navContent");
//   let crossImg = document.querySelector(".navBarClose");

tripleDot.onclick = () => {
    console.log("3 dot is clicked");
    if (display === 0) {
        navContent.style.display = "block";
        //   crossImg.src = "/my/image/crossImg.png";
        tripleDot.innerHTML = ' <i class="fa-solid fa-x"></i>';
        tripleDot.style.fontSize = '35px';
        console.log("nav bar is visible");
        display = 1;
    }
    else if (display === 1) {
        navContent.style.display = "none";
        //   crossImg.src = "/my/image/3dot.png";
        tripleDot.innerHTML = ' <i class="fa-solid fa-bars navBarClose"></i>';
        console.log("nav bar is not visible");
        display = 0;
    }
}



// active nav bar 

let activepage = window.location.pathname;
console.log(activepage);

let navLinks = document.querySelectorAll("a").
    forEach(link => {
        if (link.href.includes(`${activepage}`)) {
            // console.log(`${activepage}`);
            link.classList.add('active');
        }
    })

