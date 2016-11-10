import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactService } from '../service/concatService';
import { ContactComponent } from '../component/concat';
import { AwesomePipe } from '../pipe/awesome';
import { FormsModule } from '@angular/forms';

@NgModule({
    imports: [CommonModule, FormsModule],
    declarations: [ContactComponent, AwesomePipe],
    exports: [ContactComponent],
    providers: [ ContactService ]
})
export class ConcatModule{
}