import { Component, OnInit } from '@angular/core';

import { ResultsModel } from '../shared/model/results.model';
import { ForecastModel } from './../shared/model/forecast.model';
import { TempServiceService } from './../shared/service/temp-service.service';

@Component({
    selector: 'app-temperatura',
    templateUrl: './view/previsao-temperatura.component.html',
    styleUrls: ['./view/previsao-temperatura.component.css']
})

export class AppTemperaturaComponent implements OnInit {

    dadosTemperatura: ForecastModel[];
    dadosCidade: ResultsModel[];

    constructor( 
        public service: TempServiceService
      ){ }


ngOnInit(): void {
          this.getPrevisao();
         
        }
      
getPrevisao(){
    this.service.getDados('key').subscribe(data => {
        this.dadosTemperatura = data.forecast;         
        });
    }

}

