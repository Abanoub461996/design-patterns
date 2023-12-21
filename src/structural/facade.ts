/**
 * The Facade class provides a simple interface to the complex logic of one or
 * several subsystems. The Facade delegates the client requests to the
 * appropriate objects within the subsystem. The Facade is also responsible for
 * managing their lifecycle. All of this shields the client from the undesired
 * complexity of the subsystem.
 */
class Facade {
    protected subsystem1: Subsystem1;

    protected subsystem2: Subsystem2;


    constructor(subsystem1?: Subsystem1, subsystem2?: Subsystem2) {
        // It Should handle the all subclasses life cycle
        this.subsystem1 = subsystem1 || new Subsystem1();
        this.subsystem2 = subsystem2 || new Subsystem2();
    }

    /**
     * The Facade's methods are convenient shortcuts to the sophisticated
     * functionality of the subsystems. However, clients get only to a fraction
     * of a subsystem's capabilities.
     */
    public operation(): string {
        let result = 'Facade initializes subsystems:\n';
        result += this.subsystem1.commonFeature();
        result += this.subsystem2.commonFeature();
        result += 'Facade orders subsystems to get Ready:\n';
        result += this.subsystem1.commonFeature();
        result += this.subsystem2.commonFeature();
        result += 'Facade orders subsystems to perform the action:\n';
        result += this.subsystem1.featureN();
        result += this.subsystem2.featureZ();

        return result;
    }

    public featureN(){
        return this.subsystem1.featureN();
    }
    public featureZ(){
        return this.subsystem2.featureZ();
    }
}

/**
 * The Subsystem can accept requests either from the facade or client directly.
 * In any case, to the Subsystem, the Facade is yet another client, and it's not
 * a part of the Subsystem.
 */
class Subsystem1 {
    public commonFeature(): string {
        return 'Subsystem1: Ready!\n';
    }

    // ...

    public featureN(): string {
        return 'Subsystem1: Go!\n';
    }
}

/**
 * Some facades can work with multiple subsystems at the same time.
 */
class Subsystem2 {
    public commonFeature(): string {
        return 'Subsystem2: Get ready!\n';
    }

    // ...

    public featureZ(): string {
        return 'Subsystem2: Fire!';
    }
}

/**
 * The client code works with complex subsystems through a simple interface
 * provided by the Facade. When a facade manages the lifecycle of the subsystem,
 * the client might not even know about the existence of the subsystem. This
 * approach lets you keep the complexity under control.
 */



const facade = new Facade();
//  Now this Facade got access to all the subsystem's features to be used from the facade.
console.log(facade.featureN());
console.log(facade.featureZ());
