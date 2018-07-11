import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-progresso',
  templateUrl: './progresso.component.html',
  styleUrls: ['./progresso.component.css']
})
export class ProgressoComponent implements OnInit {

  //precisamos usar uma função decoradora para receber parametros de entrada... @Input
  //Logo, poremos passar como parametro o atributo progresso do componente Progresso, dentro do template do componente Painel(Componente PAI)
  @Input() public progresso: number = 0

  constructor() { }

  ngOnInit() {
  }

}
