/// <reference path="../_all.ts" />

module MyResumeApp {
  
  export interface IMenuItemService {
    loadAllMenuItems(): ng.IPromise<MenuItem[]>;
    selectedMenuItem: MenuItem;
  }
  
  export class MenuItemService implements IMenuItemService {
    static $inject = ['$q'];
    
    constructor(private $q: ng.IQService) {      
    }
    
    selectedMenuItem: MenuItem = null;
    
    loadAllMenuItems() : ng.IPromise<MenuItem[]> {
        return this.$q.when(this.menuItems);
    }
    
    private menuItems: MenuItem[] = [
      {
        name: 'Profiel',
//        icon: 'perm_contact_cal',
        icon: 'person',
        template: 'dist/view/p_profile.html',
        hue: 'md-hue-1'
      },
      {
        name: 'Werkervaring',
        icon: 'laptop_mac',
        template: 'dist/view/p_experience.html',
        hue: 'md-hue-2'
      },
      {
        name: 'Beroepstechnische vaardigheden',
        icon: 'book',
        template: 'dist/view/p_skills.html',
        hue: 'md-hue-3'
      },
      {
        name: 'Opleiding & Varia',
        icon: 'school',
        template: 'dist/view/p_education.html',
        hue: 'default'
      }
    ];
  }
}