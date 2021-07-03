import { Component, OnInit } from '@angular/core';
import { RequestCreate, ResponseCreate } from '../user.model';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {

  constructor(private userService: UsersService) { }

  request : RequestCreate = {
    name: '',
    job: ''
  }

  response: any

  save(){
    this.userService.createUser(this.request).subscribe(resposta => { this.response = resposta})
  }

  ngOnInit(): void {
  }

}
