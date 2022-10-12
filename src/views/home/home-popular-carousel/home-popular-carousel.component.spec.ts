import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePopularCarouselComponent } from './home-popular-carousel.component';

describe('HomePopularCarouselComponent', () => {
  let component: HomePopularCarouselComponent;
  let fixture: ComponentFixture<HomePopularCarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomePopularCarouselComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomePopularCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
