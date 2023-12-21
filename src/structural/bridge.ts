// * Bridge is a structural design pattern that divides business logic or huge class into separate class hierarchies that can be developed independently.

// ? One of these hierarchies (often called the Abstraction) will get a reference to an object of the second hierarchy (Implementation). TheDefaultColoringAbstractionwill be able
// ? to delegate some (sometimes, most) of its calls to the implementations object.  Since all implementations will have a common interface, they’d be interchangeable inside the abstraction.

class DefaultColoringAbstraction {
  protected implementation: Implementation;

  constructor(implementation: Implementation) {
    this.implementation = implementation;
  }

  public showColorizedOpject(): string {
    const result = this.implementation.create();
    return `Blue (default) Colorized ${result}`;
  }
}

/*** Extending the abstraction in one direction to process the implementation in a different direction ***/
class RedAbstraction extends DefaultColoringAbstraction {
  public showColorizedOpject(): string {
    const result = this.implementation.create();
    return `Red Colorized ${result}`;
  }
}
class GreenAbstraction extends DefaultColoringAbstraction {
  public showColorizedOpject(): string {
    const result = this.implementation.create();
    return `Green Colorized ${result}`;
  }
}

// Implement the Implementation with different classes for each different one

interface Implementation {
  create(): string;
}

class Ball implements Implementation {
  public create(): string {
    return "Ball";
  }
}

class Box implements Implementation {
  public create(): string {
    return "Box";
  }
}

class Pyramid implements Implementation {
  public create(): string {
    return "Pyramid";
  }
}

// let object = new Pyramid(); // ? Create the Object
// let colourfulObject = new GreenAbstraction(object); //? Give it  a color
// console.log(colourfulObject.showColorizedOpject());

// console.log("");

// object = new Box();
// colourfulObject = new RedAbstraction(object);
// console.log(colourfulObject.showColorizedOpject());

// ! Add new Color To see How u can benefit from it

/****_______________________________________________________________________****/

interface View {
  create(): string;
}

class CreateView implements Implementation {
  public create(): string {
    return "Creation View";
  }
}

class EditView implements Implementation {
  public create(): string {
    return "Edit View";
  }
}

class ShowView implements Implementation {
  public create(): string {
    return "Show View";
  }
}

abstract class CustomizeView {
  protected view: View;

  constructor(view: View) {
    this.view = view;
  }
  public abstract customizeViewWithTeams(): void;
}

class CupOf4Teams extends CustomizeView {
  public customizeViewWithTeams(): void {
    const result = this.view.create();
    console.log(`4 Teams Cup ${result}`);
  }
}

let cupCreateView = new CreateView(); // ? Create the Cup View
console.log(cupCreateView.create());

let cupEditView = new EditView(); // ? Create the Cup View
console.log(cupEditView.create());

let createViewCustomized = new CupOf4Teams(cupCreateView); //? Customize it based on the teams
createViewCustomized.customizeViewWithTeams();
let editViewCustomized = new CupOf4Teams(cupEditView); //? Customize it based on the teams
editViewCustomized.customizeViewWithTeams();
