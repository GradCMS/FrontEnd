import { Component, OnInit } from '@angular/core';
import { PageService } from 'src/app/sharedServices/pageData/page.service/page.service.component';
import { NestedTreeControl } from '@angular/cdk/tree';
import { MatTreeNestedDataSource } from '@angular/material/tree';
import { PopupAlertComponent } from 'src/app/shared/popup/popup.alert/popup.alert.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-pages-table',
  templateUrl: './pages-table.component.html',
  styleUrls: ['./pages-table.component.css']
})
export class PagesTableComponent implements OnInit {
  tree!: any[];
  treeControl = new NestedTreeControl<any>(node => node.children);
  dataSource = new MatTreeNestedDataSource<any>();

  constructor(private pageServ: PageService, public dialog: MatDialog) {
    
   }

  ngOnInit(): void {
    this.pageServ.getPagesTree().subscribe(data  =>{
      this.tree=data.tree
    
    this.dataSource.data = this.tree; })

  }
 onDelete(page: any): void {
    this.pageServ.deletePage(page.id).subscribe(() => {
      this.tree = this.tree.filter((r: any) => r.id !== page.id);
    });
    
  }
  openDialog(page: any): void {
    const dialogRef = this.dialog.open(PopupAlertComponent, {
      width: '250px',
      data: { page: page, confirmationMessage: 'Are you sure you want to delete this page and all its children?' }
    });
  
    dialogRef.afterClosed().subscribe(result => {
      if (result === 'yes') {
        this.onDelete(page); 
      }
    });
  }
  hasChild = (_: number, node: any) => !!node.children && node.children.length > 0;
}
