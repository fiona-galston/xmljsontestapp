import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { XmloptionComponent } from './xmloption.component';

describe('XmloptionComponent', () => {
  let component: XmloptionComponent;
  let fixture: ComponentFixture<XmloptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ XmloptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(XmloptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
