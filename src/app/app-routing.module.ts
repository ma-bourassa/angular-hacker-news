import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TopStoriesComponent} from "./pages/top-stories/top-stories.component";
import {StoryComponent} from "./pages/story/story.component";

const routes: Routes = [
  { path: 'top', component: TopStoriesComponent },
  { path: 'story', component: StoryComponent },

  { path: '',   redirectTo: '/top', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
