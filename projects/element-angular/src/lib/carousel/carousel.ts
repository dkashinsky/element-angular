import {
  AfterContentChecked, Component, ContentChildren, ElementRef, forwardRef,
  Inject, Input, OnChanges, OnDestroy, OnInit, QueryList, SimpleChanges,
} from '@angular/core'
import { ElCarouselProps } from './carousel-props'
import { carouselBtnLeftAnimation, carouselBtnRightAnimation } from './animations'
import { removeNgTag } from '../shared/utils'
import { DomSanitizer, SafeStyle } from '@angular/platform-browser'
import { fadeAnimation } from '../shared/animation/fade.animation'

@Component({
  selector: 'el-carousel',
  animations: [carouselBtnLeftAnimation, carouselBtnRightAnimation],
  templateUrl: './carousel.html',
})
export class ElCarousel extends ElCarouselProps implements AfterContentChecked, OnChanges, OnDestroy {
  
  @ContentChildren(forwardRef(() => ElCarouselItem)) children: QueryList<ElCarouselItem>
  subscriber: Function[] = []
  items: any[] = []
  hasLabel: boolean = false
  timer: any
  
  constructor(
  ) {
    super()
  }
  
  btnActionHandle(nextValue: number, eventType: string): void {
    if (this.trigger !== eventType) return
    this.autoplay && this.resetInterval()
    this.setActiveItem(nextValue)
  }
  
  indicatorActionHandle(nextValue: number, eventType: string): void {
    if (this.indicatorTrigger !== eventType) return
    this.autoplay && this.resetInterval()
    this.setActiveItem(nextValue)
  }
  
  setActiveItem(index: number): void {
    if (!this.children) return
    
    const len = this.children.length
    const nextValue = index >= len ? 0 : index < 0 ? len - 1 : index
    this.model = nextValue
    this.subscriber.forEach(func => func())
    this.modelChange.emit(this.model)
  }
  
  resetInterval(): void {
    this.timer && clearInterval(this.timer)
    this.timer = setInterval(() => {
      this.setActiveItem(this.model + 1)
    }, this.interval)
  }
  
  ngAfterContentChecked(): void {
    const timer = setTimeout(() => {
      this.children.forEach((item, index) => {
        item.index = index
        item.updateActive()
        item.updateStyles()
      })
      // all labels are validated
      this.hasLabel = !this.items.some(item => !item)
      // auto play
      this.autoplay && this.resetInterval()
      clearTimeout(timer)
    }, 0)
  }
  
  ngOnChanges(changes: SimpleChanges): void {
    // not include model
    if (!changes || !changes.model) return
    this.setActiveItem(changes.model.currentValue)
  }
  
  ngOnDestroy(): void {
    this.timer && clearInterval(this.timer)
  }

}

@Component({
  selector: 'el-carousel-item',
  animations: [fadeAnimation],
  templateUrl: './carousel-item.html',
})
export class ElCarouselItem implements OnInit {
  
  // parent component will set index
  @Input() index: number
  @Input() label: string = ''
  
  // oninit set
  width: number
  
  preTranslate: number
  isAnimating: boolean
  isActive: boolean = false
  styles: SafeStyle
  
  constructor(
    @Inject(forwardRef(() => ElCarousel)) public root: ElCarousel,
    private sanitizer: DomSanitizer,
    private el: ElementRef,
  ) {
  }
  
  updateActive(): void {
    const isActive: boolean = this.root.model === this.index
    if (this.isActive !== isActive) {
      this.isActive = isActive
    }
  }
  
  updateStyles(): void {
    const map: any = {
      '1': 0 - this.width,
      '-1': this.width,
      '2': this.width,
      '-2': 0 - this.width,
      '0': 0,
    }
    const offset: number = this.root.model - this.index
    const translate = map[offset]
    const styles: string = `transform: translateX(${translate}px);`
    // change direction disable animation
    const changeDirection: boolean = (this.preTranslate < 0 && translate > 0)
      || (this.preTranslate > 0 && translate < 0)
    this.isAnimating = !changeDirection
    this.styles = this.sanitizer.bypassSecurityTrustStyle(styles)
    // save current value
    this.preTranslate = translate
  }
  
  update(): void {
    this.updateStyles()
    this.updateActive()
  }
  
  ngOnInit(): void {
    // collect items
    this.root.items.push(this.label)
    this.width = this.el.nativeElement.children[0].offsetWidth
    removeNgTag(this.el.nativeElement)
    
    // manually update
    this.root.subscriber.push(() => this.update())
    this.update()
  }
}
