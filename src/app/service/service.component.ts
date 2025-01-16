import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-service',
  standalone: true,
  imports: [MatCardModule, TranslateModule, CommonModule],
  templateUrl: './service.component.html',
  styleUrl: './service.component.css',
})
export class ServiceComponent {
  cards = [
    {
      title: 'FlooringServices',
      image: '../../assets/images/flooring.jpg',
      description: 'FlooringServicesDescription',
    },
    {
      title: 'WallRepairAndPainting',
      image: '../../assets/images/wall-repair.jpg',
      description: 'WallRepairAndPaintingDescription',
    },
    {
      title: 'KitchenAndBathroom',
      image: '../../assets/images/bathroom-remodeling.jpg',
      description: 'KitchenAndBathroomDescription',
    },
    {
      title: 'FurnitureAndLightingInstallation',
      image: '../../assets/images/furniture-lighting.jpg',
      description: 'FurnitureAndLightingInstallationDescription',
    },
    {
      title: 'ElectricalServices',
      image: '../../assets/images/electrical.jpg',
      description: 'ElectricalServicesDescription',
    },
    {
      title: 'OtherIndoorRemodeling',
      image: '../../assets/images/indoor-remodeling.jpg',
      description: 'OtherIndoorRemodelingDescription',
    },
    {
      title: 'ExteriorWallsWindowsAndDoors',
      image: '../../assets/images/exterior.jpg',
      description: 'ExteriorWallsWindowsAndDoorsDescription',
    },
  ];
}
