import { Injectable } from '@angular/core';
import { HttpClient ,HttpHeaders} from '@angular/common/http';

import {environment} from '../../environments/environment'

@Injectable({
  providedIn: 'root'
})

export class ProfileService {
  userName: string;
  apiKey: string = 'environment.apiKey';
  apiUrl: string = "https://api.github.com/users/";
  constructor(public http: HttpClient) {
  this.userName = 'Elianehbmna';
  }
  getProfileInfo() {
    return this.http.get(this.apiUrl + this.userName + "?access_token=" + environment.apiKey)
  }
  getProfileRepos() {
    return this.http.get(this.apiUrl + this.userName + "/repos?access_token=" + environment.apiKey)
  }
  updateProfile(userName: string) {
    this.userName = userName;
  }
 }