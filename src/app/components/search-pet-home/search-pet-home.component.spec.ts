import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchPetHomeComponent } from './search-pet-home.component';

describe('SearchPetHomeComponent', () => {
  let component: SearchPetHomeComponent;
  let fixture: ComponentFixture<SearchPetHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchPetHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchPetHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
