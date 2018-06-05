const PATH = __dirname + '/messages.proto';
const grpc = require('grpc')
const { employees } = require('./employee')

const serviceDef = grpc.load(PATH)
const PORT = 5000

const insecureCred = grpc.ServerCredentials.createInsecure();
const server = new grpc.Server();

const getByStaffNumber = (call, callback) => {
  const staffNumber  = call.request.staffNumber;
  for (let i = 0; i<employees.length; i++){
    if(employees[i].staffNumber === staffNumber){
      callback(null, {employee: employees[i]});
      return;
    }
  }
  callback('error')
}
const getEmployees = call => {}
const createEmployees = call => {}

// load message dynamically
server.addProtoService(serviceDef.employee.EmployeeService.service, {
  getByStaffNumber,
  getEmployees,
  createEmployees
});
server.bind(`0.0.0.0:${PORT}`, insecureCred);
console.log(`starting on: ${PORT}`)
server.start();

