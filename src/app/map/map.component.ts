import { Component, OnInit } from '@angular/core';

import * as d3 from 'd3';


@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

  fillColor = 'rgb(255,255,0)';
  borderColor = 'rgb(0,0,255)';

  zoom = d3.zoom();


  paths = d3.selectAll("path");
  svg = d3.select('#map-container');

 



  ngOnInit(): void {
    console.log(this.svg);

  }

  onClick() {
    d3.selectAll("path").append('h3').text('Today is a beautiful day!!');
    console.log(this.svg);

    

  }

  

}
