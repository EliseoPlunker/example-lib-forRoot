import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';  
import { environment } from './../environments/environment';

import { AppComponent } from './app.component';
import { AppLibModule} from 'app-lib'

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,CommonModule,AppLibModule.forRoot({userName: environment.userName})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
