# mock-evax

## Published at  https://hazem-atya.github.io/mock-evax/register 

## Why MVVM?
* The MVVM pattern presents a better separation of concerns by adding view models to the mix. The view model translates the data of the model layer into something the view layer can use. The controller is no longer responsible for this task.

* Improved Testability:
By migrating data manipulation to the view model, testing becomes much easier. Testing view models is easy. Because a view model doesn’t have a reference to the object it is owned by, it easy to write unit tests for a view model.

* Another, and often overlooked, benefit of MVVM is improved testability of view controllers. The view controller no longer depends on the model layer, which makes them easier to test.

## Why Angular?
Angular framework is embedded with original MVC but it’s more of an MVVM software architectural setup. Angular does not ask developers to split an application into different MVC components and build a code that could unite them.
Its framework uses the MVVM(Model-View-ViewModel) architecture better than an MVC (Model-View-Controller) one. The MVVM model supports two-way data binding between View and ViewModel. This allows the automatic propagation to change within ViewModel’s state to the view. Typically, ViewModel uses the observer model to inform changes to the ViewModel model to model.
