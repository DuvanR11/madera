import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-form-solicitud',
  templateUrl: './form-solicitud.component.html',
  styleUrls: ['./form-solicitud.component.scss']
})
export class FormSolicitudComponent implements OnInit {

  Tienda = true;

  // total$ = this.ShoppingCartSvc.totalAction$;
  // cart$ = this.ShoppingCartSvc.cartAction$;
  // totalP$ = this.ShoppingCartSvc.quatityAction$

  constructor() { }

  ngOnInit(): void {
  }

  onPickupOrDelivery(value: boolean): void {
    this.Tienda = value;
  }

}
