import { Component, OnInit, ViewChild,Input } from "@angular/core";

import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexDataLabels,
  ApexTitleSubtitle,
  ApexStroke,
  ApexGrid,
  ApexYAxis,
  ApexLegend,
  ApexTooltip,
  ApexPlotOptions,
  ApexFill
} from "ng-apexcharts";

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  plotOptions: ApexPlotOptions;
  yaxis: ApexYAxis;
  xaxis: ApexXAxis;
  dataLabels: ApexDataLabels;
  grid: ApexGrid;
  stroke: ApexStroke;
  title: ApexTitleSubtitle;
  fill: ApexFill;
  tooltip: ApexTooltip;
  legend: ApexLegend;
};

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.scss']
})

export class GraphComponent implements OnInit {
  @ViewChild("chart") chart: ChartComponent;
  public chartOptions: Partial<ChartOptions> | any;

  ngOnInit(): void {
  }

 constructor() {
  this.chartOptions = {
    series: [
      {
        name: 'Net Profit',
        data: [50, 60, 70, 50, 60, 50, 70, 90],
      },

      {
        name: 'Revenue',
        data: [50, 60, 70, 50, 60, 50, 70, 90],
      },
    ],

    chart: {
      fontFamily: 'inherit',
      type: 'bar',
      height: 350,

      toolbar: {
        show: true,
        offsetX: 0,
        offsetY: 0,

        tools: {
          download: true,
          selection: true,
          zoom: true,
          zoomin: true,
          zoomout: true,
          pan: true,
          reset: true,
          // customIcons: []
      },
      },
      selection: {
        enabled: true
      },
    },

    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '50%',
        borderRadius: 5,
      },
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      show: true,
      width: 2,
      colors: ["transparent"]
    },
    xaxis: {
      categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
      //Used to show the icons
      tickPlacement: 'on',
    },
    yaxis: {
      title: {
        // text: "$ (thousands)"
      }
    },

    fill: {
      opacity: 1
    },


    grid: {
      padding: {
        top: 10,
      },
      strokeDashArray: 4,
      yaxis: {
        lines: {
          show: true,
        },
      },
    },


   };

   console.log(this.chartOptions.series)
 }


}
