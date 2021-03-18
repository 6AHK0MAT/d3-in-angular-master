// package: greet
// file: src/app/protos/movies.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";

export class EmptyRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EmptyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: EmptyRequest): EmptyRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: EmptyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EmptyRequest;
  static deserializeBinaryFromReader(message: EmptyRequest, reader: jspb.BinaryReader): EmptyRequest;
}

export namespace EmptyRequest {
  export type AsObject = {
  }
}

export class EmptyResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EmptyResponse.AsObject;
  static toObject(includeInstance: boolean, msg: EmptyResponse): EmptyResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: EmptyResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EmptyResponse;
  static deserializeBinaryFromReader(message: EmptyResponse, reader: jspb.BinaryReader): EmptyResponse;
}

export namespace EmptyResponse {
  export type AsObject = {
  }
}

export class WeatherData_New extends jspb.Message {
  hasDatetimestampNew(): boolean;
  clearDatetimestampNew(): void;
  getDatetimestampNew(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setDatetimestampNew(value?: google_protobuf_timestamp_pb.Timestamp): void;

  getTemperaturecNew(): number;
  setTemperaturecNew(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WeatherData_New.AsObject;
  static toObject(includeInstance: boolean, msg: WeatherData_New): WeatherData_New.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: WeatherData_New, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WeatherData_New;
  static deserializeBinaryFromReader(message: WeatherData_New, reader: jspb.BinaryReader): WeatherData_New;
}

export namespace WeatherData_New {
  export type AsObject = {
    datetimestampNew?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    temperaturecNew: number,
  }
}

export class Error extends jspb.Message {
  getErrorText(): string;
  setErrorText(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Error.AsObject;
  static toObject(includeInstance: boolean, msg: Error): Error.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Error, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Error;
  static deserializeBinaryFromReader(message: Error, reader: jspb.BinaryReader): Error;
}

export namespace Error {
  export type AsObject = {
    errorText: string,
  }
}

export class MovieInfo extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getNameval(): number;
  setNameval(value: number): void;

  getDescription(): string;
  setDescription(value: string): void;

  getIsForeign(): boolean;
  setIsForeign(value: boolean): void;

  getYear(): number;
  setYear(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MovieInfo.AsObject;
  static toObject(includeInstance: boolean, msg: MovieInfo): MovieInfo.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MovieInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MovieInfo;
  static deserializeBinaryFromReader(message: MovieInfo, reader: jspb.BinaryReader): MovieInfo;
}

export namespace MovieInfo {
  export type AsObject = {
    name: string,
    nameval: number,
    description: string,
    isForeign: boolean,
    year: number,
  }
}

export class PingResponse extends jspb.Message {
  getResponse(): string;
  setResponse(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PingResponse.AsObject;
  static toObject(includeInstance: boolean, msg: PingResponse): PingResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PingResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PingResponse;
  static deserializeBinaryFromReader(message: PingResponse, reader: jspb.BinaryReader): PingResponse;
}

export namespace PingResponse {
  export type AsObject = {
    response: string,
  }
}

export class EchoRequest extends jspb.Message {
  getValue(): string;
  setValue(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EchoRequest.AsObject;
  static toObject(includeInstance: boolean, msg: EchoRequest): EchoRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: EchoRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EchoRequest;
  static deserializeBinaryFromReader(message: EchoRequest, reader: jspb.BinaryReader): EchoRequest;
}

export namespace EchoRequest {
  export type AsObject = {
    value: string,
  }
}

export class EchoResponse extends jspb.Message {
  getResponse(): string;
  setResponse(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EchoResponse.AsObject;
  static toObject(includeInstance: boolean, msg: EchoResponse): EchoResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: EchoResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EchoResponse;
  static deserializeBinaryFromReader(message: EchoResponse, reader: jspb.BinaryReader): EchoResponse;
}

export namespace EchoResponse {
  export type AsObject = {
    response: string,
  }
}

export class InsertRequest extends jspb.Message {
  hasMovie(): boolean;
  clearMovie(): void;
  getMovie(): MovieInfo | undefined;
  setMovie(value?: MovieInfo): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): InsertRequest.AsObject;
  static toObject(includeInstance: boolean, msg: InsertRequest): InsertRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: InsertRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): InsertRequest;
  static deserializeBinaryFromReader(message: InsertRequest, reader: jspb.BinaryReader): InsertRequest;
}

export namespace InsertRequest {
  export type AsObject = {
    movie?: MovieInfo.AsObject,
  }
}

export class InsertResponse extends jspb.Message {
  hasData(): boolean;
  clearData(): void;
  getData(): InsertResponse.InsertResponseData | undefined;
  setData(value?: InsertResponse.InsertResponseData): void;

  hasError(): boolean;
  clearError(): void;
  getError(): Error | undefined;
  setError(value?: Error): void;

  getResultCase(): InsertResponse.ResultCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): InsertResponse.AsObject;
  static toObject(includeInstance: boolean, msg: InsertResponse): InsertResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: InsertResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): InsertResponse;
  static deserializeBinaryFromReader(message: InsertResponse, reader: jspb.BinaryReader): InsertResponse;
}

export namespace InsertResponse {
  export type AsObject = {
    data?: InsertResponse.InsertResponseData.AsObject,
    error?: Error.AsObject,
  }

  export class InsertResponseData extends jspb.Message {
    getSuccess(): boolean;
    setSuccess(value: boolean): void;

    getId(): number;
    setId(value: number): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): InsertResponseData.AsObject;
    static toObject(includeInstance: boolean, msg: InsertResponseData): InsertResponseData.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: InsertResponseData, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): InsertResponseData;
    static deserializeBinaryFromReader(message: InsertResponseData, reader: jspb.BinaryReader): InsertResponseData;
  }

  export namespace InsertResponseData {
    export type AsObject = {
      success: boolean,
      id: number,
    }
  }

  export enum ResultCase {
    RESULT_NOT_SET = 0,
    DATA = 1,
    ERROR = 2,
  }
}

export class GetRequest extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetRequest): GetRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetRequest;
  static deserializeBinaryFromReader(message: GetRequest, reader: jspb.BinaryReader): GetRequest;
}

export namespace GetRequest {
  export type AsObject = {
    id: number,
  }
}

export class GetResponse extends jspb.Message {
  hasData(): boolean;
  clearData(): void;
  getData(): GetResponse.GetResponseData | undefined;
  setData(value?: GetResponse.GetResponseData): void;

  hasError(): boolean;
  clearError(): void;
  getError(): Error | undefined;
  setError(value?: Error): void;

  getResultCase(): GetResponse.ResultCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetResponse): GetResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetResponse;
  static deserializeBinaryFromReader(message: GetResponse, reader: jspb.BinaryReader): GetResponse;
}

export namespace GetResponse {
  export type AsObject = {
    data?: GetResponse.GetResponseData.AsObject,
    error?: Error.AsObject,
  }

  export class GetResponseData extends jspb.Message {
    getSuccess(): boolean;
    setSuccess(value: boolean): void;

    hasMovie(): boolean;
    clearMovie(): void;
    getMovie(): MovieInfo | undefined;
    setMovie(value?: MovieInfo): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetResponseData.AsObject;
    static toObject(includeInstance: boolean, msg: GetResponseData): GetResponseData.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetResponseData, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetResponseData;
    static deserializeBinaryFromReader(message: GetResponseData, reader: jspb.BinaryReader): GetResponseData;
  }

  export namespace GetResponseData {
    export type AsObject = {
      success: boolean,
      movie?: MovieInfo.AsObject,
    }
  }

  export enum ResultCase {
    RESULT_NOT_SET = 0,
    DATA = 1,
    ERROR = 2,
  }
}

export class GetListResponse extends jspb.Message {
  hasData(): boolean;
  clearData(): void;
  getData(): GetListResponse.GetListResponseData | undefined;
  setData(value?: GetListResponse.GetListResponseData): void;

  hasError(): boolean;
  clearError(): void;
  getError(): Error | undefined;
  setError(value?: Error): void;

  getResultCase(): GetListResponse.ResultCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetListResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetListResponse): GetListResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetListResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetListResponse;
  static deserializeBinaryFromReader(message: GetListResponse, reader: jspb.BinaryReader): GetListResponse;
}

export namespace GetListResponse {
  export type AsObject = {
    data?: GetListResponse.GetListResponseData.AsObject,
    error?: Error.AsObject,
  }

  export class GetListResponseData extends jspb.Message {
    getSuccess(): boolean;
    setSuccess(value: boolean): void;

    clearMoviesList(): void;
    getMoviesList(): Array<MovieInfo>;
    setMoviesList(value: Array<MovieInfo>): void;
    addMovies(value?: MovieInfo, index?: number): MovieInfo;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetListResponseData.AsObject;
    static toObject(includeInstance: boolean, msg: GetListResponseData): GetListResponseData.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetListResponseData, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetListResponseData;
    static deserializeBinaryFromReader(message: GetListResponseData, reader: jspb.BinaryReader): GetListResponseData;
  }

  export namespace GetListResponseData {
    export type AsObject = {
      success: boolean,
      moviesList: Array<MovieInfo.AsObject>,
    }
  }

  export enum ResultCase {
    RESULT_NOT_SET = 0,
    DATA = 1,
    ERROR = 2,
  }
}

export class RaiseExceptionResponse extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RaiseExceptionResponse.AsObject;
  static toObject(includeInstance: boolean, msg: RaiseExceptionResponse): RaiseExceptionResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RaiseExceptionResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RaiseExceptionResponse;
  static deserializeBinaryFromReader(message: RaiseExceptionResponse, reader: jspb.BinaryReader): RaiseExceptionResponse;
}

export namespace RaiseExceptionResponse {
  export type AsObject = {
    id: number,
  }
}

export class WeatherData extends jspb.Message {
  hasDatetimestamp(): boolean;
  clearDatetimestamp(): void;
  getDatetimestamp(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setDatetimestamp(value?: google_protobuf_timestamp_pb.Timestamp): void;

  getTemperaturec(): number;
  setTemperaturec(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WeatherData.AsObject;
  static toObject(includeInstance: boolean, msg: WeatherData): WeatherData.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: WeatherData, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WeatherData;
  static deserializeBinaryFromReader(message: WeatherData, reader: jspb.BinaryReader): WeatherData;
}

export namespace WeatherData {
  export type AsObject = {
    datetimestamp?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    temperaturec: number,
  }
}

