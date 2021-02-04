export interface AddressProtocol{
  rua: string;
  numero: number;
  complemento?: string;
  bairro:string;
  cidade:string;
  estado:string;

  getAddres() : string;

}

