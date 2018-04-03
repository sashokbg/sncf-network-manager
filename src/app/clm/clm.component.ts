import { Component, OnInit } from '@angular/core';
import { ClmService } from '../clm.service';
import {CLM} from './model/clm';

@Component({
  selector: 'app-clm',
  templateUrl: './clm.component.html',
  styleUrls: ['./clm.component.css']
})
export class ClmComponent implements OnInit {

  clms = undefined;
  selectedCLM: CLM = {id: undefined, name: undefined};

  constructor(private clmService: ClmService) {
    console.log(this.clms);
  }

  ngOnInit() {
    this.clmService.getClms().subscribe(clms => this.clms = clms);
  }

  onSelect(clm: CLM) {
    this.selectedCLM = clm;
  }
}
