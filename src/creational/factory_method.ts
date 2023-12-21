// * Factory Method is a creational design pattern that provides an interface for creating objects in a superclass, but allows subclasses to alter the type of objects that will be created.
// ? The Factory Method pattern suggests that you replace direct object construction calls (using the new operator) with calls
//  ?    to a special factory method. Don’t worry: the objects are still created via the new operator,
//  ?    but it’s being called from within the factory method. Objects returned by a factory method are often referred to as products.

/**
 * The Creator class declares the factory method that is supposed to return an
 * object of a Product class. The Creator's subclasses usually provide the
 * implementation of this method.
 */
abstract class Creator {
  /**
   * Note that the Creator may also provide some default implementation of the
   * factory method.
   */
  public createdVehicle! : Vehicle;

  public abstract factoryMethod(): Vehicle;

  /**
   * Also note that, despite its name, the Creator's primary responsibility is
   * not creating products. Usually, it contains some core business logic that
   * relies on Product objects, returned by the factory method. Subclasses can
   * indirectly change that business logic by overriding the factory method
   * and returning a different type of product from it.
   */
  constructor(){
    this.createdVehicle = this.factoryMethod();
  }
  public travelling(): string {
    // Call the factory method to create a Product object.
    // Now, use the product.
    return `Travelling in the Vihcle ${this.createdVehicle.operation()}`;
  }
}

/**
 * Concrete Creators override the factory method in order to change the
 * resulting product's type.
 */
class ShipCreator extends Creator {
  /**
   * Note that the signature of the method still uses the abstract product
   * type, even though the concrete product is actually returned from the
   * method. This way the Creator can stay independent of concrete product
   * classes.
   */
  private static counter = 0;
  private static increaseCount() {
    this.counter++;
  }
  public factoryMethod(): Vehicle {
    ShipCreator.increaseCount();
    return new Ship(ShipCreator.counter);
  }
}

class TruckCreator extends Creator {
  private static counter = 0;
  private static increaseCount() {
    this.counter++;
  }
  public factoryMethod(): Vehicle {
    TruckCreator.increaseCount();
    return new Truck(TruckCreator.counter);
  }
}

/**
 * The Product interface declares the operations that all concrete products must
 * implement.
 */
interface Vehicle {
  operation(): string;
}

/**
 * Concrete Products provide various implementations of the Product interface.
 */
class Ship implements Vehicle {
  public id: number = 0;
  constructor(id: number) {
    this.id = id;
  }
  public operation(): string {
    return `Ship no. ${this.id}`;
  }
}

class Truck implements Vehicle {
  public id: number = 0;
  constructor(id: number) {
    this.id = id;
  }
  public operation(): string {
    return `Truck no. ${this.id}`;
  }
}

/**
 * The Application picks a creator's type depending on the configuration or
 * environment.
 */
const ship1 = new ShipCreator();
console.log(ship1.travelling());
const ship2 = new ShipCreator();
console.log(ship2.travelling());
const truck1 = new ShipCreator();
console.log(truck1.travelling());
