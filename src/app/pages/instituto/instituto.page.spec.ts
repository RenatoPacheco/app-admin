import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InstitutoPage } from './instituto.page';

describe('InstitutoComponent', () => {
  let component: InstitutoPage;
  let fixture: ComponentFixture<InstitutoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InstitutoPage ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InstitutoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
