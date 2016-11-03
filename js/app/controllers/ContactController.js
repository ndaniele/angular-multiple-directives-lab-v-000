function ContactController() {
    var vm = this;

    //vm.newContact = {};
    vm.add = add;

    vm.contacts = [{
        name: 'Bob',
        phone: '0123458690'
    },{
        name: 'Tim',
        phone: '3934203242'
    },{
        name: 'Ross',
        phone: '0684059433'
    }];

    vm.removeContact = function (index) {
        this.contacts.splice(index, 1);
    }


    function add() {
        this.contacts.push({
            name: this.name,
            phone: this.phoneNumber
        });

        this.name = '';
        this.phoneNumber = '';
    }
}

angular
    .module('app')
    .controller('ContactController', ContactController);