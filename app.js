(function() {
   var app = angular.module('esec-website', [ ]);
   
   app.controller('SpeakerController', function() {
      this.speakers = guests;
   });
   
   app.controller('PanelController', function() {
      this.tab = 0;
      
      this.selectTab = function(setTab) {
         this.tab = setTab;
      };
      this.isSelected = function(checkTab) {
         return this.tab === checkTab;
      };
   });
   
   var guests = [
      {
         name: 'Rui Janson',
         provenance: 'Assam, India',
         description: 'This is the first person.',
         canPurchase: true
      }, 
      {
         name: 'Rahul Chandan',
         provenance: 'Tibet, China',
         description: 'This is the second person.',
         canPurchase: true
      },
      {
         name: 'Malik Ismail',
         provenance: 'Canada, Canada',
         description: 'This is the third person.',
         canPurchase: true
      }
   ];
})();