import { Component } from '@angular/core';
import { NgIf } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [NgIf, ReactiveFormsModule]
  
})
export class AppComponent {
  title = 'Alquimia Lavandería';
  isPopupVisible = false; // Controla la visibilidad del popup
  istagvisible = false
  contactForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required, Validators.maxLength(50)]],
      email: ['', [Validators.required, Validators.email, Validators.maxLength(100)]],
      message: ['', [Validators.required, Validators.maxLength(250)]]
    });
  }

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
  // Formulario de contacto
  
  onSubmit() {
    if (this.contactForm.valid) {
      console.log(this.contactForm.value);
      // Handle form submission
      
    }
  }
  
}