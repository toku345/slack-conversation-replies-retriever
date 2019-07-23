import { TestBed } from '@angular/core/testing';

import { ConversationRepliesService } from './conversation-replies.service';

describe('ConversationRepliesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ConversationRepliesService = TestBed.get(ConversationRepliesService);
    expect(service).toBeTruthy();
  });
});
