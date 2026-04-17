import { Component } from '@angular/core';
import { Header } from '../../components/header/header';
import { ChatMessage } from '../../components/chat-message/chat-message';
import { Input } from '../../components/input/input';

@Component({
  selector: 'app-chat-page',
  imports: [Header, ChatMessage, Input],
  templateUrl: './chat-page.html',
  styleUrl: './chat-page.css',
})
export class ChatPage {}
