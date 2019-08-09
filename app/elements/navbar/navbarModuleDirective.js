navbarModule.directive("navbarModuleDirective",
  function () {
    return{
      restrict:"E",
      transclude: true,
      templateUrl: "/elements/navbar/navbar.html"
    }

  })