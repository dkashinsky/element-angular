import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core'
import { Observable } from 'rxjs'
import { HighLightPipe } from '../../pipe'
import { DocsService } from '../../services'
import type { ComponentDocument } from '../../services/docs/docs.types'

@Component({
  selector: 'ex-document',
  templateUrl: './document.component.html',
  providers: [HighLightPipe, DocsService],
  encapsulation: ViewEncapsulation.None,
})
export class ExDocumentComponent implements OnInit {
  
  @Input() doc: string = ''
  
  apis$: Observable<ComponentDocument> 
  
  constructor(
    private docsService: DocsService
  ) {
  }

  ngOnInit(): void {
    this.apis$ = this.docsService.getDocuments(this.doc);
  }
}
