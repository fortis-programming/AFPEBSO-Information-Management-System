import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-remarks',
  templateUrl: './remarks.component.html',
  styleUrls: ['./remarks.component.scss']
})
export class RemarksComponent implements OnInit {
  @Input() remarksMessage = '';

  constructor() { }

  status = 'Declined';

  ngOnInit(): void {
  }

}
