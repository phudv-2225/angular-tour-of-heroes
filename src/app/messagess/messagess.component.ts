import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-messagess',
  templateUrl: './messagess.component.html',
  styleUrls: ['./messagess.component.scss']
})
export class MessagessComponent implements OnInit {

  constructor(public messageService: MessageService) { }

  ngOnInit(): void {
  }

}
