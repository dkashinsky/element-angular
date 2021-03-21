import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable, of } from 'rxjs'
import { environment } from 'projects/demo/src/environments/environment'
import type { CatalogItem, ComponentDocument } from './docs.types';

@Injectable()
export class DocsService {
  baseUrl: string = `${environment.deploymentUrl}docs`;
  
  constructor(
    private http: HttpClient,
  ) {
  }
  
  getCatalog(): Observable<CatalogItem[]> {
    return this.http.get<CatalogItem[]>(`${this.baseUrl}/catalog.json`);
  }
  
  getDocuments(documentType: string): Observable<ComponentDocument> {
    return this.http.get<ComponentDocument>(`${this.baseUrl}/${documentType}.json`);
  }

  getIcons(): Observable<string[]> {
    return this.http.get<string[]>(`${this.baseUrl}/icon-ex.json`)
  }
  
  getVersion(): Observable<string> {
    return of(environment.version || '1.0.0')
  }
  
  getChangeLogs(): Observable<any> {
    return this.http.get(`${this.baseUrl}/changelog.json`);
  }
  
}
