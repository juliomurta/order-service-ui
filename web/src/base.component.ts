import { ActivatedRoute, Router } from "@angular/router";

export class BaseComponent {
    
  isModalActive: boolean = false;
  showSuccess: boolean = false;
  showError: boolean = false;

  showUpdateResult: boolean = false;
  showCreateResult: boolean = false;
  showRemoveResult: boolean = false;

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

  toggleModal() {
    this.isModalActive = !this.isModalActive;
  }
}