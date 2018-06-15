import { Component, OnInit, Input } from '@angular/core';
import { ITeam } from '../interfaces/ITeam';
import { ITable } from '../interfaces/ITable';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})

export class TableComponent implements OnInit {

  @Input() tableResults: Array<ITable>;

  constructor() { }

  ngOnInit() {
  }
}
