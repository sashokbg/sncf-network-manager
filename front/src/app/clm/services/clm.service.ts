import {Injectable} from '@angular/core';
import {CLM} from '../model/clm';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/delay';
import {MessageService} from '../../messages/message.service';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class ClmService {
  private clmsUrl = 'http://localhost:8080/api/clms';

  constructor(
    private messageService: MessageService,
    private http: HttpClient
  ) {}

  getClms(): Observable<CLM[]> {
    this.messageService.add('Fetching clms');

    return this.http.get<CLM[]>(this.clmsUrl);
  }

  getClm(id: number): Observable<CLM> {
    this.messageService.add(`Fetching clms with id ${id}`);
    return this.http.get<CLM>(`${this.clmsUrl}/${id}`);
  }
}
