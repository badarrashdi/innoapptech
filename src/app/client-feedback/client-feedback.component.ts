import { Component, OnInit, Input } from '@angular/core';
@Component({
  selector: 'app-client-feedback',
  templateUrl: './client-feedback.component.html',
  styleUrls: ['./client-feedback.component.css']
})
export class ClientFeedbackComponent implements OnInit {

  tabs;
  currentTab = 1;
  steps = ['', '', '', ''];



  constructor() {
  }
  tabswitch(a) {
    this.currentTab = a;
    this.steps[a - 2] = "Done";
    this.steps[a-1] = "";
    if (a == 2) {
      this.steps[0] = "Done";
    }

  }

  editStep(stepToEdit) {
    let temp = stepToEdit;

    for (let i = 0; i < this.steps.length; i++) {
      if (temp - 1 == i) {
        this.steps[i] = "";
        this.currentTab = stepToEdit;
      } else {
        this.steps[i] = "Done";
      }

    }
  }

  ngOnInit() {

  }

}
