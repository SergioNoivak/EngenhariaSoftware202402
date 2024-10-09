import { Component, OnInit } from '@angular/core';
import { LeituraSolo } from './../interfaces/sensores.interface';
import { SensorService } from '../services/sensor.service';

@Component({
  selector: 'app-tabela-aula',
  templateUrl: './tabela-aula.component.html',
  styleUrls: ['./tabela-aula.component.scss'],
})
export class TabelaAulaComponent implements OnInit {
  constructor(private readonly sensorService: SensorService) {
    this.sensorService
    .getSensorData()
    .subscribe((res: any) => {
      this.dataSource = res.rows;
    });
  }
  ngOnInit(): void {}
  displayedColumns: string[] = ['n', 'p', 'k', 'umidade', 'data'];
  dataSource: any;
}
