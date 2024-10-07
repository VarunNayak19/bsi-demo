import { Component, Input } from "@angular/core";
import { CardModule } from "@progress/kendo-angular-layout";
import { StatusComponent } from "../status/status.component";
import { DialogModule } from '@progress/kendo-angular-dialog';
import { CommonModule } from "@angular/common";
import { articleInterface } from "../articles";

@Component({
  selector: "app-article",
  standalone: true,
  imports: [CardModule, StatusComponent, DialogModule, CommonModule],
  templateUrl: "./article.component.html",
  styleUrl: "./article.component.css"
})
export class ArticleComponent {
  @Input() public article!: articleInterface
  @Input() public borderBottom!: boolean;
  opened = false;
  public close(): void {
    this.opened = false;
  }
  public open(): void {
    this.opened = true;
  }
}
