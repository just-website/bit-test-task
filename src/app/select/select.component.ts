import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent implements OnInit {

  @Input() categoryes;
  @Output() selected = new EventEmitter();
  constructor() { }

  ngOnInit() {   
  }

  selectCategory(event) {
    this.selected.emit(event.srcElement.value);
  }

}
