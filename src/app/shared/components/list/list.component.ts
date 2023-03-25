import {Component, Input, OnInit} from '@angular/core';
import {ITableOptions} from "../../../admin/models/tableOptions";
import {SharedService} from "../../services/shared.service";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export abstract class ListComponent implements OnInit {
  @Input() public tableName?: string;
  @Input() public options!: ITableOptions;
  public tableData$ = this.sharedService.getTableData(this.tableName)
  public displayedColumns: string[] = [];
  protected constructor(
    private sharedService: SharedService
  ) { }

  ngOnInit(): void {

  }



}
