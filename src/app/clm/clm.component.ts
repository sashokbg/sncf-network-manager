import {Component, OnDestroy, OnInit} from '@angular/core';
import {ClmService} from '../clm.service';
import {CLM} from './model/clm';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'app-clm',
  templateUrl: './clm.component.html',
  styleUrls: ['./clm.component.css']
})
export class ClmComponent implements OnInit, OnDestroy {
  subs: Subscription;

  clms = undefined;
  selectedCLM: CLM = {id: undefined, name: undefined};

  constructor(private clmService: ClmService) {
    console.log(this.clms);
  }

  ngOnInit() {
    this.subs = this.clmService.getClms().subscribe(clms => this.clms = clms);
  }

  ngOnDestroy() {
    this.subs.unsubscribe();
  }

  onSelect(clm: CLM) {
    this.selectedCLM = clm;
  }
}
