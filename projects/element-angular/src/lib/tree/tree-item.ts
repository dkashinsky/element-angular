import {
  Component, Input, Optional,
} from '@angular/core'
import { ElTree } from './tree'
import { ElTreeModelData } from './tree-props'
import { dropAnimation } from '../shared/animation/drop.animation'

@Component({
  selector: 'el-tree-item',
  animations: [dropAnimation],
  templateUrl: './tree-item.html',
})
export class ElTreeItem {
  
  @Input() indent: number
  @Input() model: ElTreeModelData
  
  constructor(
    @Optional() public root: ElTree,
  ) {
  }
  
  clickHandle(event: MouseEvent): void {
    event.stopPropagation()
    if (!this.root.expandOnClickNode) return this.itemEmitter('click')
    this.updateExpanded()
  }
  
  iconClickHandle(event: MouseEvent): void {
    event.stopPropagation()
    this.updateExpanded()
  }
  
  checkHandle(): void {
    if (this.root.elDisabled) return
    this.root.updateChecked(this.model.id)
    this.root.emitter({
      label: this.model.label,
      treeNodeID: this.model.id,
      action: 'checkbox',
      checked: this.model.checked,
    })
  }
  
  updateExpanded(): void {
    const dontUpdateExpanded: boolean = this.isLeaf()
    const nextAction: string = dontUpdateExpanded ? 'click' : (this.model.expanded ? 'close' : 'open')
    this.itemEmitter(nextAction)
    !dontUpdateExpanded && this.root.updateExpanded(this.model.id)
  }
  
  isLeaf(): boolean {
    return !this.model.children || !this.model.children.length
  }
  
  itemEmitter(action: string): void {
    this.root.emitter({
      label: this.model.label,
      treeNodeID: this.model.id,
      action: action,
      checked: this.model.checked,
    })
  }
  
}
