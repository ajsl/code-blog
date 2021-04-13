import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Home/Home.component';
import { HttpClientModule } from '@angular/common/http';
import { PostsResolver } from 'resolvers/postsResolver.resolver';
import { PostListComponent } from './posts/postList/postList/postList.component';
import { PostDetailComponent } from './posts/postDetail/postDetail.component';
import { PostCardComponent } from './posts/postDetail/post-card/post-card.component';
import { PostListResolver } from 'resolvers/postDetailResolver.resolver';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PostListComponent,
    PostDetailComponent,
    PostCardComponent
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [PostsResolver, PostListResolver],
  bootstrap: [AppComponent],
})
export class AppModule {}
