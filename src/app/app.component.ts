import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Chart } from 'chart.js';
import { ChartDataset, ChartOptions } from 'chart.js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
})
export class AppComponent {
  title = 'dinamic-chart';
  products: any = [];
  total = 0;
  thisDay: any;
  constructor(private httpClient: HttpClient) {}
  onClick() {
    return 'xx';
  }

  ngOnInit() {
    this.httpClient.get('assets/data.json').subscribe((data) => {
      console.log(data);
      this.products = data;
      let y = this.products;
      for (let i = 0; i < y.length; i++) {
        let x = this.products[i].amount;
        console.log(x);
        this.total += x;
      }
      this.thisDay = this.products[0].amount;
      console.log(this.total);
    });
  }
}
