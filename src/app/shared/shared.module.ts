import { NgModule } from '@angular/core';
import { MaterialModule } from './material/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [],
  imports: [
    MaterialModule,
    FlexLayoutModule,
    FormsModule
  ],
  exports: [
    FlexLayoutModule,
    MaterialModule,
    FormsModule
  ]
})
export class SharedModule { }

