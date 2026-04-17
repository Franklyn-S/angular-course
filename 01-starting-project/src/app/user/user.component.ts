import { Component, computed, input, output } from '@angular/core';
import { CardComponent } from "../shared/card/card.component";
import { type User } from './user.model';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent {
  imagePath = computed(() => `assets/users/${this.user().avatar}`);
  user = input.required<User>();
  selected = input.required<boolean>();
  select = output<string>();

  onSelectUser() {
    this.select.emit(this.user().id);
  }
}
