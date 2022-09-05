import { Component, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';
@Component({
  selector: 'app-coin',
  templateUrl: './coin.component.html',
  styleUrls: ['./coin.component.css']
})
export class CoinComponent implements OnInit {

  constructor() { 
    Chart.register(...registerables);
  }

  ngOnInit(): void {
   

// Area Chart Example
const ctx :any= document.getElementById("myAreaChart");
var myLineChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: ["week 01", "week 02", "week 03", "week 04", "week 05", "week 06", "week 07", "week 08", "week 09","week 10"],
    datasets: [{
      label: "Earnings",
     
      backgroundColor: "rgba(78, 115, 223, 0.1)",
      borderColor: "rgba(78, 115, 223, 1)",
      pointRadius: 3,
      pointBackgroundColor: "rgba(78, 115, 223, .5)",
      pointBorderColor: "rgba(78, 115, 223, 0.1)",
      pointHoverRadius: 3,
      pointHoverBackgroundColor: "rgba(78, 115, 223, 1)",
      pointHoverBorderColor: "rgba(78, 115, 223, 1)",
      pointHitRadius: 10,
      pointBorderWidth: 2,
      data: [200, 600, 700, 400, 300, 350, 900, 600, 700, 800, 790, 780],
    }],
  },
  options: {
    maintainAspectRatio: false,
    layout: {
      padding: {
        left: 10,
        right: 25,
        top: 25,
        bottom: 0
      }
    },
   
    },
  });

  }
}