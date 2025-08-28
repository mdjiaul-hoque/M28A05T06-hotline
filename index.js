document.getElementById("callbutton").addEventListener("click",function(e){
    e.preventDefault()
    console.log("yes tiggered")

   const avablecoint = parseInt(document.getElementById("coin-count").innerText)

   const currentCoin = avablecoint - 20 ; 
   
   

  


   if (currentCoin < 20 ) {
    alert("not enf coin for call")
    return;
   }

    document.getElementById("coin-count").innerText = currentCoin;
   
})

// HeardCount
document.getElementById("heardicon").addEventListener("click",function(e){
    e.preventDefault()

   const avableheart = parseInt(document.getElementById("heard-count").innerText)

   const currentheard = avableheart + 1 ; 
   
   

   document.getElementById("heard-count").innerText = currentheard;
})

// Copycount
document.getElementById("copyicon").addEventListener("click",function(e){
    e.preventDefault()

   const avablecopy = parseInt(document.getElementById("copy-count").innerText)

   const currentcopy = avablecopy + 1 ; 
   
   

   document.getElementById("copy-count").innerText = currentcopy +1;
})


