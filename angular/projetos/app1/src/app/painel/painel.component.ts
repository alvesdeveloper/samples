import { Component, OnInit, EventEmitter, Output, OnDestroy } from '@angular/core';

import { Frase } from '../shared/frase.model';
import { FRASES } from './frases-mock';

@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.css']
})
export class PainelComponent implements OnInit, OnDestroy {

  public frases: Frase[] = FRASES;
  public instrucao: string = 'Traduza a frase:';
  public resposta: string = '';
  
  public rodada: number = 0;
  public rodadaFrase: Frase;

  public percentualConcluido: number = 0;

  public tentativas: number = 3

  //o "@Output" faz o contrario do @input, ele torna o atributo exposto para o componente PAI, no caso aqui o pai é "o app.component"  
  //         @Input  => O pai emite para o filho.
  //         @Output => O filho emite para o pai.

  // O "EventEmitter" faz uma emissão do evento..
  @Output() public encerrarJogo: EventEmitter<string> = new EventEmitter()

  constructor() {
    this.atualizaRodada()
  }

  ngOnInit() {
  }

  ngOnDestroy() {

  }

  public atualizaResposta(resposta: Event): void {
    this.resposta = (<HTMLInputElement>resposta.target).value;
  }

  public verificarResposta(): void {
    
    if ( this.rodadaFrase.frasePtBr == this.resposta ) {

      //trocar pergunta..
      this.rodada++
      
      //Se chegou na rodada 4, ja concluiu tudo!
      if(this.rodada === 4){
        this.encerrarJogo.emit('vitória')
      }

      //progresso
      this.percentualConcluido = this.percentualConcluido + (100 / this.frases.length)

      //atualzia o bojeto rodadafrase
      this.atualizaRodada()
      
    }else {
      //diminuir a variavel tentativa
      this.tentativas-- //decrementando

      if (this.tentativas === -1) {
        this.encerrarJogo.emit('derrota')
      }
    }

  }

  public atualizaRodada(): void {
    this.rodadaFrase = this.frases[this.rodada]
    this.resposta = ""
  }


}
