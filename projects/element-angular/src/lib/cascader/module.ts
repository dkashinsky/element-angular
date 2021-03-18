import { NgModule, ModuleWithProviders } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ElInputsModule } from '../input/module'
import { ElCascader } from './cascader'
import { ElCascaderMenu } from './cascader.menu'


@NgModule({
  declarations: [ElCascader, ElCascaderMenu],
  exports: [ElCascader, ElCascaderMenu],
  imports: [CommonModule, ElInputsModule],
  entryComponents: [ElCascader],
})
class ElCascaderModule {
  static forRoot(): ModuleWithProviders<ElCascaderModule> {
    return { ngModule: ElCascaderModule, providers: [] }
  }
}

export {
  ElCascader,
  ElCascaderMenu,
  ElCascaderModule
}
