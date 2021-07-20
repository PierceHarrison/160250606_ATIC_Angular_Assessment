import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { AuthService } from '../auth/auth.service';
import { User } from '../auth/user.model';
import { AccountComponent } from './account.component';
import { StreamingService } from './streamingService.model';

interface StreamingServiceResponse {
  streamService: string;
}

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  // Set streamingService to be StreamingService array
  streamingService: StreamingService[] = [];
  // Set 
  loggedInUser!: User;

  constructor(private http: HttpClient, private authService: AuthService) { 
    this.authService.user.subscribe(user => {
      this.loggedInUser = user;
    })
  }

  //Adds new streaming service to the realtime database
  addService(streamingService: StreamingService){
    // console.log("Adding" + streamingService.streamService)

    //Post the value of streamingService to the Realtime Database
    return this.http.post<StreamingServiceResponse>('https://assignment-2-5eb85-default-rtdb.europe-west1.firebasedatabase.app/StreamingServices' + this.loggedInUser?.id + '.json', streamingService).subscribe();
  }

}






























  // streaming(streamService: string){
  //   // return this.http.put<StreamingServiceResponse>('https://assignment-2-5eb85-default-rtdb.europe-west1.firebasedatabase.app/' + this.loggedInUser?.id + '.json',
  //   // {
  //   //   streamService: streamService
  //   // }
  //   // )

  //   return this.http.post<StreamingServiceResponse>('https://assignment-2-5eb85-default-rtdb.europe-west1.firebasedatabase.app/StreamingServices' + this.loggedInUser?.id + '.json', streamService).subscribe();

  //   // return this.http.put<StreamingServicesResponse>('https://assignment-2-5eb85-default-rtdb.europe-west1.firebasedatabase.app/' + environment.firebaseAPIKey, streamService)
  // }

  // addStreaming(){
  //     this.http.post('https://assignment-2-5eb85-default-rtdb.europe-west1.firebasedatabase.app/streamingServices' + this.loggedInUser?.id + '.json',this.streaming).subscribe();
  //     // return this.http.post('https://assignment-2-5eb85-default-rtdb.europe-west1.firebasedatabase.app/streamingServices' + environment.firebaseAPIKey + '.json' ).subscribe();
  //   }

  

