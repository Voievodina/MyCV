import {Injectable} from '@angular/core';
import {Diploma} from './diploma'

@Injectable()
export class KnukimDiplomasService{
    private Diplomas:Diploma[]=[
        {page:1,
            src:"../../../assets/img/knukim.jpg"
        },
        {
            page:2,
            src:"../../../assets/img/knukim2.jpg"
        }
    ]

    getImgs():Diploma[]{
        return this.Diplomas
    }

    getImg(page:number):Diploma{
        return this.Diplomas.find((elem)=>elem.page===page);
    }
}