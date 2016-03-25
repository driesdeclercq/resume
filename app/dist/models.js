/// <reference path="_all.ts" />
var MyResumeApp;
(function (MyResumeApp) {
    var MenuItem = (function () {
        function MenuItem(name, icon, template, hue) {
            this.name = name;
            this.icon = icon;
            this.template = template;
            this.hue = hue;
        }
        return MenuItem;
    }());
    MyResumeApp.MenuItem = MenuItem;
    var Skill = (function () {
        function Skill(category, column, entries) {
            this.category = category;
            this.column = column;
            this.entries = entries;
        }
        return Skill;
    }());
    MyResumeApp.Skill = Skill;
    var Entry = (function () {
        function Entry(name, level) {
            this.name = name;
            this.level = level;
        }
        return Entry;
    }());
    MyResumeApp.Entry = Entry;
    var Contact = (function () {
        function Contact(text, icon, href) {
            this.text = text;
            this.icon = icon;
            this.href = href;
        }
        return Contact;
    }());
    MyResumeApp.Contact = Contact;
    var Job = (function () {
        function Job(title, company, location, start, end, description, logo, referenceName, referenceTitle, referencePhone, referenceMail) {
            this.title = title;
            this.company = company;
            this.location = location;
            this.start = start;
            this.end = end;
            this.description = description;
            this.logo = logo;
            this.referenceName = referenceName;
            this.referenceTitle = referenceTitle;
            this.referencePhone = referencePhone;
            this.referenceMail = referenceMail;
        }
        return Job;
    }());
    MyResumeApp.Job = Job;
})(MyResumeApp || (MyResumeApp = {}));
//# sourceMappingURL=models.js.map