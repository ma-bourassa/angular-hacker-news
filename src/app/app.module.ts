import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HeaderComponent } from 'src/app/components/layout/header/header.component';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/layout/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { StoryListComponent } from './components/story-list/story-list.component';
import { StoryItemComponent } from './components/story-item/story-item.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent, FooterComponent, StoryListComponent, StoryItemComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
