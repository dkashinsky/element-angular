import { NgModule, ModuleWithProviders } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ElCard } from './card'

@NgModule({
  declarations: [ElCard],
  exports: [ElCard],
  imports: [CommonModule],
  entryComponents: [ElCard],
})
class ElCardsModule {
  static forRoot(): ModuleWithProviders<ElCardsModule> {
    return { ngModule: ElCardsModule, providers: [] }
  }
}

export {
  ElCard,
  ElCardsModule
}