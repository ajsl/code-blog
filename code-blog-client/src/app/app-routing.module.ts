import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './Home/Home.component';
import { PostDetailComponent } from './posts/postDetail/postDetail.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'post/:id', component: PostDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
