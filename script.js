let btn = document.getElementById("btn");

btn.addEventListener("click", () => {
    {
    let randomnumber1 = Math.ceil(Math.random()*6);
    let image1 =  document.getElementsByClassName("img1")[0];
    
    if(randomnumber1 == 1){
        image1.setAttribute("src", `../Dicee Challenge - Starting Files/images/dice${randomnumber1}.png`)
    }
    else if(randomnumber1 == 2){
        image1.setAttribute("src", `../Dicee Challenge - Starting Files/images/dice${randomnumber1}.png`)
    }
    else if(randomnumber1 == 3){
        image1.setAttribute("src", `../Dicee Challenge - Starting Files/images/dice${randomnumber1}.png`)
    }
    else if(randomnumber1 == 4){
        image1.setAttribute("src", `../Dicee Challenge - Starting Files/images/dice${randomnumber1}.png`)
    }
    else if(randomnumber1 == 5){
        image1.setAttribute("src", `../Dicee Challenge - Starting Files/images/dice${randomnumber1}.png`)
    }
    else{
        image1.setAttribute("src", `../Dicee Challenge - Starting Files/images/dice${randomnumber1}.png`)
    }
    };
    
    {
    let randomnumber2 = Math.ceil(Math.random()*6);
    let image2 =  document.getElementsByClassName("img2")[0];
    
    if(randomnumber2 == 1){
        image2.setAttribute("src", `../Dicee Challenge - Starting Files/images/dice${randomnumber2}.png`)
    }
    else if(randomnumber2 == 2){
        image2.setAttribute("src", `../Dicee Challenge - Starting Files/images/dice${randomnumber2}.png`)
    }
    else if(randomnumber2 == 3){
        image2.setAttribute("src", `../Dicee Challenge - Starting Files/images/dice${randomnumber2}.png`)
    }
    else if(randomnumber2 == 4){
        image2.setAttribute("src", `../Dicee Challenge - Starting Files/images/dice${randomnumber2}.png`)
    }
    else if(randomnumber2 == 5){
        image2.setAttribute("src", `../Dicee Challenge - Starting Files/images/dice${randomnumber2}.png`)
    }
    else{
        image2.setAttribute("src", `../Dicee Challenge - Starting Files/images/dice${randomnumber2}.png`)
    }
    };
});

