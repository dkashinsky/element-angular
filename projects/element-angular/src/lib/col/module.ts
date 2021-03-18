import { NgModule, ModuleWithProviders } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ElColDirective } from './col.directive'


@NgModule({
  declarations: [ElColDirective],
  exports: [ElColDirective],
  imports: [CommonModule],
  entryComponents: [],
})
class ElColModule {
  static forRoot(): ModuleWithProviders<ElColModule> {
    return { ngModule: ElColModule, providers: [] }
  }
}

export {
  ElColDirective,
  ElColModule
}