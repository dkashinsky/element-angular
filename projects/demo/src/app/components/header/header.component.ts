import { Component, OnInit } from '@angular/core'
import { NavigationStart, Router } from '@angular/router'

@Component({
  selector: 'ex-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class ExHeaderComponent implements OnInit {
  
  isGuide: boolean = false
  
  constructor(private router: Router) { }
  
  changeLang(lange: string): void {
    const win: any = (<any>window)
    win.localStorage.setItem('LOCALE', lange)
    win.location.href = win.location.origin
  }
  
  ngOnInit(): void {
    this.router.events
      .subscribe(event => {
        if(event instanceof NavigationStart) {
          this.isGuide = event.url === '/' || event.url.startsWith('/guide')
        }
      })
  }
}
