import { Component, OnInit, Input } from '@angular/core';
import { Planets } from '../planets';


@Component({
  selector: 'app-planets-by-distance',
  templateUrl: './planets-by-distance.component.html',
  styleUrls: ['./planets-by-distance.component.css']
})
export class PlanetsByDistanceComponent implements OnInit {

  @Input() planetList!: Planets[];

  constructor() { }

  ngOnInit(): void {
  }

}
