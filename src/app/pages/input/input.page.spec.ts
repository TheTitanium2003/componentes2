import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { InputPage } from './input.page';

describe('InputPage', () => {
  let component: InputPage;
  let fixture: ComponentFixture<InputPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(InputPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
