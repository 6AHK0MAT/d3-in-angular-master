import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatMenuModule} from '@angular/material/menu';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatSelectModule} from '@angular/material/select';
import {MatButtonModule} from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { OrderStatusComponent } from './order-status/order-status.component';
import { DonutChartComponent } from './donut-chart/donut-chart.component';
import { OrderDeliveryComponent } from './order-delivery/order-delivery.component';
import { AreaChartComponent } from './area-chart/area-chart.component';
import { FlashMobComponent } from './fm/flash-mob.component';
import {D3ChartComponent} from './d3-chart/d3-chart.component';
import { D3BrushZoomComponent } from './d3-brush-zoom/d3-brush-zoom.component';
import { D3ProtoComponent } from './d3-proto/d3-proto.component';

@NgModule({
  declarations: [
    AppComponent,
    OrderStatusComponent,
    DonutChartComponent,
    D3ChartComponent,
    OrderDeliveryComponent,
    AreaChartComponent,
    FlashMobComponent,
    D3BrushZoomComponent,
    D3ProtoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatIconModule,
    MatCardModule,
    MatSelectModule,
    MatTableModule,
    MatButtonModule,
    MatSlideToggleModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
