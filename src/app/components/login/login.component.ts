import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertaService } from 'src/app/servicios/alerta.service';
import { NgIf } from '@angular/common';
import { FooterComponent } from "../footer/footer.component";

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.component.html',
  imports: [ReactiveFormsModule, NgIf, FooterComponent],
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent  implements OnInit {

  formularioRegistro: FormGroup;
  formularioLogin: FormGroup;

  constructor(
    private elementRef: ElementRef,
    private fb: FormBuilder,
    private http: HttpClient,
    private router: Router,
    private alertaService: AlertaService
  ) {
    // Formulario de registro
    this.formularioRegistro = this.fb.group({
      userName: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });

    // Formulario de login
    this.formularioLogin = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  ngOnInit(): void {

    this.verificarConexion();
    this.obtenerUsuarios();
    const signUpButton = this.elementRef.nativeElement.querySelector('#signUp');
    const signInButton = this.elementRef.nativeElement.querySelector('#signIn');
    const container = this.elementRef.nativeElement.querySelector('#container');

    if (signUpButton && signInButton && container) {
      signUpButton.addEventListener('click', () => {
        container.classList.add('right-panel-active');
      });

      signInButton.addEventListener('click', () => {
        container.classList.remove('right-panel-active');
      });
    } else {
      console.error('No se encontraron los elementos de signUp, signIn o container');
    }

    
  }

  obtenerUsuarios(): void {
    console.log('📢 Solicitando lista de usuarios...');

    this.http.get<any[]>('https://api-app-hibrida.onrender.com/traerUsuarios')
        .subscribe(
            (usuarios) => {
                console.log('✅ Usuarios recibidos:', usuarios);
            },
            (error) => {
                console.error('❌ Error al obtener usuarios:', error);
            }
        );
}


  verificarConexion(): void {
    this.http.get<{ success: boolean; message: string }>('https://api-app-hibrida.onrender.com/probarConect', { observe: 'response' })
      .subscribe(
        (response) => {
          console.log('✅ Respuesta de la API:', response);  // Asegura que se imprime toda la respuesta
          console.log('✅ Body:', response.body);  // Verifica si el cuerpo existe
  
          if (response.body?.success) {
            console.log('✅ Mensaje:', response.body.message);  // Verifica el mensaje exacto
            window.alert(response.body.message);
          } else {
            console.warn('⚠️ Error de conexión detectado en la API');
            window.alert('Error de conexión');
          }
        },
        (error) => {
          console.error('❌ Error de conexión:', error);
          window.alert('No se pudo conectar a la base de datos');
        }
      );
  }
  
  

  onSubmitRegistro(): void {
    if (this.formularioRegistro.valid) {
        const formData = this.formularioRegistro.value;

        console.log('📤 Datos enviados al servidor:', formData);

        const headers = { 'Content-Type': 'application/json' };

        this.http.post('https://api-app-hibrida.onrender.com/register', formData, { headers })
            .subscribe(
                (response: any) => {
                    console.log('✅ Respuesta del servidor:', response);
                    alert('Usuario registrado correctamente');
                    this.router.navigate(['/home']);
                },
                (error) => {
                    console.error('❌ Error de registro:', error);

                    if (error.status === 400) {
                        alert(error.error?.error || 'Todos los campos son obligatorios');
                    } else {
                        alert('Error al registrar, intenta de nuevo');
                    }
                }
            );
    } else {
        console.log('⚠️ Formulario de registro inválido', this.formularioRegistro.errors);
    }
}


  
  

  onSubmitLogin(): void {
    if (this.formularioLogin.valid) {
      const tipoUsuario = this.formularioLogin.value.tipoUsuario;

      if (tipoUsuario === 'cliente') {
        this.onSubmitLoginCliente();
      } 
    } else {
      console.log('Formulario de inicio de sesión inválido');
    }
  }

  onSubmitLoginCliente(): void {
    if (this.formularioLogin.valid) {
        const loginData = {
            email: this.formularioLogin.value.email,  
            password: this.formularioLogin.value.password
        };

        console.log('📤 Intentando iniciar sesión con:', loginData);

        this.http.post<any>('https://api-app-hibrida.onrender.com/login', loginData).subscribe(
            (response) => {
                console.log('✅ Inicio de sesión exitoso:', response);
                alert('Inicio de sesión exitoso'); // Muestra la alerta
                this.router.navigate(['/home']); // Redirige al home
            },
            (error) => {
                console.error('❌ Error en el inicio de sesión:', error);

                if (error.status === 400) {
                    alert('Todos los campos son obligatorios.');
                } else if (error.status === 404) {
                    alert('Usuario no encontrado.');
                } else if (error.status === 401) {
                    alert('Contraseña incorrecta.');
                } else {
                    alert('Error al iniciar sesión, intenta de nuevo más tarde.');
                }
            }
        );
    } else {
        console.log('⚠️ Formulario de inicio de sesión inválido');
    }
}


}