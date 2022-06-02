import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.css']
})
export class ImagesComponent implements OnInit {
  @Input() items = []
  constructor() { }

  ngOnInit(): void {
  }

}
