import { NgModule, ModuleWithProviders } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ElAlert } from './alert'

@NgModule({
  declarations: [ElAlert],
  exports: [ElAlert],
  imports: [CommonModule],
  entryComponents: [ElAlert],
})
class ElAlertModule {
  static forRoot(): ModuleWithProviders<ElAlertModule> {
    return { ngModule: ElAlertModule, providers: [] }
  }
}

export {
  ElAlert,
  ElAlertModule,
}
