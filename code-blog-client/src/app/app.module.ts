import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Home/Home.component';
import { HttpClientModule } from '@angular/common/http';
import { PostsResolver } from 'resolvers/postsResolver.resolver';
import { PostListComponent } from './posts/postList/postList/postList.component';
import { PostDetailComponent } from './posts/postDetail/postDetail.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PostListComponent,
    PostDetailComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [PostsResolver],
  bootstrap: [AppComponent],
})
export class AppModule {}
