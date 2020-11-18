import { Component, OnInit } from '@angular/core';
import { ProductService } from './../product.service';
import { Product } from './../product.model';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {
  
  product: Product = {
    name: '',
    price: null
  };
  
  constructor(
  	private productService: ProductService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
   
    if(id){
      this.productService.readById(id).subscribe((product: Product) => {
        this.product = product;
      });
    }
  }

  submit(): void {
    const action = this.product.id ? 'update' : 'create';
    const message = this.product.id ? 'Produto atualizado!' : 'Produto criado!';

    this.productService[action](this.product).subscribe(() => {
  	  this.productService.showMessage(message);
      this.router.navigate(['/products']);
    });
  }

  cancel(): void {
  	this.router.navigate(['/products']);
  }

}
