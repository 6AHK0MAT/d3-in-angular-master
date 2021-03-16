import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OrderStatusComponent } from './order-status/order-status.component';
import { OrderDeliveryComponent } from './order-delivery/order-delivery.component';
import { FlashMobComponent } from './fm/flash-mob.component';
import {D3ChartComponent} from './d3-chart/d3-chart.component';


const routes: Routes = [
    { path: 'd3-chart', component: D3ChartComponent },
    { path: 'status', component: OrderStatusComponent },
    { path: 'delivery', component: OrderDeliveryComponent },
    { path: 'flashmob', component: FlashMobComponent },
    { path: '', component: D3ChartComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
