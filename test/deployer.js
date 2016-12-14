import { expect } from 'chai';
import deployer from '../dist/deployer';

describe('deployer', function() {
    it('should execute specified command', function(done) {
        deployer({
            command: 'echo test'
        }).then(function(o){
            expect(o.stdout).to.equal('test\n');
            done();
        }).catch(function(err){
            done(err);
        });
    });
});
