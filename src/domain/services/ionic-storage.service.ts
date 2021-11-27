import { Injectable } from '@angular/core';

import { Storage } from '@ionic/storage-angular';
import { CityHistoric } from '../entities/history';

@Injectable({
  providedIn: 'root',
})
//Classe com as funcionalidades implementadas
export class IonicStorageService {
  private _storage: Storage | null = null;

  constructor(private storage: Storage) {
    this.init();
  }

  async init() {
    const storage = await this.storage.create();
    this._storage = storage;
  }
  //Seta o valor na local storage
  public set(key: string, value: any) {
    this._storage?.set(key, value);
  }
  //Limpa a local storage
  public clearHistoric() {
    this.storage.clear();
  }
  //Verifica se está vazio para definir se a lista de consulta aparecerá ou não
  public async isEmpty() {
    return (await this.storage.length()) === 0;
  }
  //Pega as cidades no local storage
  public async getHistoric(): Promise<any> {
    const historic: CityHistoric[] = [];
    this.storage.forEach((key, value) => {
      historic.push({ id: value, name: key });
    });
    return historic;
  }
}
