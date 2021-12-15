import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  nome:string
  data: string
  quantidade: number

  camisa: number
  valor: number

  frete: string
  fretetotal:number

  constructor() { 
    this.nome =""
    this.data = ""
    this.quantidade = 0
    this.camisa = 25
    this.valor = 0
    this.frete = ''
    this.fretetotal = 0
  }

  ngOnInit(): void {
  }
  valorTotal(){
    this.valor = this.camisa * this.quantidade 
  }
  totalFrete(){
    if(this.frete == 'sp'){
      this.fretetotal = this.valor + 20
    }else{
      this.fretetotal = this.valor + 60
    }
  }

}
