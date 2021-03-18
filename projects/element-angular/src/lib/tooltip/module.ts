import { NgModule, ModuleWithProviders } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ElTooltip } from './tooltip'
import { ElSharedModule } from '../shared/module'

@NgModule({
  declarations: [ElTooltip],
  exports: [ElTooltip],
  imports: [CommonModule, ElSharedModule],
  entryComponents: [ElTooltip],
})
class ElTooltipModule {
  static forRoot(): ModuleWithProviders<ElTooltipModule> {
    return { ngModule: ElTooltipModule, providers: []}
  }
}

export {
  ElTooltip,
  ElTooltipModule
}