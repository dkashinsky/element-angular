import { NgModule, ModuleWithProviders } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ElCollapse } from './collapse'
import { ElCollapseItem } from './collapse-item'


@NgModule({
  declarations: [ElCollapse, ElCollapseItem],
  exports: [ElCollapse, ElCollapseItem],
  imports: [CommonModule],
  entryComponents: [ElCollapse],
})
class ElCollapseModule {
  static forRoot(): ModuleWithProviders<ElCollapseModule> {
    return { ngModule: ElCollapseModule, providers: [] }
  }
}

export {
  ElCollapse,
  ElCollapseItem,
  ElCollapseModule
}