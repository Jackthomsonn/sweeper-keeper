import { IGroup } from './interfaces/IGroup';
import { SweeperKeeperService } from './sweeper-keeper.service';
import { Component, OnInit } from '@angular/core';
import { timer, Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  public sweepers: IGroup;

  constructor(private sweeperKeeperService: SweeperKeeperService) {
  }

  ngOnInit() {
    this.sweeperKeeperService.getGroups().subscribe((sweepers: IGroup) => {
      this.sweepers = sweepers;

      this.sweeperKeeperService.startPolling();

      this.sweeperKeeperService.sweepers.subscribe((updatedSweepers: IGroup) => {
        this.sweepers = updatedSweepers;
      });
    });
  }
}
