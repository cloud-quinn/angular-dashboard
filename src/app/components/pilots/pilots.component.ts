import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Pilot } from '../../models/pilot';

@Component({
  selector: 'pilots',
  templateUrl: './pilots.component.html',
  styleUrls: ['./pilots.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class PilotsComponent implements OnInit {

  pilots: Pilot[];

  constructor() { }

  ngOnInit() {
    this.pilots = [ new Pilot('dummypilot', 'A Dummy Pilot', '1st January 2017', '31st December 2017', 12, 9),
                    new Pilot('vrpilot', 'A VR Pilot', '6th June 2017', '12th December 2017', 25, 18)];
console.log(this.pilots);
  }

}
