import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }


  async addAccessControl(data){
    let header = new Headers()
    header.append('Content-Type', 'Application/json');
    let json = JSON.stringify(data);
    console.log(json)
     const req = await fetch (environment.serverHost+ 'User/AddAccessControl', 
     {
       headers: header,
       body: json, 
       method: 'POST'
      })
     const response = req.json();
     return response;
  }
}
