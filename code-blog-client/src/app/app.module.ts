import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Home/Home.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { PostsResolver } from 'src/app/resolvers/postsResolver.resolver';
import { PostListComponent } from './posts/postList/postList/postList.component';
import { PostDetailComponent } from './posts/postDetail/postDetail.component';
import { PostCardComponent } from './posts/postDetail/post-card/post-card.component';
import { PostResolver } from 'src/app/resolvers/postDetailResolver.resolver';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './admin/login/login.component';
import { UpdatePostComponent } from './admin/updatePost/updatePost.component';
import { AddPostComponent } from './admin/add-post/add-post.component';
import { JwtInterceptor } from './interceptors/jwt.interceptor';
import { AuthGuard } from './guards/auth.Guard';
import { AuthService } from './services/auth.service';
import { PostService } from './services/post.service';
import { NavBarComponent } from './shared/nav-bar/nav-bar.component';
import { PostListPaginationComponent } from './posts/post-list-pagination/post-list-pagination.component';
import { FourOFourComponent } from './home/four-o-four/four-o-four.component';
import { AboutComponent } from './home/about/about.component';
import { ContactComponent } from './home/contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PostListComponent,
    PostDetailComponent,
    PostCardComponent,
    LoginComponent,
    UpdatePostComponent,
    AddPostComponent,
    NavBarComponent,
    PostListPaginationComponent,
    FourOFourComponent,
    AboutComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
    PostsResolver,
    PostResolver,
    AuthGuard,
    AuthService,
    PostService,
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
