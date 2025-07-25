import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { ResponseData } from '../model/api-details';

@Injectable({
  providedIn: 'root'
})
export class SharedApiService {

  constructor(private http: HttpClient) { }

  private get<T>(url: string, header?: any): Observable<ResponseData> {
    const options = header ? { headers: new HttpHeaders(header) } : {};

    return this.http.get<T>(url, options).pipe(
      map(data => new ResponseData()
        .setData(data)
        .setError(null)
        .setStatus(200)
        .setStatusText('OK')
      ),
      catchError(error =>
        of(new ResponseData()
          .setData(null)
          .setError(error)
          .setStatus(error.status || 500)
          .setStatusText(error.statusText || 'Error')
        )
      )
    );
  }

  private post<T>(url: string, body: any, header?: any): Observable<ResponseData> {
    const options = header ? { headers: new HttpHeaders(header) } : {};

    return this.http.post<T>(url, body, options).pipe(
      map(data => new ResponseData()
        .setData(data)
        .setError(null)
        .setStatus(200)
        .setStatusText('OK')
      ),
      catchError(error =>
        of(new ResponseData()
          .setData(null)
          .setError(error)
          .setStatus(error.status || 500)
          .setStatusText(error.statusText || 'Error')
        )
      )
    );
  }

  public request<T>(method: string, url: string, body?: any, header?: any): Observable<ResponseData> {
    let response: Observable<ResponseData>;

    switch (method.toLowerCase()) {
      case 'get':
        response = this.get<T>(url, header);
        break;
      case 'post':
        response = this.post<T>(url, body, header);
        break;
      default:
        response = of(new ResponseData().setError(`Unsupported method: ${method}`));
    }

    return response;
  }
}
