import { NgModule, ModuleWithProviders } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms'
import { ElTagsModule} from '../tag/module'
import { ElInputsModule } from '../input/module'
import { ElSelectDropdown } from './select-dropdown'
import { ElOption } from './option'
import { ElSelect } from './select'


@NgModule({
  declarations: [ElSelectDropdown, ElOption, ElSelect],
  exports: [ElSelectDropdown, ElOption, ElSelect],
  imports: [CommonModule, FormsModule, ElTagsModule, ElInputsModule],
  entryComponents: [ElSelectDropdown, ElOption, ElSelect],
})
class ElSelectModule {
  static forRoot(): ModuleWithProviders<ElSelectModule> {
    return { ngModule: ElSelectModule, providers: [] }
  }
}

export {
  ElSelectDropdown, 
  ElOption, 
  ElSelect,
  ElSelectModule
}