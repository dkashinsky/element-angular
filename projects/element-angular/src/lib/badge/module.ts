import { NgModule, ModuleWithProviders } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ElBadge } from './badge'


@NgModule({
  declarations: [ElBadge],
  exports: [ElBadge],
  imports: [CommonModule],
  entryComponents: [ElBadge],
})
class ElBadgesModule {
  static forRoot(): ModuleWithProviders<ElBadgesModule> {
    return { ngModule: ElBadgesModule, providers: [] }
  }
}

export {
  ElBadge,
  ElBadgesModule
}
