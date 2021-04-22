import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './Home/Home.component';
import { PostDetailComponent } from './posts/postDetail/postDetail.component';
import { PostsResolver } from 'src/app/resolvers/postsResolver.resolver';
import { PostListComponent } from './posts/postList/postList/postList.component';
import { PostListResolver } from 'src/app/resolvers/postDetailResolver.resolver';
import { LoginComponent } from './admin/login/login.component';
import { UpdatePostComponent } from './admin/updatePost/updatePost.component';
import { AuthGuard } from './guards/authGuard';

const routes: Routes = [
  { path: '', component: HomeComponent, resolve: { posts: PostsResolver } },
  {
    path: '',
    runGuardsAndResolvers: 'always',
    children: [
      {
        path: 'post/:id',
        component: PostDetailComponent,
        resolve: { post: PostListResolver },
      },
    ],
  },
  { path: 'admin/login', component: LoginComponent },
  {
    path: 'admin/update',
    component: UpdatePostComponent,
    canActivate: [AuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
