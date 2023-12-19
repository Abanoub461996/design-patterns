// * Prototype is a creational design pattern that lets you copy existing objects without making your code dependent on their classes.
// ? The Prototype pattern delegates the cloning process to the actual objects that are being cloned. The pattern declares
// ?    a common interface for all objects that support cloning. This interface lets you clone an object without coupling your
// ?    code to the class of that object. Usually, such an interface contains just a single clone method.
// ? All prototype classes should have a common interface that makes it possible to copy objects even if their concrete classes are unknown.
// ?    Prototype objects can produce full copies since objects of the same class can access each other’s private fields.

/**
 * The example class that has cloning ability. We'll see how the values of field
 * with different types will be cloned.
 */
class Prototype {
  public primitive: any;
  public component!: object;
  public circularReference!: ComponentWithBackReference;
}

class ComponentWithBackReference {
  public prototype;

  constructor(prototype: Prototype) {
    this.prototype = prototype;
  }
}

/**
 * The client code.
 */
function clientCode() {
  const p1 = new Prototype();
  p1.primitive = 245;
  p1.component = new Date();
  p1.circularReference = new ComponentWithBackReference(p1);
  // Creating p2 as an empty object here but has optional props just as the p1
  const p2: {
    primitive?: any;
    component?: object;
    circularReference?: ComponentWithBackReference;
  } = {};
  // Assign p1 as the prototype of p2 so it inherits p1's props
  Object.setPrototypeOf(p2, p1);

  console.log(p2);
  // Despite that p1 and p2 are not the same yet the p1.prop === p2.props due to prototypal inheritance
  if (p1.primitive === p2.primitive) {
    console.log(
      "Primitive field values have been carried over to a clone. Yay!"
    );
  } else {
    console.log("Primitive field values have not been copied. Booo!");
  }
  if (p1.component === p2.component) {
    console.log("Simple component has not been cloned. Booo!");
  } else {
    console.log("Simple component has been cloned. Yay!");
  }

  if (p1.circularReference === p2.circularReference) {
    console.log("Component with back reference has not been cloned. Booo!");
  } else {
    console.log("Component with back reference has been cloned. Yay!");
  }

  if (p1.circularReference.prototype === p2.circularReference?.prototype) {
    console.log(
      "Component with back reference is linked to original object. Booo!"
    );
  } else {
    console.log("Component with back reference is linked to the clone. Yay!");
  }
}

clientCode();
