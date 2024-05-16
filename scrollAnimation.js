// animation of every sections 


// let sections = document.querySelectorAll("section");

// console.log(sections);

// window.addEventListener("scroll" , checkBoxes);

// checkBoxes();

// function checkBoxes () {
//     console.log(window.innerHeight / 5 * 4 );

//     let triggerBottom = window.innerHeight / 5 * 4 ;
   
//     sections.forEach( section => {
//         let sectionTop = section.getBoundingClientRect().top;
//         if(sectionTop < triggerBottom){
//             section.classList.add("show");
//         }
//         else{
//             section.classList.remove("show");
//         }
//     })
// }






// animation for every divs 

let divs = document.querySelectorAll("div");

console.log(divs);

window.addEventListener("scroll" , checkBoxes);

checkBoxes();

function checkBoxes () {
    console.log(window.innerHeight / 10 * 9);

    let triggerBottom = window.innerHeight / 10 * 9 ;
   
    divs.forEach( div => {
        let divTop = div.getBoundingClientRect().top;
        if(divTop < triggerBottom){
            div.classList.add("show");
        }
        else{
            div.classList.remove("show");
        }
    })
}

