import { NgModule, ModuleWithProviders } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ElMessageContainer } from './message'
import { ElMessageService } from './message.service'

@NgModule({
  declarations: [ElMessageContainer],
  exports: [ElMessageContainer],
  imports: [CommonModule],
  entryComponents: [ElMessageContainer],
})
class ElMessagesModule {
  static forRoot(): ModuleWithProviders<ElMessagesModule> {
    return { ngModule: ElMessagesModule, providers: [
      ElMessageService,
    ]}
  }
}

export {
  ElMessageContainer,
  ElMessagesModule
}