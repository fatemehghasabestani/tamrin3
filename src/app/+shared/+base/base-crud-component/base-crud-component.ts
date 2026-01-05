import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'my-crud',
  imports: [FormsModule],
  standalone:true,
  templateUrl: './base-crud-component.html',
  styleUrl: './base-crud-component.scss',
})
export class BaseCrudComponent {
 @Input() mystate:string='list';
 @Output() onCancel=new EventEmitter <void>();
 @Output() onAdd=new EventEmitter <void>();
 @Input () columns:column[]=[];
 @Input() mydata:any[]=[];
 @Output () onEdit=new EventEmitter <any>;
 @Output () onRemove=new EventEmitter<any>;
 @Output () onSave=new EventEmitter <void>();
}
export interface column{
  title:string;
  field:string;
}