import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { modalShowAnimation } from '../../animations/animation'


@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
  animations: [
    modalShowAnimation('modalAnimation')
  ]
})
export class ModalComponent implements OnInit {

  @Output() onReturn = new EventEmitter();
  @Output() onBasket = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  
  return() {
    this.onReturn.emit();
  }

  goToBasket() {
    this.onBasket.emit();
  }

}
