//your JS code here. If required.

    document.getElementById("enterBtn").addEventListener("click",()=>{
      const p = document.getElementById("status");
		
     const h1 = document.createElement("h1");
          h1.innerText = "Entered Metaverse";
          h1.id = "status";  
          p.replaceWith(h1);
		
     })