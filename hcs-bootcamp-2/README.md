# Simplist Todo App

_hcs-bootcamp-2_

## Presenting the Simplist Todo-list-app-thingy

### Features
In a nutshell, there's three main features (apart from the impeccable design, of course):

1. Complete/uncomplete tasks and hide the completed tasks
2. Easy reordering of todo's by means of handy arrows
3. Persistant todo's, i.e. your tasks are saved locally so they're there every time you open the app

#### Feature 1 - Completing Todo's
Every todo now features a checkbox to the left in the todo. If this is pressed, the todo is moved into the completed-list, which is below the todo-list. If the box is unchecked, the todo is moved back into the original list. The list of completed todos can also be hidden to reduce clutter.

#### Feature 2 - Reordering Todo's
Every todo-item feature handy arrows on the right side. When the up-arrow is pressed, the todo is moved up one position in the list, and when the down-arrow is pressed, the opposite happens. When it's not possible to move the todo up or down, the corresponding arrow is also not shown. It is not possible to move todo's between the different lists with arrows, this must be done by first (un)checking the box.

#### Feature 3 - Persistant Todo's
The whole point of having a todo-list is to remember to do things. Before this feature was implemented, all my todo's just vanished every time i reopened the app, which made me extremely ineffective. Therefore, todo's now are saved to local storage so that whatever happens, your todo's are safe and sound to whenever you need them.

#### Design - Simplicity is Key
The design is not lazy, it's simplistic, i.e. it's a feature, not a bug. Simple layouts are easier on the eye and much easier to navigate. The glaring lack of extra features are in fact also a feature. If you clutter your todo-app with too many features you suddenly have an app that is way to complicated. Remember, the man who chases two rabbits catches none!

Enjoy the app, it is to be found in the `Simplist`-folder, and can be started with `npm start`. Probably a good idea to run `npm i` too. If there's issues, please file an issue here or email `larsankile@college.harvard.edu`.
