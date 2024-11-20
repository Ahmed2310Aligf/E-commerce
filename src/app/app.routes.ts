import { Routes } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { ProductComponent } from './components/product/product.component';
import { ProductParentsComponent } from './components/product-parents/product-parents.component';
import { FooterComponent } from './components/footer/footer.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ProdDetailsComponent } from './components/prod-details/prod-details.component';
import { ObservableComponent } from './components/observable/observable.component';
import { NewProdComponent } from './components/new-prod/new-prod.component';
import { AuthComponent } from './components/auth/auth.component';
import { userGuard } from './Guards/user.guard';
import { UserReactiveFormComponent } from './components/User/user-reactive-form/user-reactive-form.component';

export const routes: Routes = [
  {path:'', component: ProductComponent},
  {path:'home', component: HeaderComponent },
  {path:'Products', component: ProductParentsComponent,canActivate: [userGuard]},
  {path:'ProductParents', component: ProductParentsComponent,canActivate: [userGuard]},
  {path:'product/:prodId', component: ProdDetailsComponent},
  {path:'product', component: ProdDetailsComponent},
  {path:'observe', component: ObservableComponent},
  {path:'newProduct', component: NewProdComponent},
  {path:'UserForm', component: UserReactiveFormComponent},
  {path:'User', component: AuthComponent},
  {path:'newProduct/:prodId', component: NewProdComponent},
  {path:'**', component: NotFoundComponent}
];
