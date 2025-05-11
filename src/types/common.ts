import { PAGINATION_ORDER } from "../enums/common.ts";

export type CommonResponse<T> = {
  status: boolean;
  message: string;
  statusCode: number;
  data: T;
};

export type CursorBasedResponse<T> = {
  status: boolean;
  statusCode: number;
  message: string;
  data: T;
  nextCursor: number;
  hasNext: boolean;
};

export type PaginationDto = {
  cursor?: number;
  limit?: number;
  search?: string;
  order?: PAGINATION_ORDER;
};
