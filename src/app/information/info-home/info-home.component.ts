import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-info-home',
  templateUrl: './info-home.component.html',
  styleUrls: ['./info-home.component.css']
})
export class InfoHomeComponent implements OnInit {

  numbers =[
    {value:50 , label:'Customer'},
    {value:'3500 TL', label:'Ciro'},
    {value:65 , label:'Comments'}

  ]
  images =[
    {
      images:'/assets/huawei.jpg',
      title: 'Huawei Phone',
      description: ' 159.2 x 76.3 x 8.7 mm (6.27 x 3.00 x 0.34 in)'

    },
    {
      images:'/assets/pc.jpg',
      title: 'HP Laptop',
      description: 'HP NoteBook is a Windows 10 laptop with a 15.60-inch display that has a resolution of 1366x768 pixels. It is powered by a Core i5 processor and it comes with 8GB of RAM. The HP NoteBook packs 256GB of SSD storage.'

    },
    {
      images:'/assets/apple.jpg',
      title: 'Apple Laptop',
      description: 'The Memory section shows how much RAM is installed in each internal memory slot.'

    },
    {
      images:'/assets/huawei-moni.jpg',
      title: 'Huawei Monitor',
      description: 'The QHD 2560 x 1440 display on the HUAWEI MateView GT has more horizontal pixels than the standard 1440p to truly bring images to life before your eyes.'

    }

  ]

  constructor() { }

  ngOnInit(): void {
  }

}
