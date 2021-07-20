import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Form, FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';
// import { Movie } from '../movies/movie.model';
import { AccountService } from './account.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  
  // streaming: Movie[] = [];
  servicesForm!: FormGroup;

  constructor(
    private accountService: AccountService
  ){}

  ngOnInit(): void {
    this.servicesForm = new FormGroup({
      // 'service': new FormControl(null),
      'services': new FormArray([])
    });
  }

  onAddServices(){
    const control = new FormControl(null, Validators.required);
    (<FormArray>this.servicesForm.get('services')).push(control);
  }

  getServices(){
    return (<FormArray>this.servicesForm.get('services')).controls
  }

  onRemoveService(index: number){
    (<FormArray>this.servicesForm.get('services')).removeAt(index);
  }

  // onAddStreaming(){
  //   this.accountService.addStreaming();
  // }

  onSave(){
    const streamService = this.servicesForm.value.streamService

    this.accountService.addService(streamService)
    // this.accountService.streaming(streamService).subscribe((response: any) => {
    //   console.log(response);
    // })
    // console.log(this.servicesForm);
    // const streamService = this.servicesForm.value.services;
    // console.log('services');
    // this.accountService.streaming(streamService)
  }
}
