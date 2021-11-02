import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HeaderComponent } from 'src/app/components/layout/header/header.component';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/layout/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { TopStoriesComponent } from './pages/top-stories/top-stories.component';
import { StoryItemComponent } from './components/story-item/story-item.component';
import { StoryComponent } from './pages/story/story.component';
import { CommentItemComponent } from './components/comment-item/comment-item.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent, FooterComponent, TopStoriesComponent, StoryItemComponent, StoryComponent, CommentItemComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
