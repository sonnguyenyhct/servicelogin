import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {DictionaryComponent} from './dictionary/dictionary.component';
import {DictionaryPageComponent} from './dictionary-page/dictionary-page.component';
import {DictionaryDetailComponent} from './dictionary-detail/dictionary-detail.component';
import {AuthGuard} from './auth.guard';
import {LoginStep1Component} from './login-step1/login-step1.component';
import {LoginStep2Component} from './login-step2/login-step2.component';

const routes: Routes = [
  { path: 'dictionary',
    component: DictionaryComponent
  },
  { path: 'dictionary2',
    component: DictionaryPageComponent,
    children: [
      {
        path: ':key',
        component: DictionaryDetailComponent,
        canActivate: [AuthGuard]
      }
    ]
  },
  {
    path: 'timelines',
    component: DictionaryPageComponent
  },
  {
    path: 'login-step-1',
    component: LoginStep1Component
  },
  {
    path: 'login-step-2',
    component: LoginStep2Component
  },
  {
    path: 'blog',
    loadChildren: './blog/blog.module#BlogModule'
  }

]

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
