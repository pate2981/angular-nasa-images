import { TestBed } from '@angular/core/testing';

import { NasaImagesService } from './nasa-images.service';

describe('NasaImagesService', () => {
  let service: NasaImagesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NasaImagesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
