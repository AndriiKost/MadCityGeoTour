import { TestBed, inject } from '@angular/core/testing';

import { GeoObjectService } from './geoObject.service';

describe('GeoObjectServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GeoObjectService]
    });
  });

  it('should be created', inject([GeoObjectService], (service: GeoObjectService) => {
    expect(service).toBeTruthy();
  }));
});
