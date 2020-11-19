import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Product } from '../product.model';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-confirm-delete',
  templateUrl: './product-confirm-delete.component.html',
  styleUrls: ['./product-confirm-delete.component.css']
})
export class ProductConfirmDeleteComponent implements OnInit {

  product: Product;

  constructor(
    private productService: ProductService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    
    this.productService.readById(id).subscribe((product: Product) => {
      this.product = product;
    });
  }

  confirm(): void {
    if(this.product.id){
      this.productService.delete(this.product.id).subscribe(() => {
    	  this.productService.showMessage('Produto excluído!');
        this.router.navigate(['/products']);
      });
    }
  }

  cancel(): void {
  	this.router.navigate(['/products']);
  }

}
