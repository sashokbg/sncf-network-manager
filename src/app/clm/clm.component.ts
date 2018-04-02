import { Component, OnInit } from '@angular/core';
import { CLM } from './model/clm';

@Component({
  selector: 'app-clm',
  templateUrl: './clm.component.html',
  styleUrls: ['./clm.component.css']
})
export class ClmComponent implements OnInit {

  clm: CLM = {
    id : 1,
    name: 'CISCO Router'
  };

  constructor() { }

  ngOnInit() {
  }

}
