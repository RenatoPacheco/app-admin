import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MinhaContaPage } from './minha-conta.page';

describe('MinhaContaComponent', () => {
  let component: MinhaContaPage;
  let fixture: ComponentFixture<MinhaContaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MinhaContaPage ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MinhaContaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
