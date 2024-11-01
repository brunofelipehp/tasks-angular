import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Tarefa } from '../../../Tarefa';

@Component({
  selector: 'app-add-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-task.component.html',
  styleUrl: './add-task.component.css'
})
export class AddTaskComponent {
  @Output() onAddTask = new EventEmitter<Tarefa>();

  tarefa: string = '';
  categoria: string = '';
  concluido: boolean = false;

  onSubmit() {
    if(!this.tarefa && this.categoria == "") {
      alert("Preencha todos os campos para adicionar uma nova tarefa");
      return;
    }

    const newTask = {
      tarefa: this.tarefa,
      categoria: this.categoria,
      concluido: this.concluido
    }

    this.onAddTask.emit(newTask);

    this.tarefa = '';
    this.categoria = '';
    this.concluido = false;
  }
}
