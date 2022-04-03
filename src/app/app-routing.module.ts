import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomePageComponent} from "./pages/home-page/home-page.component";
import {UserInfosComponent} from "./pages/user-infos/user-infos.component";
import {LoginComponent} from "./pages/login/login.component";
import {AppComponent} from "./app.component";
import {RegisterComponent} from "./pages/register/register.component";
import {NotFoundComponent} from "./pages/not-found/not-found.component";

const routes: Routes = [
  {
    path: '', component: AppComponent,
    children: [
      {
        path: '', component: HomePageComponent
      },
      {
        path: 'my-infos', component: UserInfosComponent
      },
      {
        path: 'login', component: LoginComponent
      },
      {
        path: 'register', component: RegisterComponent
      },
    ]
  },
  {
    path: '**', component: NotFoundComponent
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
