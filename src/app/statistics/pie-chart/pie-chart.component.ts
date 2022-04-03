import {Component, OnInit} from '@angular/core';
import {RegisteredPeople, VaccinaedPeople, VaccinatedChildren, VaccinatedMaleAduls} from "../../utils/data";

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css']
})
export class PieChartComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

  chartType = 'pie';
  vaccinatedPeople = VaccinaedPeople.reduce((partialSum, a) => partialSum + a, 0);
  vaccinatedMales = VaccinatedMaleAduls.reduce((partialSum, a) => partialSum + a, 0);
  vaccinatedChildren = VaccinatedChildren.reduce((partialSum, a) => partialSum + a, 0);
  vaccinatedFemales = this.vaccinatedPeople - this.vaccinatedChildren - this.vaccinatedMales;
  chartDatasets = [
    {data: [this.vaccinatedMales, this.vaccinatedFemales, this.vaccinatedChildren, RegisteredPeople], label: 'My First dataset'}
  ];

  chartLabels = ['Vaccinated adult males', 'Vaccinated females',
    'Vaccinated children', 'Registered but not vaccinated'];

  chartColors = [
    {
      backgroundColor: ['rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)'],
      hoverBackgroundColor:
        ['#FF99FF',
          '#5AD3D1', '#FFC870', '#A8B3C5'],
      borderWidth: 2,
    }
  ];

  chartOptions: any = {
    responsive: true
  };

  chartClicked(event: any): void {
    console.log(event);
  }

  chartHovered(event: any): void {
    console.log(event);
  }
}
