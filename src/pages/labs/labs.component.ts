import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-labs',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './labs.component.html',
  styleUrl: './labs.component.css'
})
export class LabsComponent {
  practice = 'jajjaja';
  lists = signal([
    'fila1 ',
    'fila2',
    'fila 3',
  ]);
  name = signal('nicolas');
  status = true;
  urlImage = 'https://avatarfiles.alphacoders.com/325/325084.jpg';
  person = {
    name: 'Aron',
    age: '21',
    tall: '127',
    avatar: 'https://avatarfiles.alphacoders.com/375/375523.jpeg'
  }
  clickHandler(value: string){
    console.log("hola",value);
  }
  changeHandler(event: Event){
    const input = event.target as HTMLInputElement;
    console.log(event)
    console.log(input.value)
    this.valueInput = input.value;

  }
  valueInput = '';
  keydownHandler(even: Event){
    const input = even.target as HTMLInputElement;
    console.log(input.value);
    this.valueInput = input.value;
  }
}
