import { Component, OnInit } from '@angular/core';
import * as XLSX from 'xlsx';
@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  fileUpload(event:any){
    console.log(event.target.files);
    const selectedfile = event.target.files[0];
    const fileReader = new FileReader();
    fileReader.readAsBinaryString(selectedfile);
    fileReader.onload = (event)=>
    {
      console.log(event)
      let binaryData=event.target.result;
      let workbook = XLSX.read(binaryData,{type:'binary'})
      console.log(workbook)
    }

  }

}
