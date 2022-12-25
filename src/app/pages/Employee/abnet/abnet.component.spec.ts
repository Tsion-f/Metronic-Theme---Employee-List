import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ABnetComponent } from './abnet.component';

describe('ABnetComponent', () => {
  let component: ABnetComponent;
  let fixture: ComponentFixture<ABnetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ABnetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ABnetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
