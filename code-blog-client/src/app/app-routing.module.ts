import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './Home/Home.component';
import { PostDetailComponent } from './posts/postDetail/postDetail.component';
import { PostsResolver } from 'resolvers/postsResolver.resolver';
import { PostListComponent } from './posts/postList/postList/postList.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: '',
    runGuardsAndResolvers: 'always',
    children: [
      {
        path: 'posts',
        component: PostListComponent,
        resolve: { posts: PostsResolver },
      },
      { path: 'post/:id', component: PostDetailComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
