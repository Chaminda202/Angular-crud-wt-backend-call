import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {User} from '../models/user';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  mockEndpoint: string;

  constructor(private httpClient: HttpClient) {
    this.mockEndpoint = environment.mockApiUrl;
  }

  getUsers(): Observable<User[]> {
    return this.httpClient.get<User[]>(this.mockEndpoint);
  }

  getUser(userId: number): Observable<User> {
    const getUrl = this.mockEndpoint + '/' + userId;
    return this.httpClient.get<User>(getUrl);
  }

  saveUser(user: User): Observable<User> {
    const saveUrl = this.mockEndpoint + '/users/register';
    return this.httpClient.post<User>(saveUrl, user);
  }

  updateUser(user: User, userId: number): Observable<User> {
    const updateUrl = this.mockEndpoint + '/' + userId;
    return this.httpClient.put<User>(updateUrl, user);
  }

  deleteUser(userId: number) {
    const deleteUrl = this.mockEndpoint + '/' + userId;
    return this.httpClient.delete(deleteUrl);
  }
}
