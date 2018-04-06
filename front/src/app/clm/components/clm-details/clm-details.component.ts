import {Component, Input, OnInit} from '@angular/core';
import {CLM} from '../../model/clm';
import {ActivatedRoute} from '@angular/router';
import {ClmService} from '../../services/clm.service';
import {MessageService} from '../../../messages/message.service';

@Component({
  selector: 'app-clm-details',
  templateUrl: './clm-details.component.html',
  styleUrls: ['./clm-details.component.css']
})
export class ClmDetailsComponent implements OnInit{

  @Input() clm: CLM;

  constructor(
    private route: ActivatedRoute,
    private clmService: ClmService,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {
    if (!this.clm) {
      this.getClm();
    }
  }

  getClm(): void {
    const id = +this.route.snapshot.paramMap.get('clm-id');
    this.clmService.getClm(id)
      .subscribe(clm => {
        this.clm = clm;
        let message = 'Received element';
        if (!clm) {
          message = 'No element found';
        }
        this.messageService.add(message);
      });
  }

}
