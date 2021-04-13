import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './Home/Home.component';
import { PostDetailComponent } from './posts/postDetail/postDetail.component';
import { PostsResolver } from 'resolvers/postsResolver.resolver';
import { PostListComponent } from './posts/postList/postList/postList.component';
import { PostListResolver } from 'resolvers/postDetailResolver.resolver';

const routes: Routes = [
  { path: '', component: HomeComponent, resolve: { posts: PostsResolver } },
  {
    path: '',
    runGuardsAndResolvers: 'always',
    children: [

      { path: 'post/:id', component: PostDetailComponent, resolve: {post: PostListResolver} },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
