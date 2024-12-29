import { Component } from '@angular/core';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [NgIf]
})
export class AppComponent {
  title = 'primer-proyecto';
  isPopupVisible = false; // Controla la visibilidad del popup

  // Muestra el popup
  openPopup() {
    this.isPopupVisible = true;
  }

  // Oculta el popup
  closePopup() {
    this.isPopupVisible = false;
  }

  // Abre WhatsApp
  openWhatsApp() {
    window.open('https://wa.me/123456789', '_blank'); // Cambia el número por el tuyo
  }

  // Abre Gmail
  sendEmail() {
    window.location.href = 'mailto:tuemail@gmail.com'; // Cambia el correo por el tuyo
  }

  // Abre Instagram
  openInstagram() {
    window.open('https://instagram.com/tuusuario', '_blank'); // Cambia el usuario por el tuyo
  }

  scrollToAbout() {

    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });

  }

  scrollToServices() {

    document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });

  }
}