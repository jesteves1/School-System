import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/service/api.service';
import { School } from 'src/model/school';

@Component({
  selector: 'app-schools',
  templateUrl: './schools.component.html',
  styleUrls: ['./schools.component.scss']
})

export class SchoolsComponent implements OnInit {

  displayedColumns: string[] = ['Nome', 'Endereço', 'CEP', 'Classes']
  dataSource: School[];
  public isLoadingResults: boolean = false;

  constructor(private api: ApiService) { }

  ngOnInit(): void {
    this.api.getSchools().subscribe(res => {
      this.dataSource = res;
      this.isLoadingResults = false;
    }, err => {
      console.log('Erro ao buscar escolas: ', err);
      this.isLoadingResults = false;
    });
  }

}
