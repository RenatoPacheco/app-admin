import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ErroPage } from './erro.page';

describe('Erro.PageComponent', () => {
  let component: ErroPage;
  let fixture: ComponentFixture<ErroPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ErroPage ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ErroPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
