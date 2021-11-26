import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'city-historic-querys',
  templateUrl: './city-historic-querys.component.html',
  styleUrls: ['./city-historic-querys.component.scss'],
})
export class CityHistoricQuerysComponent implements OnInit {
  @Input() id: string;
  @Input() name: string;
  @Input() state: string;
  @Output() selectCity: EventEmitter<string> = new EventEmitter();

  ngOnInit() {}

  onClick() {
    this.selectCity.emit(this.id);
  }
}
