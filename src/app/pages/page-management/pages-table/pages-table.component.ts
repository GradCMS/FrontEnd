import { Component, OnInit } from '@angular/core';
import { PageService } from 'src/app/sharedServices/pageData/page.service/page.service.component';
import { NestedTreeControl } from '@angular/cdk/tree';
import { MatTreeNestedDataSource } from '@angular/material/tree';

@Component({
  selector: 'app-pages-table',
  templateUrl: './pages-table.component.html',
  styleUrls: ['./pages-table.component.css']
})
export class PagesTableComponent implements OnInit {
  tree!: any[];
  treeControl = new NestedTreeControl<any>(node => node.children);
  dataSource = new MatTreeNestedDataSource<any>();

  constructor(private pageServ: PageService) { }

  ngOnInit(): void {
    this.pageServ.getPagesTree().subscribe(data  =>{
      this.tree=data.tree
    
    this.dataSource.data = this.tree; })

  }

  hasChild = (_: number, node: any) => !!node.children && node.children.length > 0;
}
