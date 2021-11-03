import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoryComponent } from './story.component';
import { HackerNewsService } from '../../services/hacker-news.service';
import { RouterTestingModule } from '@angular/router/testing';

describe('StoryComponent', () => {
  let component: StoryComponent;
  let fixture: ComponentFixture<StoryComponent>;
  let hackerNewsServiceStub: Partial<HackerNewsService>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StoryComponent],
      imports: [RouterTestingModule],
      providers: [{ provide: HackerNewsService, useValue: hackerNewsServiceStub }],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StoryComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
