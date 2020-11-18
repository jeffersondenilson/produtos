import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './views/home/home.component';
import { ProductsComponent } from './views/products/products.component';
import { ProductFormComponent } from './components/product/product-form/product-form.component';

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
	}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
