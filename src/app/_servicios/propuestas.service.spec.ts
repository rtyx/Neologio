import { TestBed, inject } from '@angular/core/testing';

import { PropuestasService } from './propuestas.service';

describe('PropuestasService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PropuestasService]
    });
  });

  it('should be created', inject([PropuestasService], (service: PropuestasService) => {
    expect(service).toBeTruthy();
  }));
});
