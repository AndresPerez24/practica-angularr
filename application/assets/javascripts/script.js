(function(){

  var app = angular.module('contact', []);

    app.controller('contactController', ['$http', function ($http, contactList) {

      var vm = this;

      vm.contacts = [];
   
      vm.addContact = function(){
        var contact = {
         first_name: vm.firstName,
         last_name: vm.lastName,
         birthdate: vm.birthdate,
         avatar_url: vm.avatarUrl
        }
        vm.contacts.push(contact)
      }

      vm.removeItem = function(contact){
        var index = vm.contacts.indexOf(contact);
        vm.contacts.splice(index, 1);
        console.log(index);
      }

      contactList.all()
        .then(function (response) {
          vm.contacts = response.data.people;
          console.log(vm.contacts);
        })
        .catch(function(error) {
          console.log(error)
        })
    }]);

    app.directive('listContact', function(){
      return {
        restrict : 'E',
        templateUrl: 'assets/javascripts/directives/list-contact.html'
      };
    });

})();

























// (function(){

//   var apiUrl = 'https://koombea-dummy-api.herokuapp.com/people',
//       list = document.getElementsByClassName('addresbook-list');

//   function httpGetJSON(url) {
//     return new Promise(function(resolve, reject) {
//       var req = new XMLHttpRequest();
//       req.open('GET', url, true);
//       req.onload = function() {
//         if (req.status == 200) {
//           var response = JSON.parse(req.response);
//           resolve(response);
//         }
//         else {
//           reject(Error(req.statusText));
//         }
//       };
//       req.onerror = function() {
//         reject(Error("Network Error"));
//       };
//       req.send();
//     });
//   }

//   function displayContacts(data) {
//     data.people.map(appendView);
//   }

//   function appendView(contact) {
//     var view = `<li class="addresbook-list__item">
//                   <div class="addresbook-list__image" style="background-image: url(${contact.avatar_url})"></div>
//                   ${contact.first_name} ${contact.last_name} (${contact.birthdate}) - ${contact.phone}
//                 </li>`
//     list[0].insertAdjacentHTML('beforeend', view);
//   }

//   function consoleError(error) {
//     console.log(error);
//   }

//   httpGetJSON(apiUrl)
//     .then(displayContacts)
//     .catch(consoleError);

// })(); 


