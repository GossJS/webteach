/*jshint esversion: 6 */
const m =require('mongoose'),
      should = require('should'),
      UserSchema = new m.Schema({
                	"user": { "type": "String" },
      		  		"password": { "type": "String" }
     			 }),
       User = m.model('User', UserSchema);
m.Promise = global.Promise;
m.connect('mongodb://student_account:Qwerty.123@kodaktor.ru/experimental', {}, err=>{if(err)throw err;});
   
describe('#findOne()', ()=> {
  it('respond with one matching record', ()=>
     User.findOne({ name: 'John' }).should.eventually.have.property('_doc')
         .with.property('fname','Resig')
  );
});