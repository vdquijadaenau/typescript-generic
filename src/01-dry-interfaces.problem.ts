/**
 * How can we refactor these to reduce the duplication
 * in the 'data' declaration?
 */

import { Equal, Expect } from "./helpers/type-utils";

interface IData<TData> {
  data: TData;
}

export type UserData = IData<{
  id: string;
  firstName: string;
  lastName: string;
}>;

export type PostData = IData<{
  title: string;
}>;

export type CommentData = IData<{
  comment: string;
}>;

type tests = [
  Expect<
    Equal<
      UserData,
      {
        data: {
          id: string;
          firstName: string;
          lastName: string;
        };
      }
    >
  >,
  Expect<
    Equal<
      PostData,
      {
        data: {
          title: string;
        };
      }
    >
  >,
  Expect<
    Equal<
      CommentData,
      {
        data: {
          comment: string;
        };
      }
    >
  >
];
