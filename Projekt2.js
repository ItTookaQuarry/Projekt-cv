window.addEventListener("load",loadingstars1)
window.addEventListener("load",loadingstars2)
window.addEventListener("load",loadingstars3)
window.addEventListener("load",loadingstars4)
window.addEventListener("load",loadingstars5)

function loadingstars1(){ 
    setTimeout(funct1,1000)
}

function funct1(){
    const klas1= document.querySelectorAll(".stars1")
    for(let i=0;i<=klas1.length;i++)
    klas1[i].style.color="orange";
}

function loadingstars2(){ 
    setTimeout(funct2,2000)
}

function funct2(){
    const klas2= document.querySelectorAll(".stars2")
    for(let i=0;i<=klas2.length;i++)
    klas2[i].style.color="orange";
}

function loadingstars3(){ 
setTimeout(funct3,3000)
}

function funct3(){
    const klas3= document.querySelectorAll(".stars3")
    for(let i=0;i<=klas3.length;i++)
    klas3[i].style.color="orange";
}



function loadingstars4(){ 
    setTimeout(funct4,4000)
}

function funct4(){
    const klas4= document.querySelectorAll(".stars4")
    for(let i=0;i<=klas4.length;i++)
    klas4[i].style.color="orange";
}



function loadingstars5(){ 
    setTimeout(funct5,5000)
}

function funct5(){
    const klas4= document.querySelectorAll(".stars5")
    for(let i=0;i<=klas4.length;i++)
    klas4[i].style.color="orange";
}

