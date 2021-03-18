import { NgModule, ModuleWithProviders } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ElCarousel, ElCarouselItem } from './carousel'


@NgModule({
  declarations: [ElCarousel, ElCarouselItem],
  exports: [ElCarousel, ElCarouselItem],
  imports: [CommonModule],
  entryComponents: [ElCarousel],
})
class ElCarouselModule {
  static forRoot(): ModuleWithProviders<ElCarouselModule> {
    return { ngModule: ElCarouselModule, providers: [] }
  }
}

export {
  ElCarousel,
  ElCarouselItem,
  ElCarouselModule
}
