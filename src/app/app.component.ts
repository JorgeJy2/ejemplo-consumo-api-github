import { Component } from '@angular/core';
import { GitubUsersService } from './services/gitub-users.service';
import { User} from './models/user.model';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'test-service';
  infoUser: User;
  userName: string;
  
  constructor(private serviceUserGithub: GitubUsersService) {
    this.getUserName('jorgejy2');
  }

  getUserName(userName){
    this.serviceUserGithub.getInfoUser(userName)
    .subscribe(
    (response: any) => {
      console.log(response);
      this.infoUser = response;
    }, (error) => {
      console.error(error);
      console.log('ERROR ALERTA PARA USUARIO');
      this.infoUser = undefined;
    } );
  }

  onClickInput(event) {
    console.log('CLICK');
  }

  onKeyUpInputUserName(event, valueInput) {
    console.log('key up');
    console.log(event.key);
    console.log(valueInput)
    if(event.key == 'Enter') {
      console.log('disparar la busqueda');
      this.getUserName(valueInput);
    }
  }

}
