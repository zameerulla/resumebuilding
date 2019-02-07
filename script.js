
function loadJSON(file,callback) {
 let xhr=new XMLHttpRequest();
 xhr.overrideMimeType("application/json");
 xhr.open("GET",file,true);
 xhr.onreadystatechange=function() {
 	if (xhr.readyState===4 && xhr.status=="200") {
 	callback(xhr.responseText);
 	}
 }
 xhr.send(null);
}

loadJSON("data.json",function(text) {
var data=JSON.parse(text);
console.log(data);

zam(data.left);
zam1(data.right);


});
var cards=document.querySelector(".main");
console.log(cards);

function zam(details1){

  let card=document.createElement("div");
  card.classList.add("left");
  cards.appendChild(card);
  let image=document.createElement("img");
  image.src=details1.image;
  image.alt="image";
  card.appendChild(image);
  card.appendChild(document.createElement("hr"));
  let name=document.createElement("h3");
  name.textContent=details1.name;
  card.appendChild(name);


  let anchor=document.createElement("a")
  anchor.href="G:\zameer\workshop\resume.html";
  card.appendChild(anchor);


  let profile=document.createElement("h3")
  profile.textContent=details1.profile;
  anchor.appendChild(profile);



}

function zam1(details2){

  let card=document.createElement("div");
  card.classList.add("right");
  cards.appendChild(card);
  let image=document.createElement("img");
  image.src=details2.image;
  image.alt="image";
  card.appendChild(image);
  card.appendChild(document.createElement("hr"));
  let name=document.createElement("h3");
  name.textContent=details2.name;
  card.appendChild(name);


  let anchor=document.createElement("a")
  anchor.href="resume.html";
  card.appendChild(anchor);


  let profile=document.createElement("h3")
  profile.textContent=details2.profile;
  anchor.appendChild(profile);



}
