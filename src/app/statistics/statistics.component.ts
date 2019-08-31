import { Component, OnInit } from '@angular/core';
import { StatisticsService } from '../services/statistics.service';
import { ConsoleReporter } from 'jasmine';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css']
})
export class StatisticsComponent implements OnInit {

  statistics: any = [];

  constructor(private statisticsService: StatisticsService) { }

  ngOnInit() {
    this.statisticsService.getStatistics()
      .subscribe(resp => this.statistics = resp[1]);
  }

}
