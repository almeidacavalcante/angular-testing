import { TodosComponent } from './todos.component'; 
import { TodoService } from './todo.service'; 

describe('TodosComponent', () => {
  let component: TodosComponent;
  let service: TodoService;

  beforeEach(() => {
    service = new TodoService(null);
    component = new TodosComponent(service);
  });

  it('', () => {
  });
});