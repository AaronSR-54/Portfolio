import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PresentationComponent } from './presentation/presentation.component';
import { StepsComponent } from './steps/steps.component';
import { BrowserModule } from '@angular/platform-browser';
import { TechnologiesComponent } from './steps/technologies/technologies.component';
import { SkillsComponent } from './steps/skills/skills.component';
import { LanguagesComponent } from './steps/languages/languages.component';

@NgModule({
  declarations: [
    PresentationComponent,
    StepsComponent,
    TechnologiesComponent,
    SkillsComponent,
    LanguagesComponent
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
