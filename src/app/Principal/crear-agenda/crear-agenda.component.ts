import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UsuarioService } from 'src/app/services/usuario.service';
import { StecnicoService } from 'src/app/services/stecnico.service';
import { AgendaService } from 'src/app/services/Agenda.service';
import { Agenda, Stecnico, Usuario } from 'src/app/models/Agenda.model';

@Component({
  selector: 'app-crear-agenda',
  templateUrl: './crear-agenda.component.html',
  styleUrls: ['./crear-agenda.component.css']
})
export class CrearAgendaComponent implements OnInit {

  Stecnico: Stecnico[] = [];//Todos los equipos registrados



 usuario: Usuario = this.usuarioService.Usuario;// Contiene la información de usuario

  AgendaForm!: FormGroup;// Formulario JSON


  constructor(private StecnicoService: StecnicoService,
    private usuarioService: UsuarioService,
    private AgendaService: AgendaService,
    private fb: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.AgendaForm = this.fb.group({
      usuario: [this.usuario],
      fecha: [''],
      nombre: ['']
    })
    this.traerStecnico()
  }

  traerStecnico(): void {
    this.StecnicoService.obtenerStecnico().subscribe((Stecnico: any) => {
      this.Stecnico = Stecnico;
    })
  }

  /* agregar() {

    this.Stecnico.forEach((element:any) => {
      if(this.partidoForm.controls['local'].value==element.id){
        this.equipoLocal=element
        
        this.partidoForm.controls['local'].setValue(element)
       
      }     
      
    });

    console.log(this.partidoForm.value)
     this.partidoService.agregarPartido(this.partidoForm.value).subscribe(data=>{
       console.log(data)
     })

  }  */

}