const message = require('./message_pb');

const customer = new message.Customer();

customer.setName('google')
customer.setAddress('1234, gmail')
customer.setEmail('gmail@google.com')

console.log(customer.toObject())