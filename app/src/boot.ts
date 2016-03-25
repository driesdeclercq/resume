/// <reference path="_all.ts" />

module MyResumeApp {
	angular.module('myResumeApp', ['ngMaterial', 'ngMdIcons', 'ngSanitize'])
		.service('jobService', JobService)
		.service('skillService', SkillService)
		.service('educationService', EducationService)
		.service('menuItemService', MenuItemService)
		.service('contactService', ContactService)
    .controller('mainController', MainController)
    .config(($mdIconProvider: angular.material.IIconProvider,
                 $mdThemingProvider: angular.material.IThemingProvider) => {
      $mdIconProvider
        .icon('pdf-icon', './assets/svg/file-pdf-box.svg', 24);

      // Extend the grey theme with a few different colors
      var myColorMap = $mdThemingProvider.extendPalette('grey', {
        '500': '93C8EE',
        '700': '2E72B8',
        '800': 'ED6F1C',
        '900': '424242'
      });
      $mdThemingProvider.definePalette('grey', myColorMap);
      
      var myAccentMap = $mdThemingProvider.extendPalette('teal', {
        '500': '545454'
      });
      $mdThemingProvider.definePalette('teal', myAccentMap);

      var myWarnMap = $mdThemingProvider.extendPalette('blue-grey', {
        '500': 'C5C5C5'
      });
      $mdThemingProvider.definePalette('blue-grey', myWarnMap);

      $mdThemingProvider.theme('default')
        .primaryPalette('grey', {
          'default': '500',
          'hue-1': '700',
          'hue-2': '800',
          'hue-3': '900',
        })
        .warnPalette('teal')
        .accentPalette('blue-grey')
    });
}