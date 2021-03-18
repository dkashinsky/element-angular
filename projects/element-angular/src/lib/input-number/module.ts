import { NgModule, ModuleWithProviders } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms'
import { ElInputNumber } from './input-number'


@NgModule({
  declarations: [ElInputNumber],
  exports: [ElInputNumber],
  imports: [CommonModule, FormsModule],
  entryComponents: [ElInputNumber],
})
class ElInputNumberModule {
  static forRoot(): ModuleWithProviders<ElInputNumberModule> {
    return { ngModule: ElInputNumberModule, providers: [] }
  }
}

export {
  ElInputNumber,
  ElInputNumberModule
}