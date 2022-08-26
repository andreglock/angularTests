import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SimplilearnService {
  
  infoOne: string[] = [ "John Mathmat", "E354", "jmath@abc.com" ];
  infoTwo: string[] = [ "Rob Bios", "E765", "ebio@google.com" ];
  infoThree: string[] = [ "Rose Curie", "E655", "jmath@test.com" ];

  getInfoOne(): string[] {
    return this.infoOne;
  }
  getInfoTwo(): string[] {
    return this.infoTwo;
  }
  getInfoThree(): string[] {
    return this.infoThree;
  }

  addInfo(info: string) {
    this.infoOne.push(info);
    this.infoTwo.push(info);
    this.infoThree.push(info);
  }

  constructor() { };
      
}
