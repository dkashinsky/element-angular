import { NgModule, ModuleWithProviders } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ElProgress } from './progress'


@NgModule({
  declarations: [ElProgress],
  exports: [ElProgress],
  imports: [CommonModule],
  entryComponents: [ElProgress],
})
class ElProgressModule {
  static forRoot(): ModuleWithProviders<ElProgressModule> {
    return { ngModule: ElProgressModule, providers: [] }
  }
}

export {
  ElProgress,
  ElProgressModule
}