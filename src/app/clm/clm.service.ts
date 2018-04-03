import { Injectable } from '@angular/core';
import { CLM } from './model/clm';
import { CLMS } from './model/mock-clms';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import 'rxjs/add/operator/delay';

@Injectable()
export class ClmService {

  getClms(): Observable<CLM[]> {
    return of(CLMS).delay(2000);
  }
}
