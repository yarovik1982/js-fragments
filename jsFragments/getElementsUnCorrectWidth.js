const getUnCorrectWidthElements = () => {
   const width = window.innerWidth
   const all = document.querySelectorAll('body *')
   const unCorrected = []

   for(let i = 0; i < all.length; i++){
      if(width < all[i].getBoundingClientRect().width){
         unCorrected.push(all[i])
      }
   }
   
   console.log(unCorrected);
}
getUnCorrectWidthElements()