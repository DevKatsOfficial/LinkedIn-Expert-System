import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomProfileComponent } from './custom-profile.component';

describe('CustomProfileComponent', () => {
  let component: CustomProfileComponent;
  let fixture: ComponentFixture<CustomProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
