// Importez le Router si vous n'avez pas déjà importé
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

interface TableRow {
  phase: string;
  etape: string;
  sousEtape: string;
  chargeSurPlace: string;
  chargeEnLigne: string;
  dureeJrs: string;
  dureeM: string;
  livrable: string;
} 
@Component({
  selector: 'app-table-list',
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.css']
})
export class TableListComponent implements OnInit {

  constructor(private router: Router) { }
  showSpecialRow: boolean = false;
  specialRowIndex: number = -1;
  ngOnInit() {
    this.showSpecialRow = false;
  }

  creerTableau() {
    // Implémentez ici la logique pour créer un nouveau tableau
    // Par exemple, naviguer vers une autre page où le tableau peut être créé
    this.router.navigate(['/nouveau-tableau']); // Remplacez '/nouveau-tableau' par le chemin de votre nouvelle page
  }
  rows: TableRow[] = [];
  r: TableRow[] = [];
  editedValues: { [key: string]: string } = {};
  activeCellIndex: number = -1;
  activeCellKey: string = '';
  addRow() {
      this.rows.push({
          phase: '',
          etape: '',
          sousEtape: '',
          chargeSurPlace: '',
          chargeEnLigne: '',
          dureeJrs: '',
          dureeM: '',
          livrable: ''
      });
  }

  updateCellTemporarily(event: any, index: number, key: string) {
    const newValue = event.target.textContent.trim();
    this.editedValues[index + key] = newValue;
}

updateCellValue(index: number, key: string) {
  const newValue = this.editedValues[index + key];
  if (index === this.rows.length - 1) {
      this.rows[index][key] = newValue;
  } else {
      // Pour les autres lignes, mettez à jour directement les valeurs dans le tableau
      this.rows[index][key] = newValue;
  }
}
addCustomRow(index: number) {
  // Insérer une nouvelle ligne après la ligne spécifiée
  this.rows.splice(index + 1, 0, {
    phase: '',
    etape: 'Nouvelle étape',
    sousEtape: '',
    chargeSurPlace: '',
    chargeEnLigne: '',
    dureeJrs: '',
    dureeM: '',
    livrable: ''
  });
  this.showSpecialRow = true;
}
}

