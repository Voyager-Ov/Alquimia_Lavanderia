import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component'; // Importa el componente 'header'
import { BodyComponent } from './body/body.component';
import { FooterComponent } from './footer/footer.component';


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
}