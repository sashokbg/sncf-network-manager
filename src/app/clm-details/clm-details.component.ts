import {Component, Input, OnInit} from '@angular/core';
import {selector} from 'rxjs/operator/publish';
import {CLM} from '../clm/model/clm';

@Component({
  selector: 'app-clm-details',
  templateUrl: './clm-details.component.html',
  styleUrls: ['./clm-details.component.css']
})
export class ClmDetailsComponent implements OnInit{

  @Input() clm: CLM;

  constructor(){

  }

  ngOnInit(): void {
  }

}
