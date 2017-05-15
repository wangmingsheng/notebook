
var assert = require("assert")

describe('Array', function(){
  describe('indexOf()', function(){
    it('should return -1 when the value is not present', function(){
      assert.equal(-1, [1,2,3].indexOf(5));
      assert.equal(-1, [1,2,3].indexOf(0));
    })
    it('should return number(>=0) when the value is not present', function(){
      assert.equal(0, [1,2,3].indexOf(1));
      assert.equal(1, [1,2,3].indexOf(2));
      assert.equal(2, [1,2,3].indexOf(3));
    })
  })
})

function User() {

}
User.prototype.save = function () {

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({success: true});
    }, 3000);
  });

}

describe('User', function(){
  describe('#save()', function(){
    it('should save without error', function(){
      var user = new User('Luna');
      return user.save();
    })
  })
})