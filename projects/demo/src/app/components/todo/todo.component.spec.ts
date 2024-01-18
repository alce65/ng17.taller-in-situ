import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoComponent } from './todo.component';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('TodoComponent', () => {
  let component: TodoComponent;
  let fixture: ComponentFixture<TodoComponent>;
  let debugElement: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TodoComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TodoComponent);
    component = fixture.componentInstance;
    debugElement = fixture.debugElement;
    fixture.detectChanges(); // dispara ngOnInit
    await fixture.whenStable();
    fixture.detectChanges();
  });

  it('should create', async () => {
    const itemElements: DebugElement[] = debugElement.queryAll(By.css('li'));
    expect(component).toBeTruthy();
    expect(component.tasks.length).toBe(4);
    expect(itemElements.length).toBe(4);
  });

  describe('When the user write a task and click the button for add it', () => {
    beforeEach(() => {
      const inputElement: HTMLInputElement = debugElement.query(
        By.css('.add input')
      ).nativeElement;
      const buttonDebugElement: DebugElement = debugElement.query(
        By.css('.add button')
      );
      inputElement.value = 'New task';
      inputElement.dispatchEvent(new Event('input'));
      buttonDebugElement.triggerEventHandler('click');
    });

    it('should be added a task to the tasks array', () => {
      expect(component.tasks.length).toBe(5);
      expect(component.tasks[4].title).toBe('New task');
    });
  });

  describe('When the user NOT write a task and click the button for add it', () => {
    beforeEach(() => {
      const inputElement: HTMLInputElement = debugElement.query(
        By.css('.add input')
      ).nativeElement;
      const buttonDebugElement: DebugElement = debugElement.query(
        By.css('.add button')
      );
      inputElement.value = '';
      inputElement.dispatchEvent(new Event('input'));
      buttonDebugElement.triggerEventHandler('click');
    });

    it('should be created the error message', () => {
      expect(component.addError).toBe('Invalid data');
      // expect(component.tasks[4].title).toBe('New task');
    });
  });

  describe('When the user modify a task checking it for complete', () => {
    beforeEach(() => {
      const inputElement: HTMLInputElement = debugElement.queryAll(
        By.css('.list input[type="checkbox"]')
      )[1].nativeElement;
      inputElement.checked = true;
      inputElement.dispatchEvent(new Event('change'));
    });

    it('should be updated a task in the tasks array', () => {
      expect(component.tasks[1].isComplete).toBe(true);
    });
  });

  describe('When the user modify a task writing a new title', () => {
    beforeEach(() => {
      const inputElement: HTMLInputElement = debugElement.queryAll(
        By.css('.list input[type="text"]')
      )[1].nativeElement;
      const buttonDebugElement: DebugElement = debugElement.queryAll(
        By.css('.list button.edit')
      )[1];
      buttonDebugElement.triggerEventHandler('click');
      inputElement.value = 'Updated title';
      inputElement.dispatchEvent(new Event('input'));
      inputElement.dispatchEvent(new Event('blur'));
    });
    it('should be updated a task in the tasks array', () => {
      expect(component.tasks[1].title).toBe('Updated title');
    });
  });

  describe('When the user click de button for delete a task', () => {
    let initialListLength: number;
    beforeEach(() => {
      initialListLength = component.tasks.length;
      const buttonDebugElement: DebugElement = debugElement.queryAll(
        By.css('.list button.delete')
      )[1];
      buttonDebugElement.triggerEventHandler('click');
    });
    it('should be removed a task from the tasks array', () => {
      expect(component.tasks.length).toBeLessThan(initialListLength);
    });
  });
});
