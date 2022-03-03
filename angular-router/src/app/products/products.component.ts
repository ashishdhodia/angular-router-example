import { Component, OnInit } from '@angular/core';
import { DataStorageService } from '../data-storage.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor(private ht: DataStorageService) { }

  // test() {
  //   this.ht.postdata({ "title": " Angular POST Request Example" }).subscribe((data) => console.log(data));
  // }


  recData: any

  addTo(value: any) {
    if (this.recData[value].quntity_avl == 0) {
      return;
    }
    this.recData[value].added++;
    this.recData[value].quntity_avl--;
    this.recData[value].cost = this.recData[value].price * this.recData[value].added;
    // this.hiderecData = { color: 'black' }

    for (let i = 0; i < this.recData.length; i++) {
      if (this.recData[value].hide == 0) {
        this.recData[value].hide = 1
      }
    }
  }

  remove(value: any) {
    let temp1 = this.recData[value].cost;
    let temp2 = this.recData[value].cost;
    this.recData[value].cost = temp1 - temp2 / this.recData[value].added;
    this.recData[value].added--;
    this.recData[value].quntity_avl++;
    if (this.recData[value].cost < 1) {
      this.recData[value].cost = 0
      this.recData[value].hide = 0
    }




  }
  ngOnInit(): void {
    this.ht.getdata().subscribe((data) => {
      // console.log(data);
      this.recData = data
    });
  }
}
