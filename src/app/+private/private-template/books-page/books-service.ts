import { Injectable } from '@angular/core';
import { BookItem } from './books-page';
import { BaseService } from '../../../+shared/+base/base-service';

@Injectable({
  providedIn: 'root',
})
export class BooksService extends BaseService<BookItem> {
  override data: BookItem[] = [
    { id: 1, title: 'c++', writer: 'خودم', publisher: 'خودم', price: 8000 },
    { id: 2, title: 'برنامه نویسی', writer: 'خودت', publisher: 'خودش', price: 9000 },
    { id: 3, title: 'پایگاه داده', writer: 'خودشان', publisher: 'خودش', price: 12000 },
    { id: 4, title: 'طراحی وب', writer: 'خودمان', publisher: 'خودش', price: 34000 },
    { id: 5, title: 'مدار منطقی', writer: 'خودش', publisher: 'خودش', price: 54000 },

  ];
  override update(destination: BookItem, source: BookItem):void {
    destination.title = source.title;
    destination.writer = source.writer;
    destination.publisher =source.publisher;
    destination.price =source.price;
  }
}

