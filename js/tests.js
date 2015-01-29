describe("Parse testing", function(){
  beforeEach(module("authApp"));
  
  beforeEach(inject(function(_$httpBackend_, $rootScope, $controller, $filter) {
    var scope, ctrl, $httpBackend, aorderByFilter;
      $httpBackend = _$httpBackend_;
      $httpBackend.expectGET('http://ws.audioscrobbler.com/2.0/?method=chart.gettoptracks&api_key=85b8c37b1a6be5182a5ed0549c4a7400&format=json');
      orderByFilter = $filter('orderBy');
      scope = $rootScope.$new();
      ctrl = $controller('jsonData', {$scope: scope});
  }));
  it('should do something', function(){
      // do something with the sorted array here
      expect(true).toBe(true);
  });
  
})