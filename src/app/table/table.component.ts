import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { toggleHideTrAnimation } from '../../animations/animation'

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
  animations: [
    toggleHideTrAnimation('toggleHideTr')
  ]
})
export class TableComponent implements OnInit {

  private sortPriceUpper:boolean = false;
  private sortNameUpper:boolean = false;

  constructor(
  ) { }

  @Input() goodsList;
  @Output() onChecked = new EventEmitter();
  @Output() onSorted = new EventEmitter();
  ngOnInit() {
  }

  sortGoods(method) {
    let direction;
    switch(method) {
      case 'price': this.sortPriceUpper = !this.sortPriceUpper;
                    direction = this.sortPriceUpper
                    break;
      case 'name': this.sortNameUpper = !this.sortNameUpper;
                    direction = this.sortNameUpper;
                    break;
    }
    this.onSorted.emit({
      direction,
      method
    });
  }

  toggleCheck(event, goods) {
    this.onChecked.emit({
      goods,
      checked: event.target.checked
    })
    
  }
}
