import {Component, OnInit} from '@angular/core';
import { from } from 'rxjs';
import { KnukimDiplomasService} from '../../services/knukimDiplomas.service';
import {Diploma} from '../../services/diploma'

@Component({
    selector:'knukim',
    templateUrl:'knukim.component.html',
    styleUrls: ['knukim.component.scss']
})

export class KnukimComponent implements OnInit {
   
    diplomas:Diploma[];


    constructor(private ImgService: KnukimDiplomasService){}

    ngOnInit(){
        this.diplomas=this.ImgService.getImgs();
    }
}