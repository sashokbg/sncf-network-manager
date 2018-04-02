import { Component, OnInit } from '@angular/core';
import { CLM } from './model/clm';
import { CLMS } from './model/mock-clms';

@Component({
  selector: 'app-clm',
  templateUrl: './clm.component.html',
  styleUrls: ['./clm.component.css']
})
export class ClmComponent implements OnInit {

  clms = CLMS;

  constructor() { }

  ngOnInit() {
  }

}
