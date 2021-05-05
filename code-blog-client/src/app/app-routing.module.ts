import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './Home/Home.component';
import { PostDetailComponent } from './posts/postDetail/postDetail.component';
import { PostsResolver } from 'src/app/resolvers/postsResolver.resolver';
import { PostResolver } from 'src/app/resolvers/postDetailResolver.resolver';
import { LoginComponent } from './admin/login/login.component';
import { UpdatePostComponent } from './admin/updatePost/updatePost.component';
import { AuthGuard } from './guards/auth.Guard';
import { AddPostComponent } from './admin/add-post/add-post.component';
import { FourOFourComponent } from './home/four-o-four/four-o-four.component';
import { AboutComponent } from './home/about/about.component';
import { ContactComponent } from './home/contact/contact.component';

const routes: Routes = [
  { path: '', component: HomeComponent, resolve: { posts: PostsResolver } },
  {
    path: '',
    runGuardsAndResolvers: 'always',
    children: [
      {
        path: 'post/:id',
        component: PostDetailComponent,
        resolve: { post: PostResolver },
      },
    ],
  },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'admin/login', component: LoginComponent },
  {
    path: 'admin/edit/:id',
    component: UpdatePostComponent,
    resolve: { post: PostResolver },
    canActivate: [AuthGuard],
  },
  {
    path: 'admin/add',
    component: AddPostComponent,
    canActivate: [AuthGuard],
  },
  {
    path: '**',
    component: FourOFourComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  // providers: [AuthGuard]
})
export class AppRoutingModule {}
