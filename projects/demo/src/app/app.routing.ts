import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

export const appRoutes: Routes = [
  {
    path: 'basic',
    loadChildren: () => import('./basic/basic.module').then(m => m.BasicModule),
  },
  {
    path: 'form',
    loadChildren: () => import('./form/form.module').then(m => m.FormModule),
  },
  {
    path: 'others',
    loadChildren: () => import('./others/others.module').then(m => m.OthersModule),
  },
  {
    path: 'nav',
    loadChildren: () => import('./navigation/navigation.module').then(m => m.NavigationModule),
  },
  {
    path: 'guide',
    loadChildren: () => import('./components/guide/guide.module').then(m => m.GuideModule),
  },
  {
    path: 'data',
    loadChildren: () => import('./data/data.module').then(m => m.DataModule),
  },
  {
    path: 'notice',
    loadChildren: () => import('./notice/notice.module').then(m => m.NoticeModule),
  },
  { path: '', redirectTo: '/guide/install', pathMatch: 'full' },
]

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, { useHash: false }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
