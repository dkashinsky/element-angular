import { NgModule, ModuleWithProviders } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ElSharedModule } from '../shared/module'
import { ElLoadingDirective } from './loading.directive'

@NgModule({
  declarations: [ElLoadingDirective],
  exports: [ElLoadingDirective],
  imports: [CommonModule, ElSharedModule],
  entryComponents: [],
})
class ElLoadingModule {
  static forRoot(): ModuleWithProviders<ElLoadingModule> {
    return { ngModule: ElLoadingModule, providers: []}
  }
}

export {
  ElLoadingDirective,
  ElLoadingModule
}