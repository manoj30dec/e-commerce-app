//default modules & components
import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

// routing module
import { AppRoutingModule } from './app-routing.module';


// custom (feature) module
import { AppComponent } from './app.component';
import { PrimeHeaderComponent } from './prime-header/prime-header.component';
import { LeftNavComponent } from './left-nav/left-nav.component';
import { FormsModule } from '@angular/forms';
import { AdmissionFormComponent } from './admission-form/admission-form.component';
import { DashBoardComponent } from './dshboard/dshboard.component';
import { ProductListPageComponent } from './product-list-page/product-list-page.component';
import { PrimeFooterComponent } from './prime-footer/prime-footer.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { LoginComponent } from './login/login.component';
import { AuthService } from './authservice.service';
import { APP_BASE_HREF } from '@angular/common';
import { LoaderComponent } from './loader/loader.component';
import { AllUsersComponent } from './all-users/all-users.component';
import { HttpInterCepterService } from './http-inter-cepter.service';

@NgModule({
  declarations: [
    AppComponent,
    PrimeHeaderComponent,
    LeftNavComponent,
    AdmissionFormComponent,
    DashBoardComponent,
    ProductListPageComponent,
    PrimeFooterComponent,
    PageNotFoundComponent,
    ProductDetailComponent,
    LoginComponent,
    LoaderComponent,
    AllUsersComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule  
  ],
  providers: [
   // {provide: APP_BASE_HREF, useValue: 'https://fakestoreapi.com'},
   AuthService,
   {
    provide: HTTP_INTERCEPTORS,
    useClass: HttpInterCepterService,
    multi: true
   }
  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { }
