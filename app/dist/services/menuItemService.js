/// <reference path="../_all.ts" />
var MyResumeApp;
(function (MyResumeApp) {
    var MenuItemService = (function () {
        function MenuItemService($q) {
            this.$q = $q;
            this.selectedMenuItem = null;
            this.menuItems = [
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
        MenuItemService.prototype.loadAllMenuItems = function () {
            return this.$q.when(this.menuItems);
        };
        MenuItemService.$inject = ['$q'];
        return MenuItemService;
    }());
    MyResumeApp.MenuItemService = MenuItemService;
})(MyResumeApp || (MyResumeApp = {}));
//# sourceMappingURL=menuItemService.js.map