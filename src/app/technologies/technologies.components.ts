import {Component, OnInit} from '@angular/core';

@Component({
    selector: "technologies",
    templateUrl: "technologies.component.html",
    styleUrls: ["technologies.component.scss"]

})
export class TechnologiesComponent {

    constructor(){}

    technologies = [
        {name: 'HTML5', description: 'Hypertext markup language'},
        {name: 'CSS3', description: 'Cascading Style Sheets'},
        {name: 'JS', description: 'JavaScript'},
        {name: 'TS', description: 'TypeScript'},
        {name: 'GIT', description: 'Version-control system'},
        {name: 'Bootstrap 4', description: 'Twitter bootstrap 4'},
        {name: 'SASS&SCSS', description: 'CSS Preprocessor'},
        {name: 'Angular', description: 'Javascript framework'},
      ];

}
