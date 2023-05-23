import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestingAngularAppComponent } from './testing-angular-app.component';

describe('TestingAngularAppComponent', () => {
  let component: TestingAngularAppComponent;
  let fixture: ComponentFixture<TestingAngularAppComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TestingAngularAppComponent]
    });
    fixture = TestBed.createComponent(TestingAngularAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
