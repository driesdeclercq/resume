/// <reference path="../_all.ts" />
var MyResumeApp;
(function (MyResumeApp) {
    var JobService = (function () {
        function JobService($q) {
            this.$q = $q;
            this.jobs = [
                {
                    title: 'Drupal Back-end Developer',
                    company: 'Wunderkraut',
                    location: 'Gent',
                    start: '2013',
                    end: '2015',
                    description: [
                        'Drupal site building en theming',
                        'Ontwikkelen van custom Drupal modules voor integratie van REST services, data import',
                        'Product owner voor projecten Carrefour MyInvoice, Syntra Midden-Vlaanderen',
                        'Werken in klein agile team met Scrum'
                    ],
                    logo: './assets/logos/wunderkraut.png',
                    referenceName: 'Dieter',
                    referenceTitle: '',
                    referencePhone: '(0) 486 830 716',
                    referenceMail: 'dieter@wunderkraut.com'
                },
                {
                    title: 'Drupal Back-end en Front-end Developer',
                    company: 'One Agency',
                    location: 'Gent',
                    start: '2010',
                    end: '2013',
                    description: [
                        'Drupal site building en theming, ontwikkelen van custom Drupal modules',
                        'Belangrijke projecten: Vier en Vijf TV, Leonardo Energy (forum voor herbruikbare energie), ZebWeb (online shop ZEB)',
                        'Schrijven documentatie voor de klant voor gebruik van de site back-end',
                        'Werken in klein agile team met Kanban'
                    ],
                    logo: './assets/logos/oneagency.png',
                    referenceName: 'Dieter',
                    referenceTitle: '',
                    referencePhone: '(0) 486 830 716',
                    referenceMail: 'dieter@wunderkraut.com'
                },
                {
                    title: 'Lector en IT support',
                    company: 'Artevelde Hogeschool',
                    location: 'Mariakerke',
                    start: '2009',
                    end: '2010',
                    description: [
                        'Aan de afdeling Grafische en Digitale Media',
                        'Lector voor de vakken Webtechnologie (HTML en CSS), Audio&Video, Object Georiënteerd Programmeren in C#',
                        'Opmaken cursus voor OOP in C#',
                        'Assistent IT support: onderhoud en installatie van het computerpark op de campus'
                    ],
                    logo: './assets/logos/artevelde.jpg',
                    referenceName: 'Luk Bouters',
                    referenceTitle: '',
                    referencePhone: '(0) 486 830 716',
                    referenceMail: 'luk.bouters@arteveldehs.be'
                },
                {
                    title: 'Technical Content Developer',
                    company: 'U&I Learning',
                    location: 'Gent',
                    start: '2006',
                    end: '2008',
                    description: [
                        'Ontwikkelen van technische bedrijfsdocumentatie gebaseerd op Information Mapping (IMAP)',
                        'Voor oa. Texaco, Infrabel en DEME (Dredging International)',
                        'Documentatie in het Nederlands en Engels',
                        'Schrijven scenario’s voor Flash animaties gebruikt in online cursussen'
                    ],
                    logo: './assets/logos/ui.png',
                    referenceName: 'Dieter',
                    referenceTitle: '',
                    referencePhone: '(0) 486 830 716',
                    referenceMail: 'luk.bouters@arteveldehs.be'
                },
                {
                    title: 'Programmeur en Web Developer',
                    company: '@rrowUp',
                    location: 'Gent',
                    start: '2002',
                    end: '2004',
                    description: [
                        'Integratie van ontwerp en back-end via XSL/XSLT voor website TeleticketService',
                        'Divers programmeer werk, oa aanpassen drivers voor print terminals voor apotheken'
                    ],
                    logo: './assets/logos/arrowup.jpg',
                    referenceName: 'Johan Vandenbroucke',
                    referenceTitle: '',
                    referencePhone: '',
                    referenceMail: 'jvandenbroucke@arrowup-online.com'
                },
                {
                    title: 'Support Engineer',
                    company: '@nker',
                    location: 'Asse',
                    start: '2002',
                    end: '',
                    description: [
                        'Deze firma installeert en onderhoudt computergestuurde kassasystemen.',
                        'Ik was technisch medewerker van het support team',
                        'Voor 1 project (Kruidvat) verzorgde ik de opleiding van de techniekers en het stock beheer.'
                    ],
                    logo: '',
                    referenceName: '',
                    referenceTitle: '',
                    referencePhone: '',
                    referenceMail: ''
                }
            ];
        }
        JobService.prototype.loadAllJobs = function () {
            return this.$q.when(this.jobs);
        };
        JobService.$inject = ['$q'];
        return JobService;
    }());
    MyResumeApp.JobService = JobService;
})(MyResumeApp || (MyResumeApp = {}));
//# sourceMappingURL=jobService.js.map