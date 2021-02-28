import {
  Input, Directive, OnInit, Compiler, Component,
  ModuleWithComponentFactories, NgModule, ViewContainerRef, ComponentRef, Type, ComponentFactory, OnDestroy,
} from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'

// Rendering ElComponent dependence
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { ElModule } from '@fsdk/element-angular'
import { createJitCompiler } from './dynamic.compiler'

@Directive({
  selector: '[ex-dynamic]',
  providers: [{ provide: Compiler, useFactory: createJitCompiler }]
})
export class ElDynamicDirective implements OnInit, OnDestroy {
  
  @Input('ex-dynamic') dynamicHtml: string
  @Input('class') parentClass: new ([string]?: any) => {} = class {}
  
  compRef: ComponentRef<any>
  
  constructor(
    private vcRef: ViewContainerRef,
    private compiler: Compiler,
  ) {
  }
  
  ngOnInit(): void {
    if (!this.dynamicHtml) return

    const component = Component({
      selector: 'ex-dynamic-html',
      template: this.dynamicHtml,
    })(class DynamicComponent extends this.parentClass {});

    const module = NgModule({
      imports: [CommonModule, RouterModule, ElModule, FormsModule, ReactiveFormsModule],
      declarations: [component],
    })(class DynamicModule {});
  
    this.compiler.compileModuleAndAllComponentsAsync(module)
      .then(compiledModule => this.getComponentFactory(compiledModule, component))
      .then(componentFactory => this.initComponent(componentFactory));
  }

  ngOnDestroy(): void {
    if (this.compRef && this.compRef.destroy) {
      this.compRef.destroy();
    }
  }
  
  private getComponentFactory(module: ModuleWithComponentFactories<any>, componentType: Type<any>) {
    return module.componentFactories.find(x => x.componentType === componentType);
  }

  private initComponent(componentFactory: ComponentFactory<any>): void {
    this.compRef = this.vcRef.createComponent(componentFactory)
  }
}
