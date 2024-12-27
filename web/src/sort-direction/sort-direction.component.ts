import { Component, Input } from '@angular/core';
import { SortDirection } from '../enum/sort-direction.enum';

@Component({
  selector: 'app-sort-direction',
  templateUrl: './sort-direction.component.html',
  styleUrl: './sort-direction.component.css'
})
export class SortDirectionComponent {
  @Input()
  direction: SortDirection = SortDirection.Asc;

  public get sortDirection(): typeof SortDirection {
    return SortDirection; 
  }
}
