import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class NewserviceService {

  testOperation () { 
    console.log("Executing test operation...");
  }
  
}
