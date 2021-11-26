import { Injectable } from '@angular/core';

import { Storage } from '@ionic/storage-angular';
import { CityHistoric } from '../entities/history';

@Injectable({
  providedIn: 'root',
})
export class IonicStorageService {
  private _storage: Storage | null = null;

  constructor(private storage: Storage) {
    this.init();
  }

  async init() {
    const storage = await this.storage.create();
    this._storage = storage;
  }
  public set(key: string, value: any) {
    this._storage?.set(key, value);
  }

  public clearHistoric() {
    this.storage.clear();
  }

  public async isEmpty() {
    return (await this.storage.length()) === 0;
  }

  public async getHistoric(): Promise<any> {
    const historic: CityHistoric[] = [];
    this.storage.forEach((key, value) => {
      historic.push({ id: value, name: key });
    });
    return historic;
  }
}
