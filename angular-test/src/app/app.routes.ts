import { Routes } from '@angular/router';
import { LoginPage } from './features/login-page/login-page';
import { ChatPage } from './features/chat-page/chat-page';
import { ContactsPage } from './features/contacts-page/contacts-page';

export const routes: Routes = [
    {path: "", component: LoginPage},
    {path: "Chat", component: ChatPage},
    {path: "Contacts", component: ContactsPage}
];
