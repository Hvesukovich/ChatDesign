import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditingAMessageComponent } from './editing-a-message.component';

describe('EditingAMessageComponent', () => {
  let component: EditingAMessageComponent;
  let fixture: ComponentFixture<EditingAMessageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditingAMessageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditingAMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
