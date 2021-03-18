import { NgModule, ModuleWithProviders } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ElBreadcrumb } from './breadcrumb'
import { ElBreadcrumbItem } from './breadcrumb-item'


@NgModule({
  declarations: [ElBreadcrumb, ElBreadcrumbItem],
  exports: [ElBreadcrumb, ElBreadcrumbItem],
  imports: [CommonModule],
  entryComponents: [ElBreadcrumb],
})
class ElBreadcrumbsModule {
  static forRoot(): ModuleWithProviders<ElBreadcrumbsModule> {
    return { ngModule: ElBreadcrumbsModule, providers: [] }
  }
}

export {
  ElBreadcrumb,
  ElBreadcrumbItem,
  ElBreadcrumbsModule
}