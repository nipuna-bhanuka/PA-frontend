import { Component, OnInit } from '@angular/core';
import { DepartmentModel } from 'src/app/models/department.model';
import { DepartmentService } from 'src/app/services/department.service';

@Component({
  selector: 'app-department-list',
  templateUrl: './department-list.component.html',
  styleUrls: ['./department-list.component.css']
})
export class DepartmentListComponent implements OnInit {
  isLoading = false;
  departmentList: DepartmentModel[] | undefined;

  constructor(private departmentService: DepartmentService) { }

  ngOnInit(): void {
    this.getList();
  }

  getList() {
    this.isLoading = true;
    this.departmentService.getList().subscribe({
      next: (res) => {
        this.departmentList = res;
        this.isLoading = false;
      },
      error: (error) => {
        console.log(error);
        this.isLoading = false;
      },
    });
  }
  delete(department: any){
    this.departmentService.delete(department.id).subscribe(res=>{
      alert("Are you sure delete department?");
      this.getList();
    },
    error=>{
      console.log(error);
      this.isLoading = false;
      alert("Something went wrong")
    })
  }

}
