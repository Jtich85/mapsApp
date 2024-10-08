import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef, Input, ViewChild } from '@angular/core';

import { LngLat, Map, Marker } from 'mapbox-gl';

@Component({
  selector: 'map-mini-map',
  templateUrl: './mini-map.component.html',
  styleUrl: './mini-map.component.css',
})
export class MiniMapComponent implements AfterViewInit {

  @Input() lngLat?: [number, number];

  @ViewChild('map') divMap?: ElementRef;

  public map?: Map;
  public currentlngLat: LngLat = new LngLat(-100.31299803451657, 25.679875640220843); //Monterrey

  ngAfterViewInit(): void {
    if( !this.divMap?.nativeElement ) throw "Map Div not found";
    if( !this.lngLat ) throw "LngLat cant be null";

    //mapa
    const map = new Map({
      container: this.divMap.nativeElement, // container ID
      style: 'mapbox://styles/mapbox/streets-v12', // style URL
      center: this.lngLat, // starting position [lng, lat]
      zoom: 15, // starting zoom
      interactive: false,
    });

    //marker
    new Marker()
      .setLngLat( this.lngLat )
      .addTo( map )


  }

 }
