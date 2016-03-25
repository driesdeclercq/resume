/// <reference path="../_all.ts" />
var MyResumeApp;
(function (MyResumeApp) {
    var TrainingService = (function () {
        function TrainingService($q) {
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
                }
            ];
        }
        TrainingService.prototype.loadAllEducation = function () {
            return this.$q.when(this.education);
        };
        TrainingService.$inject = ['$q'];
        return TrainingService;
    }());
    MyResumeApp.TrainingService = TrainingService;
})(MyResumeApp || (MyResumeApp = {}));
//# sourceMappingURL=trainingService.js.map