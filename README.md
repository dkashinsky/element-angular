
<div align="center">
  <img src="https://camo.githubusercontent.com/462f24153b8e8739c8ea71f7102585c4cb0e1575/68747470733a2f2f63646e2e7261776769742e636f6d2f456c656d6546452f656c656d656e742f6465762f656c656d656e745f6c6f676f2e737667" width="250" height="100" align="center">
  <img src="https://angular.io/assets/images/logos/angular/angular.svg" width="90" height="90" align="center">
</div>

<h2 align="center">Element for Angular</h2>

This project is intended to bring Element UI Kit (https://element.eleme.io/#/en-US) to the angular world.

The project was initally forked from https://github.com/ElemeFE/element-angular in order to update dependencies so that it can be used along with Angular 9+.

It is now built and packaged with angular cli (v8) toolset and will hopefully be further updated to the current Angular version.

## Getting Started

1. Install:
```bash
# install
npm i --save @fsdk/element-angular
```
2. Usage:
```typescript
// import module
import { ElModule } from '@fsdk/element-angular'
```

```scss
// import styles directly (/src/styles.css)
@import "~@fsdk/element-angular/theme/index.css"
```

```json
// or via anglar-cli configuration (/angular.json):
{
  "app": [{
    "styles": [
      "../node_modules/element-angular/theme/index.css"
    ],
    // other configurations...
  }]
}

```

## Customization

Since components utilize Element-UI styling which reside in the global scope the other option might be to configure styles via https://element.eleme.io/#/en-US/theme/preview, download custom theme and set it up. 
This approach is straightforward and should work, however not tested yet. 

Default theme which @fsdk/element-angular package is build around comes from element-ui@2.0.7 package
