import { TestBed } from '@angular/core/testing';

import { CreateCategoryDialogService } from './create-category-dialog.service';

describe('CreateCategoryDialogService', () => {
  let service: CreateCategoryDialogService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CreateCategoryDialogService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
