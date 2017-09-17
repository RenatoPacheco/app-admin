import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NaoEncontradaPage } from './nao-encontrada.page';

describe('NaoEncontradaComponent', () => {
  let component: NaoEncontradaPage;
  let fixture: ComponentFixture<NaoEncontradaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NaoEncontradaPage ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NaoEncontradaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
