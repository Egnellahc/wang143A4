import { Component, OnInit, Input } from '@angular/core';
import { myInfo } from '../planets';


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  @Input() ZWInfo!: myInfo;


  constructor() { }

  ngOnInit(): void {
  }

}
