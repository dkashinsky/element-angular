import { NgModule, ModuleWithProviders } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ElSharedModule } from '../shared/module'
import { ElButtonsModule } from '../button/module'
import { ElForm } from './form'
import { ElFormItem } from './form-item'

@NgModule({
  declarations: [ElForm, ElFormItem],
  exports: [ElForm, ElFormItem],
  imports: [CommonModule, ElButtonsModule, ElSharedModule],
  entryComponents: [ElForm],
})
class ElFormModule {
  static forRoot(): ModuleWithProviders<ElFormModule> {
    return { ngModule: ElFormModule, providers: [] }
  }
}

export {
  ElForm,
  ElFormItem,
  ElFormModule
}