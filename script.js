const btn = document.getElementById("giftBtn");

const card = document.querySelector(".container");

const surprise = document.getElementById("surprise");

btn.onclick = ()=>{

card.style.display="none";

surprise.style.display="block";

}

const gift = document.getElementById("gift");

gift.onclick = ()=>{

gift.innerHTML="💖";

gift.style.transform="scale(1.4)";

gift.style.transition=".5s";

for(let i=0;i<40;i++){

let heart=document.createElement("div");

heart.innerHTML="❤️";

heart.style.position="fixed";

heart.style.left=Math.random()*100+"vw";

heart.style.top="-20px";

heart.style.fontSize=Math.random()*20+20+"px";

heart.style.animation="fall 5s linear forwards";

document.body.appendChild(heart);

setTimeout(()=>{

heart.remove();

},5000);

}

}