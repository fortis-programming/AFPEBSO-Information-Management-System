import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseResponse } from '../_shared/models/responses/base.response';
import { GranteeModel } from '../_shared/models/grantee.model';

@Injectable({
  providedIn: 'root'
})
export class GranteesService {

  constructor(
    private http: HttpClient
  ) { }

  getGrantees(): Observable<BaseResponse<GranteeModel[]>> {
    return this.http.get<BaseResponse<GranteeModel[]>>('../../assets/mocks/grantees.json');
  }
}
