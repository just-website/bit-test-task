import { Component, OnInit, Input } from '@angular/core';
import { toggleHideAnimation } from '../../animations/animation'


@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.scss'],
  animations: [
    toggleHideAnimation('toggleHide')
  ]
})
export class BasketComponent implements OnInit {

  @Input() goods;
  constructor() { }

  private totalPrice: number = 0;
  ngOnInit() {
    this.calcTotalPrice();
  }

  deleteItem(item) {
    this.goods = this.goods.filter( goodsItem => goodsItem != item);
    this.calcTotalPrice();
  }

  calcTotalPrice() {
    this.totalPrice = this.goods.reduce((sum, item) => {
      return sum += item.price;
    }, 0);
  }

}
