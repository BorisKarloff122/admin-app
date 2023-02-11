import {Component, Input, OnInit} from '@angular/core';
import {ITableData} from "../../../models/tableData";
import {ITableOptions} from "../../../models/tableOptions";

@Component({
  selector: 'app-admin-list',
  templateUrl: './admin-list.component.html',
  styleUrls: ['./admin-list.component.css']
})
export class AdminListComponent implements OnInit {
  @Input() public dataSource!: ITableData[];
  @Input() public options!: ITableOptions;
  public displayedColumns: string[] = [];
  public tableLoading = true;

  constructor() { }

  ngOnInit(): void {
    this.processTableData()
  }

  private processTableData(): void{
    this.dataSource = this.dataSource.filter((elem) => !elem.hidden);
    console.log(this.dataSource);
    this.displayedColumns = Object.keys(this.dataSource).map((x)=>{
      return x.toUpperCase();
    })
    this.tableLoading = false;
  }
}
