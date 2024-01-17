import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SampleComponent } from './sample.component';
import { By } from '@angular/platform-browser';

describe('SampleComponent', () => {
  let component: SampleComponent;
  let fixture: ComponentFixture<SampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SampleComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`should have the 'demo' title`, () => {
    expect(component.title).toEqual('Sample Angular');
  });

  it('should render title', () => {
    const debugElement = fixture.debugElement.query(By.css('h1'));
    const compiled = debugElement.nativeElement as HTMLHeadingElement;
    expect(compiled.textContent).toContain('Hello');
  });
});
