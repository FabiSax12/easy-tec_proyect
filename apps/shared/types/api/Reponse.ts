export interface ApiResponse<T> {
  result: T;
}

export interface ApiResponseWithPagination<T> extends ApiResponse<T> {
  page: number;
  total_pages: number;
}