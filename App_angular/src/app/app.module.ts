import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component'; // Import AppComponent

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
  ],
  providers: [],
})
export class AppModule {}

// Use bootstrapApplication function for bootstrap
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { bootstrapApplication } from '@angular/platform-browser';

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

bootstrapApplication(AppComponent)
  .catch(err => console.error(err));
