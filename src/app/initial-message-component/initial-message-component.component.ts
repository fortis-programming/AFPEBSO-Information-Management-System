import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-initial-message-component',
  templateUrl: './initial-message-component.component.html',
  styleUrls: ['./initial-message-component.component.scss']
})
export class InitialMessageComponentComponent implements OnInit {
  @Input() message = '';
  constructor() { }

  ngOnInit(): void {
  }

}
