import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import {ProfileService} from './services/profile.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfileComponent } from './components/profile/profile.component';

import { DateCountPipe } from './date-count.pipe'
import { BasicHighlightDirective } from './basic-highlight.directive';

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    
    DateCountPipe,
    BasicHighlightDirective,
  ],
  imports: [
    BrowserModule,
    
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [ProfileService],
  bootstrap: [AppComponent]
})
export class AppModule { }
