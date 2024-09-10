import { AfterViewInit, Component } from '@angular/core';

import mapboxgl from 'mapbox-gl'; // Importar mapbox-gl correctamente

// Configuración correcta del token de acceso
(mapboxgl as any).accessToken = 'pk.eyJ1IjoianRpY2g4NSIsImEiOiJjbTB3eW1lMzIwNnowMmtwc3hvMDcyajAzIn0.SDgQlBIBQfhfLWpf7-cP9w';

@Component({
  selector: 'app-full-screen-page',
  templateUrl: './full-screen-page.component.html',
  styleUrls: ['./full-screen-page.component.css'], // Cambié 'styleUrl' a 'styleUrls' para evitar errores tipográficos
})
export class FullScreenPageComponent implements AfterViewInit{

  ngAfterViewInit(): void {
    const map = new mapboxgl.Map({
      container: 'map', // container ID
      style: 'mapbox://styles/mapbox/streets-v12', // style URL
      center: [-74.5, 40], // starting position [lng, lat]
      zoom: 9, // starting zoom
    });
  }

}
