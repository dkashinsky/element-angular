import { NgModule, ModuleWithProviders } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ElIcon } from './icon'


@NgModule({
  declarations: [ElIcon],
  exports: [ElIcon],
  imports: [CommonModule],
  entryComponents: [ElIcon],
})
export class ElIconsModule {
  static forRoot(): ModuleWithProviders<ElIconsModule> {
    return { ngModule: ElIconsModule, providers: [] }
  }
}
