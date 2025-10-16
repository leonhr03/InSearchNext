import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-list-view',
  imports: [],
  templateUrl: './list-view.html',
  styleUrl: './list-view.scss'
})
export class ListView {
  @Input() title!: string;
  @Input() content!: string;
}
