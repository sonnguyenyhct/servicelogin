import { Injectable } from '@angular/core';

@Injectable({
  // tslint:disable-next-line:max-line-length
  providedIn: 'root'    // Khai báo class phía dưới là một service, và nó được đặt trong scope của root, như thế sẽ tồn tại service này trong cả app
})
export class DictionaryService {

  private words: iWord[] = [
    {key: 'service', meaning: 'dich vu'},
    {key: 'service provider', meaning: 'nha cung cap dich vu'},
    {key: 'provider', meaning: 'nha cung cap'}
  ];

  getAll(): iWord[] {
    return this.words;
  }

  constructor() { }
  search(word: string): string{
    if (!word){
        return '';
    }
    const w = this.words.find(item => item.key === word.toLowerCase());
    if (w){
      return w.meaning;
    }
    return 'Not found';
  }
}
// tslint:disable-next-line:class-name
export interface iWord {
    key: string;
    meaning: string;
}
