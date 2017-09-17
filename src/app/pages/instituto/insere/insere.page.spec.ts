import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InserePage } from './insere.page';

describe('InstitutoInsereComponent', () => {
  let component: InserePage;
  let fixture: ComponentFixture<InserePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InserePage ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InserePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
