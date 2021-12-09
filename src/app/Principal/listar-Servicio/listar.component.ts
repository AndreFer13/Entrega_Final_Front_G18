import { Component, Input, OnInit } from '@angular/core';
import { Stecnico } from 'src/app/models/Stecnico.model';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {

  @Input('entrada') public Stecnico: Stecnico[]=[];
  
  constructor() { }

  ngOnInit(): void {
  }

}
