import { NgModule, ModuleWithProviders } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ElTag } from './tag'


@NgModule({
  declarations: [ElTag],
  exports: [ElTag],
  imports: [CommonModule],
  entryComponents: [ElTag],
})
class ElTagsModule {
  static forRoot(): ModuleWithProviders<ElTagsModule> {
    return { ngModule: ElTagsModule, providers: [] }
  }
}

export {
  ElTag,
  ElTagsModule
}