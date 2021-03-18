import { NgModule, ModuleWithProviders } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ElContainer } from './container'
import { ElContainerDirective } from './container.directive'
import { ElHeader } from './children/header'
import { ElAside } from './children/aside'
import { ElMain } from './children/main'
import { ElFooter } from './children/footer'
import { ElHeaderDirective } from './directives/header.directive'
import { ElMainDirective } from './directives/main.directive'
import { ElFooterDirective } from './directives/footer.directive'
import { ElAsideDirective } from './directives/aside.directive'


@NgModule({
  declarations: [
    ElContainer,
    ElHeader,
    ElAside,
    ElMain,
    ElFooter,
    ElContainerDirective,
    ElHeaderDirective,
    ElMainDirective,
    ElFooterDirective,
    ElAsideDirective,
  ],
  exports: [
    ElContainer,
    ElHeader,
    ElAside,
    ElMain,
    ElFooter,
    ElContainerDirective,
    ElHeaderDirective,
    ElMainDirective,
    ElFooterDirective,
    ElAsideDirective,
  ],
  imports: [CommonModule],
  entryComponents: [ElContainer],
})
class ElContainerModule {
  static forRoot(): ModuleWithProviders<ElContainerModule> {
    return { ngModule: ElContainerModule, providers: [] }
  }
}

export {
  ElContainer,
  ElHeader,
  ElAside,
  ElMain,
  ElFooter,
  ElContainerDirective,
  ElHeaderDirective,
  ElMainDirective,
  ElFooterDirective,
  ElAsideDirective,
  ElContainerModule
}
