import { forwardRef, Inject, Injectable, LOCALE_ID } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable, of } from 'rxjs'
import { environment } from '../../../../environments'

@Injectable()
export class DocsService {
  
  url: string
  path: string
  
  constructor(
    private http: HttpClient,
    @Inject(forwardRef(() => LOCALE_ID)) private locale: string,
  ) {
    debugger;
    const host:string = (<any>environment).faas ? environment.faasHost : environment.host
    this.path = this.locale === 'en-US' ? '/en-US' : ''
    this.url = host + this.path
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
