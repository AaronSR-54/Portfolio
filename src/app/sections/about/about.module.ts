import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PresentationComponent } from './presentation/presentation.component';
import { StepsComponent } from './steps/steps.component';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [
    PresentationComponent,
    StepsComponent
  ],
  imports: [
    CommonModule,
    BrowserModule
  ],
  exports: [
    PresentationComponent,
    StepsComponent
  ]
})
export class AboutModule { }
