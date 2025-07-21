what happended even before a root handler is called? Pipes. Pipes can validate client's input or transform before handling it to root handler.

Access Control is the most critical part of an application. 

provider (service) class with injectable decorator. 
you make sure to declare them in the module. that means i will declare all of the providers that i need in the module, providers array.

then i will inject the providers in the required class constructor.  then the frameworks will take care of wiring up the thngs.

modules takes an object that have properties like imports, exports, providers, controllers.
at first, load the modules. after that all the providers will be instantiated. and stored in IoC container. 

i can inject object both in controller class and service class.
dependency tree of all modules.