import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InstitutoAlteraComponent } from './instituto-altera.component';

describe('InstitutoAlteraComponent', () => {
  let component: InstitutoAlteraComponent;
  let fixture: ComponentFixture<InstitutoAlteraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InstitutoAlteraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InstitutoAlteraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
