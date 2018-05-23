
import { TodoService } from './todo.service'

export class TodosComponent { 
  todos: any;
  message; 

  constructor(private service: TodoService) {}

  ngOnInit() { 
    // this.service.getTodos().subscribe(t => this.todos = t);
    this.service.getTodos().subscribe(json => this.todos = json);
  }

  add() { 
    //Cria um objeto TodoComponent
    var newTodo = { title: '... ' };

    //Adiciona ao servidor
    this.service.add(newTodo).subscribe(

      //Em caso positivo, adiciona o objeto na lista local do componente
      t => this.todos.push(t),

      //Em caso de erro lança uma exceção;
      err => this.message = err);
  }

  delete(id) {
    // if (confirm('Are you sure?'))
    //   this.service.delete(id).subscribe();
  }  
}
