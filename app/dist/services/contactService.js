/// <reference path="../_all.ts" />
var MyResumeApp;
(function (MyResumeApp) {
    var ContactService = (function () {
        function ContactService($q) {
            this.$q = $q;
            this.contacts = [
                {
                    text: 'dries.declercq@gmail.com',
                    icon: 'email',
                    href: 'mailto:dries.declercq@gmail.com'
                },
                {
                    text: '+32 (0) 486 480 847',
                    icon: 'phone',
                    href: 'tel:+32486480847'
                },
                {
                    text: 'Hangouts chat',
                    icon: 'hangouts',
                    href: 'https://hangouts.google.com/call/yssqn7v6ebdz5fbey6d5xk4x5ye'
                },
                {
                    text: 'Sint-Machariusstraat 24<br>9000 Gent',
                    icon: 'map',
                    href: 'https://goo.gl/maps/GQYCpxxuw5C2'
                },
                {
                    text: 'linkedin.be/in/3sdeclercq',
                    icon: 'linkedin',
                    href: 'http://linkedin.be/in/3sdeclercq'
                }
            ];
        }
        ContactService.prototype.loadAllContacts = function () {
            return this.$q.when(this.contacts);
        };
        ContactService.$inject = ['$q'];
        return ContactService;
    }());
    MyResumeApp.ContactService = ContactService;
})(MyResumeApp || (MyResumeApp = {}));
//# sourceMappingURL=contactService.js.map