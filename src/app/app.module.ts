import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GitbubComponent } from './gitbub/gitbub.component';
import { GithubFormComponent } from './github-form/github-form.component';
import { GithubDetailsComponent } from './github-details/github-details.component';

@NgModule({
  declarations: [
    AppComponent,
    GitbubComponent,
    GithubFormComponent,
    GithubDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
