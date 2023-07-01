import { Component, OnInit,ViewChild } from '@angular/core';

@Component({
  selector: 'app-roles-table',
  templateUrl: './roles-table.component.html',
  styleUrls: ['./roles-table.component.css']
})
export class RolesTableComponent implements OnInit {
showPermissions =false;
permissions=[
{key:1,permissionName:"create user"},
{key:2,permissionName:"update user"},
{key:3,permissionName:"delete user"},
{key:4,permissionName:"suspend user"},
{key:5,permissionName:"unsuspend user"},
{key:6,permissionName:"create role"},
{key:7,permissionName:"update role"},
{key:8,permissionName:"delete role"}]

selectedPermissions = [
  {key: 1, permissionName: "create user", checked: true},
  {key: 2, permissionName: "update user", checked: true},
  {key: 3, permissionName: "delete user", checked: true},
  {key: 4, permissionName: "suspend user", checked: true}
];

constructor() {
  for (const permission of this.selectedPermissions) {
    permission.checked = true;
  }
}

  ngOnInit(): void {
  }
}
