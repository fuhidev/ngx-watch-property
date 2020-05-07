export const watch = (property: string) =>
  (object, propertyName) => {
    console.log(property);
    object['_' + property] = object[property];
    Object.defineProperty(object, property, {
      get: function () {
        return object['_' + property];
      },
      set: function (val) {
        object[propertyName].apply(null,[ object['_' + property], val]);
        object['_' + property] = val;
      }
    });
  };
