import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LinkComponent } from './link/link.component';
import {ButtonComponent} from "./button/button.component";

@NgModule({
    imports: [
        CommonModule,
    ],
    declarations: [
        LinkComponent,
        ButtonComponent,
    ],
    exports: [
        LinkComponent,
        ButtonComponent,
    ]
})
export class SharedModule {}