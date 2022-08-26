import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { SimplilearnService } from '../simplilearn.service';

@Component({
  selector: 'app-employee-info',
  templateUrl: './employee-info.component.html',
  styleUrls: ['./employee-info.component.scss'],
  providers: [SimplilearnService]
})
export class EmployeeInfoComponent implements OnInit {

  inforReceivedOne: string[] = [];
  inforReceivedTwo: string[] = [];
  inforReceivedThree: string[] = [];

  getInfoFromServiceOne() {
    this.inforReceivedOne = this.simplilearnService.getInfoOne();
  };
  getInfoFromServiceTwo() {
    this.inforReceivedTwo = this.simplilearnService.getInfoTwo();
  };
  getInfoFromServiceThree() {
    this.inforReceivedThree = this.simplilearnService.getInfoThree();
  };

  constructor(private simplilearnService: SimplilearnService) { }

  ngOnInit(): void {
  }

  updateFormInfo(form: NgForm) {
    this.simplilearnService.addInfo(form.value.location);
  }
}
