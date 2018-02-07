import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { JsonpModule, HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { WeatherComponent } from './weather-widget/weather.component';

import { SpeedUnitPipe } from './weather-widget/weather.speed-unit.pipe';
import { TempUnitPipe } from './weather-widget/weather.temp-unit.pipe';

@NgModule({
  declarations: [
    AppComponent,
    WeatherComponent,
    SpeedUnitPipe,
    TempUnitPipe
  ],
  imports: [
    BrowserModule,
    JsonpModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
