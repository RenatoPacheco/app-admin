import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlteraPage } from './altera.page';

describe('CursoAlteraComponent', () => {
  let component: AlteraPage;
  let fixture: ComponentFixture<AlteraPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlteraPage ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlteraPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
