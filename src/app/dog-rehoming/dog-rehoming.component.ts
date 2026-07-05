import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-dog-rehoming',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
  ],
  templateUrl: './dog-rehoming.component.html',
  styleUrl: './dog-rehoming.component.scss',
})
export class DogRehomingComponent {
  assessmentItems = [
    'Personlighet, trygghet og temperament',
    'Hvordan hunden fungerer med mennesker, barn og andre dyr',
    'Rutiner, aktivitetsnivå og hverdagsbehov',
    'Ting hunden synes er vanskelig, og hva som hjelper',
    'Helse, veterinærhistorikk og praktisk informasjon',
  ];
}
