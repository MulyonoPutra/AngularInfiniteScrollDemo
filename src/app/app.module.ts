import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { CommentsCardComponent } from '../components/comments-card/comments-card.component';
import { NavbarComponent } from '../components/navbar/navbar.component';
import { SidebarButtonComponent } from '../components/sidebar-button/sidebar-button.component';
import { ShortenerTextPipe } from '../shared/pipes/shortener-text.pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CommentsCardComponent,
    SidebarButtonComponent,
    ShortenerTextPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    InfiniteScrollModule,
    HttpClientModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [
    NavbarComponent,
    CommentsCardComponent,
    SidebarButtonComponent,
    ShortenerTextPipe,
  ],
})
export class AppModule {}
