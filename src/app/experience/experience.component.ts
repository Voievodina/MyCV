import {Component, AfterViewInit} from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations'; 

@Component({
    selector: "experience",
    templateUrl: "experience.component.html",
    styleUrls: ["experience.component.scss"], 
    animations:[
        trigger(
            'openYears',[
                state('start', style({
                    right: "-20%",
                    width:0
                })),
                state('end', style({
                    right:"-1%",
                    width:"200px"
                })),
                transition('start=>end', [animate('0.5s')])
            ]
        )
    ]
})

export class ExperienceComponent implements AfterViewInit{
    
    state:string="start";
    
    ngAfterViewInit(){
        setTimeout( () => {
            this.state = "end" ;
            }, 100);
    }
}