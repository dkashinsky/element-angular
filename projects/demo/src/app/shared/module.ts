import { NgModule, ModuleWithProviders } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { ElModule } from '@fsdk/element-angular'
import { ExFooterNavComponent, ExDemoComponent, ExDocumentComponent } from './components'
import { ElDynamicDirective } from './directives'
import { HighLightPipe } from './pipe'

@NgModule({
  declarations: [
    ElDynamicDirective,
    ExFooterNavComponent,
    ExDemoComponent,
    ExDocumentComponent,
    HighLightPipe,
  ],
  exports: [
    ElDynamicDirective,
    ExFooterNavComponent,
    ExDocumentComponent,
    HighLightPipe,
    ExDemoComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ElModule,
  ],
  entryComponents: [ExFooterNavComponent],
})
export class ExSharedModule {
  static forRoot(): ModuleWithProviders<ExSharedModule> {
    return { ngModule: ExSharedModule, providers: [] }
  }
}
