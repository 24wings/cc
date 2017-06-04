import { Component, OnInit } from '@angular/core';

export var single = [
    {
        "name": "某国",
        "value": 8940000
    },
    {
        "name": "某某国",
        "value": 5000000
    },
    {
        "name": "某某某国",
        "value": 7200000
    }
];

export var multi = [
    {
        "name": "某国",
        "series": [
            {
                "name": "2010",
                "value": 7300000
            },
            {
                "name": "2011",
                "value": 8940000
            }
        ]
    },

    {
        "name": "某某国",
        "series": [
            {
                "name": "2010",
                "value": 7870000
            },
            {
                "name": "2011",
                "value": 8270000
            }
        ]
    },

    {
        "name": "某某某国",
        "series": [
            {
                "name": "2010",
                "value": 5000002
            },
            {
                "name": "2011",
                "value": 5800000
            }
        ]
    }
];



@Component({
    selector: 'home',
    template: `
    <div class="container-fluid">
        <div class="row">
            <div class="col-md-12">
               <ngx-charts-bar-vertical
                    [view]="view"
                    [scheme]="colorScheme"
                    [results]="single"
                    [gradient]="gradient"
                    [xAxis]="showXAxis"
                    [yAxis]="showYAxis"
                    [legend]="showLegend"
                    [legendTitle]="legendTitle"
                    [showXAxisLabel]="showXAxisLabel"
                    [showYAxisLabel]="showYAxisLabel"
                    [xAxisLabel]="xAxisLabel"
                    [yAxisLabel]="yAxisLabel"
                    (select)="onSelect($event)">
                </ngx-charts-bar-vertical>
            </div>
        </div>
        <div class="row c-mt15">
            <div class="col-md-12">
            第三方组件文档:https://swimlane.gitbooks.io/ngx-charts/content/
            </div>
        </div>
    </div>
  `
})
export class NgxChartsComponent {
    single: any[];
    multi: any[];

    view: any[] = [700, 400];

    // options
    showXAxis = true;
    showYAxis = true;
    gradient = false;
    showLegend = true;
    legendTitle="图例";
    showXAxisLabel = true;
    xAxisLabel = '图家';
    showYAxisLabel = true;
    yAxisLabel = '人口';

    colorScheme = {
        domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
    };

    constructor() {
        Object.assign(this, { single })
    }

    onSelect(event) {
        console.log(event);
    }




}

