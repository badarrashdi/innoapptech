import { Component, OnInit } from '@angular/core';
import { EmailService, IMessage } from '../user.service';
@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent  {
  title = 'Angular PHP Email Example!';
  message: IMessage = {};
  sussMsg;
  sussDiv = false;
  errDiv = false;

  constructor(private appService: EmailService) {

  }

  sendEmail(message: IMessage) {
    this.appService.sendEmail(message).subscribe(res => {
      this.sussMsg = 'Your message sent sucessfully!', res;
      this.sussDiv = true;

    }, error => {
      this.sussMsg =  'Sever Error', error;
      this.errDiv = true;
    })
  }

}
