import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { Tarefa } from '../../../Tarefa';

@Component({
  selector: 'app-tasks-item',
  standalone: true,
  imports: [FontAwesomeModule, CommonModule],
  templateUrl: './tasks-item.component.html',
  styleUrl: './tasks-item.component.css'
})
export class TasksItemComponent {
  @Input() tarefa!:Tarefa;
  @Output() onDeleteTask = new EventEmitter<Tarefa>()

  faTimes = faTimes

  onDelete(tarefa: Tarefa) {
    this.onDeleteTask.emit(tarefa);
  }
}
