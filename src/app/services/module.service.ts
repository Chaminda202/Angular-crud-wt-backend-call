import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {CommonResponse} from '../models/common-response';
import {Module} from '../models/module';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ModuleService {
  url: string;

  constructor(private httpClient: HttpClient) {
    this.url = environment.backEndApiUrl;
  }

  getModules(): Observable<CommonResponse> {
    const getsUrl = this.url + environment.backEndpoints.module;
    return this.httpClient.get<CommonResponse>(getsUrl);
  }

  getModule(moduleId: number): Observable<CommonResponse> {
    const getUrl = this.url + environment.backEndpoints.module + '/' + moduleId;
    return this.httpClient.get<CommonResponse>(getUrl);
  }

  saveModule(module: Module): Observable<CommonResponse> {
    const saveUrl = this.url + environment.backEndpoints.module;
    return this.httpClient.post<CommonResponse>(saveUrl, module);
  }

  updateModule(module: Module, moduleId: number): Observable<CommonResponse> {
    const updateUrl = this.url + environment.backEndpoints.module + '/' + moduleId;
    return this.httpClient.put<CommonResponse>(updateUrl, module);
  }

  deleteModule(moduleId: number): Observable<CommonResponse> {
    const deleteUrl = this.url + environment.backEndpoints.module + '/' + moduleId;
    return this.httpClient.delete<CommonResponse>(deleteUrl);
  }
}
