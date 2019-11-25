import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public lista;
  public listaAux;

  constructor() {
    this.retornaDadosApi();
  }

  retornaDadosApi(){
    fetch('http://www.json-generator.com/api/json/get/cfjBorXJua?indent=2')
    .then(res => res.json())  
    .then(data => {
      this.listaAux = data;
      this.lista = this.listaAux;
    })
  }

  filtraDados(e: any) {
    this.lista = this.listaAux;

    const valorPesquisa = e.target.value;

    if (valorPesquisa && valorPesquisa.trim() != '') {
      this.lista = this.listaAux.filter((item) => {
        return (item.name.toLowerCase().indexOf(valorPesquisa.toLowerCase()) > -1);
      })
    }
  }
}
