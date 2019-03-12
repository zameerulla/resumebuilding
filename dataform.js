function zameer() {
  // console.log("zameer");
var career=document.getElementById('select1').value;
var name=document.getElementById('name').value;
var role=document.getElementById('role').value;
var email=document.getElementById('email').value;
var phno=document.getElementById('phno').value;
var degree=document.getElementById('select2').value;
var institue1=document.getElementById('institute').value;
var course=document.getElementById('select3').value;
var yearofpassing=document.getElementById('yearofpassing').value;
var percentage=document.getElementById('percentage').value;
var course1=document.getElementById('select4').value;
var institute2=document.getElementById('name').value;
var syllabus=document.getElementById('select5').value;
var yearofpassing2=document.getElementById('yearofpassing2').value;
var percentage2=document.getElementById('percentage2').value;
var syllabus2=document.getElementById('select6').value;
var institute3=document.getElementById('institute3').value;
var course2=document.getElementById('select7').value;
var yearofpassing3=document.getElementById('yearofpassing3').value;
var percentage3=document.getElementById('percentage3').value;
var ps=document.getElementById('ps').value;
var ws=document.getElementById('ws').value;
var db=document.getElementById('db').value;
var a1=document.getElementById('a1').value;
var a2=document.getElementById('a2').value;
var a3=document.getElementById('a3').value;

//browser checking


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
   // console.log(store);
   store.put(
    {
       Carobj:career,

       Name:name,
       Role:role,
       Gmail:email,
       Number:phno,

       Degree:degree,
       Institute:institue1,
       Branch:course,
       Yearofpassing:yearofpassing,
       percentage:percentage,

       course1:course1,
       institute2:institute2,
       syllabus:syllabus,
       yearofpassing2:yearofpassing2,
       percentage2:percentage2,

       syllabus2:syllabus2,
       institute3:institute3,
       course2:course2,
       yearofpassing3:yearofpassing3,
       percentage3:percentage3,

       ps:ps,
       ws:ws,
       db:db,

       a1:a1,
       a2:a2



     });
     window.open("index.html","_self");

   }

   request.onerror=function() {
   console.log("error");

   }


}
