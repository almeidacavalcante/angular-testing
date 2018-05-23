
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';

export class TodoService { 
  constructor(private http: HttpClient) { 
  }

  add(todo) {
    //TODO: Trocar GET por POST
    return this.http.post('...', 'body-content');
  }

  getTodos() { 
    return this.http.get('...');
  }

  delete(id) {
    return this.http.delete('...').subscribe(json => console.log(json));
  }
}