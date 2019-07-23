import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ConversationRepliesService } from '../conversation-replies.service';

@Component({
  selector: 'app-slack-info',
  templateUrl: './slack-info.component.html',
  styleUrls: ['./slack-info.component.css']
})
export class SlackInfoComponent implements OnInit {
  slackInfoForm;
  conversationReplies$;

  constructor(
    private formBuilder: FormBuilder,
    private conversationRepliesService: ConversationRepliesService
  ) {
    this.slackInfoForm = this.formBuilder.group({
      channelId: '',
      ts: '',
      token: '',
    });
  }
  ngOnInit() {
  }

  onSubmit(slackInfo) {
    console.log('your input ', slackInfo);
    this.conversationReplies$ =
      this.conversationRepliesService.getReplies(slackInfo);
    this.conversationReplies$.subscribe({
      next: x => console.log('Observer got a next value: ', x),
    });
  }
}
