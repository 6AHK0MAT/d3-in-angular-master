import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ViewChild } from '@angular/core';

@Component({
  selector: 'app-d3-brush-zoom',
  templateUrl: './d3-brush-zoom.component.html',
  styleUrls: ['./d3-brush-zoom.component.scss']
})
export class D3BrushZoomComponent implements OnInit {

  constructor(private router: Router) {
  }

  ngOnInit(): void {
  }
  navigateRight() {
    this.router.navigate(['/status']);
  }

  navigateLeft() {
    this.router.navigate(['/delivery']);
  }

}
