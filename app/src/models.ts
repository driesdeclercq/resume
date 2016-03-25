/// <reference path="_all.ts" />

module MyResumeApp {

	export class MenuItem {
		constructor(
			public name: string,
			public icon: string,
			public template: string,
			public hue: string) {

		}
	}

	export class Skill {
		constructor(
			public category: string,
			public column: string,
			public entries: Entry[]) {
		}
	}

	export class Entry {
		constructor(
			public name: string,
			public level: string) {
		}
	}

	export class Contact {
		constructor(
			public text: string,
			public icon: string,
			public href: string) {

		}
	}

    export class Job {
		constructor(
			public title: string,
			public company: string,
			public location: string,
			public start: string,
			public end: string,
			public description: string[],
			public logo: string,
			public referenceName: string,
			public referenceTitle: string,
			public referencePhone: string,			
			public referenceMail: string) { 
		}
    }
  }