import { Component, OnInit, Input, Output, SimpleChanges, OnChanges } from '@angular/core';
import { EventEmitter } from 'events';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() datas:any;
  @Output() child = new EventEmitter();

  constructor() {
   }

  ngOnInit() {
  }

}
