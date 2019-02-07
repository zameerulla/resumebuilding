
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

loadJSON("resumejson.json",function(text) {
var data=JSON.parse(text);
console.log(data);

zam(data.left1);
math(data.right);
// console.log(data.right1.createobj);



});
var cards=document.querySelector(".main");
console.log(cards);
let card=document.createElement("div");
card.classList.add("left");
cards.appendChild(card);

function zam(details1){


  let card2=document.createElement("div");
  card2.classList.add("left1");
  card.appendChild(card2);

  let image=document.createElement("img");
  image.src=details1.image;
  image.alt="image";
  card2.appendChild(image);

  let name=document.createElement("h1");
  name.textContent=details1.name;
  card2.appendChild(name);

  let occ=document.createElement("h3");
  occ.textContent=details1.occ;
  card2.appendChild(occ);
    card.appendChild(document.createElement("hr"));



     let card3=document.createElement("div");
     card3.classList.add("left2");
     card.appendChild(card3);

     let sonof=document.createElement("p");
     sonof.textContent=details1.sonof;
     card3.appendChild(sonof);

     let mail=document.createElement("p");
     mail.textContent=details1.mail;
     card3.appendChild(mail);

     let phno=document.createElement("p");
     phno.textContent=details1.phno;
     card3.appendChild(phno);

     let add=document.createElement("p");
     add.textContent=details1.add;
     card3.appendChild(add);

     let state=document.createElement("p");
     state.textContent=details1.state;
     card3.appendChild(state);

     let country=document.createElement("p");
     country.textContent=details1.country;
     card3.appendChild(country);


}
function math(co) {
 let career=document.createElement("div");
 career.classList.add("right");
 cards.appendChild(career);

 var careername=document.createElement("h2");
 careername.textContent=co.createobj;
 career.appendChild(careername);

 var matter=document.createElement("p");
matter.textContent=co.matter;
 career.appendChild(matter);
  career.appendChild(document.createElement("hr"));

  var academypro=document.createElement("h2");
 academypro.textContent=co.academypro;
  career.appendChild(academypro);

  var graduation=document.createElement("h2");
 graduation.textContent=co.graduation;
  career.appendChild(graduation);

  var inst1=document.createElement("p");
 inst1.textContent=co.inst1;
  career.appendChild(inst1);

  var inter=document.createElement("h2");
 inter.textContent=co.inter;
  career.appendChild(inter);

  var inst2=document.createElement("p");
 inst2.textContent=co.inst2;
  career.appendChild(inst2);

  var school=document.createElement("h2");
 school.textContent=co.school;
  career.appendChild(school);

  var inst3=document.createElement("p");
 inst3.textContent=co.inst3;
  career.appendChild(inst3);
    career.appendChild(document.createElement("hr"));

  var tech=document.createElement("h3");
 tech.textContent=co.tech;
  career.appendChild(tech);

  var pro=document.createElement("h2");
 pro.textContent=co.pro;
  career.appendChild(pro);

  var languages=document.createElement("p");
 languages.textContent=co.languages;
  career.appendChild(languages);

  var web=document.createElement("h2");
 web.textContent=co.web;
  career.appendChild(web);

  var languages2=document.createElement("p");
 languages2.textContent=co.languages2;
  career.appendChild(languages2);
  career.appendChild(document.createElement("hr"));

  var acheive=document.createElement("h3");
 acheive.textContent=co.acheive;
  career.appendChild(acheive);


    var data=document.createElement("p");
   data.textContent=co.data;
    career.appendChild(data);
  career.appendChild(document.createElement("hr"));

    var hob=document.createElement("h3");
   hob.textContent=co.hob;
    career.appendChild(hob);

    var hob1=document.createElement("p");
   hob1.textContent=co.hob1;
    career.appendChild(hob1);






}
