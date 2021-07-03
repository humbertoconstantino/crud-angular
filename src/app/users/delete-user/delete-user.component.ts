import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from '../user.model';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-delete-user',
  templateUrl: './delete-user.component.html',
  styleUrls: ['./delete-user.component.css']
})
export class DeleteUserComponent implements OnInit {

  id: any;
  user: any;

  constructor(private userService: UsersService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.userService.getUser(this.id).subscribe(resposta => {
      this.user = resposta.data
    })
  }

  delete(){
    this.userService.deleteUser(this.id).subscribe(
      res =>{
        alert('Removido com sucesso!')
      }
    )
  }
}
