import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpClient } from '@angular/common/http';
import { Product } from './product.model';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

	baseUrl: string = 'http://localhost:3001/products';

  constructor(private snackbar: MatSnackBar, private http: HttpClient) { }

  showMessage(msg: string): void {
  	this.snackbar.open(msg, 'OK', {
  		duration: 3000,
  		horizontalPosition: 'right',
  		verticalPosition: 'top'
  	});
  }

  create(product: Product): Observable<Product> {
  	return this.http.post<Product>(this.baseUrl, product);
  }
}