/// <reference path="../_all.ts" />
var MyResumeApp;
(function (MyResumeApp) {
    var MainController = (function () {
        function MainController(jobService, skillService, educationService, menuItemService, contactService, $mdSideNav) {
            this.jobService = jobService;
            this.skillService = skillService;
            this.educationService = educationService;
            this.menuItemService = menuItemService;
            this.contactService = contactService;
            this.$mdSideNav = $mdSideNav;
            this.menuItems = [];
            this.selected = null;
            this.jobs = [];
            this.skills = [];
            this.education = [];
            this.contacts = [];
            var self = this;
            this.jobService
                .loadAllJobs()
                .then(function (jobs) {
                self.jobs = jobs;
            });
            this.skillService
                .loadAllSkills()
                .then(function (skills) {
                self.skills = skills;
            });
            this.educationService
                .loadAllEducation()
                .then(function (education) {
                self.education = education;
            });
            this.contactService
                .loadAllContacts()
                .then(function (contacts) {
                self.contacts = contacts;
            });
            this.menuItemService
                .loadAllMenuItems()
                .then(function (menuItems) {
                self.menuItems = menuItems;
                self.selected = menuItems[0];
                self.menuItemService.selectedMenuItem = self.selected;
            });
        }
        MainController.prototype.toggleSideNav = function () {
            this.$mdSideNav('left').toggle();
        };
        MainController.prototype.selectMenuItem = function (menuItem) {
            this.selected = menuItem;
            this.menuItemService.selectedMenuItem = menuItem;
            var sidenav = this.$mdSideNav('left');
            if (sidenav.isOpen()) {
                sidenav.close();
            }
        };
        MainController.$inject = [
            'jobService',
            'skillService',
            'educationService',
            'menuItemService',
            'contactService',
            '$mdSidenav'
        ];
        return MainController;
    }());
    MyResumeApp.MainController = MainController;
})(MyResumeApp || (MyResumeApp = {}));
//# sourceMappingURL=mainController.js.map