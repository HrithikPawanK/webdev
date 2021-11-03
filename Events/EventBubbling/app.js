// when a child element trigged, it also triggers the parent elements untill the root
// events bubbles up to the top
// to stop event bubbling we need to use *** stopPropagation();
// in eventListener pass event object then do --> event.stopPropagation();