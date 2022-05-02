btnls = document.querySelectorAll('.btnl');
btnls.forEach((btnl)=>{
    btnl.addEventListener('click' , (e)=>{
        e.preventDefault();
        if(btnl.innerText === "Like"){
            btnl.innerText = "You liked";
            btnl.style.background = "Blue";
        }
        else{
            btnl.innerText = "Like";
        }
        
    })
})

btnls = document.querySelectorAll('.btnd');
btnls.forEach((btnl)=>{
    btnl.addEventListener('click' , (e)=>{
        e.preventDefault();
        if(btnl.innerText === "Dislike"){
            btnl.innerText = "You disliked";
            btnl.style.background = "darkred";
        }
        else{
            btnl.innerText = "Dislike";
        }
        
    })
})

