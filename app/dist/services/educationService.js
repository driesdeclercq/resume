/// <reference path="../_all.ts" />
var MyResumeApp;
(function (MyResumeApp) {
    var EducationService = (function () {
        function EducationService($q) {
            this.$q = $q;
            this.education = [
                {
                    category: 'Opleiding',
                    column: 'left',
                    entries: [
                        {
                            name: "Symfony",
                            level: "Basisopleiding (2013)"
                        },
                        {
                            name: "Drupal Commerce",
                            level: "training door Commerce Guys (Parijs, 2011)"
                        },
                        {
                            name: "Film&Video",
                            level: "Opleiding tot 2de jaar (Academie Sint-Niklaas, 2006)"
                        },
                        {
                            name: "Industrieel Ingenieur",
                            level: "ICT, optie elektronica, (KIHO Gent, 2000)"
                        },
                        {
                            name: "Wetenschappelijke A",
                            level: "middelbaar (Sint-Janscollege Poperinge, 1994)"
                        }
                    ]
                },
                {
                    category: 'Interesses',
                    column: 'left',
                    entries: [
                        {
                            name: "Muziek en strips",
                            level: "Ik luister vooral alternatieve electronica en rock",
                        },
                        {
                            name: "Mobile Technologie",
                            level: "ik volg een aantal technologie blogs (theverge, engadget, gizmodo)"
                        },
                        {
                            name: "Sport",
                            level: "Zwemmen en wandelen (actief), voetbal, Formule 1"
                        },
                        {
                            name: "Natuur",
                            level: "Ik kijk graag een natuur documentaire en heb een kat, Otto, en visjes"
                        }
                    ]
                },
                {
                    category: 'Andere ervaring',
                    column: 'left',
                    entries: [
                        {
                            name: "Filmfestival Gent",
                            level: "voorbereiding festival, coordinatie 50-tal studenten/vrijwilligers (2006)"
                        },
                        {
                            name: "Telenet technieker",
                            level: "Installatie en herstelling (2005)"
                        },
                        {
                            name: "IT support",
                            level: "Ervaring met assembleren en herstellen van PC’s / laptops, tablets, smartphones, IT support"
                        },
                        {
                            name: "Leider jeugdbeweging",
                            level: "KSA Poperinge (1994-98)"
                        },
                        {
                            name: "",
                            level: "In bezit van auto en <strong>rijbewijs B</strong>"
                        }
                    ]
                }
            ];
        }
        EducationService.prototype.loadAllEducation = function () {
            return this.$q.when(this.education);
        };
        EducationService.$inject = ['$q'];
        return EducationService;
    }());
    MyResumeApp.EducationService = EducationService;
})(MyResumeApp || (MyResumeApp = {}));
//# sourceMappingURL=educationService.js.map