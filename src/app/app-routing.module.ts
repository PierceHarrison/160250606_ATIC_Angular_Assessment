import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';



const routes: Routes = [
  {path: 'account', loadChildren: () => import('./account/account.module').then(m => m.AccountModule)},
  {path: 'auth', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)},
  {path: '', redirectTo: '/movie', pathMatch: 'full'},
  
  
  // {path: 'movie', component: MovieComponent,

  //   children: [
  //     {path: ':query', component: MovieListComponent},
  //     {path: ':query/:id', component: MovieFullComponent}
  //   ]
  
  // },

  // {path: 'login', component: LoginComponent},
  // {path: 'register', component: RegisterComponent},
  // {path: 'account', component: AccountComponent, canActivate: [AuthGuardService]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
