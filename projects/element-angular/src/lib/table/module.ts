import { NgModule, ModuleWithProviders } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ElTable } from './table'
import { ElTableFormat } from './utils/format'
import { ElSharedModule } from '../shared/module'
import { ElTableHeader } from './children/header'
import { ElTableColumn } from './children/column'
import { ElTableBody } from './children/body'

@NgModule({
  declarations: [
    ElTable,
    ElTableHeader,
    ElTableColumn,
    ElTableBody,
  ],
  exports: [
    ElTable,
    ElTableColumn,
  ],
  imports: [CommonModule, ElSharedModule],
  entryComponents: [ElTable],
})
class ElTableModule {
  static forRoot(): ModuleWithProviders<ElTableModule> {
    return { ngModule: ElTableModule, providers: [ElTableFormat] }
  }
}

export {
  ElTable,
  ElTableColumn,
  ElTableModule
}