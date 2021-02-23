import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { RouterModule } from '@angular/router'
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app.routing'
import { ExComponentModule } from './components/module'

import { ExAppComponent } from './app.component'
import { ExSharedModule } from './shared/module'
import { DocsService } from './shared/services/docs/docs.service'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { ElModule } from 'projects/element-angular/src/public_api'

@NgModule({
  declarations: [
    ExAppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule,
    HttpClientModule,
    ElModule.forRoot(),
    ExSharedModule.forRoot(),
    AppRoutingModule,
    ExComponentModule,
  ],
  providers: [
    DocsService,
    { provide: 'WindowLocation', useValue: location },
  ],
  bootstrap: [ExAppComponent],
})
export class AppModule {
}

