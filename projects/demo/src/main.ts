declare function require(string: string): string

import { enableProdMode, TRANSLATIONS, TRANSLATIONS_FORMAT, LOCALE_ID, StaticProvider } from '@angular/core'
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic'

import { AppModule } from './app/app.module'
import { environment } from './environments/environment';

const translations: string = require('./locale/messages.en-US.xlf')

if (environment.production) {
  enableProdMode();
}
const LOCALE: string = (<any>window).localStorage.getItem('LOCALE') || 'zh-CN'

const makeLocaleID = () => ({ provide: LOCALE_ID, useValue: LOCALE })
const getProviders = (): Array<StaticProvider> => {
  if (LOCALE !== 'en-US') return [makeLocaleID()]
  return [
    { provide: TRANSLATIONS, useValue: translations },
    { provide: TRANSLATIONS_FORMAT, useValue: 'xlf' },
    makeLocaleID(),
  ]
}

platformBrowserDynamic([makeLocaleID()])
  .bootstrapModule(AppModule, { providers: getProviders() })



