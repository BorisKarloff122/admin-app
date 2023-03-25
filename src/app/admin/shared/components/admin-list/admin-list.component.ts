import {Component, OnChanges} from '@angular/core';
import {ListComponent} from "../../../../shared/components/list/list.component";
import {HomeDataService} from "../../../modules/home/services/home-data.service";
import {SharedService} from "../../../../shared/services/shared.service";

@Component({
  selector: 'app-admin-list',
  templateUrl: './admin-list.component.html',
  styleUrls: ['./admin-list.component.css']
})
export class AdminListComponent extends ListComponent{
  constructor(
    sharedService: SharedService
  ) {
    super(sharedService);
  }



  public setTableData(){
    this.tableData$.subscribe((res: any[]) => {
      this.displayedColumns = Object.keys(res[0]).map((x)=>{
        return x.toUpperCase()
      })
    })
  }


}
