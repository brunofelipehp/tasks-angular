import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Tarefa } from '../../../Tarefa';
import { TaskService } from '../../services/task.service';
import { TasksItemComponent } from "../tasks-item/tasks-item.component";

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [CommonModule, TasksItemComponent],
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

  deleteTask(tarefa: Tarefa) {
    this.taskService.deleteTask(tarefa).subscribe(() => (
      this.tarefas = this.tarefas.filter((t) => t.id == tarefa.id)
    ))
  }
}
