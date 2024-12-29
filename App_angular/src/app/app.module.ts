import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common'; // Asegúrate de importar esto
import { AppComponent } from './app.component';

@NgModule({
  imports: [
    BrowserModule,
    CommonModule, // Añade CommonModule aquí
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
