import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable, of } from 'rxjs'
import { environment } from 'projects/demo/src/environments/environment'

@Injectable()
export class DocsService {
  baseUrl: string = '/docs';
  
  constructor(
    private http: HttpClient,
  ) {
  }
  
  getCatalog(): Observable<any> {
    return this.http.get(`${this.baseUrl}/catalog.json`);
  }
  
  getDocuments(documentType: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/${documentType}.json`);
  }
  
  getVersion(): Observable<any> {
    return of(environment.version || '1.0.0')
  }
  
  getChangeLogs(): Observable<any> {
    return this.http.get(`${this.baseUrl}/changelog.json`);
  }
  
}
