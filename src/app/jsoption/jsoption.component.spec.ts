import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JsoptionComponent } from './jsoption.component';

describe('JsoptionComponent', () => {
  let component: JsoptionComponent;
  let fixture: ComponentFixture<JsoptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JsoptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JsoptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
