import { NgModule, ModuleWithProviders } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms'
import { ElInputsModule } from '../input/module'
import { ElDataPicker } from './picker'
import { ElDatePickerPanel } from './picker-panel'
import { ElDateTable } from './children/date-table'
import { ElYearTable } from './children/year-table'
import { ElMonthTable } from './children/month-table'

@NgModule({
  declarations: [ElDataPicker, ElDatePickerPanel, ElDateTable, ElYearTable, ElMonthTable],
  exports: [ElDataPicker, ElDatePickerPanel, ElDateTable, ElYearTable, ElMonthTable],
  imports: [CommonModule, FormsModule, ElInputsModule],
  entryComponents: [ElDataPicker],
})
class ElDateModule {
  static forRoot(): ModuleWithProviders<ElDateModule> {
    return { ngModule: ElDateModule, providers: [] }
  }
}

export {
  ElDataPicker, 
  ElDatePickerPanel, 
  ElDateTable, 
  ElYearTable, 
  ElMonthTable,
  ElDateModule
}
