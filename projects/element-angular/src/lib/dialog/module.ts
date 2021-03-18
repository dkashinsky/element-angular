import { NgModule, ModuleWithProviders } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ElSharedModule } from '../shared/module'
import { ElDialog } from './dialog'

@NgModule({
  declarations: [ElDialog],
  exports: [ElDialog],
  imports: [CommonModule, ElSharedModule],
  entryComponents: [ElDialog],
})
class ElDialogModule {
  static forRoot(): ModuleWithProviders<ElDialogModule> {
    return { ngModule: ElDialogModule, providers: [] }
  }
}

export {
  ElDialog,
  ElDialogModule
}
