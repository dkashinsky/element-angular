import { NgModule, ModuleWithProviders } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ElIcon } from './icon'


@NgModule({
  declarations: [ElIcon],
  exports: [ElIcon],
  imports: [CommonModule],
  entryComponents: [ElIcon],
})
class ElIconsModule {
  static forRoot(): ModuleWithProviders<ElIconsModule> {
    return { ngModule: ElIconsModule, providers: [] }
  }
}

export {
  ElIcon,
  ElIconsModule
}