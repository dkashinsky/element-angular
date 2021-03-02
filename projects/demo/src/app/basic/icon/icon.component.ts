import { Component, OnInit, ViewEncapsulation } from '@angular/core'
import { DocsService } from '../../shared/services'
import code from './code'

@Component({
  selector: 'ex-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ExIconComponent implements OnInit {
  
  code: string[] = code
  icons: string[]
  page: any = {
    previous: { name: 'Typography', link: '/basic/font' },
    next: { name: 'Button', link: '/basic/button' },
  }
  
  constructor(
    private docsService: DocsService
  ) {}
  
  ngOnInit(): void {
    this.docsService.getIcons()
      .subscribe(res => this.icons = res)
  }
}
