import { TodoFormComponent } from './todo-form.component'; 
import { FormBuilder } from '@angular/forms';


describe('TodoFormComponent', () => {
  var component: TodoFormComponent; 

  beforeEach(() => {
    this.component = new TodoFormComponent(new FormBuilder());
  });

  it('Deve ter os campos name e email', () => {
    expect(this.component.form.contains('name')).toBeTruthy();
    expect(this.component.form.contains('email')).toBeTruthy();
  });

  it('', () => {
  });
});