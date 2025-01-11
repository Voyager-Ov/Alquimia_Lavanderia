import { Component } from '@angular/core';
import { NgIf } from '@angular/common';
import { gsap } from 'gsap';

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

   // Oculta el popup con animación
   closePopup() {
    const overlay = document.querySelector('.popup-overlay');
    const content = document.querySelector('.popup-content');
    if (overlay && content) {
      overlay.classList.add('hide');
      content.classList.add('hide');
      setTimeout(() => {
        this.isPopupVisible = false;
        overlay.classList.remove('hide');
        content.classList.remove('hide');
      }, 500); // Duración de la animación
    } else {
      this.isPopupVisible = false;
    }
  }

  // Abre WhatsApp
  // Abre WhatsApp con un mensaje predefinido
openWhatsApp() {
  const message = encodeURIComponent('Hola, me gustaría obtener más información sobre sus servicios.');
  window.open(`https://wa.me/3883527777?text=${message}`, '_blank'); // Cambia el número por el tuyo
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