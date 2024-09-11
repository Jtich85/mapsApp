import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef, OnDestroy, ViewChild } from '@angular/core';

import { LngLat, Map } from 'mapbox-gl';

@Component({
  selector: 'app-zoom-range-page',
  templateUrl: './zoom-range-page.component.html',
  styleUrl: './zoom-range-page.component.css',
})
export class ZoomRangePageComponent implements AfterViewInit, OnDestroy {

  @ViewChild('map') divMap?: ElementRef;

  public zoom: number = 10;
  public map?: Map;
  public currentlngLat: LngLat = new LngLat(-100.31299803451657, 25.679875640220843); //Monterrey

  ngAfterViewInit(): void {

    if( !this.divMap ) throw 'El elemento HTML no fue encontrado';

    this.map = new Map({
      container: this.divMap.nativeElement, // container ID
      style: 'mapbox://styles/mapbox/streets-v12', // style URL
      center: this.currentlngLat, // starting position [lng, lat]
      zoom: this.zoom, // starting zoom
    });

    this.mapListeners();
  }

  ngOnDestroy(): void {
    this.map?.remove();
  }

  mapListeners() {
    if( !this.map ) throw 'Mapa no inicializado';

    /* Eventos */

    /* Al hacer zoom */
    this.map.on('zoom', (ev) => {
      this.zoom = this.map!.getZoom();
    })

    /* Al terminar de hacer zoom */
    this.map.on('zoomend', (ev) => {
      if( this.map!.getZoom() < 18 ) return;
      this.map!.zoomTo(18);
    })

    /* Al moverse el mapa */
    this.map.on('move', (ev) => {
      this.currentlngLat = this.map!.getCenter();
      const { lng, lat } = this.currentlngLat;
    })
  }

  zoomIn() {
    this.map?.zoomIn();
  }

  zoomOut() {
    this.map?.zoomOut();
  }

  zoomChanged( value: string ) {
    this.zoom = Number( value );
    this.map?.zoomTo( this.zoom );
  }

}
