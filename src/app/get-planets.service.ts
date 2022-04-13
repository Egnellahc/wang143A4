import { Injectable } from '@angular/core';
import { myInfo, Planets } from './planets';

import planet from '../assets/data/A4.json';

@Injectable({
  providedIn: 'root'
})
export class GetPlanetService {

  constructor() { }

  getAuthorInfo() : myInfo
  {
    return planet.myDetails;
  }

  getPlanets() : Planets[]
  {
    return planet.solarSystem.planets;
  }
}
