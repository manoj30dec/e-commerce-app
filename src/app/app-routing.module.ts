import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllUsersComponent } from './all-users/all-users.component';

import { AuthguardGuard } from './authguard.guard';

import { DashBoardComponent } from './dshboard/dshboard.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductListPageComponent } from './product-list-page/product-list-page.component';

const routes: Routes = [
  { path: 'home', component: DashBoardComponent },
  { path: 'product-list', component: ProductListPageComponent},
  { path: 'product-detail', component: ProductDetailComponent},
  { path: 'all-users', component: AllUsersComponent, canActivate:[AuthguardGuard] },
  { path: 'page-not-found', component: PageNotFoundComponent },
  { path: 'login', component: LoginComponent },
  { path: '',   redirectTo: '/home', pathMatch: 'full', canActivate:[AuthguardGuard]  }, // redirect to `first-component`
  { path: '**', component: PageNotFoundComponent },  // Wildcard route for a 404 page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
