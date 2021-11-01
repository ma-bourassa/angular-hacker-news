import { TestBed } from '@angular/core/testing';

import { HackerNewsService } from './hacker-news.service';
import { of } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';

describe('HackerNewsService', () => {
  let service: HackerNewsService;
  let httpSpy: { get: jasmine.Spy };

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
    });
    service = TestBed.inject(HackerNewsService);
    httpSpy = jasmine.createSpyObj('_http', ['get']);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('getTopStories', () => {
    it('should return the specified number of stories', () => {
      const responseStub: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
      const expectedIds: number[] = [1, 2, 3, 4, 5];
      httpSpy.get.and.returnValue(of(responseStub));

      service.getTopStories(5).subscribe((stories) => {
        expect(stories.length).toEqual(5);
      });
    });
  });
});
