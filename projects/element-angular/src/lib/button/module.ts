import { NgModule, ModuleWithProviders } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ElButton } from './button'
import { ElButtonGroup } from './button-group'


@NgModule({
  declarations: [ElButton, ElButtonGroup],
  exports: [ElButton, ElButtonGroup],
  imports: [CommonModule],
  entryComponents: [ElButton, ElButtonGroup],
})
class ElButtonsModule {
  static forRoot(): ModuleWithProviders<ElButtonsModule> {
    return { ngModule: ElButtonsModule, providers: [] }
  }
}

export {
  ElButton,
  ElButtonGroup,
  ElButtonsModule
}
