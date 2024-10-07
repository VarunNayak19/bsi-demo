import { Component, OnInit } from "@angular/core";
import { ListViewModule } from "@progress/kendo-angular-listview";
import { CommonModule } from "@angular/common";
import { articles } from "./articles";
import { ArticleComponent } from "./article/article.component";
import { FormsModule } from "@angular/forms";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [CommonModule, ListViewModule, ArticleComponent, FormsModule],
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"], // Fixed styleUrl to styleUrls
})
export class AppComponent implements OnInit {
  public articles: any[] = articles;
  public filteredArticles: any[] = [...this.articles];
  public view: any[] = [];
  public filterQuery = "";

  public ngOnInit(): void {
    this.loadMore();
  }

  public loadMore(): void {
    const next = this.view.length;
    this.view = [...this.view, ...this.filteredArticles.slice(next, next + 12)];
  }

  public filterTasks(): void {
    this.view = [];
    this.filteredArticles = this.articles.filter(article => {
      const matchesTitle = article.title.toLowerCase().includes(this.filterQuery.toLowerCase());
      const matchesDueDate = article.dueDate.includes(this.filterQuery);
      const matchesAssignedTo = article.assignedTo.toLowerCase().includes(this.filterQuery.toLowerCase());
      const matchesCategory = article.category.toLowerCase().includes(this.filterQuery.toLowerCase());
      const matchesStatus = article.status.toLowerCase().includes(this.filterQuery.toLowerCase());

      return (
        matchesTitle || matchesDueDate || matchesAssignedTo || matchesCategory || matchesStatus
      );
    });
    this.loadMore();
  }
}
