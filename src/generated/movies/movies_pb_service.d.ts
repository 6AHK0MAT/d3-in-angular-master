// package: greet
// file: src/app/protos/movies.proto

import * as src_app_protos_movies_pb from '../../generated/movies/movies_pb';
import {grpc} from '@improbable-eng/grpc-web';

type MoviesPing = {
  readonly methodName: string;
  readonly service: typeof Movies;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof src_app_protos_movies_pb.EmptyRequest;
  readonly responseType: typeof src_app_protos_movies_pb.PingResponse;
};

type MoviesEcho = {
  readonly methodName: string;
  readonly service: typeof Movies;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof src_app_protos_movies_pb.EchoRequest;
  readonly responseType: typeof src_app_protos_movies_pb.EchoResponse;
};

type MoviesInsert = {
  readonly methodName: string;
  readonly service: typeof Movies;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof src_app_protos_movies_pb.InsertRequest;
  readonly responseType: typeof src_app_protos_movies_pb.InsertResponse;
};

type MoviesUpdate = {
  readonly methodName: string;
  readonly service: typeof Movies;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof src_app_protos_movies_pb.EmptyRequest;
  readonly responseType: typeof src_app_protos_movies_pb.InsertResponse;
};

type MoviesGet = {
  readonly methodName: string;
  readonly service: typeof Movies;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof src_app_protos_movies_pb.GetRequest;
  readonly responseType: typeof src_app_protos_movies_pb.GetResponse;
};

type MoviesGetWithError = {
  readonly methodName: string;
  readonly service: typeof Movies;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof src_app_protos_movies_pb.GetRequest;
  readonly responseType: typeof src_app_protos_movies_pb.GetResponse;
};

type MoviesGetList = {
  readonly methodName: string;
  readonly service: typeof Movies;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof src_app_protos_movies_pb.EmptyRequest;
  readonly responseType: typeof src_app_protos_movies_pb.GetListResponse;
};

type MoviesGetEmpty = {
  readonly methodName: string;
  readonly service: typeof Movies;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof src_app_protos_movies_pb.EmptyRequest;
  readonly responseType: typeof src_app_protos_movies_pb.GetListResponse;
};

type MoviesRaiseException = {
  readonly methodName: string;
  readonly service: typeof Movies;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof src_app_protos_movies_pb.EmptyRequest;
  readonly responseType: typeof src_app_protos_movies_pb.RaiseExceptionResponse;
};

type MoviesRaiseRpcException = {
  readonly methodName: string;
  readonly service: typeof Movies;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof src_app_protos_movies_pb.EmptyRequest;
  readonly responseType: typeof src_app_protos_movies_pb.RaiseExceptionResponse;
};

type MoviesGetWeatherStream = {
  readonly methodName: string;
  readonly service: typeof Movies;
  readonly requestStream: false;
  readonly responseStream: true;
  readonly requestType: typeof src_app_protos_movies_pb.EmptyRequest;
  readonly responseType: typeof src_app_protos_movies_pb.WeatherData;
};

type MoviesGetWeatherStream_New = {
  readonly methodName: string;
  readonly service: typeof Movies;
  readonly requestStream: false;
  readonly responseStream: true;
  readonly requestType: typeof src_app_protos_movies_pb.EmptyRequest;
  readonly responseType: typeof src_app_protos_movies_pb.WeatherData_New;
};

export class Movies {
  static readonly serviceName: string;
  static readonly Ping: MoviesPing;
  static readonly Echo: MoviesEcho;
  static readonly Insert: MoviesInsert;
  static readonly Update: MoviesUpdate;
  static readonly Get: MoviesGet;
  static readonly GetWithError: MoviesGetWithError;
  static readonly GetList: MoviesGetList;
  static readonly GetEmpty: MoviesGetEmpty;
  static readonly RaiseException: MoviesRaiseException;
  static readonly RaiseRpcException: MoviesRaiseRpcException;
  static readonly GetWeatherStream: MoviesGetWeatherStream;
  static readonly GetWeatherStream_New: MoviesGetWeatherStream_New;
}

export type ServiceError = { message: string, code: number; metadata: grpc.Metadata }
export type Status = { details: string, code: number; metadata: grpc.Metadata }

interface UnaryResponse {
  cancel(): void;
}
interface ResponseStream<T> {
  cancel(): void;
  on(type: 'data', handler: (message: T) => void): ResponseStream<T>;
  on(type: 'end', handler: (status?: Status) => void): ResponseStream<T>;
  on(type: 'status', handler: (status: Status) => void): ResponseStream<T>;
}
interface RequestStream<T> {
  write(message: T): RequestStream<T>;
  end(): void;
  cancel(): void;
  on(type: 'end', handler: (status?: Status) => void): RequestStream<T>;
  on(type: 'status', handler: (status: Status) => void): RequestStream<T>;
}
interface BidirectionalStream<ReqT, ResT> {
  write(message: ReqT): BidirectionalStream<ReqT, ResT>;
  end(): void;
  cancel(): void;
  on(type: 'data', handler: (message: ResT) => void): BidirectionalStream<ReqT, ResT>;
  on(type: 'end', handler: (status?: Status) => void): BidirectionalStream<ReqT, ResT>;
  on(type: 'status', handler: (status: Status) => void): BidirectionalStream<ReqT, ResT>;
}

export class MoviesClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  ping(
    requestMessage: src_app_protos_movies_pb.EmptyRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: src_app_protos_movies_pb.PingResponse|null) => void
  ): UnaryResponse;
  ping(
    requestMessage: src_app_protos_movies_pb.EmptyRequest,
    callback: (error: ServiceError|null, responseMessage: src_app_protos_movies_pb.PingResponse|null) => void
  ): UnaryResponse;
  echo(
    requestMessage: src_app_protos_movies_pb.EchoRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: src_app_protos_movies_pb.EchoResponse|null) => void
  ): UnaryResponse;
  echo(
    requestMessage: src_app_protos_movies_pb.EchoRequest,
    callback: (error: ServiceError|null, responseMessage: src_app_protos_movies_pb.EchoResponse|null) => void
  ): UnaryResponse;
  insert(
    requestMessage: src_app_protos_movies_pb.InsertRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: src_app_protos_movies_pb.InsertResponse|null) => void
  ): UnaryResponse;
  insert(
    requestMessage: src_app_protos_movies_pb.InsertRequest,
    callback: (error: ServiceError|null, responseMessage: src_app_protos_movies_pb.InsertResponse|null) => void
  ): UnaryResponse;
  update(
    requestMessage: src_app_protos_movies_pb.EmptyRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: src_app_protos_movies_pb.InsertResponse|null) => void
  ): UnaryResponse;
  update(
    requestMessage: src_app_protos_movies_pb.EmptyRequest,
    callback: (error: ServiceError|null, responseMessage: src_app_protos_movies_pb.InsertResponse|null) => void
  ): UnaryResponse;
  get(
    requestMessage: src_app_protos_movies_pb.GetRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: src_app_protos_movies_pb.GetResponse|null) => void
  ): UnaryResponse;
  get(
    requestMessage: src_app_protos_movies_pb.GetRequest,
    callback: (error: ServiceError|null, responseMessage: src_app_protos_movies_pb.GetResponse|null) => void
  ): UnaryResponse;
  getWithError(
    requestMessage: src_app_protos_movies_pb.GetRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: src_app_protos_movies_pb.GetResponse|null) => void
  ): UnaryResponse;
  getWithError(
    requestMessage: src_app_protos_movies_pb.GetRequest,
    callback: (error: ServiceError|null, responseMessage: src_app_protos_movies_pb.GetResponse|null) => void
  ): UnaryResponse;
  getList(
    requestMessage: src_app_protos_movies_pb.EmptyRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: src_app_protos_movies_pb.GetListResponse|null) => void
  ): UnaryResponse;
  getList(
    requestMessage: src_app_protos_movies_pb.EmptyRequest,
    callback: (error: ServiceError|null, responseMessage: src_app_protos_movies_pb.GetListResponse|null) => void
  ): UnaryResponse;
  getEmpty(
    requestMessage: src_app_protos_movies_pb.EmptyRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: src_app_protos_movies_pb.GetListResponse|null) => void
  ): UnaryResponse;
  getEmpty(
    requestMessage: src_app_protos_movies_pb.EmptyRequest,
    callback: (error: ServiceError|null, responseMessage: src_app_protos_movies_pb.GetListResponse|null) => void
  ): UnaryResponse;
  raiseException(
    requestMessage: src_app_protos_movies_pb.EmptyRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: src_app_protos_movies_pb.RaiseExceptionResponse|null) => void
  ): UnaryResponse;
  raiseException(
    requestMessage: src_app_protos_movies_pb.EmptyRequest,
    callback: (error: ServiceError|null, responseMessage: src_app_protos_movies_pb.RaiseExceptionResponse|null) => void
  ): UnaryResponse;
  raiseRpcException(
    requestMessage: src_app_protos_movies_pb.EmptyRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: src_app_protos_movies_pb.RaiseExceptionResponse|null) => void
  ): UnaryResponse;
  raiseRpcException(
    requestMessage: src_app_protos_movies_pb.EmptyRequest,
    callback: (error: ServiceError|null, responseMessage: src_app_protos_movies_pb.RaiseExceptionResponse|null) => void
  ): UnaryResponse;
  getWeatherStream(requestMessage: src_app_protos_movies_pb.EmptyRequest, metadata?: grpc.Metadata): ResponseStream<src_app_protos_movies_pb.WeatherData>;
  getWeatherStream_New(requestMessage: src_app_protos_movies_pb.EmptyRequest, metadata?: grpc.Metadata): ResponseStream<src_app_protos_movies_pb.WeatherData_New>;
}

