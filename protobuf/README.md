## Getting started
### Introduction
Protocol buffers are used to serialize data just like `json` but they are platform neutral, smaller and faster.

### Structure
define a message type in `.proto` file as shown below
```
syntax = "proto3"
message Customer {
  string name = 1;
  string email = 2;
}
```
### Example
This example demonstrated how to populate, serialize, and retrieve `Customer` protocol buffer messages

Run protoc compiler `protoc --js_out=import_style=commonjs,binary:. protobuf/message.proto` to generate javascript(node js) code.