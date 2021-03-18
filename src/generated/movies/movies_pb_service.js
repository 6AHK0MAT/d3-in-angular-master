// package: greet
// file: src/app/protos/movies.proto

var src_app_protos_movies_pb = require("../../generated/movies/movies_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var Movies = (function () {
  function Movies() {}
  Movies.serviceName = "greet.Movies";
  return Movies;
}());

Movies.Ping = {
  methodName: "Ping",
  service: Movies,
  requestStream: false,
  responseStream: false,
  requestType: src_app_protos_movies_pb.EmptyRequest,
  responseType: src_app_protos_movies_pb.PingResponse
};

Movies.Echo = {
  methodName: "Echo",
  service: Movies,
  requestStream: false,
  responseStream: false,
  requestType: src_app_protos_movies_pb.EchoRequest,
  responseType: src_app_protos_movies_pb.EchoResponse
};

Movies.Insert = {
  methodName: "Insert",
  service: Movies,
  requestStream: false,
  responseStream: false,
  requestType: src_app_protos_movies_pb.InsertRequest,
  responseType: src_app_protos_movies_pb.InsertResponse
};

Movies.Update = {
  methodName: "Update",
  service: Movies,
  requestStream: false,
  responseStream: false,
  requestType: src_app_protos_movies_pb.EmptyRequest,
  responseType: src_app_protos_movies_pb.InsertResponse
};

Movies.Get = {
  methodName: "Get",
  service: Movies,
  requestStream: false,
  responseStream: false,
  requestType: src_app_protos_movies_pb.GetRequest,
  responseType: src_app_protos_movies_pb.GetResponse
};

Movies.GetWithError = {
  methodName: "GetWithError",
  service: Movies,
  requestStream: false,
  responseStream: false,
  requestType: src_app_protos_movies_pb.GetRequest,
  responseType: src_app_protos_movies_pb.GetResponse
};

Movies.GetList = {
  methodName: "GetList",
  service: Movies,
  requestStream: false,
  responseStream: false,
  requestType: src_app_protos_movies_pb.EmptyRequest,
  responseType: src_app_protos_movies_pb.GetListResponse
};

Movies.GetEmpty = {
  methodName: "GetEmpty",
  service: Movies,
  requestStream: false,
  responseStream: false,
  requestType: src_app_protos_movies_pb.EmptyRequest,
  responseType: src_app_protos_movies_pb.GetListResponse
};

Movies.RaiseException = {
  methodName: "RaiseException",
  service: Movies,
  requestStream: false,
  responseStream: false,
  requestType: src_app_protos_movies_pb.EmptyRequest,
  responseType: src_app_protos_movies_pb.RaiseExceptionResponse
};

Movies.RaiseRpcException = {
  methodName: "RaiseRpcException",
  service: Movies,
  requestStream: false,
  responseStream: false,
  requestType: src_app_protos_movies_pb.EmptyRequest,
  responseType: src_app_protos_movies_pb.RaiseExceptionResponse
};

Movies.GetWeatherStream = {
  methodName: "GetWeatherStream",
  service: Movies,
  requestStream: false,
  responseStream: true,
  requestType: src_app_protos_movies_pb.EmptyRequest,
  responseType: src_app_protos_movies_pb.WeatherData
};

Movies.GetWeatherStream_New = {
  methodName: "GetWeatherStream_New",
  service: Movies,
  requestStream: false,
  responseStream: true,
  requestType: src_app_protos_movies_pb.EmptyRequest,
  responseType: src_app_protos_movies_pb.WeatherData_New
};

exports.Movies = Movies;

function MoviesClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

MoviesClient.prototype.ping = function ping(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Movies.Ping, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

MoviesClient.prototype.echo = function echo(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Movies.Echo, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

MoviesClient.prototype.insert = function insert(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Movies.Insert, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

MoviesClient.prototype.update = function update(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Movies.Update, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

MoviesClient.prototype.get = function get(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Movies.Get, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

MoviesClient.prototype.getWithError = function getWithError(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Movies.GetWithError, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

MoviesClient.prototype.getList = function getList(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Movies.GetList, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

MoviesClient.prototype.getEmpty = function getEmpty(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Movies.GetEmpty, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

MoviesClient.prototype.raiseException = function raiseException(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Movies.RaiseException, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

MoviesClient.prototype.raiseRpcException = function raiseRpcException(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(Movies.RaiseRpcException, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

MoviesClient.prototype.getWeatherStream = function getWeatherStream(requestMessage, metadata) {
  var listeners = {
    data: [],
    end: [],
    status: []
  };
  var client = grpc.invoke(Movies.GetWeatherStream, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onMessage: function (responseMessage) {
      listeners.data.forEach(function (handler) {
        handler(responseMessage);
      });
    },
    onEnd: function (status, statusMessage, trailers) {
      listeners.status.forEach(function (handler) {
        handler({ code: status, details: statusMessage, metadata: trailers });
      });
      listeners.end.forEach(function (handler) {
        handler({ code: status, details: statusMessage, metadata: trailers });
      });
      listeners = null;
    }
  });
  return {
    on: function (type, handler) {
      listeners[type].push(handler);
      return this;
    },
    cancel: function () {
      listeners = null;
      client.close();
    }
  };
};

MoviesClient.prototype.getWeatherStream_New = function getWeatherStream_New(requestMessage, metadata) {
  var listeners = {
    data: [],
    end: [],
    status: []
  };
  var client = grpc.invoke(Movies.GetWeatherStream_New, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onMessage: function (responseMessage) {
      listeners.data.forEach(function (handler) {
        handler(responseMessage);
      });
    },
    onEnd: function (status, statusMessage, trailers) {
      listeners.status.forEach(function (handler) {
        handler({ code: status, details: statusMessage, metadata: trailers });
      });
      listeners.end.forEach(function (handler) {
        handler({ code: status, details: statusMessage, metadata: trailers });
      });
      listeners = null;
    }
  });
  return {
    on: function (type, handler) {
      listeners[type].push(handler);
      return this;
    },
    cancel: function () {
      listeners = null;
      client.close();
    }
  };
};

exports.MoviesClient = MoviesClient;

