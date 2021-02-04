import { AddressProtocol } from './interfaces/address-protocol'

export class Address implements AddressProtocol {
  rua: string;
  numero: number;
  complemento: string;
  bairro: string;
  cidade: string;
  estado: string;

  constructor(rua: string, numero: number, bairro: string, cidade: string, estado: string,complemento: string = '') {
    this.rua = rua;
    this.numero = numero
    this.bairro = bairro;
    this.complemento = complemento;
    this.cidade = cidade;
    this.estado = estado;
  }

  getAddres() : string {
    return `${this.rua}, ${this.numero}, ${this.bairro}, ${this.complemento},
     ${this.cidade}, ${this.estado}`
  }


}