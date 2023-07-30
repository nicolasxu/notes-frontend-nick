


// The event type is different depending on if you use react onKeydown,
// or document.body.addEventListener.


/* if in React */
// KeyboardEvent is from react, don't use the same name one from global this.
import React, {KeyboardEvent} from 'react';

const Logger = () => {
  // `KeyboardEvent` provides properties
  // and methods that can be derived
  // from a keyboard event:
  const log = (e: KeyboardEvent): void => {
    console.log(e.key);
  }

  return (
    <input
      type="text"
      onKeyUp={log}
      defaultValue="Hey!" />
  );
}




/* if in javascript */
// KeyboardEvent here is from global space
addEventListener(type: "keydown", listener: (ev: KeyboardEvent) => any, useCapture?: boolean): void;
