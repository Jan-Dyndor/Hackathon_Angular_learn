import { Service } from '@angular/core';
import { Todo } from '../model/todo.type';

@Service()
export class TodosService {

    todoItems: Array<Todo> = [
        {
            userId: 1,
            id: 1,
            title: "Learn Angular",
            completed: true
        },
        {
            userId: 1,
            id: 2,
            title: "Gorcieers",
            completed: true
        },
        {
            userId: 1,
            id: 3,
            title: "Fun",
            completed: true
        },
        {
            userId: 1,
            id: 4,
            title: "Dick",
            completed: true
        },
        {
            userId: 1,
            id: 5,
            title: "Dick",
            completed: true
        }
    ]
}
