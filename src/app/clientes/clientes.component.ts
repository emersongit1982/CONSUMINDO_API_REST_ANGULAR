import { Component, OnInit } from '@angular/core';
import { ClientesService } from '../clientes.service';
import { ClienteModel } from './cliente.model';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {

cliente: ClienteModel = new ClienteModel();
clientes: Array<any> = new Array();

  constructor(private clientesService: ClientesService) { }

  ngOnInit(){
this.listarClientes();
  }

atualizar(id: number){
  this.clientesService.atualizarCliente(id, this.cliente).subscribe(cliente =>{
    this.cliente = new ClienteModel();
    this.listarClientes(); 
  }, err=>{
    console.log('Erro ao atualizar cliente', err)
  })
}

remover(id: number){
  this.clientesService.removerCliente(id).subscribe(cliente =>{
    this.cliente = new ClienteModel();
    this.listarClientes(); 
  }, err=>{
    console.log('Erro ao remover cliente', err)
  })
}



cadastrar(){
  console.log(this.cliente);
  this.clientesService.cadastrarCliente(this.cliente).subscribe(cliente =>{
    this.cliente = new ClienteModel();
    this.listarClientes(); 

  }, err=>{
    console.log('Erro ao cadastrar cliente', err)
  })

}

    listarClientes(){
     this.clientesService.listarClientes().subscribe(clientes => { 
       this.clientes = clientes;
     }, err => {
       console.log('Erro ao listar os clientes', err);
     })
  }
}
