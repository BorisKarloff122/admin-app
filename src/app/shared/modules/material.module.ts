import {NgModule} from "@angular/core";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatSelectModule} from "@angular/material/select";
import {MatMenuModule} from "@angular/material/menu";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatTableModule} from "@angular/material/table";
import {MatPaginatorModule} from "@angular/material/paginator";

@NgModule({
  imports:[
    MatCheckboxModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatSidenavModule,
    MatSelectModule,
    MatMenuModule,
    MatToolbarModule,
    MatTableModule,
    MatPaginatorModule
  ],
  exports:[
    MatCheckboxModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatSidenavModule,
    MatSelectModule,
    MatMenuModule,
    MatToolbarModule,
    MatTableModule,
    MatPaginatorModule
  ]
})
export class MaterialModule {}
