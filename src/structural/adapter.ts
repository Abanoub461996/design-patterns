// * Adapter is a structural design pattern that allows objects with incompatible interfaces to collaborate.

// ? You can create an adapter. This is a special object that converts the interface of one object so that another object can understand it.
// ? API data mappers are somehow an example for it. 

/**
 * The Target defines the domain-specific interface used by the client code.
 */
class Target {
    public request(): string {
        return 'Target: The default target\'s behavior.';
    }
}

/**
 * The Adaptee contains some useful behavior, but its interface is incompatible
 * with the existing client code. The Adaptee needs some adaptation before the
 * client code can use it.
 */
class Adaptee {
    public specificRequest(): string {
        return '.eetpadA eht fo roivaheb laicepS';
    }
}

/**
 * The Adapter makes the Adaptee's interface compatible with the Target's
 * interface.
 */
class Adapter extends Target {
    private adaptee: Adaptee;

    constructor(adaptee: Adaptee) {
        super();
        this.adaptee = adaptee;
    }

    public request(): string {
        const result = this.adaptee.specificRequest().split('').reverse().join('');
        return `Adapter: (TRANSLATED) ${result}`;
    }
}


/**
 * The Request Method is now supporting all classes following the Target interface with different output for each class
 */
console.log('Client: I can work just fine with the Target objects:');
const target = new Target();
console.log(target.request());

console.log('');

console.log('Client: The Adaptee class has a weird interface. See, I don\'t understand it:');
const adaptee = new Adaptee();
console.log(`Adaptee: ${adaptee.specificRequest()}`);

console.log('');

console.log('Client: But I can work with it via the Adapter:');
const adapter = new Adapter(adaptee);
console.log(adapter.request());