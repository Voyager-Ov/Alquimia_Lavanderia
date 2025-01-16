import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component'; // Importa el componente 'header'
import { BodyComponent } from './body/body.component';
import { FooterComponent } from './footer/footer.component';
import { initializeAnalytics } from "./analytics";
import { initializeSpeedInsights } from './speed-insights';



@Component({
  selector: 'app-root',
  imports: [ 
    HeaderComponent,
    BodyComponent,
    FooterComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Alquimia Lavanderia';
  constructor() {
    initializeAnalytics();  // Inicializa Vercel Analytics
    initializeSpeedInsights(); // Inicializa Speed Insights
  }
  
}