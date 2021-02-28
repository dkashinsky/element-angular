import {
  AfterViewInit, Component, ContentChild, ElementRef, forwardRef, OnInit, TemplateRef,
  ViewChild,
} from '@angular/core'
import { SafeStyle, DomSanitizer } from '@angular/platform-browser'
import { ElInputProps } from './input-props'
import { getTextareaHeight } from './help'
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms'
import { isParentTag } from '../shared/utils'
import { ElFormItem } from '../form/form-item'

@Component({
  selector: 'el-input',
  styles: [`
    .icon-disabled { cursor: not-allowed; } .icon-disabled:before { cursor: not-allowed; }
    .icon-pointer { cursor: pointer; }`],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => ElInput),
    multi: true
  }],
  templateUrl: './input.html',
})
export class ElInput extends ElInputProps implements OnInit, AfterViewInit, ControlValueAccessor {
  
  @ContentChild('prepend', { static: true }) prepend: TemplateRef<any>
  @ContentChild('append', { static: true }) append: TemplateRef<any>
  @ViewChild('textarea', { static: false }) textarea: ElementRef<HTMLTextAreaElement>
  textareaStyles: SafeStyle
  
  constructor(
    private sanitizer: DomSanitizer,
    private el: ElementRef,
    private form: ElFormItem,
  ) {
    super()
  }
  
  makeTextareaStyles(): void {
    if (!this.autosize || this.type !== 'textarea') return
    const height: string = getTextareaHeight(this.textarea.nativeElement, this.autosize.minRows, this.autosize.maxRows)
    const styles: string = `resize: ${this.resize}; height: ${height};`
    this.textareaStyles = this.sanitizer.bypassSecurityTrustStyle(styles)
  }
  
  handleInput(val: string): void {
    this.model = val
    this.modelChange.emit(val)
    this.controlChange(val)
    const timer: any = setTimeout(() => {
      this.makeTextareaStyles()
      clearTimeout(timer)
    }, 0)
  }
  
  showPointer(): boolean {
    const clickEvent: boolean = !!(this.iconClick.observers && this.iconClick.observers.length)
    const mouseEvent: boolean = !!(this.iconMousedown.observers && this.iconMousedown.observers.length)
    
    return clickEvent || mouseEvent
  }
  
  ngOnInit(): void {
    // auto follow form status
    const parentIsForm: boolean = isParentTag(this.el.nativeElement, 'el-form-item')
    if (parentIsForm) {
      const iconStatus = {
        error: 'circle-close', success: 'circle-check', validating: 'circle-validating',
      }
      this.iconClass = 'el-input__validateIcon'
      this.form.statusSubscriber.push((status: string) => {
        this.icon = iconStatus[status] || ''
      })
    }
    
    if (this.value && !this.model) {
      this.model = this.value
    }
  }
  
  ngAfterViewInit(): any {
    // no content required
    if (this.type === 'textarea') {
      return setTimeout(() => {
        this.makeTextareaStyles()
      }, 0)
    }
  }
  
  writeValue(value: any): void {
    this.model = value
  }
  
  registerOnChange(fn: Function): void {
    this.controlChange = fn
  }
  
  registerOnTouched(fn: Function): void {
    this.controlTouch = fn
  }
  
  private controlChange: Function = () => {}
  private controlTouch: Function = () => {}
}
