import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SearchCityService, IonicStorageService } from '../../domain/services';
import { CityHistoric, City } from '../../domain/entities';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  cities: City[];
  histories: CityHistoric[];
  hasError: boolean = false;
  isHistoryEmpty: boolean = true;
  errorMessage: string;

  constructor(
    private readonly searchService: SearchCityService,
    private readonly storageService: IonicStorageService,
    private readonly router: Router
  ) {}
  //Verifica se esta vazio ou não e seta o histórico a ser mostrado na renderização vindo do local storage
  async ionViewWillEnter() {
    this.isHistoryEmpty = await this.storageService.isEmpty();
    this.histories = await this.storageService.getHistoric();
  }

  async onSearch(query: string) {
    try {
      this.hasError = false;
      this.cities = await this.searchService.search(query);
    } catch (error) {
      this.hasError = true;
      this.errorMessage = error.message;
    }
  }

  onSelectCity(cityId: string) {
    this.router.navigateByUrl(`/weather/${cityId}`);
  }
  //Limpa o local storage
  onClick() {
    this.storageService.clearHistoric();
    this.ionViewWillEnter();
  }
}
