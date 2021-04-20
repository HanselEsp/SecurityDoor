import { Component, OnInit } from '@angular/core';
import { RxStompService } from '@stomp/ng2-stompjs';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-add-access-control',
  templateUrl: './add-access-control.component.html',
  styleUrls: ['./add-access-control.component.css']
})
export class AddAccessControlComponent implements OnInit {
//Inyeccion de dependencia pára encargarse de la comunicacion
  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }

  //publicar nuestra informacion a nuestra webapi

  addAccess(){
  //this.rabbitMqService.publish("/topic/")

    //en el objeto va la informacion que esta recibiendo la webapi 
  this.userService.addAccessControl({});
  }
}
