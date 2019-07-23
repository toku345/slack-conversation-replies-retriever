import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ConversationRepliesService {
  replies = [];

  constructor(
    private http: HttpClient
  ) { }

  getReplies(slackInfo) {
    let options = {
      params: new HttpParams()
        .set('token', slackInfo.token)
        .set('channel', slackInfo.channelId)
        .set('ts', slackInfo.ts)
    }

    return this.http.get('https://slack.com/api/conversations.replies', options);
  }
}
