import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RequestUpdate } from '../user.model';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {

  id: any;
  request: any;

  constructor(private userService: UsersService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.userService.getUser(this.id).subscribe(resposta => {
      this.request = {
        name: `${resposta.data.first_name} ${resposta.data.last_name}`,
        job: ''
      }
    })
  }

  atualizar(){
    this.userService.updateUser(this.id, this.request).subscribe(resposta => {
      alert(`Atualizar: ${resposta.updatedAt}, Nome: ${resposta.name}, Profissão: ${resposta.job}`);
    });
  }

}
