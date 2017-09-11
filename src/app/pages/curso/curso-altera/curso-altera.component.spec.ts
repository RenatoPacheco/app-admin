import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CursoAlteraComponent } from './curso-altera.component';

describe('CursoAlteraComponent', () => {
  let component: CursoAlteraComponent;
  let fixture: ComponentFixture<CursoAlteraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CursoAlteraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CursoAlteraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
