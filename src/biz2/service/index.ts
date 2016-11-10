import { Injectable }  from '@angular/core';
import { Router } from '@angular/router';


@Injectable()
export class GotoService{

    constructor(private router:Router){}

    goto(url){
        this.router.navigate([url]);
    }
}
