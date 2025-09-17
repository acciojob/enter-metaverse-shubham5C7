
 document.getElementById("enterBtn").addEventListener("click", () => {
          const statusP = document.getElementById("status");

          statusP.innerHTML = "";

          
          const h1 = document.createElement("h1");
          h1.innerText = "Entered Metaverse";

          statusP.appendChild(h1);
     });