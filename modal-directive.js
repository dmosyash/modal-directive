(function () {
    'use strict';
    var MODULE_NAME = 'ngModal';
    var angular;

    // Check for CommonJS support
    if (typeof module === 'object' && module.exports) {
        angular = require('angular');
        module.exports = MODULE_NAME;
    } else {
        angular = window.angular;
    }
    angular.module(MODULE_NAME, []).directive('ngModal', function () {
        return {
            template: '<div class="modal fade" tabindex="-1">' + 
                '<div class="modal-dialog {{size}}" >' + 
                    '<div class="modal-content">' + 
                    '<div class="modal-header">' + 
                        '<button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>' + 
                        '<h4 class="modal-title">{{ title }}</h4>' + 
                    '</div>' + 
                    '<div class="modal-body" ng-transclude></div>' + 
                    '</div>' + 
                '</div>' + 
                '</div>',
            restrict: 'EA',
            transclude: true,
            replace:true,
            scope:false,
            link: function postLink(scope, element, attrs) {
                scope.title = attrs.title;
                scope.size = attrs.size;
                scope.$watch(attrs.visible, function(value){
                if(value === true) {
                    $(element).modal('show');
                }
                else {
                    $(element).modal('hide');
                }
                });

                $(element).on('hidden.bs.modal', function(){
                scope.$apply(function(){
                    scope.$parent[attrs.visible] = false;
                });
                });
            }
        };
    });
})();

     
