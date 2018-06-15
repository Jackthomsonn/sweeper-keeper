import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject, Observable, timer } from 'rxjs';
import { IGroup } from './interfaces/IGroup';

@Injectable({
  providedIn: 'root'
})

export class SweeperKeeperService {
  private uri: string;

  private sweepInstance: Observable<number>;

  private groupIds = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
  private groupIndex = -1;

  public sweepers: Subject<IGroup> = new Subject<IGroup>();

  constructor(private http: HttpClient) {
    this.uri = 'https://sweeper-keeper-api-ffnamczxyg.now.sh/groups';
    this.sweepInstance = timer(30000);
  }

  public getGroups = () => {
    this.groupIndex++;
    return this.http.get(`${this.uri}/${this.groupIds[this.groupIndex]}`);
  }

  public startPolling = () => {
    this.sweepInstance.subscribe(() => {
      this.getGroups().subscribe((sweepers: IGroup) => {
        if (this.groupIds.length - 1 === this.groupIndex) {
          this.groupIndex = -1;
        }
        this.sweepers.next(sweepers);
        this.startPolling();
      });
    });
  }
}
