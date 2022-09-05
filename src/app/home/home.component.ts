import { literalMap } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';
import { OwlOptions } from 'ngx-owl-carousel-o';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
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
   const ctx1:any  =document.getElementById('chartContainer');
    // <- error!


   
 let  myChart2 = new Chart(ctx1.getContext('2d'), {
    type: 'line',
    data: {
        labels: ['week01', 'week02', 'week03', 'week04', 'week05', 'week06','week07','week08','week09'],
        datasets: [{
            label: '# of Votes',
            data: [200, 300, 350, 600, 800, 500,200,300,500],
            backgroundColor: [
               'transparent'
            ],
            borderColor: [
               'blue'
            ],
            borderWidth: 5
        },
        {
          label: '# of Votes',
          data: [300, 250, 600, 700, 500, 400,500,300,200],
          backgroundColor: [
            'transparent'
          ],
          borderColor: [
            'orange'
         ],
         
          borderWidth: 5
      }
      ]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true,
                
            }
        },
        interaction: {
          mode: 'index',
        },
        plugins: {
          title: {
            display: false,
           
          },
    }
  }
});
  }

}
