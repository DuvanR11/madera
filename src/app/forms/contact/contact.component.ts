import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  model = {
    text: 'Dominicode',
  };
  formulario: FormGroup
  sercivios = [
    {
      id: 1,
      src: 'https://mattfarley.ca/img/projects/wfdesignbuild.png',
      text: 'Desarrollo de tiendas'
    },
    {
      id: 2,
      src: 'https://mattfarley.ca/img/projects/burkettandco.png',
      text: 'Marketing Digital'
    },
    {
      id: 3,
      src: 'https://mattfarley.ca/img/projects/chronicled.png',
      text: 'Sistema punto de venta'
    },
    {
      id: 4,
      src: 'https://mattfarley.ca/img/projects/glcsolutions.png',
      text: 'Soporte Web'
    },
    {
      id: 5,
      src: 'https://mattfarley.ca/img/projects/coupal.png',
      text: 'Soporte Web'
    },
    {
      id: 6,
      src: 'https://mattfarley.ca/img/projects/wedlerengineering.png',
      text: 'Soporte Web'
    },
  ]

  private emailPattern: any = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  constructor() {
    this.formulario = new FormGroup({
      nombres: new FormControl('', [Validators.required, Validators.minLength(3)]),
      apellidos: new FormControl('', [Validators.required, Validators.minLength(3)]),
      telefono: new FormControl('', [Validators.required, Validators.minLength(10)]),
      correo: new FormControl('', [Validators.required, Validators.minLength(6), Validators.pattern(this.emailPattern)]),
      descripcion: new FormControl('', [Validators.required, Validators.minLength(10)]),
    })
  }

  ngOnInit(): void {
  }

}
