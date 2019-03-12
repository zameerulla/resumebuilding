//browser checking
var indexedDB=window.indexedDB||window.webKit.indexedDB||window.mozindexedDB;
indexedDB?console.log("Success"):console.log("not Supported");


/*creating IndexedDB database with version */

   var request=indexedDB.open("formDB",1);
   var result;
   var store;


   request.onupgradeneeded=function(e) {
   result=e.target.result;
   //console.log(result);
   store=result.createObjectStore("resume",{keyPath:'id',autoIncrement:true});
    // console.log(store);
   }

   request.onsuccess=function(e) {
   console.log("DB created");
   result=e.target.result;
   var tx=result.transaction("resume","readwrite");
   store=tx.objectStore("resume");
   var getData=store.getAll();
   getData.onsuccess=function(get){
     console.log(get.target.result);
     Personal(get.target.result);

   }
   let cards=document.querySelector(".main");
    function Personal(Personal){
    Personal.map((item)=>{
    let card=document.createElement("div");
    card.classList.add("left");
    cards.appendChild(card);

      var image=document.createElement("img");
      image.src="user.jpg";
      image.alt="image";
      image.classList.add("img");
      card.appendChild(image);
      card.appendChild(document.createElement("hr"));

        var anchor=document.createElement("a");
        anchor.href="resume2.html?Id="+item.id;
        card.appendChild(anchor);

      var name=document.createElement("h3");
      name.textContent=item.Name;
      anchor.appendChild(name);

});



   //   function zam(details1){
   //
   //     let card=document.createElement("div");
   //     card.classList.add("left");
   //     cards.appendChild(card);
   //     let image=document.createElement("img");
   //     image.src=details1.image;
   //     image.alt="image";
   //     card.appendChild(image);
   //     card.appendChild(document.createElement("hr"));
   //     let name=document.createElement("h3");
   //     name.textContent=details1.name;
   //     card.appendChild(name);
   //
   //
   //     let anchor=document.createElement("a")
   //     anchor.href="resume.html";
   //     card.appendChild(anchor);
   //
   //
   //     let profile=document.createElement("h3")
   //     profile.textContent=details1.profile;
   //     anchor.appendChild(profile);
   //
   //
   //
   //
   // }

}
}
