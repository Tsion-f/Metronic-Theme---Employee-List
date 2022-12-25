import { Component, ViewChild,Input } from "@angular/core";
import { ModalConfig, ModalComponent } from '../../_metronic/partials';
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
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
  // modalConfig: ModalConfig = {
  //   modalTitle: 'Modal title',
  //   dismissButtonLabel: 'Submit',
  //   closeButtonLabel: 'Cancel'
  @ViewChild("chart") chart: ChartComponent;
  public chartOptions: Partial<ChartOptions> | any;

 constructor() {
  this.chartOptions = {
    series: [
      {
        name: 'Net Profit',
        data: [50, 60, 70, 80, 60, 50, 70, 60],
      },
      {
        name: 'Revenue',
        data: [50, 60, 70, 80, 60, 50, 70, 60],
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
        text: "$ (thousands)"
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

  // @ViewChild('modal') private modalComponent: ModalComponent;
  // constructor() {}

  // async openModal() {
  //   return await this.modalComponent.open();
  // }
//}
