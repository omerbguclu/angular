import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookComponent } from './book/book.component';
import { AuthorComponent } from './author/author.component';
import { UserComponent } from './user/user.component';
import { ProfileComponent } from './user/profile/profile.component';
import { NewUserComponent } from './user/new-user/new-user.component';
import { ProductComponent } from './product/product.component';
import { NewproductComponent } from './product/newproduct/newproduct.component';
import { PostComponent } from './post/post.component';
import { NewpostComponent } from './post/newpost/newpost.component';

@NgModule({
  declarations: [
    AppComponent,
    BookComponent,
    AuthorComponent,
    UserComponent,
    ProfileComponent,
    NewUserComponent,
    ProductComponent,
    NewproductComponent,
    PostComponent,
    NewpostComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
