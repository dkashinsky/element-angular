import { NgModule, ModuleWithProviders } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { CommonModule } from '@angular/common'
import { ElSelectModule } from '../select/module'
import { ElPagination } from './pagination'
import { ElPaginationButton } from './children/button'
import { ElPaginationPager } from './children/pager'
import { ElPaginationSize } from './children/size'
import { ElPaginationJump } from './children/jump'


@NgModule({
  declarations: [
    ElPagination,
    ElPaginationButton,
    ElPaginationPager,
    ElPaginationSize,
    ElPaginationJump,
  ],
  exports: [ElPagination],
  imports: [CommonModule, FormsModule, ElSelectModule],
  entryComponents: [ElPagination],
})
export class ElPaginationModule {
  static forRoot(): ModuleWithProviders<ElPaginationModule> {
    return { ngModule: ElPaginationModule, providers: [] }
  }
}
