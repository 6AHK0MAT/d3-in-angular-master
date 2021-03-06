import { Component, OnInit, OnDestroy, AfterContentInit, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { ViewChild } from '@angular/core';
import * as d3 from 'd3';

import { AreaChartComponent } from '../area-chart/area-chart.component';

@Component({
  selector: 'app-d3-chart',
  templateUrl: './d3-chart.component.html',
  styleUrls: ['./d3-chart.component.scss']
})
export class D3ChartComponent implements OnInit, AfterContentInit {

  @ViewChild('areaChart', { static: true }) chart: AreaChartComponent;

  constructor(private router: Router) {
  }

  ngOnInit() {
  }

  ngAfterContentInit() {
    // this.initialize();
    // this.d3StaticChart();
    this.d3OnlineChart();
  }

  d3StaticChart() {
    const margin = {top: 50, right: 50, bottom: 50, left: 50};
    const width = 800 - margin.left - margin.right; // Use the window's width
    const height = 500 - margin.top - margin.bottom; // Use the window's height

    // The number of datapoints
    const n = 21;

    // 5. X scale will use the index of our data
    const xScale = d3.scaleLinear()
      .domain([0, n - 1]) // input
      .range([0, width]); // output

    // 6. Y scale will use the randomly generate number
    const yScale = d3.scaleLinear()
      .domain([0, 1]) // input
      .range([height, 0]); // output

    // 7. d3's line generator
    const line = d3.line<number>()
      .x((d, i) => xScale(i)) // set the x values for the line generator
      .y((d) => yScale(d)); // set the y values for the line generator
      // .curve(d3.curveMonotoneX); // apply smoothing to the line

    // 8. An array of objects of length N. Each object has key -> value pair, the key being "y" and the value is a random number
    const dataset = d3.range(n).map((d) => ({y: d3.randomUniform(1)() }));
    console.log(dataset);

// 1. Add the SVG to the page and employ #2
    const svg = d3.select('#d3_chart').append('svg')
      .attr('width', width + margin.left + margin.right)
      .attr('height', height + margin.top + margin.bottom)
      .append('g')
      .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');

// 3. Call the x axis in a group tag
    svg.append('g')
      .attr('class', 'x axis')
      .attr('transform', 'translate(0,' + height + ')')
      .call(d3.axisBottom(xScale)); // Create an axis component with d3.axisBottom

// 4. Call the y axis in a group tag
    svg.append('g')
      .attr('class', 'y axis')
      .call(d3.axisLeft(yScale)); // Create an axis component with d3.axisLeft

// 9. Append the path, bind the data, and call the line generator
    svg.append('path')
      .datum(dataset) // 10. Binds data to the line
      .attr('class', 'line'); // Assign a class for styling
      // .attr('d', line()); // 11. Calls the line generator

    // $averages_50.datum(latestAverages_50).attr('d', line);
    // $Averages50.attr('class', 'average-50').attr('d', line(LatestAverages50[0]));

// 12. Appends a circle for each datapoint
    svg.selectAll('.dot')
      .data(dataset)
      .enter().append('circle') // Uses the enter().append() method
      .attr('class', 'dot') // Assign a class for styling
      .attr('cx', (d, i) => xScale(i))
      .attr('cy', (d) => yScale(d.y))
      .attr('r', 5);
  }

  d3OnlineChart() {
    const margin = {top: 50, right: 50, bottom: 50, left: 50};
    // const width = window.innerWidth - margin.left - margin.right; // Use the window's width
    const width = 800 - margin.left - margin.right; // Use the window's width
    // const height = window.innerHeight - margin.top - margin.bottom; // Use the window's height
    const height = 600 - margin.top - margin.bottom; // Use the window's height

    // const h = window.innerHeight;
    const h = 600;
    const w = window.innerWidth;

    let time = 0;
    const num = 300;

    const seed = 25 + 50 * Math.random();
    const data = [seed];
    const Averages50 = [0];
    const Averages25 = [0];
    const deltas = [seed];

    let latestData = [seed];
    let LatestAverages50: any = [0];
    let LatestAverages25: any = [0];
    let latestDeltas = [seed];

    const x = d3.scaleLinear().range([0, w - 40]);
    const y = d3.scaleLinear().range([h - 40, 0]);

    const xAxis = d3.axisBottom(x).
    scale(x).
    tickSizeInner(-h + 40).
    tickSizeOuter(0).
    tickPadding(10);

    const yAxis = d3.axisLeft(y).
    scale(y).
    tickSizeInner(-w + 40).
    tickSizeOuter(0).
    tickPadding(10);

    const line = d3.line<number>().
    x((d, i) => x(i + time - num)).
    y(d => y(d));

    const svg = d3.select('#d3_chart').append('svg').
    attr('width', 1100).
    attr('height', 600).
    append('g').
    attr('transform', 'translate(30, 20)');

    const $xAxis = svg.append('g').
    attr('class', 'x axis').
    attr('transform', `translate(0, ${h - 40})`).
    call(xAxis);

    const $yAxis = svg.append('g').
    attr('class', 'y axis').
    call(yAxis);

    const $data = svg.append('path').
    attr('class', 'line data');

    const $Averages50 = svg.append('path').
    attr('class', 'line average-50');

    const $Averages25 = svg.append('path').
    attr('class', 'line average-25');

    const $rects = svg.selectAll('rect').
    data(d3.range(num)).
    enter().
    append('rect').
    attr('width', (w - 40) / num).
    attr('x', (d, i) => i * (w - 40) / num);

    const legend = svg.append('g').
    attr('transform', `translate(20, 20)`).
    selectAll('g').
    data([['???????????? ?? ?????????????????? ???1', '#f10428'], ['???????????? ?? ?????????????????? ???2', '#0004ff']]).
    enter().
    append('g');

    legend.
    append('circle').
    attr('fill', d => d[1]).
    attr('r', 5).
    attr('cx', 0).
    attr('cy', (d, i) => i * 15);

    legend.
    append('text').
    text(d => d[0]).
    attr('transform', (d, i) => `translate(10, ${i * 15 + 4})`);

    function tick() {
      time++;
      data[time] = Math.floor(Math.random() * 101) ;
      // console.log(data[time]);
      // console.log(Math.floor(Math.random() * 101));
      data[time] = Math.max(data[time], 0);

      if (time <= 50) {
        let a = 0;
        for (let j = 0; j < time; j++) {
          a += data[time - j];
        }
        a /= 50;
        Averages50[time] = a;
      } else
      {
        let a = Averages50[time - 1] * 50 - data[time - 50];
        a += data[time];
        a /= 50;
        Averages50[time] = a;
      }

      if (time <= 25) {
        let a = 0;
        for (let j = 0; j < time; j++) {
          a += data[time - j];
        }
        a /= 25;
        Averages25[time] = a;
      } else
      {
        let a = Averages25[time - 1] * 25 - data[time - 25];
        a += data[time];
        a /= 25;
        Averages25[time] = a;
      }

      deltas[time] = data[time] - data[time - 1];

      if (time <= num) {
        latestData = data.slice(-num);
        LatestAverages50 = Averages50.slice(-num);
        LatestAverages25 = Averages25.slice(-num);
        latestDeltas = deltas.slice(-num);
      } else
      {
        latestData.shift();
        LatestAverages50.shift();
        LatestAverages25.shift();
        latestDeltas.shift();
        latestData.push(data[time]);
        LatestAverages50.push(Averages50[time]);
        LatestAverages25.push(Averages25[time]);
        latestDeltas.push(deltas[time]);
      }
      // console.log(LatestAverages50);
    }

    function update() {
      // console.log(latestAverages_50)
      x.domain([time - num, time]);
      const yDom = d3.extent(latestData);
      yDom[0] = Math.max(yDom[0] - 1, 0);
      yDom[1] += 1;
      y.domain(yDom);

      $xAxis.
      call(xAxis);

      $yAxis.
      call(yAxis);

      $Averages50.datum(LatestAverages50).attr('class', 'average-50').attr('d', line);
      $Averages25.datum(LatestAverages25).attr('class', 'average-25').attr('d', line);

    }

    for (let i = 0; i < num + 50; i++) {
      tick();
    }

    update();

    setInterval(() => {
      tick();
      update();
    }, 60);

  }

  navigateRight() {
    this.router.navigate(['/status']);
  }

  navigateLeft() {
    this.router.navigate(['/d3-proto']);
  }

}

export function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
