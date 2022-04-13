import { Component, OnInit,Input } from '@angular/core';
import { GetPlanetService } from '../get-planets.service';
import { myInfo } from '../planets';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  @Input() ZWInfo!: myInfo;



  //myData: myInfo = GetPlanetService;

  ngOnInit(): void {
    
  }

}
