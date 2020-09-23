import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  public prod = ['P1', 'P2', 'P3', 'P4', 'P5']
  constructor() { }

  ngOnInit() {
  }

}
