import { Injectable } from '@angular/core';
import { BookItem } from './books-page';

@Injectable({
  providedIn: 'root',
})
export class BooksService {
   private data: BookItem[] = [
      { id: 1, title: 'c++', writer: 'خودم', publisher: 'خودم', price: 8000 },
      { id: 2, title: 'برنامه نویسی', writer: 'خودت', publisher: 'خودش', price: 9000 },
      { id: 3, title: 'پایگاه داده', writer: 'خودشان', publisher: 'خودش', price: 12000 },
      { id: 4, title: 'طراحی وب', writer: 'خودمان', publisher: 'خودش', price: 34000 },
      { id: 5, title: 'مدار منطقی', writer: 'خودش', publisher: 'خودش', price: 54000 },
  
    ];
    //تابعی است که لیست کتابها را تحویل میدهد
    list(){
      return[...this.data];
    }
    //این یک تابع است که کتابی را به عنوان پارامتر دریافت و به لیست کتابها اضافه میکند
    add(item:BookItem){
      this.data.push(item);
    }

}
