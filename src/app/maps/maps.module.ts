import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import mapboxgl from 'mapbox-gl'; // Importar mapbox-gl correctamente
(mapboxgl as any).accessToken = 'pk.eyJ1IjoianRpY2g4NSIsImEiOiJjbTB3eW1lMzIwNnowMmtwc3hvMDcyajAzIn0.SDgQlBIBQfhfLWpf7-cP9w';

import { MapsRoutingModule } from './maps-routing.module';
import { MiniMapComponent } from './components/mini-map/mini-map.component';
import { SideMenuComponent } from '../alone/components/side-menu/side-menu.component';
import { MapsLayoutComponent } from './layout/maps-layout/maps-layout.component';
import { FullScreenPageComponent } from './pages/full-screen-page/full-screen-page.component';
import { MarkersPageComponent } from './pages/markers-page/markers-page.component';
import { PropertiesPageComponent } from './pages/properties-page/properties-page.component';
import { ZoomRangePageComponent } from './pages/zoom-range-page/zoom-range-page.component';
import { CounterAloneComponent } from "../alone/components/counter-alone/counter-alone.component";



@NgModule({
  declarations: [
    MiniMapComponent,
    MapsLayoutComponent,
    FullScreenPageComponent,
    MarkersPageComponent,
    PropertiesPageComponent,
    ZoomRangePageComponent
  ],
  imports: [
    CommonModule,
    MapsRoutingModule,
    CounterAloneComponent,
    SideMenuComponent
]
})
export class MapsModule { }
