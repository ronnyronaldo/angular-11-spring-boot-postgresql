import { Component, OnInit } from '@angular/core';
import { Tutorial } from 'src/app/models/tutorial.model';
import { TutorialService } from 'src/app/services/tutorial.service';

@Component({
  selector: 'app-add-tutorial',
  templateUrl: './add-tutorial.component.html',
  styleUrls: ['./add-tutorial.component.css']
})
export class AddTutorialComponent implements OnInit {
  tutorial: Tutorial = {
    placa: '',
    chasis: '',
    kilometraje: '',
    fecha: '',
    obra: '',
    nombre: '',
  };
  submitted = false;

  constructor(private tutorialService: TutorialService) { }

  ngOnInit(): void {
  }

  saveTutorial(): void {
    const data = {
      placa: this.tutorial.placa,
      chasis: this.tutorial.chasis,
      kilometraje: this.tutorial.kilometraje,
      fecha: this.tutorial.fecha,
      obra: this.tutorial.obra,
      nombre: this.tutorial.nombre,
    };

    this.tutorialService.create(data)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
        },
        error => {
          console.log(error);
        });
  }

  newTutorial(): void {
    this.submitted = false;
    this.tutorial = {
      placa: '',
      chasis: '',
      kilometraje: '',
      fecha: '',
      obra: '',
      nombre: '',
    };
  }

}
