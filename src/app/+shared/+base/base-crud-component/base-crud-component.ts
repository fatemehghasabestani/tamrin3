import { Component, EventEmitter, input, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'my-crud',
  imports: [FormsModule],
  templateUrl: './base-crud-component.html',
  styleUrl: './base-crud-component.scss',
})
export class BaseCrudComponent {
 @Input() mystate:string='list';
 @Output() onCancel=new EventEmitter;
 @Output() onAdd=new EventEmitter;
 @Input () columns:column[]=[];
 @Input() mydata:any[]=[];
 @Output () onEdit=new EventEmitter <any>;
 @Output () onRemove=new EventEmitter<any>;
 @Output () onSave=new EventEmitter;
}
export interface column{
  title:string;
  field:string;
}