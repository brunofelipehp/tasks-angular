import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Tarefa } from '../../../Tarefa';
import { TaskService } from '../../services/task.service';
import { AddTaskComponent } from "../add-task/add-task.component";
import { TasksItemComponent } from "../tasks-item/tasks-item.component";

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [CommonModule, TasksItemComponent, AddTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {

  tarefas: Tarefa[] = []
 
  constructor(private taskService:TaskService){}

  ngOnInit(): void {
    this.taskService.getTasks().subscribe((data) => {
      this.tarefas = data
      console.log(data);
      
    });
  }

  addTask(tarefa: Tarefa) {
    this.taskService.addTask(tarefa).subscribe((tarefa) => {
      this.tarefas.push(tarefa);
    });
  }

  deleteTask(tarefa: Tarefa) {
    this.taskService.deleteTask(tarefa).subscribe(() => (
      this.tarefas = this.tarefas.filter((t) => t.id == tarefa.id)
    ))
  }

  toggleConcluido(tarefa: Tarefa){
    tarefa.concluido = !tarefa.concluido;
    this.taskService.updateTask(tarefa).subscribe();
  }
}
