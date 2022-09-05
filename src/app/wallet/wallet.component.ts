import { Component, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';
import { OwlOptions } from 'ngx-owl-carousel-o';
@Component({
  selector: 'app-wallet',
  templateUrl: './wallet.component.html',
  styleUrls: ['./wallet.component.css']
})
export class WalletComponent implements OnInit {

  constructor() { 
    Chart.register(...registerables);
  }
  itemsimg=[
    {
      title:'Martha',
      subtitle:'photo page',
      img:'../../assets/images/profile.png'
    },
    {  title:'Martha',
    subtitle:'photo page',
    img:'../../assets/images/profile.png'
    },
    {  title:'Martha',
    subtitle:'photo page',
    img:'../../assets/images/profile.png'
    },
    {title:'Martha',
    subtitle:'photo page',
      img:'../../assets/images/profile.png'
    },
    {  title:'Martha',
    subtitle:'photo page',
    img:'../../assets/images/profile.png'
    },
    {  title:'Martha',
    subtitle:'photo page',
    img:'../../assets/images/profile.png'
    },
    {  title:'Martha',
    subtitle:'photo page',
    img:'../../assets/images/profile.png'
    }


  ]
   customOptions : OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    margin:5,
    
    dots: true,
    navSpeed: 600,
    items:5,
    navText: ['&#8249', '&#8250;'],
    responsive: {
      0: {
        items: 5
      },
      400: {
        items: 6
      },
      760: {
        items: 6
      },
      1000: {
        items: 6
      }
    },
    nav: false
  }

  ngOnInit(): void {
    const ctx2:any = document.getElementById('myChart');
   var myChart = new Chart(ctx2.getContext('2d'), {
    type: 'bar',
    data: {
        labels: ['06', '07', '08', '09', '10', '11' ,'12','13','14','15','16','17','18','18','18','18'],
        datasets: [{
            label: 'Life expectancy',
            data: [600, 900, 600, 400, 600, 500,400,450,400,600,600,500,800,500,200,400,600,300,250],
            backgroundColor:'#6777ef',
            borderColor:'#6777ef',
            borderWidth: 1,
            borderRadius:2
        }]
    },
    options: {
      plugins: {
        legend: {
          display: false,
        },
      },
      scales: {
        x: {
          ticks: {
            display: true,
          },
        },
        y: {
          ticks: {
            display: true,
          },
        },
      },
    },
  });
}
  

}
