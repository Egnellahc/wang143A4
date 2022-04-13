import { Component, OnInit, Input } from '@angular/core';
import { Planets } from '../planets';


@Component({
  selector: 'app-planets-by-detail',
  templateUrl: './planets-by-detail.component.html',
  styleUrls: ['./planets-by-detail.component.css']
})
export class PlanetsByDetailComponent implements OnInit {
  @Input() planetList!: Planets[];

  

  constructor() { }

  ngOnInit(): void {
  }

}
