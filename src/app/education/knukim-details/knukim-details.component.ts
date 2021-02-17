import {Component, OnInit} from "@angular/core";
import {ActivatedRoute, Router} from '@angular/router';
import {KnukimDiplomasService} from '../../services/knukimDiplomas.service'
import {Diploma} from '../../services/diploma';


@Component({
    selector: "knukim-details",
    templateUrl: "knukim-details.component.html",
    styleUrls:["knukim-details.component.scss"]
})
export class KnukimDetailsComponent implements OnInit{
    
    
    activeImg:Diploma;
    constructor(private ImgService: KnukimDiplomasService,  private ActivatedRoute:ActivatedRoute, private Router:Router){}

    ngOnInit(){
        
        const page=+this.ActivatedRoute.snapshot.params['page'];
        this.activeImg=this.ImgService.getImg(page);
    }
    
    goBack(){
        this.Router.navigate(['education/knukim']);
        console.log(5)
    }
}