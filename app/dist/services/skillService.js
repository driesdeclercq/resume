/// <reference path="../_all.ts" />
var MyResumeApp;
(function (MyResumeApp) {
    var SkillService = (function () {
        function SkillService($q) {
            this.$q = $q;
            this.skills = [
                {
                    category: 'Web Development',
                    column: 'left',
                    entries: [
                        {
                            name: "PHP",
                            level: "meest recente ervaring, vlot gebruik voor OOP development en Drupal modules"
                        },
                        {
                            name: "C#, C++ en JAVA",
                            level: "degelijke kennis door gebruik in vorige werkervaring"
                        },
                        {
                            name: "Design patterns",
                            level: "basiskennis"
                        },
                        {
                            name: "SQL",
                            level: "goede kennis"
                        },
                        {
                            name: "CSS 2 & 3",
                            level: "goede kennis en vlot gebruik"
                        },
                        {
                            name: "LESS en SASS",
                            level: "goede kennis"
                        },
                        {
                            name: "Javascript en JQuery",
                            level: "goede kennis"
                        },
                        {
                            name: "Responsive theming",
                            level: "goede kennis"
                        },
                        {
                            name: "AngularJS",
                            level: "basis"
                        }
                    ]
                },
                {
                    category: 'Grafische software',
                    column: 'left',
                    entries: [
                        {
                            name: "Adobe Illustrator en Photoshop",
                            level: "degelijke kennis voor front-end development"
                        },
                        {
                            name: "Adobe Fireworks",
                            level: "goed"
                        },
                        {
                            name: "Adobe Premiere",
                            level: "basis"
                        },
                        {
                            name: "GIMP",
                            level: "vlot gebruik"
                        }
                    ]
                },
                {
                    category: 'Talen',
                    column: 'right',
                    entries: [
                        {
                            name: "Nederlands",
                            level: "moedertaal"
                        },
                        {
                            name: "Engels",
                            level: "uitstekend"
                        },
                        {
                            name: "Frans",
                            level: "goed"
                        },
                        {
                            name: "Spaans",
                            level: "basis"
                        },
                        {
                            name: "Duits",
                            level: "basis"
                        }
                    ]
                },
                {
                    category: 'Version Control',
                    column: 'right',
                    entries: [
                        {
                            name: "GIT",
                            level: "goede kennis en vlot gebruik"
                        },
                        {
                            name: "SVN",
                            level: "goed"
                        }
                    ]
                },
                {
                    category: 'CMS',
                    column: 'right',
                    entries: [
                        {
                            name: "Drupal 6 & 7",
                            level: "uitstekend"
                        },
                        {
                            name: "Drupal 8",
                            level: "basis"
                        },
                        {
                            name: "Wordpress",
                            level: "basis"
                        }
                    ]
                }
            ];
        }
        SkillService.prototype.loadAllSkills = function () {
            return this.$q.when(this.skills);
        };
        SkillService.$inject = ['$q'];
        return SkillService;
    }());
    MyResumeApp.SkillService = SkillService;
})(MyResumeApp || (MyResumeApp = {}));
//# sourceMappingURL=skillService.js.map