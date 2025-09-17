//your JS code here. If required.

    document.getElementById("enterBtn").addEventListener("click",()=>{
      const p = document.getElementById("status");

      const h1 = document.createElement("h1");
      h1.innerText ="Enter the Metaverse";
 p.replaceWith(h1);
     })