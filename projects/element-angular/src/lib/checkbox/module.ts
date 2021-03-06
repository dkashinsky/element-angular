import { NgModule, ModuleWithProviders } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms'
import { ElCheckbox } from './checkbox'
import { ElCheckboxButton } from './checkbox-button'
import { ElCheckboxGroup } from './checkbox-group'

@NgModule({
  declarations: [ElCheckbox, ElCheckboxButton, ElCheckboxGroup],
  exports: [ElCheckbox, ElCheckboxButton, ElCheckboxGroup],
  imports: [CommonModule, FormsModule],
  entryComponents: [ElCheckbox, ElCheckboxButton, ElCheckboxGroup],
})
class ElCheckboxsModule {
  static forRoot(): ModuleWithProviders<ElCheckboxsModule> {
    return { ngModule: ElCheckboxsModule, providers: [] }
  }
}

export {
  ElCheckbox,
  ElCheckboxGroup,
  ElCheckboxButton,
  ElCheckboxsModule
}