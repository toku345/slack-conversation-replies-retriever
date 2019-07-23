import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-slack-info',
  templateUrl: './slack-info.component.html',
  styleUrls: ['./slack-info.component.css']
})
export class SlackInfoComponent implements OnInit {
  slackInfoForm;
  constructor(private formBuilder: FormBuilder) {
    this.slackInfoForm = this.formBuilder.group({
      channelId: '',
      ts: '',
      slackToken: '',
    });
  }
  ngOnInit() {
  }

  onSubmit(slackInfo) {
    console.log('your input ', slackInfo);
  }
}
