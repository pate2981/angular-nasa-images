import { Component, OnInit } from '@angular/core';
import { NasaImage } from './models/nasa-image';
import { NasaImageService } from './services/nasa-images.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'angular-nasa-images';
  binding = 'test';
  nasaImages: NasaImage[] | undefined;
  nasaImage: NasaImage | undefined;
  loading: boolean | undefined;
  constructor(private imageService: NasaImageService) {

  }

  ngOnInit() {
    this.loading = true;
    this.imageService.getImages().subscribe(
      (data) => {
        this.loading = false;
        console.log(data);
        this.nasaImages = data;
        // // this.nasaImage = this.nasaImages[0];
      }
    );
  }
}
