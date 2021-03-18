import { NgModule, ModuleWithProviders } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ElRate } from './rate'


@NgModule({
  declarations: [ElRate],
  exports: [ElRate],
  imports: [CommonModule],
  entryComponents: [ElRate],
})
class ElRateModule {
  static forRoot(): ModuleWithProviders<ElRateModule> {
    return { ngModule: ElRateModule, providers: [] }
  }
}

export {
  ElRate,
  ElRateModule
}