# Routing with Ionic

- Ionic looks at navigation like a stack of pages (IonicStackController);
- Going forward pushes a page and going back pops the page;
- Ionic by default caches the page, as Angular destroys the view or page;
* IonicNavController provides methods to interact with IonicStackController, such as push and pop;

# Ionic + Angular Page lifecycles

- Angular page lifecycles -> ngOnInit + ngOnDestroy
- Ionic page lifecycles -> ionViewWillEnter + ionViewDidEnter + ionViewWillLeave + ionViewDidLeave

- Ionic + Angular lifecycles interaction -> ngOnInit ->> ionViewWillEnter ->> ionViewDidEnter ->> ionViewWillLeave ->> ionViewDidLeave ->> ngOnDestroy
* Ionic's lifecycle methods act between the creation and the destruction of pages/elements, so JIT of a DOM changing event