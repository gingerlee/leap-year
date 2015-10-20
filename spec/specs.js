describe('triangleCheck', function() {
  it("is false for a triangle that has one side the same or larger than the sum of the other two", function() {
    expect(triangleCheck([2,2,8])).to.eql(false);
  });

});
