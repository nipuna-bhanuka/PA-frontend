import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bargraphs',
  templateUrl: './bargraphs.component.html',
  styleUrls: ['./bargraphs.component.css']
})
export class BargraphsComponent implements OnInit {

  //barchart
  public barChartOptions ={
    scaleShowVerticalLines: false,
    responsive : true
  };
  public barChartLabels = ['2006','2007','2008', '2009', '2010','2011','2012'];
  public barChartType :string='bar';
  public barChartLegend = true;

  public barChartData = [
    {data: [65,59,80,81,56,55,40] , label: 'Series A'},
    {data: [68,28,80,81,54,45,90] , label: 'Series B'}
  ];


  //doughnutchart
  public doughnutChartLabels = ['Sales 01','Sales 02','Sales 03', 'Sales 04', 'Sales 05'];
  public doughnutChartData :any[] = [120,150,180,90,50];
  public doughnutChartType :string='doughnut';

  constructor() { }

  ngOnInit(): void {
  }

}
