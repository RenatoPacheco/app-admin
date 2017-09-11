import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InstitutoInsereComponent } from './instituto-insere.component';

describe('InstitutoInsereComponent', () => {
  let component: InstitutoInsereComponent;
  let fixture: ComponentFixture<InstitutoInsereComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InstitutoInsereComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InstitutoInsereComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
