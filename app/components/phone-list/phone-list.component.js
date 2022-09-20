'use strict';

// Register `phoneList` component, along with its associated controller and template
angular.
  module('phonecatApp').
  component('phoneList', {
    templateUrl: 'components/phone-list/phone-list.template.html',
    controller: function PhoneListController($http) {
      var self = this;
      self.orderProp = 'age';
      
      $http.get('phones/phones.json').then(function(response){
        self.phones = response.data;
      });
      // this.phones = [
      //   {
      //     name: 'Nexus S',
      //     snippet: 'Fast just got faster with Nexus S.',
      //     age: 1
      //   }, {
      //     name: 'Motorola XOOM™ with Wi-Fi',
      //     snippet: 'The Next, Next Generation tablet.',
      //     age: 2
      //   }, {
      //     name: 'MOTOROLA XOOM™',
      //     snippet: 'The Next, Next Generation tablet.',
      //     age: 3
      //   }
      // ];
      // this.orderProp = 'age';
    }
  });
