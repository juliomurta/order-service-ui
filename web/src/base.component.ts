import { ActivatedRoute, Router } from "@angular/router";

export enum SortDirection {
  Asc, Desc
}

export class BaseComponent {
    
  isModalActive: boolean = false;
  showSuccess: boolean = false;
  showError: boolean = false;

  showUpdateResult: boolean = false;
  showCreateResult: boolean = false;
  showRemoveResult: boolean = false;

  direction: SortDirection = SortDirection.Asc;

  constructor(router: Router,
              activateRoute: ActivatedRoute
  ) { 
    const result = activateRoute.snapshot.params["result"];
    this.showSuccess = result === "success";
    this.showError = result === "error";
        
    const operation = activateRoute.snapshot.params["operation"];
    this.showCreateResult = operation === "create";
    this.showUpdateResult = operation === "update";
    this.showRemoveResult = operation === "remove";  
  }

  public get sortDirection(): typeof SortDirection {
    return SortDirection; 
  }

  public toggleModal() {
    this.isModalActive = !this.isModalActive;
  }

  protected changeSortDirection() {
    if (this.direction === SortDirection.Asc) {
      this.direction = SortDirection.Desc; 
    } else {
      this.direction = SortDirection.Asc;
    }
  }
}