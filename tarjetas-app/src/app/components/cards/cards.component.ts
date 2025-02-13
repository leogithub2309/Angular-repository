import { Component, OnInit, inject } from '@angular/core';
import { TarjetasService } from '../../servicios/tarjetas.service';
import { Tarjeta } from '../../model/tarjeta';


@Component({
  selector: 'app-cards',
  imports: [],
  providers: [TarjetasService],
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.css'
})
export class CardsComponent implements OnInit{

  tarjetas: Tarjeta[] = [];
  tarjetasServices = inject(TarjetasService);
  
  ngOnInit(): void {
    this.tarjetasServices.getTarjetas().subscribe({
      next: (res) => {
        this.tarjetas = res.data;
        console.log(this.tarjetas);
      },
      error: (err) => console.error(err)
    })
  }

}
