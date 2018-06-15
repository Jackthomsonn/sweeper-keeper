import { IFixture } from './../interfaces/IFixture';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-fixture',
  templateUrl: './fixture.component.html',
  styleUrls: ['./fixture.component.scss']
})

export class FixtureComponent implements OnInit {
  @Input() fixtures: Array<IFixture>;

  constructor() { }

  ngOnInit() {
  }
}
