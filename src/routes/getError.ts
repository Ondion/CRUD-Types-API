import { ErrorRequestHandler } from 'express';
import { ZodError } from 'zod';

export enum ErrorTypes {
  EntityNotFound = 'EntityNotFound',
  InvalidMongoId = 'InvalidMongoId',
}

type ErrorResponseObject = { 
  message: string;
  httpStatus: number
};

export type ErrorCatalog = {
  [key in ErrorTypes]: ErrorResponseObject
};

export const errorCatalog: ErrorCatalog = {
  EntityNotFound: {
    message: 'Object not found',
    httpStatus: 404,
  },
  InvalidMongoId: {
    message: 'Id must have 24 hexadecimal characters',
    httpStatus: 400,
  },
};

const errorHandler: ErrorRequestHandler = ( 
  error: Error | ZodError, 
  _request,
  response,
  _next,
) => {
  if (error instanceof ZodError) {
    return response.status(400).json({ message: error.issues });
  }
  const messageAsErrorType = error.message as keyof typeof ErrorTypes;
  const mappedError = errorCatalog[messageAsErrorType];
  if (mappedError) {
    const { httpStatus, message } = mappedError;
    return response.status(httpStatus).json({ error: message });
  }
  return response.status(500).json({ message: error.message });
};

export default errorHandler;
