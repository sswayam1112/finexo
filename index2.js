console.log("welcome To My First WebPage");

// header readmore btn 

try{
    let moreBtn = document.querySelector(".header-btn");
    let span1 = document.querySelector(".header-more");
    
    moreBtn.onclick = () =>{
        console.log("button is clicked");
        if(span1.style.display==="none"){
            span1.style.display="block";
            moreBtn.innerText = "Read Less";
        }
        else if (span1.style.display==="block"){
            span1.style.display="none";
            moreBtn.innerText = "Read More";
        }
    
    }

} catch(err){
    console.log(err);
}



// services view more btn 

try{
    let viewBtn = document.querySelector(".viewbtn2");
    let content = document.querySelector(".services-more ");
    
    viewBtn.onclick= () =>{
        console.log("button is clicked");
        if(content.style.display==="none"){
            content.style.display="block";
            viewBtn.innerText = "View Less";
        }
        else if (content.style.display==="block"){
            content.style.display="none";
            viewBtn.innerText = "View All";
        }
    }

}catch(err){
    console.log(err);
}


// about section btn 

try{
    let aboutBtn = document.querySelector(".aboutBtn");
    let aboutMore = document.querySelector(".aboutMore");
    
    aboutBtn.onclick= () =>{
        console.log("button is clicked");
        if(aboutMore.style.display==="none"){
            aboutMore.style.display="block";
            aboutBtn.innerText = "Read Less";
        }
        else if (aboutMore.style.display==="block"){
            aboutMore.style.display="none";
            aboutBtn.innerText = "Read More";
        }
    }

}catch(err){
    console.log(err);
}


// why us btn 

try{
    let whyusBtn = document.querySelector(".whyusBtn");
    let content2 = document.querySelector(".content2");
    
    whyusBtn.onclick= () =>{
        console.log("button is clicked");
        if(content2.style.display==="none"){
            content2.style.display="block";
            whyusBtn.innerText = "Read Less";
        }
        else if (content2.style.display==="block"){
            content2.style.display="none";
            whyusBtn.innerText = "Read More";
        }
    }

}catch(err){
    console.log(err);
}



