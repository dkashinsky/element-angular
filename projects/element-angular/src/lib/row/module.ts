import { NgModule, ModuleWithProviders } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ElRowDirective } from './row.directive'


@NgModule({
  declarations: [ElRowDirective],
  exports: [ElRowDirective],
  imports: [CommonModule],
  entryComponents: [],
})
class ElRowModule {
  static forRoot(): ModuleWithProviders<ElRowModule> {
    return { ngModule: ElRowModule, providers: [] }
  }
}

export {
  ElRowDirective,
  ElRowModule
}