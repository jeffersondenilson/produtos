import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './views/home/home.component';
import { ProductsComponent } from './views/products/products.component';
import { ProductFormComponent } from './components/product/product-form/product-form.component';
import { ProductConfirmDeleteComponent } from './components/product/product-confirm-delete/product-confirm-delete.component';

const routes: Routes = [
	{
		path: '',
		component: HomeComponent
	}, {
		path: 'products',
		component: ProductsComponent
	}, {
		path: 'products/create',
		component: ProductFormComponent
	}, {
		path: 'products/update/:id',
		component: ProductFormComponent
	}, {
		path: 'products/delete/:id',
		component: ProductConfirmDeleteComponent
	}, {
		path: '**',
		redirectTo: '/'
	}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
