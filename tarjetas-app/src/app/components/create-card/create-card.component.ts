import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { ReactiveFormsModule, FormControl, FormBuilder, Validators, FormGroup } from '@angular/forms';
import { TarjetasService } from '../../servicios/tarjetas.service';
import { Tarjeta } from '../../model/tarjeta';

@Component({
  selector: 'app-create-card',
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  providers: [TarjetasService],
  templateUrl: './create-card.component.html',
  styleUrl: './create-card.component.css'
})
/*
regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;
regexComments = /^.{1,255}$/;
/^([\VE])-?(\d+)+$/
*/
export class CreateCardComponent implements OnInit{

  tarjetas!: FormGroup;
  tarjetasServices = inject(TarjetasService);

  constructor(
    private fb: FormBuilder
  ){
    this.tarjetas = this.fb.group({
      nombre: new FormControl('', [Validators.required, Validators.pattern(/^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/)]),
      nroTarjeta: new FormControl('', [Validators.required, Validators.pattern(/^[0-9]+$/)]),
      telefono: new FormControl('', [Validators.required, Validators.pattern(/^[0-9]+$/), Validators.maxLength(11)]),
      direccion: new FormControl('', [Validators.required, Validators.pattern(/^[A-Za-zÑñÁáÉéÍíÓóÚúÜü0-9\s]+$/)]),
      codigo_postal: new FormControl('', [Validators.required, Validators.pattern(/^[0-9]+$/), Validators.maxLength(4)]),
      cedula: new FormControl('', [Validators.required, Validators.pattern(/^[0-9]+$/), Validators.maxLength(8)]),
      nacionalidad: new FormControl('', [Validators.required]),
      fecha_vencimiento: new FormControl('', [Validators.required])
    })
  }
  
  ngOnInit(): void {
    
  }

  onSubmit(): void {

    const tarjeta: Tarjeta = {
      nombre: this.tarjetas.get("nombre")?.value,
      nroTarjeta: this.tarjetas.get("nroTarjeta")?.value,
      telefono: this.tarjetas.get("telefono")?.value,
      direccion: this.tarjetas.get("direccion")?.value,
      codigo_postal: this.tarjetas.get("codigo_postal")?.value,
      cedula: this.tarjetas.get("nacionalidad")?.value + this.tarjetas.get("cedula")?.value,
      fecha_vencimiento: this.tarjetas.get("fecha_vencimiento")?.value,
    }

    this.tarjetasServices.createNewCard(tarjeta).subscribe({
      next: (response) => {
        console.log(response);
        if(response.result.affectedRows === 1){
          alert(`${response.title}, Se agregó una nueva tarjeta correctamente`);
          setTimeout(() => {
            location.reload();
          }, 1000);
        }
      },
      error: (err) => console.error(err)
    })

  }

}
