
import { NgModule, LOCALE_ID } from "@angular/core";
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';
import { AppComponent } from './app.component';
import { DatePipe } from "@angular/common";
import { registerLocaleData } from "@angular/common";
import localeVE from "@angular/common/locales/es-VE";
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    FontAwesomeModule,
    AppRoutingModule
  ],
  providers: [DatePipe, { provide: LOCALE_ID, useValue: "es-VE" }],
  bootstrap: [AppComponent]
})
export class AppModule { }
