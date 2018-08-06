import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {HttpModule} from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
//Components 
import { HomeComponent } from './home/home.component';
import {HeaderComponent} from './header/header.component'
import { FooterComponent } from './footer/footer.component';
import {NavbarComponent} from './navbar/navbar.component'
//Pipes
import { FilterPipe} from './Pipes/custom-pipes.pipe';
//services
import {ServiceService} from './services/service.service';
//Drag and drop for sorting 
import {SortablejsModule} from 'angular-sortablejs'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FilterPipe,
    FooterComponent,
    NavbarComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule ,
    HttpModule,
    HttpClientModule,
    SortablejsModule.forRoot({
      animation: 150
    }),
  ],
  providers: [ServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
