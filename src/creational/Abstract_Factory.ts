// *Abstract Factory is a creational design pattern, which solves the problem of creating entire product families without specifying their concrete classes.

/**
 * The Abstract Factory interface declares a set of methods that return
 * different abstract products. These products are called a family and are
 * related by a high-level theme or concept. Products of one family are usually
 * able to collaborate among themselves. A family of products may have several
 * variants, but the products of one variant are incompatible with products of
 * another.
 */
interface AbstractFactory {
  createView(): AbstractCreateView;
  editView(): AbstractEditView;
  showView(): AbstractShowView;
}

class ViewsFactory2Teams implements AbstractFactory {
  public createView(): AbstractCreateView {
    return new CreateView2Teams();
  }
  public editView(): AbstractEditView {
    return new EditView2Teams();
  }
  public showView(): AbstractShowView {
    return new ShowView2Teams();
  }
}


class ViewsFactory4Teams implements AbstractFactory {
  public createView(): AbstractCreateView {
    return new CreateView4Teams();
  }

  public editView(): AbstractEditView {
    return new EditView4Teams();
  }
  public showView(): AbstractShowView {
    return new ShowView4Teams();
  }
}

interface AbstractCreateView {
  canAddTeams(): void;
}

class CreateView2Teams implements AbstractCreateView {
  public canAddTeams(): void {
    console.log("adding teams to a 2 teams create view");
  }
  public specificFor2TeamsCreateView(): void {
    console.log("specially for 2 teams cup creation view");
  }
}

class CreateView4Teams implements AbstractCreateView {
  public canAddTeams(): void {
    console.log("adding teams to a 4 teams create view");
  }
  public specificFor4TeamsCreateView(): void {
    console.log("specially for 4 teams cup creation view");
  }
}


interface AbstractEditView {
  canReplaceTeams(): void;
}


class EditView2Teams implements AbstractEditView {
  public canReplaceTeams(): void {
    console.log("replacing teams to a 2 teams create view");
  }
}

class EditView4Teams implements AbstractEditView {
  public canReplaceTeams(): void {
    console.log("replacing teams to a 4 teams create view");
  }
}

interface AbstractShowView {
  canJustSee(): void;
}

class ShowView2Teams implements AbstractShowView {
  public canJustSee(): void {
    console.log("see teams and matches for 2 teams Cup");
  }
}

class ShowView4Teams implements AbstractShowView {
  public canJustSee(): void {
    console.log("see teams and matches for 4 teams Cup");
  }
}

// ClientCode
// Create Cup of 2 Teams and add create and edit and show Views
const cupOf2Teams = new ViewsFactory2Teams();
let cupCreation = cupOf2Teams.createView();
cupCreation.canAddTeams();
let cupEdition = cupOf2Teams.editView();
cupEdition.canReplaceTeams();
let cupShow = cupOf2Teams.showView();
cupShow.canJustSee();


// Create Cup of 2 Teams and add create and edit and show Views
const cupOf4Teams = new ViewsFactory4Teams();
cupCreation = cupOf4Teams.createView();
cupCreation.canAddTeams();
cupEdition = cupOf4Teams.editView();
cupEdition.canReplaceTeams();
cupShow = cupOf4Teams.showView();
cupShow.canJustSee();
