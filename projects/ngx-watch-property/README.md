# Watch Decorator
When a user updates a property, Watch will fire what ever method it's attached to and pass that method the new value of the prop along with the old value. Watch is useful for validating props or handling side effects. Watch decorator does not fire when a component initially loads.

```
  dark = false;

  @watch('dark')
  watchDark(newVal, oldVal) {
    console.log(newVal, oldVal);
  }
```