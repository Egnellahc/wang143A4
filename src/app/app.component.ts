import { Component } from '@angular/core';
import { GetPlanetService } from './get-planets.service';
import { myInfo, Planets } from './planets';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'wang143A4';

  planet!: Planets[];
  zwData!: myInfo;

  constructor(private myServ: GetPlanetService){}

  ngOnInit(): void{
    this.zwData = this.myServ.getAuthorInfo();
    console.log(this.zwData);
    this.planet = this.myServ.getPlanets();
    console.log(this.planet);
  }
}
