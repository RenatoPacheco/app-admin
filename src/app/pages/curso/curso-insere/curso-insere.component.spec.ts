import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CursoInsereComponent } from './curso-insere.component';

describe('CursoInsereComponent', () => {
  let component: CursoInsereComponent;
  let fixture: ComponentFixture<CursoInsereComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CursoInsereComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CursoInsereComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
