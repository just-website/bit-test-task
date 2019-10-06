import { Component, OnInit } from '@angular/core';
import { DataService, Goods } from './services/data.service';

interface FlatGoods {
  groupName: string,
  groupId: string,
  id: string,
  name: string,
  price: number,
  selected?: boolean,
  hidden?: boolean
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'bit-test';
  private initialData: FlatGoods[];
  private goodsList: FlatGoods[] = [];
  private basketList: FlatGoods[] = [];
  private categoryList: string[] = [];
  private dataLoading = true;
  private sortState;
  private showTable: boolean = true;
  private showModal: boolean = false;

  constructor(
    private data: DataService
  ) {}

  ngOnInit() {
    this.data.getData().subscribe( (goods: Goods[]) => {
      this.initialData = goods.map(this.parseGoods).flat();
      this.goodsList = this.initialData;
      this.categoryList = goods.map( category => category.group.name );
      this.dataLoading = false;
    });
  }

  private selectCategory(category) {
    this.dataLoading = true;
    if (!category) {
        this.goodsList = this.initialData;
        this.dataLoading = false;
    } else {
      this.goodsList = this.initialData.filter( goods => {
        return goods.groupName === category;
      })
      this.dataLoading = false;
    }
    this.sortGoods(this.sortState);
  }

  private parseGoods(categoryGroupGoods): FlatGoods[] {
    return categoryGroupGoods.skus.map( goods => {
      return {
        ...goods,
        groupName: categoryGroupGoods.group.name,
        groupId: categoryGroupGoods.group.id
      }
    });
  }

  private addGoods(event) {
    event.goods.selected = event.checked;
    if (event.checked) {
      this.basketList.push(event.goods);
    } else {
      this.basketList.splice(this.basketList.indexOf(event.goods), 1);
    }
  }

  private sortGoods(event) {
    if (!event) {
      return
    }
    this.sortState = event;
    if (event.method === 'price') {
      this.goodsList.sort( (a, b) => {
        return this.sortState.direction ? a.price - b.price : b.price - a.price;
      })
    } else if (event.method === 'name') {
      this.goodsList.sort( (a, b) => {
        if (this.sortState.direction) {
          return a.name > b.name ? 1 : -1;
        } else {
          return b.name > a.name ? 1 : -1;
        }
      })
    }
  }

  private goToBasket() {
    this.setHiddenGoods();
    this.showModal = true;
  }

  private setHiddenGoods() {
    this.goodsList.forEach( goods => {
      if (goods.selected) {
        goods.hidden = true;
        return goods;
      } else {
        return goods;
      }
    })
  }

  private returnToGoods() {
    this.showModal = false;
  }

  private openBasket() {
    this.showModal = false;
    this.showTable = false;
  }
}
