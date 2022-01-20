import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/services/service.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  products;
  constructor(private service:ServiceService) { }

  ngOnInit(): void {
    this.getProducts();
  }
  getProducts() {
    this.service.getProducts()
        .subscribe(
          res => {
            if(res.success){
              this.products= res.data;
            }
          },
          err => {
            alert("server error")
          }
        )
  }

}
