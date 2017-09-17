import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalhePage } from './detalhe.page';

describe('InstitutoDetalheComponent', () => {
  let component: DetalhePage;
  let fixture: ComponentFixture<DetalhePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetalhePage ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalhePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
