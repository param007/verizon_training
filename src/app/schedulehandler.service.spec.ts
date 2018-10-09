import { TestBed, inject } from '@angular/core/testing';

import { SchedulehandlerService } from './schedulehandler.service';

describe('SchedulehandlerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SchedulehandlerService]
    });
  });

  it('should be created', inject([SchedulehandlerService], (service: SchedulehandlerService) => {
    expect(service).toBeTruthy();
  }));
});
