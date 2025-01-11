import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  standalone: false,
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListComponent { 

  
  public characterList: Character[] = [{
    name: 'Trunks',
    power: 10
},    ] }
