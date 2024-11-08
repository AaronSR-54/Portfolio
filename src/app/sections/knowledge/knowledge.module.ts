import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KnowledgeComponent } from './knowledge.component';
import { TechnologiesComponent } from './technologies/technologies.component';
import { SkillsComponent } from './skills/skills.component';
import { LanguagesComponent } from './languages/languages.component';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [
    KnowledgeComponent,
    TechnologiesComponent,
    SkillsComponent,
    LanguagesComponent
  ],
  imports: [
    CommonModule,
    BrowserModule
  ],
  exports: [
    KnowledgeComponent
  ],
  providers: []
})
export class KnowledgeModule { }
