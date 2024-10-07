import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-status',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './status.component.html',
  styleUrl: './status.component.css'
})
export class StatusComponent {
  @Input() status!: string;

  get statusClass(): string {
    switch (this.status) {
      case 'Open':
        return 'badge-open';
      case 'Drafted':
        return 'badge-drafted';
      case 'In Progress':
        return 'badge-in-progress';
      case 'Completed':
        return 'badge-completed';
      default:
        return '';
    }
  }
}
