/// <reference path="../_all.ts" />

module MyResumeApp {

  export class MainController {
    static $inject = [
      'jobService',
      'skillService',
      'educationService',
      'menuItemService', 
      'contactService',     
      '$mdSidenav'
    ];
    
    constructor(
      private jobService: IJobService,
      private skillService: ISkillService,
      private educationService: IEducationService,
      private menuItemService: IMenuItemService,
      private contactService: IContactService,
		  private $mdSideNav: angular.material.ISidenavService) {
        var self = this;

        this.jobService
          .loadAllJobs()
          .then((jobs: Job[]) => {
            self.jobs = jobs;
          });

        this.skillService
          .loadAllSkills()
          .then((skills: Skill[]) => {
            self.skills = skills;
          });

        this.educationService
          .loadAllEducation()
          .then((education: Skill[]) => {
            self.education = education;
          });

        this.contactService
          .loadAllContacts()
          .then((contacts: Contact[]) => {
            self.contacts = contacts;
          });

        this.menuItemService
          .loadAllMenuItems()
          .then((menuItems: MenuItem[]) => {
            self.menuItems = menuItems;
            self.selected = menuItems[0];
            self.menuItemService.selectedMenuItem = self.selected;
          });
      }

      menuItems: MenuItem[] = [];
      selected: MenuItem = null;

      jobs: Job[] = [];
      skills: Skill[] = [];
      education: Skill[] = [];
      contacts: Contact[] = [];
    
      toggleSideNav() : void {
		    this.$mdSideNav('left').toggle();
      }

      selectMenuItem(menuItem: MenuItem) : void {
        this.selected = menuItem;
        this.menuItemService.selectedMenuItem = menuItem;

        var top = document.getElementById('content-wrapper');
        top.scrollTop = 0;

        var sidenav = this.$mdSideNav('left');
        if (sidenav.isOpen()) {
          sidenav.close();
        }
      }

      doKonami() : void {
        var myEl = angular.element(document.querySelector('body'));
        myEl.removeClass('roll').addClass('roll');
      }

  }
}