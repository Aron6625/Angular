import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  lists = signal([
      'fila1 ',
      'fila2',
      'fila 3',
    ]);
  changeHandler(event: Event){
    const input = event.target as HTMLInputElement;
    const newList = input.value;
    this.lists.update((lists) => [...lists,newList]);
    
  }
  deleteList(index: number){
    this.lists.update((list) => list.filter((task, position) => position !== index));
  }
}
