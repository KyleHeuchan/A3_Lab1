(function () {
  // start with retrieving the elements from the page, and then adding event handling. then write the logic. refer to the seasons example / homework
   var theImages = document.querySelectorAll('.data-ref'),
    theHeading = document.querySelector('.modelName'),
    thePrice = document.querySelector('.priceInfo p'),
    theDetails = document.querySelector('.modelDetails p')


   function changeElements() {
     let objectIndex = carData[this.id];
     //debugger;
     theHeading.firstChild.nodeValue = carData.modelName;
     thePrice.firstChild.nodeValue = CarData.priceInfo;
     theDetails.firstchild.nodeValue = CarData.modelDetails;
}

   theImages.forEach(function(element, index) {
     element.addEventListener('click', changeElements, false);


});

})();
