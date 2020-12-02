import { TestBed } from '@angular/core/testing';

import { GitubUsersService } from './gitub-users.service';

describe('GitubUsersService', () => {
  let service: GitubUsersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GitubUsersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
