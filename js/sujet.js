function accuille(){
    document.getElementById("accuille").style.display="block";
    document.getElementById("ajouté").style.display="none";
    document.getElementById("listes").style.display="none";
}
function ajouté(){
    document.getElementById("accuille").style.display="none";
    document.getElementById("ajouté").style.display="block";
    document.getElementById("listes").style.display="none";
}
function liste(){
  document.getElementById("accuille").style.display="none";
    document.getElementById("ajouté").style.display="none";
    document.getElementById("listes").style.display="block";
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
/*ajoute*/
