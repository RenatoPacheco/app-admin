import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CursoPage } from './curso.page';

describe('CursoComponent', () => {
  let component: CursoPage;
  let fixture: ComponentFixture<CursoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CursoPage ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CursoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
