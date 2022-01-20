import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/services/service.service';
declare var Razorpay:any;
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
   
 
  makePayment(product) {
    const data = {
      amount : product.price
    }
    this.service.createOrder(data)
        .subscribe(
          res => {
            if(res.success){
              
             const  options = {
                key: "rzp_test_Fgu3ru1fIy4Fko", // Enter the Key ID generated from the Dashboard
                currency: "INR",
                amount : product.price*100,
                name: product.title,
                description: product.description,
                image: product.image,
                order_id: res.data.id,
                handler: function (response){
                    alert(response.razorpay_payment_id);
                    alert(response.razorpay_order_id);
                    alert(response.razorpay_signature)
                },
              }
              var rzp = new Razorpay(options);
              rzp.open();
            }
          }
        )
  }

}
