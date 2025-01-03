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
  istagvisible = false

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
    window.open('https://wa.me/3884476453', '_blank'); // Cambia el número por el tuyo
  }

  // Abre Gmail
  sendEmail() {
    window.location.href = 'mailto:alquimialavanderia2025@gmail.com'; // Cambia el correo por el tuyo
  }

  // Abre Instagram
  openInstagram() {
    window.open('https://instagram.com/alquimialavanderia', '_blank'); // Cambia el usuario por el tuyo
  }

  scrollToAbout() {

    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });

  }

  scrollToServices() {

    document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });

  }

  openclosetag() {
    if (this.istagvisible === true) {
        // abrir tag
        this.istagvisible = false;
    } else {
        // cerrar tag
        this.istagvisible = true;
    }
  }
}