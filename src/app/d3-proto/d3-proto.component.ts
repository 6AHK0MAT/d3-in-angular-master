import {AfterContentInit, Component, OnInit, ViewChild} from '@angular/core';
import {AreaChartComponent} from '../area-chart/area-chart.component';
import {Router} from '@angular/router';
import * as d3 from 'd3';
import 'chartjs-plugin-streaming';
import {grpc} from '@improbable-eng/grpc-web';

import {Movies} from 'src/generated/movies/movies_pb_service';
import {MoviesClient, ServiceError} from 'src/generated/movies/movies_pb_service';
import {
  GetRequest,
  GetResponse,
  EmptyRequest,
  GetListResponse,
  WeatherData,
  InsertResponse
} from 'src/generated/movies/movies_pb';

@Component({
  selector: 'app-d3-proto',
  templateUrl: './d3-proto.component.html',
  styleUrls: ['./d3-proto.component.scss']
})
export class D3ProtoComponent implements OnInit, AfterContentInit {

  public dataForChart = 0;
  response: any;
  // public valOfStream = 25;

  @ViewChild('areaChart', { static: true }) chart: AreaChartComponent;

  constructor(private router: Router) {
  }

  ngOnInit() {
    this.getData();
  }

  getData(): any {
    const getEmptyRequest = new EmptyRequest();

    grpc.unary(Movies.GetEmpty, {
      request: getEmptyRequest,
      host: 'https://localhost:5001',
      onEnd: res => {
        const {status, statusMessage, headers, message, trailers} = res;
        if (status === grpc.Code.OK && message) {
          const result = message.toObject() as GetListResponse.AsObject;
          // console.log('Данные nameval для Установки 1 - ', result.data.moviesList[0].nameval);
          this.dataForChart = result.data.moviesList[0].nameval;
          console.log('Данные для установки 30 - ', this.dataForChart);
        }
      }
    });
    return this.dataForChart;
  }
  onUpdate(): void {
    const client = new MoviesClient('https://localhost:5001');
    const req = new GetRequest();

    client.update(req, (err: ServiceError, response: InsertResponse) => {
      if (err) {
        this.response = `Error: {err.message}`;
        return;
      }
      this.response = response.getData();
      // console.log(this.response);
      this.getData();
    });
  }

  ngAfterContentInit() {
    this.d3OnlineChart();
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
    // const svetofor = (this.dataForChart > 50) ? '#f10428' : '#04f12b';

    const legend = svg.append('g').
    attr('transform', `translate(20, 20)`).
    selectAll('g').
    data([['Данные с установки №30', '#f10428'], []]).
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

    const tick: any = () => {
      console.log('Значение для установки 30  - ', this.dataForChart);
      // const valOfStream = this.getData();
      // console.log(valOfStream);
      time++;
      // data[time] = Math.floor(Math.random() * 101) ;
      data[time] = this.dataForChart ;
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
    };

    function update() {
      x.domain([time - num, time]);
      const yDom = d3.extent(latestData);
      yDom[0] = Math.max(yDom[0] - 1, 0);
      yDom[1] += 1;
      y.domain(yDom);

      $xAxis.
      call(xAxis);

      $yAxis.
      call(yAxis);
      // console.log(LatestAverages50);

      $Averages50.datum(LatestAverages50).attr('class', 'average-50').attr('d', line);

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
    this.router.navigate(['/d3-chart']);
  }

  navigateLeft() {
    this.router.navigate(['/delivery']);
  }

}

export function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
