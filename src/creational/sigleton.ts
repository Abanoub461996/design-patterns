//  * Singleton is a creational design pattern that lets you ensure that a class has only one instance, while providing a global access point to this instance.
// ? 1. Ensure that a class has just a single instance. ---> Make the default constructor private, to prevent other objects from using the new operator with the Singleton class.
// ? 2. Provide a global access point to that instance. --->Create a static creation method that acts as a constructor. Under the hood, this method calls the private constructor to create
// ?           an object and saves it in a static field. All following calls to this method return the cached object.

/**
 * The Singleton class defines the `getInstance` method that lets clients access
 * the unique singleton instance.
 */
class Singleton {
  private static instance: Singleton;
  #count: number = 0;
  /**
   * The Singleton's constructor should always be private to prevent direct
   * construction calls with the `new` operator.
   */
  private constructor() {}

  /**
   * The static method that controls the access to the singleton instance.
   *
   * This implementation let you subclass the Singleton class while keeping
   * just one instance of each subclass around.
   */
  public static getInstance(): Singleton {
    if (!Singleton.instance) {
      Singleton.instance = new Singleton();
    }

    return Singleton.instance;
  }

  /**
   * Finally, any singleton should define some business logic, which can be
   * executed on its instance.
   */
  get count(): number {
    return this.#count;
  }
  set count(value: number) {
    this.#count = value;
  }
  public increament(): void {
    this.#count++;
  }
  public decreament(): void {
    this.#count--;
  }
}

/* The Usage code.*/
export default function clientCode() {
  // ! Constructor of class 'Singleton' is private and only accessible within the class declaration.
  // const s1 = new Singleton();

  const s1 = Singleton.getInstance();
  s1.count = 5;
  s1.increament();
  s1.increament();
  s1.decreament();

  console.log({ s1 });
  const s2 = Singleton.getInstance(); /* The line `const s2 = Singleton.getInstance();` is creating a new instance of the Singleton class
  using the `getInstance()` method. This method ensures that only one instance of the Singleton class
  exists, so `s2` will refer to the same instance as `s1`. */
  console.log({ s2 });

  if (s1 === s2) {
    console.log("Singleton works, both variables contain the same instance.");
  } else {
    console.log("Singleton failed, variables contain different instances.");
  }
}


clientCode();