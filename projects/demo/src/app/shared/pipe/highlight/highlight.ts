import { Pipe, PipeTransform } from '@angular/core'
import { SafeHtml, DomSanitizer } from '@angular/platform-browser'
import { highlightAuto } from 'highlight.js'

@Pipe({ name: 'highlightAuto' })
export class HighLightPipe implements PipeTransform {
  
  constructor(
    private sanitizer: DomSanitizer,
  ) {
  }
  
  transform(value: string): SafeHtml {
    const result: AutoHighlightResult = highlightAuto(value, ['shell', 'typescript', 'html', 'css'])
    return this.sanitizer.bypassSecurityTrustHtml(result.value)
  }
}
