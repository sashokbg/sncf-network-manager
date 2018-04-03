import { Injectable } from '@angular/core';
import { CLM } from './clm/model/clm';
import { CLMS } from './clm/model/mock-clms';

@Injectable()
export class ClmService{

  constructor(){

  }

  getClms(): CLM[] {
    return CLMS;
  }
}
