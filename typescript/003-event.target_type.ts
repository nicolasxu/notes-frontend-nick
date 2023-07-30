function handleScroll(e: Event) {
  // (e.target as HTMLElement).scrollTop;
  setScrollTop((e.target as HTMLElement).scrollTop)

  // if you use setScrollTop(e.target.scrollTop), you will get
  // Property 'scrollTop' does not exist on type 'EventTarget'
}