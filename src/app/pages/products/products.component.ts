import { ProductRemote } from './../../shared/dto/productRemote.dto';
import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card'
import { ProductService } from '../../shared/services/product.service';

@Component({
  selector: 'app-products',
  imports: [MatCardModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent implements OnInit {
  constructor(private productService: ProductService) { }

  productList:ProductRemote[] = []

  ngOnInit() {
    this.productService.getProducts().subscribe(
      {next: (data) => {
        this.productList = data
      }
      , error: (error) => {
        console.error('Error fetching products:', error);
      }}
    )

  }


}
