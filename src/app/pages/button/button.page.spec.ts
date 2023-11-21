import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { ButtonPage } from './button.page';

describe('ButtonPage', () => {
  let component: ButtonPage;
  let fixture: ComponentFixture<ButtonPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ButtonPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
