import { Component } from '@angular/core';

/*o decorator abaixo é que torna a classe abaixo um componente e encaminha pra classe alguns metadados*/
/* conseguimos usar este decorator porque fizemos o import do modulo "component", acima*/
@Component({
    selector: 'app-topo', /*indica qual será o rotulo usado para instancia desse componente*/
    templateUrl: './topo.component.html', /*indica qual o template que a classe abaixo controlará*/
    styleUrls: ['./topo.component.css']
})

export class TopoComponent {
    public  titulo: string = 'Aprendendo Inglês';
}