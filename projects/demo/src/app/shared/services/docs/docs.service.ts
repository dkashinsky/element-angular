import { forwardRef, Inject, Injectable, LOCALE_ID } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable, of } from 'rxjs'
import { environment } from 'projects/demo/src/environments/environment'

@Injectable()
export class DocsService {
  baseUrl: string = '/docs';
  url: string
  
  constructor(
    private http: HttpClient,
    @Inject(forwardRef(() => LOCALE_ID)) private locale: string,
  ) {
    const path = this.locale === 'en-US' ? '/en-US' : ''
    this.url = this.baseUrl + path;
  }
  
  getCatalog(): Observable<any> {
    return this.http.get(`${this.url}/catalog.json`);
  }
  
  getDocuments(documentType: string): Observable<any> {
    return this.http.get(`${this.url}/${documentType}.json`);
  }
  
  getVersion(): Observable<any> {
    return of(environment.version || '1.0.0')
  }
  
  getChangeLogs(): Observable<any> {
    return this.http.get(`${this.url}/changelog.json`);
  }
  
}
