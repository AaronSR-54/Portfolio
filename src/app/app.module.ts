import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BannerComponent } from './banner/banner.component';
import { AboutComponent } from './sections/about/about.component';
import { ExperienceComponent } from './sections/experience/experience.component';
import { KnowledgeComponent } from './sections/knowledge/knowledge.component';
import { ProjectsComponent } from './sections/projects/projects.component';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './header/menu/menu.component';
import { KnowledgeModule } from './sections/knowledge/knowledge.module';

@NgModule({
  declarations: [
    AppComponent,
    BannerComponent,
    AboutComponent,
    ExperienceComponent,
    ProjectsComponent,
    HeaderComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    KnowledgeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
