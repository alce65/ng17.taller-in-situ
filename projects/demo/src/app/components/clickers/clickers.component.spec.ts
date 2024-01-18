import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClickersComponent } from './clickers.component';

describe('ClickersComponent', () => {
  let component: ClickersComponent;
  let fixture: ComponentFixture<ClickersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClickersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ClickersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
