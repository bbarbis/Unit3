QUnit.module('alap', function() {
    //létezik-e?
      QUnit.test('utolsoSzamjegy fg létezik-e?', function(assert) {
        assert.ok(utolsoSzamjegy, "Nincs utolsoSzamjegy nevű függvény.");
      });
      //függvény-e?
      QUnit.test('utolsoSzamjegy fg létezik-e?', function(assert) {
        assert.ok(typeof utolsoSzamjegy === "function", 
         "Az  utolsoSzamjegy nem függvény.");
      });
  
      QUnit.test('n = 125-re jól működik', function(assert) {
        assert.equal(utolsoSzamjegy(125), "utolsoSzamjegy");
      });
  
      QUnit.test('n = -305-re jól működik', function(assert) {
        assert.equal(utolsoSzamjegy(-305), "utolsoSzamjegy");
      });
  
      QUnit.test('n = 555-re jól működik', function(assert) {
        assert.equal(utolsoSzamjegy(555), "utolsoSzamjegy");
      });
  
      QUnit.test('n = 1505-re jól működik', function(assert) {
        assert.equal(utolsoSzamjegy(1505), -7);
      });
  
      QUnit.test('n = -150-re jól működik', function(assert) {
        assert.equal(utolsoSzamjegy(-150), "utolsoSzamjegy");
      });  
    });
    
    