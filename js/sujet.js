function accuille(){
    document.getElementById("accuille").style.display="block";
    document.getElementById("ajouté").style.display="none";
    document.getElementById("listes").style.display="none";
}
function ajouté(){
    document.getElementById("accuille").style.display="none";
    document.getElementById("ajouté").style.display="block";
    document.getElementById("listes").style.display="none";
    document.getElementById("search").style.display="none";

}
function liste(){
  document.getElementById("accuille").style.display="none";
    document.getElementById("ajouté").style.display="none";
    document.getElementById("listes").style.display="block";
    document.getElementById("search").style.display="none";

}
function recherch(){
   document.getElementById("accuille").style.display="none";
   document.getElementById("ajouté").style.display="none";
   document.getElementById("listes").style.display="none";
   document.getElementById("search").style.display="block";
}
function add(){
    event.preventDefault();
      
    var sujet= document.getElementById('sujet').value;
    var date= document.getElementById('date').value;  
    var apprenant= document.getElementById('apprenant').value;
    var tags= document.getElementById('tags').value;
    var lien= document.getElementById('lien').value;


    if( sujet ==="" ){
       document.getElementById("noms").style.display="block"; 
       
    }
   
     if(date ===""  )
     {
       document.getElementById("dat").style.display="block";   
    }
    if(apprenant===""  )
     {
       document.getElementById("appr").style.display="block";   
    }
    if(tags ===""  )
     {
       document.getElementById("tag").style.display="block";   
    }
    if(tags ===""  )
     {
       document.getElementById("lie").style.display="block";   
    }

    else  {
        
       
       document.getElementById("pr7").innerHTML="salut msr/mm :"+fname+" "+lname+" "+"   votre age est:"+""+age+"ans";

    }
  
}
/*search*/


function myFunction() {
   var input, filter, table, tr, td, i, txtValue;
   input = document.getElementById("myInput");
   filter = input.value.toUpperCase();
   table = document.getElementById("myTable");
   tr = table.getElementsByTagName("tr");
   for (i = 0; i < tr.length; i++) {
     td = tr[i].getElementsByTagName("td")[0];
     if (td) {
       txtValue = td.textContent || td.innerText;
       if (txtValue.toUpperCase().indexOf(filter) > -1) {
         tr[i].style.display = "";
       } else {
         tr[i].style.display = "none";
       }
     }       
   }
 }


 

var aff = document.querySelectorAll("aff");

  

function ok(){
    var xReq = new XMLHttpRequest();
xReq.open('get','nodjs.json');
xReq.onload = function(){
var xdata =JSON.parse(xReq.responseText);
var a;
for (i=0; i<xdata.length; i++){
    a +="<tr>"+"<td>"+xdata[i].sujet+"</td>"+"<td>"+xdata[i].date+"</td>"+"<td>"+xdata[i].apprenant+"</td>"+"<td>"+xdata[i].lien+"</td>"+"<td>"+xdata[i].tags+"</td>"+"<tr>";

  }
 aff[0].insertAdjacentHTML('beforeend',a);

       
};
   
xReq.send();

};

