import {Injectable} from '@angular/core';
import {CLM} from './model/clm';
import {CLMS} from './model/mock-clms';
import {Observable} from 'rxjs/Observable';
import {of} from 'rxjs/observable/of';
import 'rxjs/add/operator/delay';
import {MessageService} from '../messages/message.service';

@Injectable()
export class ClmService {

  constructor(private messageService: MessageService) {

  }

  getClms(): Observable<CLM[]> {
    this.messageService.add('Fetching clms');
    return of(CLMS).delay(2000);
  }

  getClm(id: number): Observable<CLM> {
    this.messageService.add(`Fetching clms with id ${id}`);
    return of(
      CLMS.filter(element => element.id === id)[0]
    ).delay(2000);
  }
}
