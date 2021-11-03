import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoryItemComponent } from './story-item.component';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';

describe('StoryItemComponent', () => {
  let component: StoryItemComponent;
  let fixture: ComponentFixture<StoryItemComponent>;

  let router = {
    navigate: jasmine.createSpy('navigate'),
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [StoryItemComponent],
      providers: [{ provide: Router, useValue: router }],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StoryItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('setStoryUrl', () => {
    it('should return the hostname without www when url is valid', () => {
      const url = 'https://github.com/HackerNews/API';

      const result = component.setStoryUrl(url);

      expect(result).toEqual('github.com');
    });

    it('should return undefined when url is undefined', () => {
      const result = component.setStoryUrl(undefined);

      expect(result).toBeUndefined();
    });
  });
});
