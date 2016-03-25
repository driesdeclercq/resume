/// <reference path="../_all.ts" />

module MyResumeApp {
  
  export interface IContactService {
    loadAllContacts(): ng.IPromise<Contact[]>;
  }
  
  export class ContactService implements IContactService {
    static $inject = ['$q'];
    
    constructor(private $q: ng.IQService) {      
    }
        
    loadAllContacts() : ng.IPromise<Contact[]> {
        return this.$q.when(this.contacts);
    }

    private contacts: Contact[] = [
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
        text: 'Sint-Machariusstraat, 9000 Gent',
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
}