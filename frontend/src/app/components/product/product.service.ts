import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpClient } from '@angular/common/http';
import { Product } from './product.model';
import { EMPTY, Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { environment } from './../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

	baseUrl: string = environment.baseApiUrl;

  constructor(private snackbar: MatSnackBar, private http: HttpClient) { }

  showMessage(msg: string, isError: boolean = false): void {
  	this.snackbar.open(msg, 'OK', {
  		duration: 3000,
  		horizontalPosition: 'right',
  		verticalPosition: 'top',
      panelClass: isError ? ['msg-error'] : ['msg-success']
  	});
  }

  errorHandler(e: any, msg: string): Observable<any> {
    this.showMessage(msg, true);
    return EMPTY;
  }

  create(product: Product): Observable<Product> {
  	return this.http.post<Product>(this.baseUrl, product).pipe(
      map(obj => obj),
      catchError(e => this.errorHandler(e, 'Erro ao criar produto!'))
    );
	}
	
	read(): Observable<Product[]> {
		return this.http.get<Product[]>(this.baseUrl).pipe(
      map(obj => obj),
      catchError(e => this.errorHandler(e, 'Erro ao obter produtos!'))
    );
	}

  readById(id: number): Observable<Product> {
    return this.http.get<Product>(`${this.baseUrl}/${id}`).pipe(
      map(obj => obj),
      catchError(e => this.errorHandler(e, 'Erro ao obter produto!'))
    );
  }

  update(product: Product): Observable<Product> {
    return this.http.put<Product>(`${this.baseUrl}/${product.id}`, product).pipe(
      map(obj => obj),
      catchError(e => this.errorHandler(e, 'Erro ao atualizar produto!'))
    );
	}
	
	delete(id: number): Observable<Product> {
		return this.http.delete<Product>(`${this.baseUrl}/${id}`).pipe(
      map(obj => obj),
      catchError(e => this.errorHandler(e, 'Erro ao excluir Produto!'))
    );
  }
}
