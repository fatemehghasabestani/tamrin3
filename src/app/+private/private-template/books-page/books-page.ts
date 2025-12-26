import { Component, inject, OnInit } from '@angular/core';
import { BooksService } from './books-service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-books-page',
  imports: [FormsModule],
  templateUrl: './books-page.html',
  styleUrl: './books-page.scss',
})
export class BooksPage implements OnInit {
  save() {
     this.booksService.add(this.item);
    this.dataRefresh();
    this.state='list';
  }
  ngOnInit(): void {
    this.dataRefresh();
  }
  data: BookItem[] = [];
  item: BookItem = {
    title: '',
    writer: '',
    publisher: ''
  }
  booksService = inject(BooksService);
  state: string = 'list';
  dataRefresh() {
    this.data = this.booksService.list();

  }


  add() {
    this.state = 'add';
    this.item={
    title: '',
    writer: '',
    publisher: ''
    };
  
  }
  edit(){
    this.state='edit';
  }
  cancel() {
    this.state = 'list';
  }

}
export interface BookItem {
  id?: number ;
  title: string;
  writer: string;
  publisher: string;
  price?: number;
}