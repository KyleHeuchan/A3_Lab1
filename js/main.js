(function () {
  // start with retrieving the elements from the page, and then adding event handling. then write the logic. refer to the seasons example / homework
   var theImages = doucment. querySelectorAll('data-ref'),
   var theHeading = document.querySelector ('modelName'),
   var thePrice = document.querySelector('priceInfo p'),
   var theDetails = document.querySelector('modelDetails p')
   applieClass;

   function changeElements() {
     let objectIndex = carData[this.id];
     debugger;
     theSubhead.firstChild.nodeValue = carData.headline;
     theSeasonText.firstChild.nodeValue = CarData.text;
     theDetails.firstchild.nodeValue = CarData.text;

}

   theImages.forEach(function(element, index) {
     element.addEventListener('click', changeElements, false);


});

})();
