import { NgModule, ModuleWithProviders } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ElSwitch } from './switch'
import { FormsModule } from '@angular/forms'


@NgModule({
  declarations: [ElSwitch],
  exports: [ElSwitch],
  imports: [CommonModule, FormsModule],
  entryComponents: [ElSwitch],
})
class ElSwitchModule {
  static forRoot(): ModuleWithProviders<ElSwitchModule> {
    return { ngModule: ElSwitchModule, providers: [] }
  }
}

export {
  ElSwitch,
  ElSwitchModule
}