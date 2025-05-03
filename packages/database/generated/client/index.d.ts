
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Major
 * 
 */
export type Major = $Result.DefaultSelection<Prisma.$MajorPayload>
/**
 * Model Role
 * 
 */
export type Role = $Result.DefaultSelection<Prisma.$RolePayload>
/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Period
 * 
 */
export type Period = $Result.DefaultSelection<Prisma.$PeriodPayload>
/**
 * Model UserPeriod
 * 
 */
export type UserPeriod = $Result.DefaultSelection<Prisma.$UserPeriodPayload>
/**
 * Model Teacher
 * 
 */
export type Teacher = $Result.DefaultSelection<Prisma.$TeacherPayload>
/**
 * Model Course
 * 
 */
export type Course = $Result.DefaultSelection<Prisma.$CoursePayload>
/**
 * Model TaskState
 * 
 */
export type TaskState = $Result.DefaultSelection<Prisma.$TaskStatePayload>
/**
 * Model Task
 * 
 */
export type Task = $Result.DefaultSelection<Prisma.$TaskPayload>
/**
 * Model Deliverable
 * 
 */
export type Deliverable = $Result.DefaultSelection<Prisma.$DeliverablePayload>
/**
 * Model TutoringPost
 * 
 */
export type TutoringPost = $Result.DefaultSelection<Prisma.$TutoringPostPayload>
/**
 * Model Notification
 * 
 */
export type Notification = $Result.DefaultSelection<Prisma.$NotificationPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const PeriodType: {
  S: 'S',
  V: 'V'
};

export type PeriodType = (typeof PeriodType)[keyof typeof PeriodType]


export const CourseState: {
  PENDING: 'PENDING',
  COURSING: 'COURSING',
  FINISHED: 'FINISHED'
};

export type CourseState = (typeof CourseState)[keyof typeof CourseState]

}

export type PeriodType = $Enums.PeriodType

export const PeriodType: typeof $Enums.PeriodType

export type CourseState = $Enums.CourseState

export const CourseState: typeof $Enums.CourseState

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Majors
 * const majors = await prisma.major.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Majors
   * const majors = await prisma.major.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.major`: Exposes CRUD operations for the **Major** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Majors
    * const majors = await prisma.major.findMany()
    * ```
    */
  get major(): Prisma.MajorDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.role`: Exposes CRUD operations for the **Role** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Roles
    * const roles = await prisma.role.findMany()
    * ```
    */
  get role(): Prisma.RoleDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.period`: Exposes CRUD operations for the **Period** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Periods
    * const periods = await prisma.period.findMany()
    * ```
    */
  get period(): Prisma.PeriodDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userPeriod`: Exposes CRUD operations for the **UserPeriod** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserPeriods
    * const userPeriods = await prisma.userPeriod.findMany()
    * ```
    */
  get userPeriod(): Prisma.UserPeriodDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.teacher`: Exposes CRUD operations for the **Teacher** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Teachers
    * const teachers = await prisma.teacher.findMany()
    * ```
    */
  get teacher(): Prisma.TeacherDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.course`: Exposes CRUD operations for the **Course** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Courses
    * const courses = await prisma.course.findMany()
    * ```
    */
  get course(): Prisma.CourseDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.taskState`: Exposes CRUD operations for the **TaskState** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TaskStates
    * const taskStates = await prisma.taskState.findMany()
    * ```
    */
  get taskState(): Prisma.TaskStateDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.task`: Exposes CRUD operations for the **Task** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tasks
    * const tasks = await prisma.task.findMany()
    * ```
    */
  get task(): Prisma.TaskDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.deliverable`: Exposes CRUD operations for the **Deliverable** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Deliverables
    * const deliverables = await prisma.deliverable.findMany()
    * ```
    */
  get deliverable(): Prisma.DeliverableDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tutoringPost`: Exposes CRUD operations for the **TutoringPost** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TutoringPosts
    * const tutoringPosts = await prisma.tutoringPost.findMany()
    * ```
    */
  get tutoringPost(): Prisma.TutoringPostDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.notification`: Exposes CRUD operations for the **Notification** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Notifications
    * const notifications = await prisma.notification.findMany()
    * ```
    */
  get notification(): Prisma.NotificationDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.7.0
   * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Major: 'Major',
    Role: 'Role',
    User: 'User',
    Period: 'Period',
    UserPeriod: 'UserPeriod',
    Teacher: 'Teacher',
    Course: 'Course',
    TaskState: 'TaskState',
    Task: 'Task',
    Deliverable: 'Deliverable',
    TutoringPost: 'TutoringPost',
    Notification: 'Notification'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "major" | "role" | "user" | "period" | "userPeriod" | "teacher" | "course" | "taskState" | "task" | "deliverable" | "tutoringPost" | "notification"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Major: {
        payload: Prisma.$MajorPayload<ExtArgs>
        fields: Prisma.MajorFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MajorFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MajorPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MajorFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MajorPayload>
          }
          findFirst: {
            args: Prisma.MajorFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MajorPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MajorFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MajorPayload>
          }
          findMany: {
            args: Prisma.MajorFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MajorPayload>[]
          }
          create: {
            args: Prisma.MajorCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MajorPayload>
          }
          createMany: {
            args: Prisma.MajorCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MajorCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MajorPayload>[]
          }
          delete: {
            args: Prisma.MajorDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MajorPayload>
          }
          update: {
            args: Prisma.MajorUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MajorPayload>
          }
          deleteMany: {
            args: Prisma.MajorDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MajorUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MajorUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MajorPayload>[]
          }
          upsert: {
            args: Prisma.MajorUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MajorPayload>
          }
          aggregate: {
            args: Prisma.MajorAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMajor>
          }
          groupBy: {
            args: Prisma.MajorGroupByArgs<ExtArgs>
            result: $Utils.Optional<MajorGroupByOutputType>[]
          }
          count: {
            args: Prisma.MajorCountArgs<ExtArgs>
            result: $Utils.Optional<MajorCountAggregateOutputType> | number
          }
        }
      }
      Role: {
        payload: Prisma.$RolePayload<ExtArgs>
        fields: Prisma.RoleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RoleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RoleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          findFirst: {
            args: Prisma.RoleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RoleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          findMany: {
            args: Prisma.RoleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>[]
          }
          create: {
            args: Prisma.RoleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          createMany: {
            args: Prisma.RoleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RoleCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>[]
          }
          delete: {
            args: Prisma.RoleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          update: {
            args: Prisma.RoleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          deleteMany: {
            args: Prisma.RoleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RoleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RoleUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>[]
          }
          upsert: {
            args: Prisma.RoleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          aggregate: {
            args: Prisma.RoleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRole>
          }
          groupBy: {
            args: Prisma.RoleGroupByArgs<ExtArgs>
            result: $Utils.Optional<RoleGroupByOutputType>[]
          }
          count: {
            args: Prisma.RoleCountArgs<ExtArgs>
            result: $Utils.Optional<RoleCountAggregateOutputType> | number
          }
        }
      }
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Period: {
        payload: Prisma.$PeriodPayload<ExtArgs>
        fields: Prisma.PeriodFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PeriodFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PeriodPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PeriodFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PeriodPayload>
          }
          findFirst: {
            args: Prisma.PeriodFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PeriodPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PeriodFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PeriodPayload>
          }
          findMany: {
            args: Prisma.PeriodFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PeriodPayload>[]
          }
          create: {
            args: Prisma.PeriodCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PeriodPayload>
          }
          createMany: {
            args: Prisma.PeriodCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PeriodCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PeriodPayload>[]
          }
          delete: {
            args: Prisma.PeriodDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PeriodPayload>
          }
          update: {
            args: Prisma.PeriodUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PeriodPayload>
          }
          deleteMany: {
            args: Prisma.PeriodDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PeriodUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PeriodUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PeriodPayload>[]
          }
          upsert: {
            args: Prisma.PeriodUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PeriodPayload>
          }
          aggregate: {
            args: Prisma.PeriodAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePeriod>
          }
          groupBy: {
            args: Prisma.PeriodGroupByArgs<ExtArgs>
            result: $Utils.Optional<PeriodGroupByOutputType>[]
          }
          count: {
            args: Prisma.PeriodCountArgs<ExtArgs>
            result: $Utils.Optional<PeriodCountAggregateOutputType> | number
          }
        }
      }
      UserPeriod: {
        payload: Prisma.$UserPeriodPayload<ExtArgs>
        fields: Prisma.UserPeriodFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserPeriodFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPeriodPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserPeriodFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPeriodPayload>
          }
          findFirst: {
            args: Prisma.UserPeriodFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPeriodPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserPeriodFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPeriodPayload>
          }
          findMany: {
            args: Prisma.UserPeriodFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPeriodPayload>[]
          }
          create: {
            args: Prisma.UserPeriodCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPeriodPayload>
          }
          createMany: {
            args: Prisma.UserPeriodCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserPeriodCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPeriodPayload>[]
          }
          delete: {
            args: Prisma.UserPeriodDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPeriodPayload>
          }
          update: {
            args: Prisma.UserPeriodUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPeriodPayload>
          }
          deleteMany: {
            args: Prisma.UserPeriodDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserPeriodUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserPeriodUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPeriodPayload>[]
          }
          upsert: {
            args: Prisma.UserPeriodUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPeriodPayload>
          }
          aggregate: {
            args: Prisma.UserPeriodAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserPeriod>
          }
          groupBy: {
            args: Prisma.UserPeriodGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserPeriodGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserPeriodCountArgs<ExtArgs>
            result: $Utils.Optional<UserPeriodCountAggregateOutputType> | number
          }
        }
      }
      Teacher: {
        payload: Prisma.$TeacherPayload<ExtArgs>
        fields: Prisma.TeacherFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TeacherFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeacherPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TeacherFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeacherPayload>
          }
          findFirst: {
            args: Prisma.TeacherFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeacherPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TeacherFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeacherPayload>
          }
          findMany: {
            args: Prisma.TeacherFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeacherPayload>[]
          }
          create: {
            args: Prisma.TeacherCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeacherPayload>
          }
          createMany: {
            args: Prisma.TeacherCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TeacherCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeacherPayload>[]
          }
          delete: {
            args: Prisma.TeacherDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeacherPayload>
          }
          update: {
            args: Prisma.TeacherUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeacherPayload>
          }
          deleteMany: {
            args: Prisma.TeacherDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TeacherUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TeacherUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeacherPayload>[]
          }
          upsert: {
            args: Prisma.TeacherUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeacherPayload>
          }
          aggregate: {
            args: Prisma.TeacherAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTeacher>
          }
          groupBy: {
            args: Prisma.TeacherGroupByArgs<ExtArgs>
            result: $Utils.Optional<TeacherGroupByOutputType>[]
          }
          count: {
            args: Prisma.TeacherCountArgs<ExtArgs>
            result: $Utils.Optional<TeacherCountAggregateOutputType> | number
          }
        }
      }
      Course: {
        payload: Prisma.$CoursePayload<ExtArgs>
        fields: Prisma.CourseFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CourseFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CourseFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>
          }
          findFirst: {
            args: Prisma.CourseFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CourseFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>
          }
          findMany: {
            args: Prisma.CourseFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>[]
          }
          create: {
            args: Prisma.CourseCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>
          }
          createMany: {
            args: Prisma.CourseCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CourseCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>[]
          }
          delete: {
            args: Prisma.CourseDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>
          }
          update: {
            args: Prisma.CourseUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>
          }
          deleteMany: {
            args: Prisma.CourseDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CourseUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CourseUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>[]
          }
          upsert: {
            args: Prisma.CourseUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>
          }
          aggregate: {
            args: Prisma.CourseAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCourse>
          }
          groupBy: {
            args: Prisma.CourseGroupByArgs<ExtArgs>
            result: $Utils.Optional<CourseGroupByOutputType>[]
          }
          count: {
            args: Prisma.CourseCountArgs<ExtArgs>
            result: $Utils.Optional<CourseCountAggregateOutputType> | number
          }
        }
      }
      TaskState: {
        payload: Prisma.$TaskStatePayload<ExtArgs>
        fields: Prisma.TaskStateFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TaskStateFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskStatePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TaskStateFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskStatePayload>
          }
          findFirst: {
            args: Prisma.TaskStateFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskStatePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TaskStateFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskStatePayload>
          }
          findMany: {
            args: Prisma.TaskStateFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskStatePayload>[]
          }
          create: {
            args: Prisma.TaskStateCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskStatePayload>
          }
          createMany: {
            args: Prisma.TaskStateCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TaskStateCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskStatePayload>[]
          }
          delete: {
            args: Prisma.TaskStateDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskStatePayload>
          }
          update: {
            args: Prisma.TaskStateUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskStatePayload>
          }
          deleteMany: {
            args: Prisma.TaskStateDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TaskStateUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TaskStateUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskStatePayload>[]
          }
          upsert: {
            args: Prisma.TaskStateUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskStatePayload>
          }
          aggregate: {
            args: Prisma.TaskStateAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTaskState>
          }
          groupBy: {
            args: Prisma.TaskStateGroupByArgs<ExtArgs>
            result: $Utils.Optional<TaskStateGroupByOutputType>[]
          }
          count: {
            args: Prisma.TaskStateCountArgs<ExtArgs>
            result: $Utils.Optional<TaskStateCountAggregateOutputType> | number
          }
        }
      }
      Task: {
        payload: Prisma.$TaskPayload<ExtArgs>
        fields: Prisma.TaskFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TaskFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TaskFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>
          }
          findFirst: {
            args: Prisma.TaskFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TaskFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>
          }
          findMany: {
            args: Prisma.TaskFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>[]
          }
          create: {
            args: Prisma.TaskCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>
          }
          createMany: {
            args: Prisma.TaskCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TaskCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>[]
          }
          delete: {
            args: Prisma.TaskDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>
          }
          update: {
            args: Prisma.TaskUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>
          }
          deleteMany: {
            args: Prisma.TaskDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TaskUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TaskUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>[]
          }
          upsert: {
            args: Prisma.TaskUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>
          }
          aggregate: {
            args: Prisma.TaskAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTask>
          }
          groupBy: {
            args: Prisma.TaskGroupByArgs<ExtArgs>
            result: $Utils.Optional<TaskGroupByOutputType>[]
          }
          count: {
            args: Prisma.TaskCountArgs<ExtArgs>
            result: $Utils.Optional<TaskCountAggregateOutputType> | number
          }
        }
      }
      Deliverable: {
        payload: Prisma.$DeliverablePayload<ExtArgs>
        fields: Prisma.DeliverableFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DeliverableFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeliverablePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DeliverableFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeliverablePayload>
          }
          findFirst: {
            args: Prisma.DeliverableFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeliverablePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DeliverableFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeliverablePayload>
          }
          findMany: {
            args: Prisma.DeliverableFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeliverablePayload>[]
          }
          create: {
            args: Prisma.DeliverableCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeliverablePayload>
          }
          createMany: {
            args: Prisma.DeliverableCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DeliverableCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeliverablePayload>[]
          }
          delete: {
            args: Prisma.DeliverableDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeliverablePayload>
          }
          update: {
            args: Prisma.DeliverableUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeliverablePayload>
          }
          deleteMany: {
            args: Prisma.DeliverableDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DeliverableUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DeliverableUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeliverablePayload>[]
          }
          upsert: {
            args: Prisma.DeliverableUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeliverablePayload>
          }
          aggregate: {
            args: Prisma.DeliverableAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDeliverable>
          }
          groupBy: {
            args: Prisma.DeliverableGroupByArgs<ExtArgs>
            result: $Utils.Optional<DeliverableGroupByOutputType>[]
          }
          count: {
            args: Prisma.DeliverableCountArgs<ExtArgs>
            result: $Utils.Optional<DeliverableCountAggregateOutputType> | number
          }
        }
      }
      TutoringPost: {
        payload: Prisma.$TutoringPostPayload<ExtArgs>
        fields: Prisma.TutoringPostFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TutoringPostFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TutoringPostPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TutoringPostFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TutoringPostPayload>
          }
          findFirst: {
            args: Prisma.TutoringPostFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TutoringPostPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TutoringPostFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TutoringPostPayload>
          }
          findMany: {
            args: Prisma.TutoringPostFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TutoringPostPayload>[]
          }
          create: {
            args: Prisma.TutoringPostCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TutoringPostPayload>
          }
          createMany: {
            args: Prisma.TutoringPostCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TutoringPostCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TutoringPostPayload>[]
          }
          delete: {
            args: Prisma.TutoringPostDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TutoringPostPayload>
          }
          update: {
            args: Prisma.TutoringPostUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TutoringPostPayload>
          }
          deleteMany: {
            args: Prisma.TutoringPostDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TutoringPostUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TutoringPostUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TutoringPostPayload>[]
          }
          upsert: {
            args: Prisma.TutoringPostUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TutoringPostPayload>
          }
          aggregate: {
            args: Prisma.TutoringPostAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTutoringPost>
          }
          groupBy: {
            args: Prisma.TutoringPostGroupByArgs<ExtArgs>
            result: $Utils.Optional<TutoringPostGroupByOutputType>[]
          }
          count: {
            args: Prisma.TutoringPostCountArgs<ExtArgs>
            result: $Utils.Optional<TutoringPostCountAggregateOutputType> | number
          }
        }
      }
      Notification: {
        payload: Prisma.$NotificationPayload<ExtArgs>
        fields: Prisma.NotificationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.NotificationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.NotificationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          findFirst: {
            args: Prisma.NotificationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.NotificationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          findMany: {
            args: Prisma.NotificationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>[]
          }
          create: {
            args: Prisma.NotificationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          createMany: {
            args: Prisma.NotificationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.NotificationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>[]
          }
          delete: {
            args: Prisma.NotificationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          update: {
            args: Prisma.NotificationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          deleteMany: {
            args: Prisma.NotificationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.NotificationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.NotificationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>[]
          }
          upsert: {
            args: Prisma.NotificationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          aggregate: {
            args: Prisma.NotificationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNotification>
          }
          groupBy: {
            args: Prisma.NotificationGroupByArgs<ExtArgs>
            result: $Utils.Optional<NotificationGroupByOutputType>[]
          }
          count: {
            args: Prisma.NotificationCountArgs<ExtArgs>
            result: $Utils.Optional<NotificationCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    major?: MajorOmit
    role?: RoleOmit
    user?: UserOmit
    period?: PeriodOmit
    userPeriod?: UserPeriodOmit
    teacher?: TeacherOmit
    course?: CourseOmit
    taskState?: TaskStateOmit
    task?: TaskOmit
    deliverable?: DeliverableOmit
    tutoringPost?: TutoringPostOmit
    notification?: NotificationOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type MajorCountOutputType
   */

  export type MajorCountOutputType = {
    users: number
  }

  export type MajorCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | MajorCountOutputTypeCountUsersArgs
  }

  // Custom InputTypes
  /**
   * MajorCountOutputType without action
   */
  export type MajorCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MajorCountOutputType
     */
    select?: MajorCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MajorCountOutputType without action
   */
  export type MajorCountOutputTypeCountUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }


  /**
   * Count Type RoleCountOutputType
   */

  export type RoleCountOutputType = {
    users: number
  }

  export type RoleCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | RoleCountOutputTypeCountUsersArgs
  }

  // Custom InputTypes
  /**
   * RoleCountOutputType without action
   */
  export type RoleCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoleCountOutputType
     */
    select?: RoleCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RoleCountOutputType without action
   */
  export type RoleCountOutputTypeCountUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    userPeriods: number
    tasks: number
    tutoringPosts: number
    notifications: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    userPeriods?: boolean | UserCountOutputTypeCountUserPeriodsArgs
    tasks?: boolean | UserCountOutputTypeCountTasksArgs
    tutoringPosts?: boolean | UserCountOutputTypeCountTutoringPostsArgs
    notifications?: boolean | UserCountOutputTypeCountNotificationsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountUserPeriodsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserPeriodWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountTasksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TaskWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountTutoringPostsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TutoringPostWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountNotificationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NotificationWhereInput
  }


  /**
   * Count Type PeriodCountOutputType
   */

  export type PeriodCountOutputType = {
    userPeriods: number
    courses: number
  }

  export type PeriodCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    userPeriods?: boolean | PeriodCountOutputTypeCountUserPeriodsArgs
    courses?: boolean | PeriodCountOutputTypeCountCoursesArgs
  }

  // Custom InputTypes
  /**
   * PeriodCountOutputType without action
   */
  export type PeriodCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PeriodCountOutputType
     */
    select?: PeriodCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PeriodCountOutputType without action
   */
  export type PeriodCountOutputTypeCountUserPeriodsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserPeriodWhereInput
  }

  /**
   * PeriodCountOutputType without action
   */
  export type PeriodCountOutputTypeCountCoursesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CourseWhereInput
  }


  /**
   * Count Type TeacherCountOutputType
   */

  export type TeacherCountOutputType = {
    courses: number
  }

  export type TeacherCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    courses?: boolean | TeacherCountOutputTypeCountCoursesArgs
  }

  // Custom InputTypes
  /**
   * TeacherCountOutputType without action
   */
  export type TeacherCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeacherCountOutputType
     */
    select?: TeacherCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TeacherCountOutputType without action
   */
  export type TeacherCountOutputTypeCountCoursesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CourseWhereInput
  }


  /**
   * Count Type CourseCountOutputType
   */

  export type CourseCountOutputType = {
    tasks: number
  }

  export type CourseCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tasks?: boolean | CourseCountOutputTypeCountTasksArgs
  }

  // Custom InputTypes
  /**
   * CourseCountOutputType without action
   */
  export type CourseCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseCountOutputType
     */
    select?: CourseCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CourseCountOutputType without action
   */
  export type CourseCountOutputTypeCountTasksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TaskWhereInput
  }


  /**
   * Count Type TaskStateCountOutputType
   */

  export type TaskStateCountOutputType = {
    tasks: number
    deliverables: number
  }

  export type TaskStateCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tasks?: boolean | TaskStateCountOutputTypeCountTasksArgs
    deliverables?: boolean | TaskStateCountOutputTypeCountDeliverablesArgs
  }

  // Custom InputTypes
  /**
   * TaskStateCountOutputType without action
   */
  export type TaskStateCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskStateCountOutputType
     */
    select?: TaskStateCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TaskStateCountOutputType without action
   */
  export type TaskStateCountOutputTypeCountTasksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TaskWhereInput
  }

  /**
   * TaskStateCountOutputType without action
   */
  export type TaskStateCountOutputTypeCountDeliverablesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DeliverableWhereInput
  }


  /**
   * Count Type TaskCountOutputType
   */

  export type TaskCountOutputType = {
    deliverables: number
  }

  export type TaskCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    deliverables?: boolean | TaskCountOutputTypeCountDeliverablesArgs
  }

  // Custom InputTypes
  /**
   * TaskCountOutputType without action
   */
  export type TaskCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskCountOutputType
     */
    select?: TaskCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TaskCountOutputType without action
   */
  export type TaskCountOutputTypeCountDeliverablesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DeliverableWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Major
   */

  export type AggregateMajor = {
    _count: MajorCountAggregateOutputType | null
    _avg: MajorAvgAggregateOutputType | null
    _sum: MajorSumAggregateOutputType | null
    _min: MajorMinAggregateOutputType | null
    _max: MajorMaxAggregateOutputType | null
  }

  export type MajorAvgAggregateOutputType = {
    id: number | null
  }

  export type MajorSumAggregateOutputType = {
    id: number | null
  }

  export type MajorMinAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type MajorMaxAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type MajorCountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }


  export type MajorAvgAggregateInputType = {
    id?: true
  }

  export type MajorSumAggregateInputType = {
    id?: true
  }

  export type MajorMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type MajorMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type MajorCountAggregateInputType = {
    id?: true
    name?: true
    _all?: true
  }

  export type MajorAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Major to aggregate.
     */
    where?: MajorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Majors to fetch.
     */
    orderBy?: MajorOrderByWithRelationInput | MajorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MajorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Majors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Majors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Majors
    **/
    _count?: true | MajorCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MajorAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MajorSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MajorMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MajorMaxAggregateInputType
  }

  export type GetMajorAggregateType<T extends MajorAggregateArgs> = {
        [P in keyof T & keyof AggregateMajor]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMajor[P]>
      : GetScalarType<T[P], AggregateMajor[P]>
  }




  export type MajorGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MajorWhereInput
    orderBy?: MajorOrderByWithAggregationInput | MajorOrderByWithAggregationInput[]
    by: MajorScalarFieldEnum[] | MajorScalarFieldEnum
    having?: MajorScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MajorCountAggregateInputType | true
    _avg?: MajorAvgAggregateInputType
    _sum?: MajorSumAggregateInputType
    _min?: MajorMinAggregateInputType
    _max?: MajorMaxAggregateInputType
  }

  export type MajorGroupByOutputType = {
    id: number
    name: string
    _count: MajorCountAggregateOutputType | null
    _avg: MajorAvgAggregateOutputType | null
    _sum: MajorSumAggregateOutputType | null
    _min: MajorMinAggregateOutputType | null
    _max: MajorMaxAggregateOutputType | null
  }

  type GetMajorGroupByPayload<T extends MajorGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MajorGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MajorGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MajorGroupByOutputType[P]>
            : GetScalarType<T[P], MajorGroupByOutputType[P]>
        }
      >
    >


  export type MajorSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    users?: boolean | Major$usersArgs<ExtArgs>
    _count?: boolean | MajorCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["major"]>

  export type MajorSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["major"]>

  export type MajorSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["major"]>

  export type MajorSelectScalar = {
    id?: boolean
    name?: boolean
  }

  export type MajorOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name", ExtArgs["result"]["major"]>
  export type MajorInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | Major$usersArgs<ExtArgs>
    _count?: boolean | MajorCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type MajorIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type MajorIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $MajorPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Major"
    objects: {
      users: Prisma.$UserPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
    }, ExtArgs["result"]["major"]>
    composites: {}
  }

  type MajorGetPayload<S extends boolean | null | undefined | MajorDefaultArgs> = $Result.GetResult<Prisma.$MajorPayload, S>

  type MajorCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MajorFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MajorCountAggregateInputType | true
    }

  export interface MajorDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Major'], meta: { name: 'Major' } }
    /**
     * Find zero or one Major that matches the filter.
     * @param {MajorFindUniqueArgs} args - Arguments to find a Major
     * @example
     * // Get one Major
     * const major = await prisma.major.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MajorFindUniqueArgs>(args: SelectSubset<T, MajorFindUniqueArgs<ExtArgs>>): Prisma__MajorClient<$Result.GetResult<Prisma.$MajorPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Major that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MajorFindUniqueOrThrowArgs} args - Arguments to find a Major
     * @example
     * // Get one Major
     * const major = await prisma.major.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MajorFindUniqueOrThrowArgs>(args: SelectSubset<T, MajorFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MajorClient<$Result.GetResult<Prisma.$MajorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Major that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MajorFindFirstArgs} args - Arguments to find a Major
     * @example
     * // Get one Major
     * const major = await prisma.major.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MajorFindFirstArgs>(args?: SelectSubset<T, MajorFindFirstArgs<ExtArgs>>): Prisma__MajorClient<$Result.GetResult<Prisma.$MajorPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Major that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MajorFindFirstOrThrowArgs} args - Arguments to find a Major
     * @example
     * // Get one Major
     * const major = await prisma.major.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MajorFindFirstOrThrowArgs>(args?: SelectSubset<T, MajorFindFirstOrThrowArgs<ExtArgs>>): Prisma__MajorClient<$Result.GetResult<Prisma.$MajorPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Majors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MajorFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Majors
     * const majors = await prisma.major.findMany()
     * 
     * // Get first 10 Majors
     * const majors = await prisma.major.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const majorWithIdOnly = await prisma.major.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MajorFindManyArgs>(args?: SelectSubset<T, MajorFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MajorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Major.
     * @param {MajorCreateArgs} args - Arguments to create a Major.
     * @example
     * // Create one Major
     * const Major = await prisma.major.create({
     *   data: {
     *     // ... data to create a Major
     *   }
     * })
     * 
     */
    create<T extends MajorCreateArgs>(args: SelectSubset<T, MajorCreateArgs<ExtArgs>>): Prisma__MajorClient<$Result.GetResult<Prisma.$MajorPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Majors.
     * @param {MajorCreateManyArgs} args - Arguments to create many Majors.
     * @example
     * // Create many Majors
     * const major = await prisma.major.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MajorCreateManyArgs>(args?: SelectSubset<T, MajorCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Majors and returns the data saved in the database.
     * @param {MajorCreateManyAndReturnArgs} args - Arguments to create many Majors.
     * @example
     * // Create many Majors
     * const major = await prisma.major.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Majors and only return the `id`
     * const majorWithIdOnly = await prisma.major.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MajorCreateManyAndReturnArgs>(args?: SelectSubset<T, MajorCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MajorPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Major.
     * @param {MajorDeleteArgs} args - Arguments to delete one Major.
     * @example
     * // Delete one Major
     * const Major = await prisma.major.delete({
     *   where: {
     *     // ... filter to delete one Major
     *   }
     * })
     * 
     */
    delete<T extends MajorDeleteArgs>(args: SelectSubset<T, MajorDeleteArgs<ExtArgs>>): Prisma__MajorClient<$Result.GetResult<Prisma.$MajorPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Major.
     * @param {MajorUpdateArgs} args - Arguments to update one Major.
     * @example
     * // Update one Major
     * const major = await prisma.major.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MajorUpdateArgs>(args: SelectSubset<T, MajorUpdateArgs<ExtArgs>>): Prisma__MajorClient<$Result.GetResult<Prisma.$MajorPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Majors.
     * @param {MajorDeleteManyArgs} args - Arguments to filter Majors to delete.
     * @example
     * // Delete a few Majors
     * const { count } = await prisma.major.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MajorDeleteManyArgs>(args?: SelectSubset<T, MajorDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Majors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MajorUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Majors
     * const major = await prisma.major.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MajorUpdateManyArgs>(args: SelectSubset<T, MajorUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Majors and returns the data updated in the database.
     * @param {MajorUpdateManyAndReturnArgs} args - Arguments to update many Majors.
     * @example
     * // Update many Majors
     * const major = await prisma.major.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Majors and only return the `id`
     * const majorWithIdOnly = await prisma.major.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends MajorUpdateManyAndReturnArgs>(args: SelectSubset<T, MajorUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MajorPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Major.
     * @param {MajorUpsertArgs} args - Arguments to update or create a Major.
     * @example
     * // Update or create a Major
     * const major = await prisma.major.upsert({
     *   create: {
     *     // ... data to create a Major
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Major we want to update
     *   }
     * })
     */
    upsert<T extends MajorUpsertArgs>(args: SelectSubset<T, MajorUpsertArgs<ExtArgs>>): Prisma__MajorClient<$Result.GetResult<Prisma.$MajorPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Majors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MajorCountArgs} args - Arguments to filter Majors to count.
     * @example
     * // Count the number of Majors
     * const count = await prisma.major.count({
     *   where: {
     *     // ... the filter for the Majors we want to count
     *   }
     * })
    **/
    count<T extends MajorCountArgs>(
      args?: Subset<T, MajorCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MajorCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Major.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MajorAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MajorAggregateArgs>(args: Subset<T, MajorAggregateArgs>): Prisma.PrismaPromise<GetMajorAggregateType<T>>

    /**
     * Group by Major.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MajorGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MajorGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MajorGroupByArgs['orderBy'] }
        : { orderBy?: MajorGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MajorGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMajorGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Major model
   */
  readonly fields: MajorFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Major.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MajorClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    users<T extends Major$usersArgs<ExtArgs> = {}>(args?: Subset<T, Major$usersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Major model
   */
  interface MajorFieldRefs {
    readonly id: FieldRef<"Major", 'Int'>
    readonly name: FieldRef<"Major", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Major findUnique
   */
  export type MajorFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Major
     */
    select?: MajorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Major
     */
    omit?: MajorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MajorInclude<ExtArgs> | null
    /**
     * Filter, which Major to fetch.
     */
    where: MajorWhereUniqueInput
  }

  /**
   * Major findUniqueOrThrow
   */
  export type MajorFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Major
     */
    select?: MajorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Major
     */
    omit?: MajorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MajorInclude<ExtArgs> | null
    /**
     * Filter, which Major to fetch.
     */
    where: MajorWhereUniqueInput
  }

  /**
   * Major findFirst
   */
  export type MajorFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Major
     */
    select?: MajorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Major
     */
    omit?: MajorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MajorInclude<ExtArgs> | null
    /**
     * Filter, which Major to fetch.
     */
    where?: MajorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Majors to fetch.
     */
    orderBy?: MajorOrderByWithRelationInput | MajorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Majors.
     */
    cursor?: MajorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Majors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Majors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Majors.
     */
    distinct?: MajorScalarFieldEnum | MajorScalarFieldEnum[]
  }

  /**
   * Major findFirstOrThrow
   */
  export type MajorFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Major
     */
    select?: MajorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Major
     */
    omit?: MajorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MajorInclude<ExtArgs> | null
    /**
     * Filter, which Major to fetch.
     */
    where?: MajorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Majors to fetch.
     */
    orderBy?: MajorOrderByWithRelationInput | MajorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Majors.
     */
    cursor?: MajorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Majors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Majors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Majors.
     */
    distinct?: MajorScalarFieldEnum | MajorScalarFieldEnum[]
  }

  /**
   * Major findMany
   */
  export type MajorFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Major
     */
    select?: MajorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Major
     */
    omit?: MajorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MajorInclude<ExtArgs> | null
    /**
     * Filter, which Majors to fetch.
     */
    where?: MajorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Majors to fetch.
     */
    orderBy?: MajorOrderByWithRelationInput | MajorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Majors.
     */
    cursor?: MajorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Majors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Majors.
     */
    skip?: number
    distinct?: MajorScalarFieldEnum | MajorScalarFieldEnum[]
  }

  /**
   * Major create
   */
  export type MajorCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Major
     */
    select?: MajorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Major
     */
    omit?: MajorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MajorInclude<ExtArgs> | null
    /**
     * The data needed to create a Major.
     */
    data: XOR<MajorCreateInput, MajorUncheckedCreateInput>
  }

  /**
   * Major createMany
   */
  export type MajorCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Majors.
     */
    data: MajorCreateManyInput | MajorCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Major createManyAndReturn
   */
  export type MajorCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Major
     */
    select?: MajorSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Major
     */
    omit?: MajorOmit<ExtArgs> | null
    /**
     * The data used to create many Majors.
     */
    data: MajorCreateManyInput | MajorCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Major update
   */
  export type MajorUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Major
     */
    select?: MajorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Major
     */
    omit?: MajorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MajorInclude<ExtArgs> | null
    /**
     * The data needed to update a Major.
     */
    data: XOR<MajorUpdateInput, MajorUncheckedUpdateInput>
    /**
     * Choose, which Major to update.
     */
    where: MajorWhereUniqueInput
  }

  /**
   * Major updateMany
   */
  export type MajorUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Majors.
     */
    data: XOR<MajorUpdateManyMutationInput, MajorUncheckedUpdateManyInput>
    /**
     * Filter which Majors to update
     */
    where?: MajorWhereInput
    /**
     * Limit how many Majors to update.
     */
    limit?: number
  }

  /**
   * Major updateManyAndReturn
   */
  export type MajorUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Major
     */
    select?: MajorSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Major
     */
    omit?: MajorOmit<ExtArgs> | null
    /**
     * The data used to update Majors.
     */
    data: XOR<MajorUpdateManyMutationInput, MajorUncheckedUpdateManyInput>
    /**
     * Filter which Majors to update
     */
    where?: MajorWhereInput
    /**
     * Limit how many Majors to update.
     */
    limit?: number
  }

  /**
   * Major upsert
   */
  export type MajorUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Major
     */
    select?: MajorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Major
     */
    omit?: MajorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MajorInclude<ExtArgs> | null
    /**
     * The filter to search for the Major to update in case it exists.
     */
    where: MajorWhereUniqueInput
    /**
     * In case the Major found by the `where` argument doesn't exist, create a new Major with this data.
     */
    create: XOR<MajorCreateInput, MajorUncheckedCreateInput>
    /**
     * In case the Major was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MajorUpdateInput, MajorUncheckedUpdateInput>
  }

  /**
   * Major delete
   */
  export type MajorDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Major
     */
    select?: MajorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Major
     */
    omit?: MajorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MajorInclude<ExtArgs> | null
    /**
     * Filter which Major to delete.
     */
    where: MajorWhereUniqueInput
  }

  /**
   * Major deleteMany
   */
  export type MajorDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Majors to delete
     */
    where?: MajorWhereInput
    /**
     * Limit how many Majors to delete.
     */
    limit?: number
  }

  /**
   * Major.users
   */
  export type Major$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * Major without action
   */
  export type MajorDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Major
     */
    select?: MajorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Major
     */
    omit?: MajorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MajorInclude<ExtArgs> | null
  }


  /**
   * Model Role
   */

  export type AggregateRole = {
    _count: RoleCountAggregateOutputType | null
    _avg: RoleAvgAggregateOutputType | null
    _sum: RoleSumAggregateOutputType | null
    _min: RoleMinAggregateOutputType | null
    _max: RoleMaxAggregateOutputType | null
  }

  export type RoleAvgAggregateOutputType = {
    id: number | null
  }

  export type RoleSumAggregateOutputType = {
    id: number | null
  }

  export type RoleMinAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type RoleMaxAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type RoleCountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }


  export type RoleAvgAggregateInputType = {
    id?: true
  }

  export type RoleSumAggregateInputType = {
    id?: true
  }

  export type RoleMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type RoleMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type RoleCountAggregateInputType = {
    id?: true
    name?: true
    _all?: true
  }

  export type RoleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Role to aggregate.
     */
    where?: RoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roles to fetch.
     */
    orderBy?: RoleOrderByWithRelationInput | RoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Roles
    **/
    _count?: true | RoleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RoleAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RoleSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RoleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RoleMaxAggregateInputType
  }

  export type GetRoleAggregateType<T extends RoleAggregateArgs> = {
        [P in keyof T & keyof AggregateRole]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRole[P]>
      : GetScalarType<T[P], AggregateRole[P]>
  }




  export type RoleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RoleWhereInput
    orderBy?: RoleOrderByWithAggregationInput | RoleOrderByWithAggregationInput[]
    by: RoleScalarFieldEnum[] | RoleScalarFieldEnum
    having?: RoleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RoleCountAggregateInputType | true
    _avg?: RoleAvgAggregateInputType
    _sum?: RoleSumAggregateInputType
    _min?: RoleMinAggregateInputType
    _max?: RoleMaxAggregateInputType
  }

  export type RoleGroupByOutputType = {
    id: number
    name: string
    _count: RoleCountAggregateOutputType | null
    _avg: RoleAvgAggregateOutputType | null
    _sum: RoleSumAggregateOutputType | null
    _min: RoleMinAggregateOutputType | null
    _max: RoleMaxAggregateOutputType | null
  }

  type GetRoleGroupByPayload<T extends RoleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RoleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RoleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RoleGroupByOutputType[P]>
            : GetScalarType<T[P], RoleGroupByOutputType[P]>
        }
      >
    >


  export type RoleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    users?: boolean | Role$usersArgs<ExtArgs>
    _count?: boolean | RoleCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["role"]>

  export type RoleSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["role"]>

  export type RoleSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["role"]>

  export type RoleSelectScalar = {
    id?: boolean
    name?: boolean
  }

  export type RoleOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name", ExtArgs["result"]["role"]>
  export type RoleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | Role$usersArgs<ExtArgs>
    _count?: boolean | RoleCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type RoleIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type RoleIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $RolePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Role"
    objects: {
      users: Prisma.$UserPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
    }, ExtArgs["result"]["role"]>
    composites: {}
  }

  type RoleGetPayload<S extends boolean | null | undefined | RoleDefaultArgs> = $Result.GetResult<Prisma.$RolePayload, S>

  type RoleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RoleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RoleCountAggregateInputType | true
    }

  export interface RoleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Role'], meta: { name: 'Role' } }
    /**
     * Find zero or one Role that matches the filter.
     * @param {RoleFindUniqueArgs} args - Arguments to find a Role
     * @example
     * // Get one Role
     * const role = await prisma.role.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RoleFindUniqueArgs>(args: SelectSubset<T, RoleFindUniqueArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Role that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RoleFindUniqueOrThrowArgs} args - Arguments to find a Role
     * @example
     * // Get one Role
     * const role = await prisma.role.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RoleFindUniqueOrThrowArgs>(args: SelectSubset<T, RoleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Role that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleFindFirstArgs} args - Arguments to find a Role
     * @example
     * // Get one Role
     * const role = await prisma.role.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RoleFindFirstArgs>(args?: SelectSubset<T, RoleFindFirstArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Role that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleFindFirstOrThrowArgs} args - Arguments to find a Role
     * @example
     * // Get one Role
     * const role = await prisma.role.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RoleFindFirstOrThrowArgs>(args?: SelectSubset<T, RoleFindFirstOrThrowArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Roles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Roles
     * const roles = await prisma.role.findMany()
     * 
     * // Get first 10 Roles
     * const roles = await prisma.role.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const roleWithIdOnly = await prisma.role.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RoleFindManyArgs>(args?: SelectSubset<T, RoleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Role.
     * @param {RoleCreateArgs} args - Arguments to create a Role.
     * @example
     * // Create one Role
     * const Role = await prisma.role.create({
     *   data: {
     *     // ... data to create a Role
     *   }
     * })
     * 
     */
    create<T extends RoleCreateArgs>(args: SelectSubset<T, RoleCreateArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Roles.
     * @param {RoleCreateManyArgs} args - Arguments to create many Roles.
     * @example
     * // Create many Roles
     * const role = await prisma.role.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RoleCreateManyArgs>(args?: SelectSubset<T, RoleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Roles and returns the data saved in the database.
     * @param {RoleCreateManyAndReturnArgs} args - Arguments to create many Roles.
     * @example
     * // Create many Roles
     * const role = await prisma.role.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Roles and only return the `id`
     * const roleWithIdOnly = await prisma.role.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RoleCreateManyAndReturnArgs>(args?: SelectSubset<T, RoleCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Role.
     * @param {RoleDeleteArgs} args - Arguments to delete one Role.
     * @example
     * // Delete one Role
     * const Role = await prisma.role.delete({
     *   where: {
     *     // ... filter to delete one Role
     *   }
     * })
     * 
     */
    delete<T extends RoleDeleteArgs>(args: SelectSubset<T, RoleDeleteArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Role.
     * @param {RoleUpdateArgs} args - Arguments to update one Role.
     * @example
     * // Update one Role
     * const role = await prisma.role.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RoleUpdateArgs>(args: SelectSubset<T, RoleUpdateArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Roles.
     * @param {RoleDeleteManyArgs} args - Arguments to filter Roles to delete.
     * @example
     * // Delete a few Roles
     * const { count } = await prisma.role.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RoleDeleteManyArgs>(args?: SelectSubset<T, RoleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Roles
     * const role = await prisma.role.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RoleUpdateManyArgs>(args: SelectSubset<T, RoleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Roles and returns the data updated in the database.
     * @param {RoleUpdateManyAndReturnArgs} args - Arguments to update many Roles.
     * @example
     * // Update many Roles
     * const role = await prisma.role.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Roles and only return the `id`
     * const roleWithIdOnly = await prisma.role.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends RoleUpdateManyAndReturnArgs>(args: SelectSubset<T, RoleUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Role.
     * @param {RoleUpsertArgs} args - Arguments to update or create a Role.
     * @example
     * // Update or create a Role
     * const role = await prisma.role.upsert({
     *   create: {
     *     // ... data to create a Role
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Role we want to update
     *   }
     * })
     */
    upsert<T extends RoleUpsertArgs>(args: SelectSubset<T, RoleUpsertArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleCountArgs} args - Arguments to filter Roles to count.
     * @example
     * // Count the number of Roles
     * const count = await prisma.role.count({
     *   where: {
     *     // ... the filter for the Roles we want to count
     *   }
     * })
    **/
    count<T extends RoleCountArgs>(
      args?: Subset<T, RoleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RoleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Role.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RoleAggregateArgs>(args: Subset<T, RoleAggregateArgs>): Prisma.PrismaPromise<GetRoleAggregateType<T>>

    /**
     * Group by Role.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RoleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RoleGroupByArgs['orderBy'] }
        : { orderBy?: RoleGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RoleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRoleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Role model
   */
  readonly fields: RoleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Role.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RoleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    users<T extends Role$usersArgs<ExtArgs> = {}>(args?: Subset<T, Role$usersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Role model
   */
  interface RoleFieldRefs {
    readonly id: FieldRef<"Role", 'Int'>
    readonly name: FieldRef<"Role", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Role findUnique
   */
  export type RoleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter, which Role to fetch.
     */
    where: RoleWhereUniqueInput
  }

  /**
   * Role findUniqueOrThrow
   */
  export type RoleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter, which Role to fetch.
     */
    where: RoleWhereUniqueInput
  }

  /**
   * Role findFirst
   */
  export type RoleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter, which Role to fetch.
     */
    where?: RoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roles to fetch.
     */
    orderBy?: RoleOrderByWithRelationInput | RoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Roles.
     */
    cursor?: RoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Roles.
     */
    distinct?: RoleScalarFieldEnum | RoleScalarFieldEnum[]
  }

  /**
   * Role findFirstOrThrow
   */
  export type RoleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter, which Role to fetch.
     */
    where?: RoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roles to fetch.
     */
    orderBy?: RoleOrderByWithRelationInput | RoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Roles.
     */
    cursor?: RoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Roles.
     */
    distinct?: RoleScalarFieldEnum | RoleScalarFieldEnum[]
  }

  /**
   * Role findMany
   */
  export type RoleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter, which Roles to fetch.
     */
    where?: RoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roles to fetch.
     */
    orderBy?: RoleOrderByWithRelationInput | RoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Roles.
     */
    cursor?: RoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roles.
     */
    skip?: number
    distinct?: RoleScalarFieldEnum | RoleScalarFieldEnum[]
  }

  /**
   * Role create
   */
  export type RoleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * The data needed to create a Role.
     */
    data: XOR<RoleCreateInput, RoleUncheckedCreateInput>
  }

  /**
   * Role createMany
   */
  export type RoleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Roles.
     */
    data: RoleCreateManyInput | RoleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Role createManyAndReturn
   */
  export type RoleCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * The data used to create many Roles.
     */
    data: RoleCreateManyInput | RoleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Role update
   */
  export type RoleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * The data needed to update a Role.
     */
    data: XOR<RoleUpdateInput, RoleUncheckedUpdateInput>
    /**
     * Choose, which Role to update.
     */
    where: RoleWhereUniqueInput
  }

  /**
   * Role updateMany
   */
  export type RoleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Roles.
     */
    data: XOR<RoleUpdateManyMutationInput, RoleUncheckedUpdateManyInput>
    /**
     * Filter which Roles to update
     */
    where?: RoleWhereInput
    /**
     * Limit how many Roles to update.
     */
    limit?: number
  }

  /**
   * Role updateManyAndReturn
   */
  export type RoleUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * The data used to update Roles.
     */
    data: XOR<RoleUpdateManyMutationInput, RoleUncheckedUpdateManyInput>
    /**
     * Filter which Roles to update
     */
    where?: RoleWhereInput
    /**
     * Limit how many Roles to update.
     */
    limit?: number
  }

  /**
   * Role upsert
   */
  export type RoleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * The filter to search for the Role to update in case it exists.
     */
    where: RoleWhereUniqueInput
    /**
     * In case the Role found by the `where` argument doesn't exist, create a new Role with this data.
     */
    create: XOR<RoleCreateInput, RoleUncheckedCreateInput>
    /**
     * In case the Role was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RoleUpdateInput, RoleUncheckedUpdateInput>
  }

  /**
   * Role delete
   */
  export type RoleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter which Role to delete.
     */
    where: RoleWhereUniqueInput
  }

  /**
   * Role deleteMany
   */
  export type RoleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Roles to delete
     */
    where?: RoleWhereInput
    /**
     * Limit how many Roles to delete.
     */
    limit?: number
  }

  /**
   * Role.users
   */
  export type Role$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * Role without action
   */
  export type RoleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
  }


  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
    majorId: number | null
    roleId: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
    majorId: number | null
    roleId: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    email: string | null
    password: string | null
    name: string | null
    lastname: string | null
    majorId: number | null
    verified: boolean | null
    roleId: number | null
    createdAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    email: string | null
    password: string | null
    name: string | null
    lastname: string | null
    majorId: number | null
    verified: boolean | null
    roleId: number | null
    createdAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    password: number
    name: number
    lastname: number
    majorId: number
    verified: number
    roleId: number
    createdAt: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
    majorId?: true
    roleId?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
    majorId?: true
    roleId?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    password?: true
    name?: true
    lastname?: true
    majorId?: true
    verified?: true
    roleId?: true
    createdAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    password?: true
    name?: true
    lastname?: true
    majorId?: true
    verified?: true
    roleId?: true
    createdAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    password?: true
    name?: true
    lastname?: true
    majorId?: true
    verified?: true
    roleId?: true
    createdAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    email: string
    password: string
    name: string
    lastname: string
    majorId: number | null
    verified: boolean
    roleId: number
    createdAt: Date
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    name?: boolean
    lastname?: boolean
    majorId?: boolean
    verified?: boolean
    roleId?: boolean
    createdAt?: boolean
    major?: boolean | User$majorArgs<ExtArgs>
    role?: boolean | RoleDefaultArgs<ExtArgs>
    userPeriods?: boolean | User$userPeriodsArgs<ExtArgs>
    tasks?: boolean | User$tasksArgs<ExtArgs>
    tutoringPosts?: boolean | User$tutoringPostsArgs<ExtArgs>
    notifications?: boolean | User$notificationsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    name?: boolean
    lastname?: boolean
    majorId?: boolean
    verified?: boolean
    roleId?: boolean
    createdAt?: boolean
    major?: boolean | User$majorArgs<ExtArgs>
    role?: boolean | RoleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    name?: boolean
    lastname?: boolean
    majorId?: boolean
    verified?: boolean
    roleId?: boolean
    createdAt?: boolean
    major?: boolean | User$majorArgs<ExtArgs>
    role?: boolean | RoleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    password?: boolean
    name?: boolean
    lastname?: boolean
    majorId?: boolean
    verified?: boolean
    roleId?: boolean
    createdAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "password" | "name" | "lastname" | "majorId" | "verified" | "roleId" | "createdAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    major?: boolean | User$majorArgs<ExtArgs>
    role?: boolean | RoleDefaultArgs<ExtArgs>
    userPeriods?: boolean | User$userPeriodsArgs<ExtArgs>
    tasks?: boolean | User$tasksArgs<ExtArgs>
    tutoringPosts?: boolean | User$tutoringPostsArgs<ExtArgs>
    notifications?: boolean | User$notificationsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    major?: boolean | User$majorArgs<ExtArgs>
    role?: boolean | RoleDefaultArgs<ExtArgs>
  }
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    major?: boolean | User$majorArgs<ExtArgs>
    role?: boolean | RoleDefaultArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      major: Prisma.$MajorPayload<ExtArgs> | null
      role: Prisma.$RolePayload<ExtArgs>
      userPeriods: Prisma.$UserPeriodPayload<ExtArgs>[]
      tasks: Prisma.$TaskPayload<ExtArgs>[]
      tutoringPosts: Prisma.$TutoringPostPayload<ExtArgs>[]
      notifications: Prisma.$NotificationPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      email: string
      password: string
      name: string
      lastname: string
      majorId: number | null
      verified: boolean
      roleId: number
      createdAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    major<T extends User$majorArgs<ExtArgs> = {}>(args?: Subset<T, User$majorArgs<ExtArgs>>): Prisma__MajorClient<$Result.GetResult<Prisma.$MajorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    role<T extends RoleDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RoleDefaultArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    userPeriods<T extends User$userPeriodsArgs<ExtArgs> = {}>(args?: Subset<T, User$userPeriodsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPeriodPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    tasks<T extends User$tasksArgs<ExtArgs> = {}>(args?: Subset<T, User$tasksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    tutoringPosts<T extends User$tutoringPostsArgs<ExtArgs> = {}>(args?: Subset<T, User$tutoringPostsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TutoringPostPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    notifications<T extends User$notificationsArgs<ExtArgs> = {}>(args?: Subset<T, User$notificationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'Int'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly lastname: FieldRef<"User", 'String'>
    readonly majorId: FieldRef<"User", 'Int'>
    readonly verified: FieldRef<"User", 'Boolean'>
    readonly roleId: FieldRef<"User", 'Int'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.major
   */
  export type User$majorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Major
     */
    select?: MajorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Major
     */
    omit?: MajorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MajorInclude<ExtArgs> | null
    where?: MajorWhereInput
  }

  /**
   * User.userPeriods
   */
  export type User$userPeriodsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPeriod
     */
    select?: UserPeriodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserPeriod
     */
    omit?: UserPeriodOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPeriodInclude<ExtArgs> | null
    where?: UserPeriodWhereInput
    orderBy?: UserPeriodOrderByWithRelationInput | UserPeriodOrderByWithRelationInput[]
    cursor?: UserPeriodWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserPeriodScalarFieldEnum | UserPeriodScalarFieldEnum[]
  }

  /**
   * User.tasks
   */
  export type User$tasksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    where?: TaskWhereInput
    orderBy?: TaskOrderByWithRelationInput | TaskOrderByWithRelationInput[]
    cursor?: TaskWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TaskScalarFieldEnum | TaskScalarFieldEnum[]
  }

  /**
   * User.tutoringPosts
   */
  export type User$tutoringPostsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TutoringPost
     */
    select?: TutoringPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TutoringPost
     */
    omit?: TutoringPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TutoringPostInclude<ExtArgs> | null
    where?: TutoringPostWhereInput
    orderBy?: TutoringPostOrderByWithRelationInput | TutoringPostOrderByWithRelationInput[]
    cursor?: TutoringPostWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TutoringPostScalarFieldEnum | TutoringPostScalarFieldEnum[]
  }

  /**
   * User.notifications
   */
  export type User$notificationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    where?: NotificationWhereInput
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    cursor?: NotificationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Period
   */

  export type AggregatePeriod = {
    _count: PeriodCountAggregateOutputType | null
    _avg: PeriodAvgAggregateOutputType | null
    _sum: PeriodSumAggregateOutputType | null
    _min: PeriodMinAggregateOutputType | null
    _max: PeriodMaxAggregateOutputType | null
  }

  export type PeriodAvgAggregateOutputType = {
    id: number | null
    number: number | null
    year: number | null
  }

  export type PeriodSumAggregateOutputType = {
    id: number | null
    number: number | null
    year: number | null
  }

  export type PeriodMinAggregateOutputType = {
    id: number | null
    type: $Enums.PeriodType | null
    number: number | null
    year: number | null
    startDate: Date | null
    endDate: Date | null
  }

  export type PeriodMaxAggregateOutputType = {
    id: number | null
    type: $Enums.PeriodType | null
    number: number | null
    year: number | null
    startDate: Date | null
    endDate: Date | null
  }

  export type PeriodCountAggregateOutputType = {
    id: number
    type: number
    number: number
    year: number
    startDate: number
    endDate: number
    _all: number
  }


  export type PeriodAvgAggregateInputType = {
    id?: true
    number?: true
    year?: true
  }

  export type PeriodSumAggregateInputType = {
    id?: true
    number?: true
    year?: true
  }

  export type PeriodMinAggregateInputType = {
    id?: true
    type?: true
    number?: true
    year?: true
    startDate?: true
    endDate?: true
  }

  export type PeriodMaxAggregateInputType = {
    id?: true
    type?: true
    number?: true
    year?: true
    startDate?: true
    endDate?: true
  }

  export type PeriodCountAggregateInputType = {
    id?: true
    type?: true
    number?: true
    year?: true
    startDate?: true
    endDate?: true
    _all?: true
  }

  export type PeriodAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Period to aggregate.
     */
    where?: PeriodWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Periods to fetch.
     */
    orderBy?: PeriodOrderByWithRelationInput | PeriodOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PeriodWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Periods from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Periods.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Periods
    **/
    _count?: true | PeriodCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PeriodAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PeriodSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PeriodMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PeriodMaxAggregateInputType
  }

  export type GetPeriodAggregateType<T extends PeriodAggregateArgs> = {
        [P in keyof T & keyof AggregatePeriod]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePeriod[P]>
      : GetScalarType<T[P], AggregatePeriod[P]>
  }




  export type PeriodGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PeriodWhereInput
    orderBy?: PeriodOrderByWithAggregationInput | PeriodOrderByWithAggregationInput[]
    by: PeriodScalarFieldEnum[] | PeriodScalarFieldEnum
    having?: PeriodScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PeriodCountAggregateInputType | true
    _avg?: PeriodAvgAggregateInputType
    _sum?: PeriodSumAggregateInputType
    _min?: PeriodMinAggregateInputType
    _max?: PeriodMaxAggregateInputType
  }

  export type PeriodGroupByOutputType = {
    id: number
    type: $Enums.PeriodType
    number: number
    year: number
    startDate: Date
    endDate: Date
    _count: PeriodCountAggregateOutputType | null
    _avg: PeriodAvgAggregateOutputType | null
    _sum: PeriodSumAggregateOutputType | null
    _min: PeriodMinAggregateOutputType | null
    _max: PeriodMaxAggregateOutputType | null
  }

  type GetPeriodGroupByPayload<T extends PeriodGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PeriodGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PeriodGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PeriodGroupByOutputType[P]>
            : GetScalarType<T[P], PeriodGroupByOutputType[P]>
        }
      >
    >


  export type PeriodSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    number?: boolean
    year?: boolean
    startDate?: boolean
    endDate?: boolean
    userPeriods?: boolean | Period$userPeriodsArgs<ExtArgs>
    courses?: boolean | Period$coursesArgs<ExtArgs>
    _count?: boolean | PeriodCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["period"]>

  export type PeriodSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    number?: boolean
    year?: boolean
    startDate?: boolean
    endDate?: boolean
  }, ExtArgs["result"]["period"]>

  export type PeriodSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    number?: boolean
    year?: boolean
    startDate?: boolean
    endDate?: boolean
  }, ExtArgs["result"]["period"]>

  export type PeriodSelectScalar = {
    id?: boolean
    type?: boolean
    number?: boolean
    year?: boolean
    startDate?: boolean
    endDate?: boolean
  }

  export type PeriodOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "type" | "number" | "year" | "startDate" | "endDate", ExtArgs["result"]["period"]>
  export type PeriodInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    userPeriods?: boolean | Period$userPeriodsArgs<ExtArgs>
    courses?: boolean | Period$coursesArgs<ExtArgs>
    _count?: boolean | PeriodCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PeriodIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type PeriodIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $PeriodPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Period"
    objects: {
      userPeriods: Prisma.$UserPeriodPayload<ExtArgs>[]
      courses: Prisma.$CoursePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      type: $Enums.PeriodType
      number: number
      year: number
      startDate: Date
      endDate: Date
    }, ExtArgs["result"]["period"]>
    composites: {}
  }

  type PeriodGetPayload<S extends boolean | null | undefined | PeriodDefaultArgs> = $Result.GetResult<Prisma.$PeriodPayload, S>

  type PeriodCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PeriodFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PeriodCountAggregateInputType | true
    }

  export interface PeriodDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Period'], meta: { name: 'Period' } }
    /**
     * Find zero or one Period that matches the filter.
     * @param {PeriodFindUniqueArgs} args - Arguments to find a Period
     * @example
     * // Get one Period
     * const period = await prisma.period.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PeriodFindUniqueArgs>(args: SelectSubset<T, PeriodFindUniqueArgs<ExtArgs>>): Prisma__PeriodClient<$Result.GetResult<Prisma.$PeriodPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Period that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PeriodFindUniqueOrThrowArgs} args - Arguments to find a Period
     * @example
     * // Get one Period
     * const period = await prisma.period.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PeriodFindUniqueOrThrowArgs>(args: SelectSubset<T, PeriodFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PeriodClient<$Result.GetResult<Prisma.$PeriodPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Period that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PeriodFindFirstArgs} args - Arguments to find a Period
     * @example
     * // Get one Period
     * const period = await prisma.period.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PeriodFindFirstArgs>(args?: SelectSubset<T, PeriodFindFirstArgs<ExtArgs>>): Prisma__PeriodClient<$Result.GetResult<Prisma.$PeriodPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Period that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PeriodFindFirstOrThrowArgs} args - Arguments to find a Period
     * @example
     * // Get one Period
     * const period = await prisma.period.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PeriodFindFirstOrThrowArgs>(args?: SelectSubset<T, PeriodFindFirstOrThrowArgs<ExtArgs>>): Prisma__PeriodClient<$Result.GetResult<Prisma.$PeriodPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Periods that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PeriodFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Periods
     * const periods = await prisma.period.findMany()
     * 
     * // Get first 10 Periods
     * const periods = await prisma.period.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const periodWithIdOnly = await prisma.period.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PeriodFindManyArgs>(args?: SelectSubset<T, PeriodFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PeriodPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Period.
     * @param {PeriodCreateArgs} args - Arguments to create a Period.
     * @example
     * // Create one Period
     * const Period = await prisma.period.create({
     *   data: {
     *     // ... data to create a Period
     *   }
     * })
     * 
     */
    create<T extends PeriodCreateArgs>(args: SelectSubset<T, PeriodCreateArgs<ExtArgs>>): Prisma__PeriodClient<$Result.GetResult<Prisma.$PeriodPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Periods.
     * @param {PeriodCreateManyArgs} args - Arguments to create many Periods.
     * @example
     * // Create many Periods
     * const period = await prisma.period.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PeriodCreateManyArgs>(args?: SelectSubset<T, PeriodCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Periods and returns the data saved in the database.
     * @param {PeriodCreateManyAndReturnArgs} args - Arguments to create many Periods.
     * @example
     * // Create many Periods
     * const period = await prisma.period.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Periods and only return the `id`
     * const periodWithIdOnly = await prisma.period.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PeriodCreateManyAndReturnArgs>(args?: SelectSubset<T, PeriodCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PeriodPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Period.
     * @param {PeriodDeleteArgs} args - Arguments to delete one Period.
     * @example
     * // Delete one Period
     * const Period = await prisma.period.delete({
     *   where: {
     *     // ... filter to delete one Period
     *   }
     * })
     * 
     */
    delete<T extends PeriodDeleteArgs>(args: SelectSubset<T, PeriodDeleteArgs<ExtArgs>>): Prisma__PeriodClient<$Result.GetResult<Prisma.$PeriodPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Period.
     * @param {PeriodUpdateArgs} args - Arguments to update one Period.
     * @example
     * // Update one Period
     * const period = await prisma.period.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PeriodUpdateArgs>(args: SelectSubset<T, PeriodUpdateArgs<ExtArgs>>): Prisma__PeriodClient<$Result.GetResult<Prisma.$PeriodPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Periods.
     * @param {PeriodDeleteManyArgs} args - Arguments to filter Periods to delete.
     * @example
     * // Delete a few Periods
     * const { count } = await prisma.period.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PeriodDeleteManyArgs>(args?: SelectSubset<T, PeriodDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Periods.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PeriodUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Periods
     * const period = await prisma.period.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PeriodUpdateManyArgs>(args: SelectSubset<T, PeriodUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Periods and returns the data updated in the database.
     * @param {PeriodUpdateManyAndReturnArgs} args - Arguments to update many Periods.
     * @example
     * // Update many Periods
     * const period = await prisma.period.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Periods and only return the `id`
     * const periodWithIdOnly = await prisma.period.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PeriodUpdateManyAndReturnArgs>(args: SelectSubset<T, PeriodUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PeriodPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Period.
     * @param {PeriodUpsertArgs} args - Arguments to update or create a Period.
     * @example
     * // Update or create a Period
     * const period = await prisma.period.upsert({
     *   create: {
     *     // ... data to create a Period
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Period we want to update
     *   }
     * })
     */
    upsert<T extends PeriodUpsertArgs>(args: SelectSubset<T, PeriodUpsertArgs<ExtArgs>>): Prisma__PeriodClient<$Result.GetResult<Prisma.$PeriodPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Periods.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PeriodCountArgs} args - Arguments to filter Periods to count.
     * @example
     * // Count the number of Periods
     * const count = await prisma.period.count({
     *   where: {
     *     // ... the filter for the Periods we want to count
     *   }
     * })
    **/
    count<T extends PeriodCountArgs>(
      args?: Subset<T, PeriodCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PeriodCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Period.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PeriodAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PeriodAggregateArgs>(args: Subset<T, PeriodAggregateArgs>): Prisma.PrismaPromise<GetPeriodAggregateType<T>>

    /**
     * Group by Period.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PeriodGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PeriodGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PeriodGroupByArgs['orderBy'] }
        : { orderBy?: PeriodGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PeriodGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPeriodGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Period model
   */
  readonly fields: PeriodFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Period.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PeriodClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    userPeriods<T extends Period$userPeriodsArgs<ExtArgs> = {}>(args?: Subset<T, Period$userPeriodsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPeriodPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    courses<T extends Period$coursesArgs<ExtArgs> = {}>(args?: Subset<T, Period$coursesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Period model
   */
  interface PeriodFieldRefs {
    readonly id: FieldRef<"Period", 'Int'>
    readonly type: FieldRef<"Period", 'PeriodType'>
    readonly number: FieldRef<"Period", 'Int'>
    readonly year: FieldRef<"Period", 'Int'>
    readonly startDate: FieldRef<"Period", 'DateTime'>
    readonly endDate: FieldRef<"Period", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Period findUnique
   */
  export type PeriodFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Period
     */
    select?: PeriodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Period
     */
    omit?: PeriodOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PeriodInclude<ExtArgs> | null
    /**
     * Filter, which Period to fetch.
     */
    where: PeriodWhereUniqueInput
  }

  /**
   * Period findUniqueOrThrow
   */
  export type PeriodFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Period
     */
    select?: PeriodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Period
     */
    omit?: PeriodOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PeriodInclude<ExtArgs> | null
    /**
     * Filter, which Period to fetch.
     */
    where: PeriodWhereUniqueInput
  }

  /**
   * Period findFirst
   */
  export type PeriodFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Period
     */
    select?: PeriodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Period
     */
    omit?: PeriodOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PeriodInclude<ExtArgs> | null
    /**
     * Filter, which Period to fetch.
     */
    where?: PeriodWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Periods to fetch.
     */
    orderBy?: PeriodOrderByWithRelationInput | PeriodOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Periods.
     */
    cursor?: PeriodWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Periods from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Periods.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Periods.
     */
    distinct?: PeriodScalarFieldEnum | PeriodScalarFieldEnum[]
  }

  /**
   * Period findFirstOrThrow
   */
  export type PeriodFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Period
     */
    select?: PeriodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Period
     */
    omit?: PeriodOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PeriodInclude<ExtArgs> | null
    /**
     * Filter, which Period to fetch.
     */
    where?: PeriodWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Periods to fetch.
     */
    orderBy?: PeriodOrderByWithRelationInput | PeriodOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Periods.
     */
    cursor?: PeriodWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Periods from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Periods.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Periods.
     */
    distinct?: PeriodScalarFieldEnum | PeriodScalarFieldEnum[]
  }

  /**
   * Period findMany
   */
  export type PeriodFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Period
     */
    select?: PeriodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Period
     */
    omit?: PeriodOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PeriodInclude<ExtArgs> | null
    /**
     * Filter, which Periods to fetch.
     */
    where?: PeriodWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Periods to fetch.
     */
    orderBy?: PeriodOrderByWithRelationInput | PeriodOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Periods.
     */
    cursor?: PeriodWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Periods from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Periods.
     */
    skip?: number
    distinct?: PeriodScalarFieldEnum | PeriodScalarFieldEnum[]
  }

  /**
   * Period create
   */
  export type PeriodCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Period
     */
    select?: PeriodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Period
     */
    omit?: PeriodOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PeriodInclude<ExtArgs> | null
    /**
     * The data needed to create a Period.
     */
    data: XOR<PeriodCreateInput, PeriodUncheckedCreateInput>
  }

  /**
   * Period createMany
   */
  export type PeriodCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Periods.
     */
    data: PeriodCreateManyInput | PeriodCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Period createManyAndReturn
   */
  export type PeriodCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Period
     */
    select?: PeriodSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Period
     */
    omit?: PeriodOmit<ExtArgs> | null
    /**
     * The data used to create many Periods.
     */
    data: PeriodCreateManyInput | PeriodCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Period update
   */
  export type PeriodUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Period
     */
    select?: PeriodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Period
     */
    omit?: PeriodOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PeriodInclude<ExtArgs> | null
    /**
     * The data needed to update a Period.
     */
    data: XOR<PeriodUpdateInput, PeriodUncheckedUpdateInput>
    /**
     * Choose, which Period to update.
     */
    where: PeriodWhereUniqueInput
  }

  /**
   * Period updateMany
   */
  export type PeriodUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Periods.
     */
    data: XOR<PeriodUpdateManyMutationInput, PeriodUncheckedUpdateManyInput>
    /**
     * Filter which Periods to update
     */
    where?: PeriodWhereInput
    /**
     * Limit how many Periods to update.
     */
    limit?: number
  }

  /**
   * Period updateManyAndReturn
   */
  export type PeriodUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Period
     */
    select?: PeriodSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Period
     */
    omit?: PeriodOmit<ExtArgs> | null
    /**
     * The data used to update Periods.
     */
    data: XOR<PeriodUpdateManyMutationInput, PeriodUncheckedUpdateManyInput>
    /**
     * Filter which Periods to update
     */
    where?: PeriodWhereInput
    /**
     * Limit how many Periods to update.
     */
    limit?: number
  }

  /**
   * Period upsert
   */
  export type PeriodUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Period
     */
    select?: PeriodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Period
     */
    omit?: PeriodOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PeriodInclude<ExtArgs> | null
    /**
     * The filter to search for the Period to update in case it exists.
     */
    where: PeriodWhereUniqueInput
    /**
     * In case the Period found by the `where` argument doesn't exist, create a new Period with this data.
     */
    create: XOR<PeriodCreateInput, PeriodUncheckedCreateInput>
    /**
     * In case the Period was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PeriodUpdateInput, PeriodUncheckedUpdateInput>
  }

  /**
   * Period delete
   */
  export type PeriodDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Period
     */
    select?: PeriodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Period
     */
    omit?: PeriodOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PeriodInclude<ExtArgs> | null
    /**
     * Filter which Period to delete.
     */
    where: PeriodWhereUniqueInput
  }

  /**
   * Period deleteMany
   */
  export type PeriodDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Periods to delete
     */
    where?: PeriodWhereInput
    /**
     * Limit how many Periods to delete.
     */
    limit?: number
  }

  /**
   * Period.userPeriods
   */
  export type Period$userPeriodsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPeriod
     */
    select?: UserPeriodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserPeriod
     */
    omit?: UserPeriodOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPeriodInclude<ExtArgs> | null
    where?: UserPeriodWhereInput
    orderBy?: UserPeriodOrderByWithRelationInput | UserPeriodOrderByWithRelationInput[]
    cursor?: UserPeriodWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserPeriodScalarFieldEnum | UserPeriodScalarFieldEnum[]
  }

  /**
   * Period.courses
   */
  export type Period$coursesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    where?: CourseWhereInput
    orderBy?: CourseOrderByWithRelationInput | CourseOrderByWithRelationInput[]
    cursor?: CourseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CourseScalarFieldEnum | CourseScalarFieldEnum[]
  }

  /**
   * Period without action
   */
  export type PeriodDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Period
     */
    select?: PeriodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Period
     */
    omit?: PeriodOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PeriodInclude<ExtArgs> | null
  }


  /**
   * Model UserPeriod
   */

  export type AggregateUserPeriod = {
    _count: UserPeriodCountAggregateOutputType | null
    _avg: UserPeriodAvgAggregateOutputType | null
    _sum: UserPeriodSumAggregateOutputType | null
    _min: UserPeriodMinAggregateOutputType | null
    _max: UserPeriodMaxAggregateOutputType | null
  }

  export type UserPeriodAvgAggregateOutputType = {
    id: number | null
    userId: number | null
    periodId: number | null
  }

  export type UserPeriodSumAggregateOutputType = {
    id: number | null
    userId: number | null
    periodId: number | null
  }

  export type UserPeriodMinAggregateOutputType = {
    id: number | null
    enrollmentDate: Date | null
    userId: number | null
    periodId: number | null
  }

  export type UserPeriodMaxAggregateOutputType = {
    id: number | null
    enrollmentDate: Date | null
    userId: number | null
    periodId: number | null
  }

  export type UserPeriodCountAggregateOutputType = {
    id: number
    enrollmentDate: number
    userId: number
    periodId: number
    _all: number
  }


  export type UserPeriodAvgAggregateInputType = {
    id?: true
    userId?: true
    periodId?: true
  }

  export type UserPeriodSumAggregateInputType = {
    id?: true
    userId?: true
    periodId?: true
  }

  export type UserPeriodMinAggregateInputType = {
    id?: true
    enrollmentDate?: true
    userId?: true
    periodId?: true
  }

  export type UserPeriodMaxAggregateInputType = {
    id?: true
    enrollmentDate?: true
    userId?: true
    periodId?: true
  }

  export type UserPeriodCountAggregateInputType = {
    id?: true
    enrollmentDate?: true
    userId?: true
    periodId?: true
    _all?: true
  }

  export type UserPeriodAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserPeriod to aggregate.
     */
    where?: UserPeriodWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserPeriods to fetch.
     */
    orderBy?: UserPeriodOrderByWithRelationInput | UserPeriodOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserPeriodWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserPeriods from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserPeriods.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserPeriods
    **/
    _count?: true | UserPeriodCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserPeriodAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserPeriodSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserPeriodMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserPeriodMaxAggregateInputType
  }

  export type GetUserPeriodAggregateType<T extends UserPeriodAggregateArgs> = {
        [P in keyof T & keyof AggregateUserPeriod]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserPeriod[P]>
      : GetScalarType<T[P], AggregateUserPeriod[P]>
  }




  export type UserPeriodGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserPeriodWhereInput
    orderBy?: UserPeriodOrderByWithAggregationInput | UserPeriodOrderByWithAggregationInput[]
    by: UserPeriodScalarFieldEnum[] | UserPeriodScalarFieldEnum
    having?: UserPeriodScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserPeriodCountAggregateInputType | true
    _avg?: UserPeriodAvgAggregateInputType
    _sum?: UserPeriodSumAggregateInputType
    _min?: UserPeriodMinAggregateInputType
    _max?: UserPeriodMaxAggregateInputType
  }

  export type UserPeriodGroupByOutputType = {
    id: number
    enrollmentDate: Date
    userId: number
    periodId: number
    _count: UserPeriodCountAggregateOutputType | null
    _avg: UserPeriodAvgAggregateOutputType | null
    _sum: UserPeriodSumAggregateOutputType | null
    _min: UserPeriodMinAggregateOutputType | null
    _max: UserPeriodMaxAggregateOutputType | null
  }

  type GetUserPeriodGroupByPayload<T extends UserPeriodGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserPeriodGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserPeriodGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserPeriodGroupByOutputType[P]>
            : GetScalarType<T[P], UserPeriodGroupByOutputType[P]>
        }
      >
    >


  export type UserPeriodSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    enrollmentDate?: boolean
    userId?: boolean
    periodId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    period?: boolean | PeriodDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userPeriod"]>

  export type UserPeriodSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    enrollmentDate?: boolean
    userId?: boolean
    periodId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    period?: boolean | PeriodDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userPeriod"]>

  export type UserPeriodSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    enrollmentDate?: boolean
    userId?: boolean
    periodId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    period?: boolean | PeriodDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userPeriod"]>

  export type UserPeriodSelectScalar = {
    id?: boolean
    enrollmentDate?: boolean
    userId?: boolean
    periodId?: boolean
  }

  export type UserPeriodOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "enrollmentDate" | "userId" | "periodId", ExtArgs["result"]["userPeriod"]>
  export type UserPeriodInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    period?: boolean | PeriodDefaultArgs<ExtArgs>
  }
  export type UserPeriodIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    period?: boolean | PeriodDefaultArgs<ExtArgs>
  }
  export type UserPeriodIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    period?: boolean | PeriodDefaultArgs<ExtArgs>
  }

  export type $UserPeriodPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserPeriod"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      period: Prisma.$PeriodPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      enrollmentDate: Date
      userId: number
      periodId: number
    }, ExtArgs["result"]["userPeriod"]>
    composites: {}
  }

  type UserPeriodGetPayload<S extends boolean | null | undefined | UserPeriodDefaultArgs> = $Result.GetResult<Prisma.$UserPeriodPayload, S>

  type UserPeriodCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserPeriodFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserPeriodCountAggregateInputType | true
    }

  export interface UserPeriodDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserPeriod'], meta: { name: 'UserPeriod' } }
    /**
     * Find zero or one UserPeriod that matches the filter.
     * @param {UserPeriodFindUniqueArgs} args - Arguments to find a UserPeriod
     * @example
     * // Get one UserPeriod
     * const userPeriod = await prisma.userPeriod.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserPeriodFindUniqueArgs>(args: SelectSubset<T, UserPeriodFindUniqueArgs<ExtArgs>>): Prisma__UserPeriodClient<$Result.GetResult<Prisma.$UserPeriodPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserPeriod that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserPeriodFindUniqueOrThrowArgs} args - Arguments to find a UserPeriod
     * @example
     * // Get one UserPeriod
     * const userPeriod = await prisma.userPeriod.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserPeriodFindUniqueOrThrowArgs>(args: SelectSubset<T, UserPeriodFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserPeriodClient<$Result.GetResult<Prisma.$UserPeriodPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserPeriod that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserPeriodFindFirstArgs} args - Arguments to find a UserPeriod
     * @example
     * // Get one UserPeriod
     * const userPeriod = await prisma.userPeriod.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserPeriodFindFirstArgs>(args?: SelectSubset<T, UserPeriodFindFirstArgs<ExtArgs>>): Prisma__UserPeriodClient<$Result.GetResult<Prisma.$UserPeriodPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserPeriod that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserPeriodFindFirstOrThrowArgs} args - Arguments to find a UserPeriod
     * @example
     * // Get one UserPeriod
     * const userPeriod = await prisma.userPeriod.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserPeriodFindFirstOrThrowArgs>(args?: SelectSubset<T, UserPeriodFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserPeriodClient<$Result.GetResult<Prisma.$UserPeriodPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserPeriods that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserPeriodFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserPeriods
     * const userPeriods = await prisma.userPeriod.findMany()
     * 
     * // Get first 10 UserPeriods
     * const userPeriods = await prisma.userPeriod.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userPeriodWithIdOnly = await prisma.userPeriod.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserPeriodFindManyArgs>(args?: SelectSubset<T, UserPeriodFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPeriodPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserPeriod.
     * @param {UserPeriodCreateArgs} args - Arguments to create a UserPeriod.
     * @example
     * // Create one UserPeriod
     * const UserPeriod = await prisma.userPeriod.create({
     *   data: {
     *     // ... data to create a UserPeriod
     *   }
     * })
     * 
     */
    create<T extends UserPeriodCreateArgs>(args: SelectSubset<T, UserPeriodCreateArgs<ExtArgs>>): Prisma__UserPeriodClient<$Result.GetResult<Prisma.$UserPeriodPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserPeriods.
     * @param {UserPeriodCreateManyArgs} args - Arguments to create many UserPeriods.
     * @example
     * // Create many UserPeriods
     * const userPeriod = await prisma.userPeriod.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserPeriodCreateManyArgs>(args?: SelectSubset<T, UserPeriodCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserPeriods and returns the data saved in the database.
     * @param {UserPeriodCreateManyAndReturnArgs} args - Arguments to create many UserPeriods.
     * @example
     * // Create many UserPeriods
     * const userPeriod = await prisma.userPeriod.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserPeriods and only return the `id`
     * const userPeriodWithIdOnly = await prisma.userPeriod.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserPeriodCreateManyAndReturnArgs>(args?: SelectSubset<T, UserPeriodCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPeriodPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UserPeriod.
     * @param {UserPeriodDeleteArgs} args - Arguments to delete one UserPeriod.
     * @example
     * // Delete one UserPeriod
     * const UserPeriod = await prisma.userPeriod.delete({
     *   where: {
     *     // ... filter to delete one UserPeriod
     *   }
     * })
     * 
     */
    delete<T extends UserPeriodDeleteArgs>(args: SelectSubset<T, UserPeriodDeleteArgs<ExtArgs>>): Prisma__UserPeriodClient<$Result.GetResult<Prisma.$UserPeriodPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserPeriod.
     * @param {UserPeriodUpdateArgs} args - Arguments to update one UserPeriod.
     * @example
     * // Update one UserPeriod
     * const userPeriod = await prisma.userPeriod.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserPeriodUpdateArgs>(args: SelectSubset<T, UserPeriodUpdateArgs<ExtArgs>>): Prisma__UserPeriodClient<$Result.GetResult<Prisma.$UserPeriodPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserPeriods.
     * @param {UserPeriodDeleteManyArgs} args - Arguments to filter UserPeriods to delete.
     * @example
     * // Delete a few UserPeriods
     * const { count } = await prisma.userPeriod.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserPeriodDeleteManyArgs>(args?: SelectSubset<T, UserPeriodDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserPeriods.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserPeriodUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserPeriods
     * const userPeriod = await prisma.userPeriod.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserPeriodUpdateManyArgs>(args: SelectSubset<T, UserPeriodUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserPeriods and returns the data updated in the database.
     * @param {UserPeriodUpdateManyAndReturnArgs} args - Arguments to update many UserPeriods.
     * @example
     * // Update many UserPeriods
     * const userPeriod = await prisma.userPeriod.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UserPeriods and only return the `id`
     * const userPeriodWithIdOnly = await prisma.userPeriod.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserPeriodUpdateManyAndReturnArgs>(args: SelectSubset<T, UserPeriodUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPeriodPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UserPeriod.
     * @param {UserPeriodUpsertArgs} args - Arguments to update or create a UserPeriod.
     * @example
     * // Update or create a UserPeriod
     * const userPeriod = await prisma.userPeriod.upsert({
     *   create: {
     *     // ... data to create a UserPeriod
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserPeriod we want to update
     *   }
     * })
     */
    upsert<T extends UserPeriodUpsertArgs>(args: SelectSubset<T, UserPeriodUpsertArgs<ExtArgs>>): Prisma__UserPeriodClient<$Result.GetResult<Prisma.$UserPeriodPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UserPeriods.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserPeriodCountArgs} args - Arguments to filter UserPeriods to count.
     * @example
     * // Count the number of UserPeriods
     * const count = await prisma.userPeriod.count({
     *   where: {
     *     // ... the filter for the UserPeriods we want to count
     *   }
     * })
    **/
    count<T extends UserPeriodCountArgs>(
      args?: Subset<T, UserPeriodCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserPeriodCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserPeriod.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserPeriodAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserPeriodAggregateArgs>(args: Subset<T, UserPeriodAggregateArgs>): Prisma.PrismaPromise<GetUserPeriodAggregateType<T>>

    /**
     * Group by UserPeriod.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserPeriodGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserPeriodGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserPeriodGroupByArgs['orderBy'] }
        : { orderBy?: UserPeriodGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserPeriodGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserPeriodGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserPeriod model
   */
  readonly fields: UserPeriodFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserPeriod.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserPeriodClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    period<T extends PeriodDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PeriodDefaultArgs<ExtArgs>>): Prisma__PeriodClient<$Result.GetResult<Prisma.$PeriodPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the UserPeriod model
   */
  interface UserPeriodFieldRefs {
    readonly id: FieldRef<"UserPeriod", 'Int'>
    readonly enrollmentDate: FieldRef<"UserPeriod", 'DateTime'>
    readonly userId: FieldRef<"UserPeriod", 'Int'>
    readonly periodId: FieldRef<"UserPeriod", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * UserPeriod findUnique
   */
  export type UserPeriodFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPeriod
     */
    select?: UserPeriodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserPeriod
     */
    omit?: UserPeriodOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPeriodInclude<ExtArgs> | null
    /**
     * Filter, which UserPeriod to fetch.
     */
    where: UserPeriodWhereUniqueInput
  }

  /**
   * UserPeriod findUniqueOrThrow
   */
  export type UserPeriodFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPeriod
     */
    select?: UserPeriodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserPeriod
     */
    omit?: UserPeriodOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPeriodInclude<ExtArgs> | null
    /**
     * Filter, which UserPeriod to fetch.
     */
    where: UserPeriodWhereUniqueInput
  }

  /**
   * UserPeriod findFirst
   */
  export type UserPeriodFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPeriod
     */
    select?: UserPeriodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserPeriod
     */
    omit?: UserPeriodOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPeriodInclude<ExtArgs> | null
    /**
     * Filter, which UserPeriod to fetch.
     */
    where?: UserPeriodWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserPeriods to fetch.
     */
    orderBy?: UserPeriodOrderByWithRelationInput | UserPeriodOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserPeriods.
     */
    cursor?: UserPeriodWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserPeriods from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserPeriods.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserPeriods.
     */
    distinct?: UserPeriodScalarFieldEnum | UserPeriodScalarFieldEnum[]
  }

  /**
   * UserPeriod findFirstOrThrow
   */
  export type UserPeriodFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPeriod
     */
    select?: UserPeriodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserPeriod
     */
    omit?: UserPeriodOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPeriodInclude<ExtArgs> | null
    /**
     * Filter, which UserPeriod to fetch.
     */
    where?: UserPeriodWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserPeriods to fetch.
     */
    orderBy?: UserPeriodOrderByWithRelationInput | UserPeriodOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserPeriods.
     */
    cursor?: UserPeriodWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserPeriods from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserPeriods.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserPeriods.
     */
    distinct?: UserPeriodScalarFieldEnum | UserPeriodScalarFieldEnum[]
  }

  /**
   * UserPeriod findMany
   */
  export type UserPeriodFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPeriod
     */
    select?: UserPeriodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserPeriod
     */
    omit?: UserPeriodOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPeriodInclude<ExtArgs> | null
    /**
     * Filter, which UserPeriods to fetch.
     */
    where?: UserPeriodWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserPeriods to fetch.
     */
    orderBy?: UserPeriodOrderByWithRelationInput | UserPeriodOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserPeriods.
     */
    cursor?: UserPeriodWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserPeriods from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserPeriods.
     */
    skip?: number
    distinct?: UserPeriodScalarFieldEnum | UserPeriodScalarFieldEnum[]
  }

  /**
   * UserPeriod create
   */
  export type UserPeriodCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPeriod
     */
    select?: UserPeriodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserPeriod
     */
    omit?: UserPeriodOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPeriodInclude<ExtArgs> | null
    /**
     * The data needed to create a UserPeriod.
     */
    data: XOR<UserPeriodCreateInput, UserPeriodUncheckedCreateInput>
  }

  /**
   * UserPeriod createMany
   */
  export type UserPeriodCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserPeriods.
     */
    data: UserPeriodCreateManyInput | UserPeriodCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserPeriod createManyAndReturn
   */
  export type UserPeriodCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPeriod
     */
    select?: UserPeriodSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserPeriod
     */
    omit?: UserPeriodOmit<ExtArgs> | null
    /**
     * The data used to create many UserPeriods.
     */
    data: UserPeriodCreateManyInput | UserPeriodCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPeriodIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserPeriod update
   */
  export type UserPeriodUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPeriod
     */
    select?: UserPeriodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserPeriod
     */
    omit?: UserPeriodOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPeriodInclude<ExtArgs> | null
    /**
     * The data needed to update a UserPeriod.
     */
    data: XOR<UserPeriodUpdateInput, UserPeriodUncheckedUpdateInput>
    /**
     * Choose, which UserPeriod to update.
     */
    where: UserPeriodWhereUniqueInput
  }

  /**
   * UserPeriod updateMany
   */
  export type UserPeriodUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserPeriods.
     */
    data: XOR<UserPeriodUpdateManyMutationInput, UserPeriodUncheckedUpdateManyInput>
    /**
     * Filter which UserPeriods to update
     */
    where?: UserPeriodWhereInput
    /**
     * Limit how many UserPeriods to update.
     */
    limit?: number
  }

  /**
   * UserPeriod updateManyAndReturn
   */
  export type UserPeriodUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPeriod
     */
    select?: UserPeriodSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserPeriod
     */
    omit?: UserPeriodOmit<ExtArgs> | null
    /**
     * The data used to update UserPeriods.
     */
    data: XOR<UserPeriodUpdateManyMutationInput, UserPeriodUncheckedUpdateManyInput>
    /**
     * Filter which UserPeriods to update
     */
    where?: UserPeriodWhereInput
    /**
     * Limit how many UserPeriods to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPeriodIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserPeriod upsert
   */
  export type UserPeriodUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPeriod
     */
    select?: UserPeriodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserPeriod
     */
    omit?: UserPeriodOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPeriodInclude<ExtArgs> | null
    /**
     * The filter to search for the UserPeriod to update in case it exists.
     */
    where: UserPeriodWhereUniqueInput
    /**
     * In case the UserPeriod found by the `where` argument doesn't exist, create a new UserPeriod with this data.
     */
    create: XOR<UserPeriodCreateInput, UserPeriodUncheckedCreateInput>
    /**
     * In case the UserPeriod was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserPeriodUpdateInput, UserPeriodUncheckedUpdateInput>
  }

  /**
   * UserPeriod delete
   */
  export type UserPeriodDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPeriod
     */
    select?: UserPeriodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserPeriod
     */
    omit?: UserPeriodOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPeriodInclude<ExtArgs> | null
    /**
     * Filter which UserPeriod to delete.
     */
    where: UserPeriodWhereUniqueInput
  }

  /**
   * UserPeriod deleteMany
   */
  export type UserPeriodDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserPeriods to delete
     */
    where?: UserPeriodWhereInput
    /**
     * Limit how many UserPeriods to delete.
     */
    limit?: number
  }

  /**
   * UserPeriod without action
   */
  export type UserPeriodDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPeriod
     */
    select?: UserPeriodSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserPeriod
     */
    omit?: UserPeriodOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPeriodInclude<ExtArgs> | null
  }


  /**
   * Model Teacher
   */

  export type AggregateTeacher = {
    _count: TeacherCountAggregateOutputType | null
    _avg: TeacherAvgAggregateOutputType | null
    _sum: TeacherSumAggregateOutputType | null
    _min: TeacherMinAggregateOutputType | null
    _max: TeacherMaxAggregateOutputType | null
  }

  export type TeacherAvgAggregateOutputType = {
    id: number | null
  }

  export type TeacherSumAggregateOutputType = {
    id: number | null
  }

  export type TeacherMinAggregateOutputType = {
    id: number | null
    name: string | null
    lastname: string | null
  }

  export type TeacherMaxAggregateOutputType = {
    id: number | null
    name: string | null
    lastname: string | null
  }

  export type TeacherCountAggregateOutputType = {
    id: number
    name: number
    lastname: number
    _all: number
  }


  export type TeacherAvgAggregateInputType = {
    id?: true
  }

  export type TeacherSumAggregateInputType = {
    id?: true
  }

  export type TeacherMinAggregateInputType = {
    id?: true
    name?: true
    lastname?: true
  }

  export type TeacherMaxAggregateInputType = {
    id?: true
    name?: true
    lastname?: true
  }

  export type TeacherCountAggregateInputType = {
    id?: true
    name?: true
    lastname?: true
    _all?: true
  }

  export type TeacherAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Teacher to aggregate.
     */
    where?: TeacherWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Teachers to fetch.
     */
    orderBy?: TeacherOrderByWithRelationInput | TeacherOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TeacherWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Teachers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Teachers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Teachers
    **/
    _count?: true | TeacherCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TeacherAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TeacherSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TeacherMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TeacherMaxAggregateInputType
  }

  export type GetTeacherAggregateType<T extends TeacherAggregateArgs> = {
        [P in keyof T & keyof AggregateTeacher]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTeacher[P]>
      : GetScalarType<T[P], AggregateTeacher[P]>
  }




  export type TeacherGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TeacherWhereInput
    orderBy?: TeacherOrderByWithAggregationInput | TeacherOrderByWithAggregationInput[]
    by: TeacherScalarFieldEnum[] | TeacherScalarFieldEnum
    having?: TeacherScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TeacherCountAggregateInputType | true
    _avg?: TeacherAvgAggregateInputType
    _sum?: TeacherSumAggregateInputType
    _min?: TeacherMinAggregateInputType
    _max?: TeacherMaxAggregateInputType
  }

  export type TeacherGroupByOutputType = {
    id: number
    name: string
    lastname: string
    _count: TeacherCountAggregateOutputType | null
    _avg: TeacherAvgAggregateOutputType | null
    _sum: TeacherSumAggregateOutputType | null
    _min: TeacherMinAggregateOutputType | null
    _max: TeacherMaxAggregateOutputType | null
  }

  type GetTeacherGroupByPayload<T extends TeacherGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TeacherGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TeacherGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TeacherGroupByOutputType[P]>
            : GetScalarType<T[P], TeacherGroupByOutputType[P]>
        }
      >
    >


  export type TeacherSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    lastname?: boolean
    courses?: boolean | Teacher$coursesArgs<ExtArgs>
    _count?: boolean | TeacherCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["teacher"]>

  export type TeacherSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    lastname?: boolean
  }, ExtArgs["result"]["teacher"]>

  export type TeacherSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    lastname?: boolean
  }, ExtArgs["result"]["teacher"]>

  export type TeacherSelectScalar = {
    id?: boolean
    name?: boolean
    lastname?: boolean
  }

  export type TeacherOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "lastname", ExtArgs["result"]["teacher"]>
  export type TeacherInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    courses?: boolean | Teacher$coursesArgs<ExtArgs>
    _count?: boolean | TeacherCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TeacherIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type TeacherIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $TeacherPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Teacher"
    objects: {
      courses: Prisma.$CoursePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      lastname: string
    }, ExtArgs["result"]["teacher"]>
    composites: {}
  }

  type TeacherGetPayload<S extends boolean | null | undefined | TeacherDefaultArgs> = $Result.GetResult<Prisma.$TeacherPayload, S>

  type TeacherCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TeacherFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TeacherCountAggregateInputType | true
    }

  export interface TeacherDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Teacher'], meta: { name: 'Teacher' } }
    /**
     * Find zero or one Teacher that matches the filter.
     * @param {TeacherFindUniqueArgs} args - Arguments to find a Teacher
     * @example
     * // Get one Teacher
     * const teacher = await prisma.teacher.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TeacherFindUniqueArgs>(args: SelectSubset<T, TeacherFindUniqueArgs<ExtArgs>>): Prisma__TeacherClient<$Result.GetResult<Prisma.$TeacherPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Teacher that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TeacherFindUniqueOrThrowArgs} args - Arguments to find a Teacher
     * @example
     * // Get one Teacher
     * const teacher = await prisma.teacher.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TeacherFindUniqueOrThrowArgs>(args: SelectSubset<T, TeacherFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TeacherClient<$Result.GetResult<Prisma.$TeacherPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Teacher that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeacherFindFirstArgs} args - Arguments to find a Teacher
     * @example
     * // Get one Teacher
     * const teacher = await prisma.teacher.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TeacherFindFirstArgs>(args?: SelectSubset<T, TeacherFindFirstArgs<ExtArgs>>): Prisma__TeacherClient<$Result.GetResult<Prisma.$TeacherPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Teacher that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeacherFindFirstOrThrowArgs} args - Arguments to find a Teacher
     * @example
     * // Get one Teacher
     * const teacher = await prisma.teacher.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TeacherFindFirstOrThrowArgs>(args?: SelectSubset<T, TeacherFindFirstOrThrowArgs<ExtArgs>>): Prisma__TeacherClient<$Result.GetResult<Prisma.$TeacherPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Teachers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeacherFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Teachers
     * const teachers = await prisma.teacher.findMany()
     * 
     * // Get first 10 Teachers
     * const teachers = await prisma.teacher.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const teacherWithIdOnly = await prisma.teacher.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TeacherFindManyArgs>(args?: SelectSubset<T, TeacherFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeacherPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Teacher.
     * @param {TeacherCreateArgs} args - Arguments to create a Teacher.
     * @example
     * // Create one Teacher
     * const Teacher = await prisma.teacher.create({
     *   data: {
     *     // ... data to create a Teacher
     *   }
     * })
     * 
     */
    create<T extends TeacherCreateArgs>(args: SelectSubset<T, TeacherCreateArgs<ExtArgs>>): Prisma__TeacherClient<$Result.GetResult<Prisma.$TeacherPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Teachers.
     * @param {TeacherCreateManyArgs} args - Arguments to create many Teachers.
     * @example
     * // Create many Teachers
     * const teacher = await prisma.teacher.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TeacherCreateManyArgs>(args?: SelectSubset<T, TeacherCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Teachers and returns the data saved in the database.
     * @param {TeacherCreateManyAndReturnArgs} args - Arguments to create many Teachers.
     * @example
     * // Create many Teachers
     * const teacher = await prisma.teacher.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Teachers and only return the `id`
     * const teacherWithIdOnly = await prisma.teacher.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TeacherCreateManyAndReturnArgs>(args?: SelectSubset<T, TeacherCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeacherPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Teacher.
     * @param {TeacherDeleteArgs} args - Arguments to delete one Teacher.
     * @example
     * // Delete one Teacher
     * const Teacher = await prisma.teacher.delete({
     *   where: {
     *     // ... filter to delete one Teacher
     *   }
     * })
     * 
     */
    delete<T extends TeacherDeleteArgs>(args: SelectSubset<T, TeacherDeleteArgs<ExtArgs>>): Prisma__TeacherClient<$Result.GetResult<Prisma.$TeacherPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Teacher.
     * @param {TeacherUpdateArgs} args - Arguments to update one Teacher.
     * @example
     * // Update one Teacher
     * const teacher = await prisma.teacher.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TeacherUpdateArgs>(args: SelectSubset<T, TeacherUpdateArgs<ExtArgs>>): Prisma__TeacherClient<$Result.GetResult<Prisma.$TeacherPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Teachers.
     * @param {TeacherDeleteManyArgs} args - Arguments to filter Teachers to delete.
     * @example
     * // Delete a few Teachers
     * const { count } = await prisma.teacher.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TeacherDeleteManyArgs>(args?: SelectSubset<T, TeacherDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Teachers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeacherUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Teachers
     * const teacher = await prisma.teacher.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TeacherUpdateManyArgs>(args: SelectSubset<T, TeacherUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Teachers and returns the data updated in the database.
     * @param {TeacherUpdateManyAndReturnArgs} args - Arguments to update many Teachers.
     * @example
     * // Update many Teachers
     * const teacher = await prisma.teacher.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Teachers and only return the `id`
     * const teacherWithIdOnly = await prisma.teacher.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TeacherUpdateManyAndReturnArgs>(args: SelectSubset<T, TeacherUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeacherPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Teacher.
     * @param {TeacherUpsertArgs} args - Arguments to update or create a Teacher.
     * @example
     * // Update or create a Teacher
     * const teacher = await prisma.teacher.upsert({
     *   create: {
     *     // ... data to create a Teacher
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Teacher we want to update
     *   }
     * })
     */
    upsert<T extends TeacherUpsertArgs>(args: SelectSubset<T, TeacherUpsertArgs<ExtArgs>>): Prisma__TeacherClient<$Result.GetResult<Prisma.$TeacherPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Teachers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeacherCountArgs} args - Arguments to filter Teachers to count.
     * @example
     * // Count the number of Teachers
     * const count = await prisma.teacher.count({
     *   where: {
     *     // ... the filter for the Teachers we want to count
     *   }
     * })
    **/
    count<T extends TeacherCountArgs>(
      args?: Subset<T, TeacherCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TeacherCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Teacher.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeacherAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TeacherAggregateArgs>(args: Subset<T, TeacherAggregateArgs>): Prisma.PrismaPromise<GetTeacherAggregateType<T>>

    /**
     * Group by Teacher.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeacherGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TeacherGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TeacherGroupByArgs['orderBy'] }
        : { orderBy?: TeacherGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TeacherGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTeacherGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Teacher model
   */
  readonly fields: TeacherFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Teacher.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TeacherClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    courses<T extends Teacher$coursesArgs<ExtArgs> = {}>(args?: Subset<T, Teacher$coursesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Teacher model
   */
  interface TeacherFieldRefs {
    readonly id: FieldRef<"Teacher", 'Int'>
    readonly name: FieldRef<"Teacher", 'String'>
    readonly lastname: FieldRef<"Teacher", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Teacher findUnique
   */
  export type TeacherFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Teacher
     */
    select?: TeacherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Teacher
     */
    omit?: TeacherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherInclude<ExtArgs> | null
    /**
     * Filter, which Teacher to fetch.
     */
    where: TeacherWhereUniqueInput
  }

  /**
   * Teacher findUniqueOrThrow
   */
  export type TeacherFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Teacher
     */
    select?: TeacherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Teacher
     */
    omit?: TeacherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherInclude<ExtArgs> | null
    /**
     * Filter, which Teacher to fetch.
     */
    where: TeacherWhereUniqueInput
  }

  /**
   * Teacher findFirst
   */
  export type TeacherFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Teacher
     */
    select?: TeacherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Teacher
     */
    omit?: TeacherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherInclude<ExtArgs> | null
    /**
     * Filter, which Teacher to fetch.
     */
    where?: TeacherWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Teachers to fetch.
     */
    orderBy?: TeacherOrderByWithRelationInput | TeacherOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Teachers.
     */
    cursor?: TeacherWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Teachers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Teachers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Teachers.
     */
    distinct?: TeacherScalarFieldEnum | TeacherScalarFieldEnum[]
  }

  /**
   * Teacher findFirstOrThrow
   */
  export type TeacherFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Teacher
     */
    select?: TeacherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Teacher
     */
    omit?: TeacherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherInclude<ExtArgs> | null
    /**
     * Filter, which Teacher to fetch.
     */
    where?: TeacherWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Teachers to fetch.
     */
    orderBy?: TeacherOrderByWithRelationInput | TeacherOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Teachers.
     */
    cursor?: TeacherWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Teachers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Teachers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Teachers.
     */
    distinct?: TeacherScalarFieldEnum | TeacherScalarFieldEnum[]
  }

  /**
   * Teacher findMany
   */
  export type TeacherFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Teacher
     */
    select?: TeacherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Teacher
     */
    omit?: TeacherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherInclude<ExtArgs> | null
    /**
     * Filter, which Teachers to fetch.
     */
    where?: TeacherWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Teachers to fetch.
     */
    orderBy?: TeacherOrderByWithRelationInput | TeacherOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Teachers.
     */
    cursor?: TeacherWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Teachers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Teachers.
     */
    skip?: number
    distinct?: TeacherScalarFieldEnum | TeacherScalarFieldEnum[]
  }

  /**
   * Teacher create
   */
  export type TeacherCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Teacher
     */
    select?: TeacherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Teacher
     */
    omit?: TeacherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherInclude<ExtArgs> | null
    /**
     * The data needed to create a Teacher.
     */
    data: XOR<TeacherCreateInput, TeacherUncheckedCreateInput>
  }

  /**
   * Teacher createMany
   */
  export type TeacherCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Teachers.
     */
    data: TeacherCreateManyInput | TeacherCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Teacher createManyAndReturn
   */
  export type TeacherCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Teacher
     */
    select?: TeacherSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Teacher
     */
    omit?: TeacherOmit<ExtArgs> | null
    /**
     * The data used to create many Teachers.
     */
    data: TeacherCreateManyInput | TeacherCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Teacher update
   */
  export type TeacherUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Teacher
     */
    select?: TeacherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Teacher
     */
    omit?: TeacherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherInclude<ExtArgs> | null
    /**
     * The data needed to update a Teacher.
     */
    data: XOR<TeacherUpdateInput, TeacherUncheckedUpdateInput>
    /**
     * Choose, which Teacher to update.
     */
    where: TeacherWhereUniqueInput
  }

  /**
   * Teacher updateMany
   */
  export type TeacherUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Teachers.
     */
    data: XOR<TeacherUpdateManyMutationInput, TeacherUncheckedUpdateManyInput>
    /**
     * Filter which Teachers to update
     */
    where?: TeacherWhereInput
    /**
     * Limit how many Teachers to update.
     */
    limit?: number
  }

  /**
   * Teacher updateManyAndReturn
   */
  export type TeacherUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Teacher
     */
    select?: TeacherSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Teacher
     */
    omit?: TeacherOmit<ExtArgs> | null
    /**
     * The data used to update Teachers.
     */
    data: XOR<TeacherUpdateManyMutationInput, TeacherUncheckedUpdateManyInput>
    /**
     * Filter which Teachers to update
     */
    where?: TeacherWhereInput
    /**
     * Limit how many Teachers to update.
     */
    limit?: number
  }

  /**
   * Teacher upsert
   */
  export type TeacherUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Teacher
     */
    select?: TeacherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Teacher
     */
    omit?: TeacherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherInclude<ExtArgs> | null
    /**
     * The filter to search for the Teacher to update in case it exists.
     */
    where: TeacherWhereUniqueInput
    /**
     * In case the Teacher found by the `where` argument doesn't exist, create a new Teacher with this data.
     */
    create: XOR<TeacherCreateInput, TeacherUncheckedCreateInput>
    /**
     * In case the Teacher was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TeacherUpdateInput, TeacherUncheckedUpdateInput>
  }

  /**
   * Teacher delete
   */
  export type TeacherDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Teacher
     */
    select?: TeacherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Teacher
     */
    omit?: TeacherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherInclude<ExtArgs> | null
    /**
     * Filter which Teacher to delete.
     */
    where: TeacherWhereUniqueInput
  }

  /**
   * Teacher deleteMany
   */
  export type TeacherDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Teachers to delete
     */
    where?: TeacherWhereInput
    /**
     * Limit how many Teachers to delete.
     */
    limit?: number
  }

  /**
   * Teacher.courses
   */
  export type Teacher$coursesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    where?: CourseWhereInput
    orderBy?: CourseOrderByWithRelationInput | CourseOrderByWithRelationInput[]
    cursor?: CourseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CourseScalarFieldEnum | CourseScalarFieldEnum[]
  }

  /**
   * Teacher without action
   */
  export type TeacherDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Teacher
     */
    select?: TeacherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Teacher
     */
    omit?: TeacherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherInclude<ExtArgs> | null
  }


  /**
   * Model Course
   */

  export type AggregateCourse = {
    _count: CourseCountAggregateOutputType | null
    _avg: CourseAvgAggregateOutputType | null
    _sum: CourseSumAggregateOutputType | null
    _min: CourseMinAggregateOutputType | null
    _max: CourseMaxAggregateOutputType | null
  }

  export type CourseAvgAggregateOutputType = {
    id: number | null
    teacherId: number | null
    credits: number | null
    periodId: number | null
  }

  export type CourseSumAggregateOutputType = {
    id: number | null
    teacherId: number | null
    credits: number | null
    periodId: number | null
  }

  export type CourseMinAggregateOutputType = {
    id: number | null
    name: string | null
    code: string | null
    state: $Enums.CourseState | null
    teacherId: number | null
    credits: number | null
    periodId: number | null
  }

  export type CourseMaxAggregateOutputType = {
    id: number | null
    name: string | null
    code: string | null
    state: $Enums.CourseState | null
    teacherId: number | null
    credits: number | null
    periodId: number | null
  }

  export type CourseCountAggregateOutputType = {
    id: number
    name: number
    code: number
    state: number
    teacherId: number
    credits: number
    periodId: number
    _all: number
  }


  export type CourseAvgAggregateInputType = {
    id?: true
    teacherId?: true
    credits?: true
    periodId?: true
  }

  export type CourseSumAggregateInputType = {
    id?: true
    teacherId?: true
    credits?: true
    periodId?: true
  }

  export type CourseMinAggregateInputType = {
    id?: true
    name?: true
    code?: true
    state?: true
    teacherId?: true
    credits?: true
    periodId?: true
  }

  export type CourseMaxAggregateInputType = {
    id?: true
    name?: true
    code?: true
    state?: true
    teacherId?: true
    credits?: true
    periodId?: true
  }

  export type CourseCountAggregateInputType = {
    id?: true
    name?: true
    code?: true
    state?: true
    teacherId?: true
    credits?: true
    periodId?: true
    _all?: true
  }

  export type CourseAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Course to aggregate.
     */
    where?: CourseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Courses to fetch.
     */
    orderBy?: CourseOrderByWithRelationInput | CourseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CourseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Courses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Courses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Courses
    **/
    _count?: true | CourseCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CourseAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CourseSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CourseMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CourseMaxAggregateInputType
  }

  export type GetCourseAggregateType<T extends CourseAggregateArgs> = {
        [P in keyof T & keyof AggregateCourse]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCourse[P]>
      : GetScalarType<T[P], AggregateCourse[P]>
  }




  export type CourseGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CourseWhereInput
    orderBy?: CourseOrderByWithAggregationInput | CourseOrderByWithAggregationInput[]
    by: CourseScalarFieldEnum[] | CourseScalarFieldEnum
    having?: CourseScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CourseCountAggregateInputType | true
    _avg?: CourseAvgAggregateInputType
    _sum?: CourseSumAggregateInputType
    _min?: CourseMinAggregateInputType
    _max?: CourseMaxAggregateInputType
  }

  export type CourseGroupByOutputType = {
    id: number
    name: string
    code: string
    state: $Enums.CourseState
    teacherId: number | null
    credits: number
    periodId: number
    _count: CourseCountAggregateOutputType | null
    _avg: CourseAvgAggregateOutputType | null
    _sum: CourseSumAggregateOutputType | null
    _min: CourseMinAggregateOutputType | null
    _max: CourseMaxAggregateOutputType | null
  }

  type GetCourseGroupByPayload<T extends CourseGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CourseGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CourseGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CourseGroupByOutputType[P]>
            : GetScalarType<T[P], CourseGroupByOutputType[P]>
        }
      >
    >


  export type CourseSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    code?: boolean
    state?: boolean
    teacherId?: boolean
    credits?: boolean
    periodId?: boolean
    teacher?: boolean | Course$teacherArgs<ExtArgs>
    period?: boolean | PeriodDefaultArgs<ExtArgs>
    tasks?: boolean | Course$tasksArgs<ExtArgs>
    _count?: boolean | CourseCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["course"]>

  export type CourseSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    code?: boolean
    state?: boolean
    teacherId?: boolean
    credits?: boolean
    periodId?: boolean
    teacher?: boolean | Course$teacherArgs<ExtArgs>
    period?: boolean | PeriodDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["course"]>

  export type CourseSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    code?: boolean
    state?: boolean
    teacherId?: boolean
    credits?: boolean
    periodId?: boolean
    teacher?: boolean | Course$teacherArgs<ExtArgs>
    period?: boolean | PeriodDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["course"]>

  export type CourseSelectScalar = {
    id?: boolean
    name?: boolean
    code?: boolean
    state?: boolean
    teacherId?: boolean
    credits?: boolean
    periodId?: boolean
  }

  export type CourseOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "code" | "state" | "teacherId" | "credits" | "periodId", ExtArgs["result"]["course"]>
  export type CourseInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    teacher?: boolean | Course$teacherArgs<ExtArgs>
    period?: boolean | PeriodDefaultArgs<ExtArgs>
    tasks?: boolean | Course$tasksArgs<ExtArgs>
    _count?: boolean | CourseCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CourseIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    teacher?: boolean | Course$teacherArgs<ExtArgs>
    period?: boolean | PeriodDefaultArgs<ExtArgs>
  }
  export type CourseIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    teacher?: boolean | Course$teacherArgs<ExtArgs>
    period?: boolean | PeriodDefaultArgs<ExtArgs>
  }

  export type $CoursePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Course"
    objects: {
      teacher: Prisma.$TeacherPayload<ExtArgs> | null
      period: Prisma.$PeriodPayload<ExtArgs>
      tasks: Prisma.$TaskPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      code: string
      state: $Enums.CourseState
      teacherId: number | null
      credits: number
      periodId: number
    }, ExtArgs["result"]["course"]>
    composites: {}
  }

  type CourseGetPayload<S extends boolean | null | undefined | CourseDefaultArgs> = $Result.GetResult<Prisma.$CoursePayload, S>

  type CourseCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CourseFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CourseCountAggregateInputType | true
    }

  export interface CourseDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Course'], meta: { name: 'Course' } }
    /**
     * Find zero or one Course that matches the filter.
     * @param {CourseFindUniqueArgs} args - Arguments to find a Course
     * @example
     * // Get one Course
     * const course = await prisma.course.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CourseFindUniqueArgs>(args: SelectSubset<T, CourseFindUniqueArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Course that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CourseFindUniqueOrThrowArgs} args - Arguments to find a Course
     * @example
     * // Get one Course
     * const course = await prisma.course.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CourseFindUniqueOrThrowArgs>(args: SelectSubset<T, CourseFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Course that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseFindFirstArgs} args - Arguments to find a Course
     * @example
     * // Get one Course
     * const course = await prisma.course.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CourseFindFirstArgs>(args?: SelectSubset<T, CourseFindFirstArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Course that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseFindFirstOrThrowArgs} args - Arguments to find a Course
     * @example
     * // Get one Course
     * const course = await prisma.course.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CourseFindFirstOrThrowArgs>(args?: SelectSubset<T, CourseFindFirstOrThrowArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Courses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Courses
     * const courses = await prisma.course.findMany()
     * 
     * // Get first 10 Courses
     * const courses = await prisma.course.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const courseWithIdOnly = await prisma.course.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CourseFindManyArgs>(args?: SelectSubset<T, CourseFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Course.
     * @param {CourseCreateArgs} args - Arguments to create a Course.
     * @example
     * // Create one Course
     * const Course = await prisma.course.create({
     *   data: {
     *     // ... data to create a Course
     *   }
     * })
     * 
     */
    create<T extends CourseCreateArgs>(args: SelectSubset<T, CourseCreateArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Courses.
     * @param {CourseCreateManyArgs} args - Arguments to create many Courses.
     * @example
     * // Create many Courses
     * const course = await prisma.course.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CourseCreateManyArgs>(args?: SelectSubset<T, CourseCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Courses and returns the data saved in the database.
     * @param {CourseCreateManyAndReturnArgs} args - Arguments to create many Courses.
     * @example
     * // Create many Courses
     * const course = await prisma.course.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Courses and only return the `id`
     * const courseWithIdOnly = await prisma.course.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CourseCreateManyAndReturnArgs>(args?: SelectSubset<T, CourseCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Course.
     * @param {CourseDeleteArgs} args - Arguments to delete one Course.
     * @example
     * // Delete one Course
     * const Course = await prisma.course.delete({
     *   where: {
     *     // ... filter to delete one Course
     *   }
     * })
     * 
     */
    delete<T extends CourseDeleteArgs>(args: SelectSubset<T, CourseDeleteArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Course.
     * @param {CourseUpdateArgs} args - Arguments to update one Course.
     * @example
     * // Update one Course
     * const course = await prisma.course.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CourseUpdateArgs>(args: SelectSubset<T, CourseUpdateArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Courses.
     * @param {CourseDeleteManyArgs} args - Arguments to filter Courses to delete.
     * @example
     * // Delete a few Courses
     * const { count } = await prisma.course.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CourseDeleteManyArgs>(args?: SelectSubset<T, CourseDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Courses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Courses
     * const course = await prisma.course.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CourseUpdateManyArgs>(args: SelectSubset<T, CourseUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Courses and returns the data updated in the database.
     * @param {CourseUpdateManyAndReturnArgs} args - Arguments to update many Courses.
     * @example
     * // Update many Courses
     * const course = await prisma.course.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Courses and only return the `id`
     * const courseWithIdOnly = await prisma.course.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CourseUpdateManyAndReturnArgs>(args: SelectSubset<T, CourseUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Course.
     * @param {CourseUpsertArgs} args - Arguments to update or create a Course.
     * @example
     * // Update or create a Course
     * const course = await prisma.course.upsert({
     *   create: {
     *     // ... data to create a Course
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Course we want to update
     *   }
     * })
     */
    upsert<T extends CourseUpsertArgs>(args: SelectSubset<T, CourseUpsertArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Courses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseCountArgs} args - Arguments to filter Courses to count.
     * @example
     * // Count the number of Courses
     * const count = await prisma.course.count({
     *   where: {
     *     // ... the filter for the Courses we want to count
     *   }
     * })
    **/
    count<T extends CourseCountArgs>(
      args?: Subset<T, CourseCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CourseCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Course.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CourseAggregateArgs>(args: Subset<T, CourseAggregateArgs>): Prisma.PrismaPromise<GetCourseAggregateType<T>>

    /**
     * Group by Course.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CourseGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CourseGroupByArgs['orderBy'] }
        : { orderBy?: CourseGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CourseGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCourseGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Course model
   */
  readonly fields: CourseFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Course.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CourseClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    teacher<T extends Course$teacherArgs<ExtArgs> = {}>(args?: Subset<T, Course$teacherArgs<ExtArgs>>): Prisma__TeacherClient<$Result.GetResult<Prisma.$TeacherPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    period<T extends PeriodDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PeriodDefaultArgs<ExtArgs>>): Prisma__PeriodClient<$Result.GetResult<Prisma.$PeriodPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    tasks<T extends Course$tasksArgs<ExtArgs> = {}>(args?: Subset<T, Course$tasksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Course model
   */
  interface CourseFieldRefs {
    readonly id: FieldRef<"Course", 'Int'>
    readonly name: FieldRef<"Course", 'String'>
    readonly code: FieldRef<"Course", 'String'>
    readonly state: FieldRef<"Course", 'CourseState'>
    readonly teacherId: FieldRef<"Course", 'Int'>
    readonly credits: FieldRef<"Course", 'Int'>
    readonly periodId: FieldRef<"Course", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Course findUnique
   */
  export type CourseFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * Filter, which Course to fetch.
     */
    where: CourseWhereUniqueInput
  }

  /**
   * Course findUniqueOrThrow
   */
  export type CourseFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * Filter, which Course to fetch.
     */
    where: CourseWhereUniqueInput
  }

  /**
   * Course findFirst
   */
  export type CourseFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * Filter, which Course to fetch.
     */
    where?: CourseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Courses to fetch.
     */
    orderBy?: CourseOrderByWithRelationInput | CourseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Courses.
     */
    cursor?: CourseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Courses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Courses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Courses.
     */
    distinct?: CourseScalarFieldEnum | CourseScalarFieldEnum[]
  }

  /**
   * Course findFirstOrThrow
   */
  export type CourseFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * Filter, which Course to fetch.
     */
    where?: CourseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Courses to fetch.
     */
    orderBy?: CourseOrderByWithRelationInput | CourseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Courses.
     */
    cursor?: CourseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Courses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Courses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Courses.
     */
    distinct?: CourseScalarFieldEnum | CourseScalarFieldEnum[]
  }

  /**
   * Course findMany
   */
  export type CourseFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * Filter, which Courses to fetch.
     */
    where?: CourseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Courses to fetch.
     */
    orderBy?: CourseOrderByWithRelationInput | CourseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Courses.
     */
    cursor?: CourseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Courses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Courses.
     */
    skip?: number
    distinct?: CourseScalarFieldEnum | CourseScalarFieldEnum[]
  }

  /**
   * Course create
   */
  export type CourseCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * The data needed to create a Course.
     */
    data: XOR<CourseCreateInput, CourseUncheckedCreateInput>
  }

  /**
   * Course createMany
   */
  export type CourseCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Courses.
     */
    data: CourseCreateManyInput | CourseCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Course createManyAndReturn
   */
  export type CourseCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * The data used to create many Courses.
     */
    data: CourseCreateManyInput | CourseCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Course update
   */
  export type CourseUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * The data needed to update a Course.
     */
    data: XOR<CourseUpdateInput, CourseUncheckedUpdateInput>
    /**
     * Choose, which Course to update.
     */
    where: CourseWhereUniqueInput
  }

  /**
   * Course updateMany
   */
  export type CourseUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Courses.
     */
    data: XOR<CourseUpdateManyMutationInput, CourseUncheckedUpdateManyInput>
    /**
     * Filter which Courses to update
     */
    where?: CourseWhereInput
    /**
     * Limit how many Courses to update.
     */
    limit?: number
  }

  /**
   * Course updateManyAndReturn
   */
  export type CourseUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * The data used to update Courses.
     */
    data: XOR<CourseUpdateManyMutationInput, CourseUncheckedUpdateManyInput>
    /**
     * Filter which Courses to update
     */
    where?: CourseWhereInput
    /**
     * Limit how many Courses to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Course upsert
   */
  export type CourseUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * The filter to search for the Course to update in case it exists.
     */
    where: CourseWhereUniqueInput
    /**
     * In case the Course found by the `where` argument doesn't exist, create a new Course with this data.
     */
    create: XOR<CourseCreateInput, CourseUncheckedCreateInput>
    /**
     * In case the Course was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CourseUpdateInput, CourseUncheckedUpdateInput>
  }

  /**
   * Course delete
   */
  export type CourseDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * Filter which Course to delete.
     */
    where: CourseWhereUniqueInput
  }

  /**
   * Course deleteMany
   */
  export type CourseDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Courses to delete
     */
    where?: CourseWhereInput
    /**
     * Limit how many Courses to delete.
     */
    limit?: number
  }

  /**
   * Course.teacher
   */
  export type Course$teacherArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Teacher
     */
    select?: TeacherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Teacher
     */
    omit?: TeacherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherInclude<ExtArgs> | null
    where?: TeacherWhereInput
  }

  /**
   * Course.tasks
   */
  export type Course$tasksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    where?: TaskWhereInput
    orderBy?: TaskOrderByWithRelationInput | TaskOrderByWithRelationInput[]
    cursor?: TaskWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TaskScalarFieldEnum | TaskScalarFieldEnum[]
  }

  /**
   * Course without action
   */
  export type CourseDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
  }


  /**
   * Model TaskState
   */

  export type AggregateTaskState = {
    _count: TaskStateCountAggregateOutputType | null
    _avg: TaskStateAvgAggregateOutputType | null
    _sum: TaskStateSumAggregateOutputType | null
    _min: TaskStateMinAggregateOutputType | null
    _max: TaskStateMaxAggregateOutputType | null
  }

  export type TaskStateAvgAggregateOutputType = {
    id: number | null
  }

  export type TaskStateSumAggregateOutputType = {
    id: number | null
  }

  export type TaskStateMinAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type TaskStateMaxAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type TaskStateCountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }


  export type TaskStateAvgAggregateInputType = {
    id?: true
  }

  export type TaskStateSumAggregateInputType = {
    id?: true
  }

  export type TaskStateMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type TaskStateMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type TaskStateCountAggregateInputType = {
    id?: true
    name?: true
    _all?: true
  }

  export type TaskStateAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TaskState to aggregate.
     */
    where?: TaskStateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TaskStates to fetch.
     */
    orderBy?: TaskStateOrderByWithRelationInput | TaskStateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TaskStateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TaskStates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TaskStates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TaskStates
    **/
    _count?: true | TaskStateCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TaskStateAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TaskStateSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TaskStateMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TaskStateMaxAggregateInputType
  }

  export type GetTaskStateAggregateType<T extends TaskStateAggregateArgs> = {
        [P in keyof T & keyof AggregateTaskState]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTaskState[P]>
      : GetScalarType<T[P], AggregateTaskState[P]>
  }




  export type TaskStateGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TaskStateWhereInput
    orderBy?: TaskStateOrderByWithAggregationInput | TaskStateOrderByWithAggregationInput[]
    by: TaskStateScalarFieldEnum[] | TaskStateScalarFieldEnum
    having?: TaskStateScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TaskStateCountAggregateInputType | true
    _avg?: TaskStateAvgAggregateInputType
    _sum?: TaskStateSumAggregateInputType
    _min?: TaskStateMinAggregateInputType
    _max?: TaskStateMaxAggregateInputType
  }

  export type TaskStateGroupByOutputType = {
    id: number
    name: string
    _count: TaskStateCountAggregateOutputType | null
    _avg: TaskStateAvgAggregateOutputType | null
    _sum: TaskStateSumAggregateOutputType | null
    _min: TaskStateMinAggregateOutputType | null
    _max: TaskStateMaxAggregateOutputType | null
  }

  type GetTaskStateGroupByPayload<T extends TaskStateGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TaskStateGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TaskStateGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TaskStateGroupByOutputType[P]>
            : GetScalarType<T[P], TaskStateGroupByOutputType[P]>
        }
      >
    >


  export type TaskStateSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    tasks?: boolean | TaskState$tasksArgs<ExtArgs>
    deliverables?: boolean | TaskState$deliverablesArgs<ExtArgs>
    _count?: boolean | TaskStateCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["taskState"]>

  export type TaskStateSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["taskState"]>

  export type TaskStateSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["taskState"]>

  export type TaskStateSelectScalar = {
    id?: boolean
    name?: boolean
  }

  export type TaskStateOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name", ExtArgs["result"]["taskState"]>
  export type TaskStateInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tasks?: boolean | TaskState$tasksArgs<ExtArgs>
    deliverables?: boolean | TaskState$deliverablesArgs<ExtArgs>
    _count?: boolean | TaskStateCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TaskStateIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type TaskStateIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $TaskStatePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TaskState"
    objects: {
      tasks: Prisma.$TaskPayload<ExtArgs>[]
      deliverables: Prisma.$DeliverablePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
    }, ExtArgs["result"]["taskState"]>
    composites: {}
  }

  type TaskStateGetPayload<S extends boolean | null | undefined | TaskStateDefaultArgs> = $Result.GetResult<Prisma.$TaskStatePayload, S>

  type TaskStateCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TaskStateFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TaskStateCountAggregateInputType | true
    }

  export interface TaskStateDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TaskState'], meta: { name: 'TaskState' } }
    /**
     * Find zero or one TaskState that matches the filter.
     * @param {TaskStateFindUniqueArgs} args - Arguments to find a TaskState
     * @example
     * // Get one TaskState
     * const taskState = await prisma.taskState.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TaskStateFindUniqueArgs>(args: SelectSubset<T, TaskStateFindUniqueArgs<ExtArgs>>): Prisma__TaskStateClient<$Result.GetResult<Prisma.$TaskStatePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TaskState that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TaskStateFindUniqueOrThrowArgs} args - Arguments to find a TaskState
     * @example
     * // Get one TaskState
     * const taskState = await prisma.taskState.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TaskStateFindUniqueOrThrowArgs>(args: SelectSubset<T, TaskStateFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TaskStateClient<$Result.GetResult<Prisma.$TaskStatePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TaskState that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskStateFindFirstArgs} args - Arguments to find a TaskState
     * @example
     * // Get one TaskState
     * const taskState = await prisma.taskState.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TaskStateFindFirstArgs>(args?: SelectSubset<T, TaskStateFindFirstArgs<ExtArgs>>): Prisma__TaskStateClient<$Result.GetResult<Prisma.$TaskStatePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TaskState that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskStateFindFirstOrThrowArgs} args - Arguments to find a TaskState
     * @example
     * // Get one TaskState
     * const taskState = await prisma.taskState.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TaskStateFindFirstOrThrowArgs>(args?: SelectSubset<T, TaskStateFindFirstOrThrowArgs<ExtArgs>>): Prisma__TaskStateClient<$Result.GetResult<Prisma.$TaskStatePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TaskStates that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskStateFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TaskStates
     * const taskStates = await prisma.taskState.findMany()
     * 
     * // Get first 10 TaskStates
     * const taskStates = await prisma.taskState.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const taskStateWithIdOnly = await prisma.taskState.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TaskStateFindManyArgs>(args?: SelectSubset<T, TaskStateFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskStatePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TaskState.
     * @param {TaskStateCreateArgs} args - Arguments to create a TaskState.
     * @example
     * // Create one TaskState
     * const TaskState = await prisma.taskState.create({
     *   data: {
     *     // ... data to create a TaskState
     *   }
     * })
     * 
     */
    create<T extends TaskStateCreateArgs>(args: SelectSubset<T, TaskStateCreateArgs<ExtArgs>>): Prisma__TaskStateClient<$Result.GetResult<Prisma.$TaskStatePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TaskStates.
     * @param {TaskStateCreateManyArgs} args - Arguments to create many TaskStates.
     * @example
     * // Create many TaskStates
     * const taskState = await prisma.taskState.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TaskStateCreateManyArgs>(args?: SelectSubset<T, TaskStateCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TaskStates and returns the data saved in the database.
     * @param {TaskStateCreateManyAndReturnArgs} args - Arguments to create many TaskStates.
     * @example
     * // Create many TaskStates
     * const taskState = await prisma.taskState.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TaskStates and only return the `id`
     * const taskStateWithIdOnly = await prisma.taskState.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TaskStateCreateManyAndReturnArgs>(args?: SelectSubset<T, TaskStateCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskStatePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TaskState.
     * @param {TaskStateDeleteArgs} args - Arguments to delete one TaskState.
     * @example
     * // Delete one TaskState
     * const TaskState = await prisma.taskState.delete({
     *   where: {
     *     // ... filter to delete one TaskState
     *   }
     * })
     * 
     */
    delete<T extends TaskStateDeleteArgs>(args: SelectSubset<T, TaskStateDeleteArgs<ExtArgs>>): Prisma__TaskStateClient<$Result.GetResult<Prisma.$TaskStatePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TaskState.
     * @param {TaskStateUpdateArgs} args - Arguments to update one TaskState.
     * @example
     * // Update one TaskState
     * const taskState = await prisma.taskState.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TaskStateUpdateArgs>(args: SelectSubset<T, TaskStateUpdateArgs<ExtArgs>>): Prisma__TaskStateClient<$Result.GetResult<Prisma.$TaskStatePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TaskStates.
     * @param {TaskStateDeleteManyArgs} args - Arguments to filter TaskStates to delete.
     * @example
     * // Delete a few TaskStates
     * const { count } = await prisma.taskState.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TaskStateDeleteManyArgs>(args?: SelectSubset<T, TaskStateDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TaskStates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskStateUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TaskStates
     * const taskState = await prisma.taskState.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TaskStateUpdateManyArgs>(args: SelectSubset<T, TaskStateUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TaskStates and returns the data updated in the database.
     * @param {TaskStateUpdateManyAndReturnArgs} args - Arguments to update many TaskStates.
     * @example
     * // Update many TaskStates
     * const taskState = await prisma.taskState.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TaskStates and only return the `id`
     * const taskStateWithIdOnly = await prisma.taskState.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TaskStateUpdateManyAndReturnArgs>(args: SelectSubset<T, TaskStateUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskStatePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TaskState.
     * @param {TaskStateUpsertArgs} args - Arguments to update or create a TaskState.
     * @example
     * // Update or create a TaskState
     * const taskState = await prisma.taskState.upsert({
     *   create: {
     *     // ... data to create a TaskState
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TaskState we want to update
     *   }
     * })
     */
    upsert<T extends TaskStateUpsertArgs>(args: SelectSubset<T, TaskStateUpsertArgs<ExtArgs>>): Prisma__TaskStateClient<$Result.GetResult<Prisma.$TaskStatePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TaskStates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskStateCountArgs} args - Arguments to filter TaskStates to count.
     * @example
     * // Count the number of TaskStates
     * const count = await prisma.taskState.count({
     *   where: {
     *     // ... the filter for the TaskStates we want to count
     *   }
     * })
    **/
    count<T extends TaskStateCountArgs>(
      args?: Subset<T, TaskStateCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TaskStateCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TaskState.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskStateAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TaskStateAggregateArgs>(args: Subset<T, TaskStateAggregateArgs>): Prisma.PrismaPromise<GetTaskStateAggregateType<T>>

    /**
     * Group by TaskState.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskStateGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TaskStateGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TaskStateGroupByArgs['orderBy'] }
        : { orderBy?: TaskStateGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TaskStateGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTaskStateGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TaskState model
   */
  readonly fields: TaskStateFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TaskState.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TaskStateClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    tasks<T extends TaskState$tasksArgs<ExtArgs> = {}>(args?: Subset<T, TaskState$tasksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    deliverables<T extends TaskState$deliverablesArgs<ExtArgs> = {}>(args?: Subset<T, TaskState$deliverablesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DeliverablePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the TaskState model
   */
  interface TaskStateFieldRefs {
    readonly id: FieldRef<"TaskState", 'Int'>
    readonly name: FieldRef<"TaskState", 'String'>
  }
    

  // Custom InputTypes
  /**
   * TaskState findUnique
   */
  export type TaskStateFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskState
     */
    select?: TaskStateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaskState
     */
    omit?: TaskStateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskStateInclude<ExtArgs> | null
    /**
     * Filter, which TaskState to fetch.
     */
    where: TaskStateWhereUniqueInput
  }

  /**
   * TaskState findUniqueOrThrow
   */
  export type TaskStateFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskState
     */
    select?: TaskStateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaskState
     */
    omit?: TaskStateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskStateInclude<ExtArgs> | null
    /**
     * Filter, which TaskState to fetch.
     */
    where: TaskStateWhereUniqueInput
  }

  /**
   * TaskState findFirst
   */
  export type TaskStateFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskState
     */
    select?: TaskStateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaskState
     */
    omit?: TaskStateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskStateInclude<ExtArgs> | null
    /**
     * Filter, which TaskState to fetch.
     */
    where?: TaskStateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TaskStates to fetch.
     */
    orderBy?: TaskStateOrderByWithRelationInput | TaskStateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TaskStates.
     */
    cursor?: TaskStateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TaskStates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TaskStates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TaskStates.
     */
    distinct?: TaskStateScalarFieldEnum | TaskStateScalarFieldEnum[]
  }

  /**
   * TaskState findFirstOrThrow
   */
  export type TaskStateFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskState
     */
    select?: TaskStateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaskState
     */
    omit?: TaskStateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskStateInclude<ExtArgs> | null
    /**
     * Filter, which TaskState to fetch.
     */
    where?: TaskStateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TaskStates to fetch.
     */
    orderBy?: TaskStateOrderByWithRelationInput | TaskStateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TaskStates.
     */
    cursor?: TaskStateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TaskStates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TaskStates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TaskStates.
     */
    distinct?: TaskStateScalarFieldEnum | TaskStateScalarFieldEnum[]
  }

  /**
   * TaskState findMany
   */
  export type TaskStateFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskState
     */
    select?: TaskStateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaskState
     */
    omit?: TaskStateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskStateInclude<ExtArgs> | null
    /**
     * Filter, which TaskStates to fetch.
     */
    where?: TaskStateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TaskStates to fetch.
     */
    orderBy?: TaskStateOrderByWithRelationInput | TaskStateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TaskStates.
     */
    cursor?: TaskStateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TaskStates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TaskStates.
     */
    skip?: number
    distinct?: TaskStateScalarFieldEnum | TaskStateScalarFieldEnum[]
  }

  /**
   * TaskState create
   */
  export type TaskStateCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskState
     */
    select?: TaskStateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaskState
     */
    omit?: TaskStateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskStateInclude<ExtArgs> | null
    /**
     * The data needed to create a TaskState.
     */
    data: XOR<TaskStateCreateInput, TaskStateUncheckedCreateInput>
  }

  /**
   * TaskState createMany
   */
  export type TaskStateCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TaskStates.
     */
    data: TaskStateCreateManyInput | TaskStateCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TaskState createManyAndReturn
   */
  export type TaskStateCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskState
     */
    select?: TaskStateSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TaskState
     */
    omit?: TaskStateOmit<ExtArgs> | null
    /**
     * The data used to create many TaskStates.
     */
    data: TaskStateCreateManyInput | TaskStateCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TaskState update
   */
  export type TaskStateUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskState
     */
    select?: TaskStateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaskState
     */
    omit?: TaskStateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskStateInclude<ExtArgs> | null
    /**
     * The data needed to update a TaskState.
     */
    data: XOR<TaskStateUpdateInput, TaskStateUncheckedUpdateInput>
    /**
     * Choose, which TaskState to update.
     */
    where: TaskStateWhereUniqueInput
  }

  /**
   * TaskState updateMany
   */
  export type TaskStateUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TaskStates.
     */
    data: XOR<TaskStateUpdateManyMutationInput, TaskStateUncheckedUpdateManyInput>
    /**
     * Filter which TaskStates to update
     */
    where?: TaskStateWhereInput
    /**
     * Limit how many TaskStates to update.
     */
    limit?: number
  }

  /**
   * TaskState updateManyAndReturn
   */
  export type TaskStateUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskState
     */
    select?: TaskStateSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TaskState
     */
    omit?: TaskStateOmit<ExtArgs> | null
    /**
     * The data used to update TaskStates.
     */
    data: XOR<TaskStateUpdateManyMutationInput, TaskStateUncheckedUpdateManyInput>
    /**
     * Filter which TaskStates to update
     */
    where?: TaskStateWhereInput
    /**
     * Limit how many TaskStates to update.
     */
    limit?: number
  }

  /**
   * TaskState upsert
   */
  export type TaskStateUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskState
     */
    select?: TaskStateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaskState
     */
    omit?: TaskStateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskStateInclude<ExtArgs> | null
    /**
     * The filter to search for the TaskState to update in case it exists.
     */
    where: TaskStateWhereUniqueInput
    /**
     * In case the TaskState found by the `where` argument doesn't exist, create a new TaskState with this data.
     */
    create: XOR<TaskStateCreateInput, TaskStateUncheckedCreateInput>
    /**
     * In case the TaskState was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TaskStateUpdateInput, TaskStateUncheckedUpdateInput>
  }

  /**
   * TaskState delete
   */
  export type TaskStateDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskState
     */
    select?: TaskStateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaskState
     */
    omit?: TaskStateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskStateInclude<ExtArgs> | null
    /**
     * Filter which TaskState to delete.
     */
    where: TaskStateWhereUniqueInput
  }

  /**
   * TaskState deleteMany
   */
  export type TaskStateDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TaskStates to delete
     */
    where?: TaskStateWhereInput
    /**
     * Limit how many TaskStates to delete.
     */
    limit?: number
  }

  /**
   * TaskState.tasks
   */
  export type TaskState$tasksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    where?: TaskWhereInput
    orderBy?: TaskOrderByWithRelationInput | TaskOrderByWithRelationInput[]
    cursor?: TaskWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TaskScalarFieldEnum | TaskScalarFieldEnum[]
  }

  /**
   * TaskState.deliverables
   */
  export type TaskState$deliverablesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Deliverable
     */
    select?: DeliverableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Deliverable
     */
    omit?: DeliverableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeliverableInclude<ExtArgs> | null
    where?: DeliverableWhereInput
    orderBy?: DeliverableOrderByWithRelationInput | DeliverableOrderByWithRelationInput[]
    cursor?: DeliverableWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DeliverableScalarFieldEnum | DeliverableScalarFieldEnum[]
  }

  /**
   * TaskState without action
   */
  export type TaskStateDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskState
     */
    select?: TaskStateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaskState
     */
    omit?: TaskStateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskStateInclude<ExtArgs> | null
  }


  /**
   * Model Task
   */

  export type AggregateTask = {
    _count: TaskCountAggregateOutputType | null
    _avg: TaskAvgAggregateOutputType | null
    _sum: TaskSumAggregateOutputType | null
    _min: TaskMinAggregateOutputType | null
    _max: TaskMaxAggregateOutputType | null
  }

  export type TaskAvgAggregateOutputType = {
    id: number | null
    stateId: number | null
    percentage: number | null
    userId: number | null
    courseId: number | null
  }

  export type TaskSumAggregateOutputType = {
    id: number | null
    stateId: number | null
    percentage: number | null
    userId: number | null
    courseId: number | null
  }

  export type TaskMinAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    stateId: number | null
    percentage: number | null
    endDate: Date | null
    userId: number | null
    courseId: number | null
  }

  export type TaskMaxAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    stateId: number | null
    percentage: number | null
    endDate: Date | null
    userId: number | null
    courseId: number | null
  }

  export type TaskCountAggregateOutputType = {
    id: number
    name: number
    description: number
    stateId: number
    percentage: number
    endDate: number
    userId: number
    courseId: number
    _all: number
  }


  export type TaskAvgAggregateInputType = {
    id?: true
    stateId?: true
    percentage?: true
    userId?: true
    courseId?: true
  }

  export type TaskSumAggregateInputType = {
    id?: true
    stateId?: true
    percentage?: true
    userId?: true
    courseId?: true
  }

  export type TaskMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    stateId?: true
    percentage?: true
    endDate?: true
    userId?: true
    courseId?: true
  }

  export type TaskMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    stateId?: true
    percentage?: true
    endDate?: true
    userId?: true
    courseId?: true
  }

  export type TaskCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    stateId?: true
    percentage?: true
    endDate?: true
    userId?: true
    courseId?: true
    _all?: true
  }

  export type TaskAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Task to aggregate.
     */
    where?: TaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tasks to fetch.
     */
    orderBy?: TaskOrderByWithRelationInput | TaskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Tasks
    **/
    _count?: true | TaskCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TaskAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TaskSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TaskMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TaskMaxAggregateInputType
  }

  export type GetTaskAggregateType<T extends TaskAggregateArgs> = {
        [P in keyof T & keyof AggregateTask]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTask[P]>
      : GetScalarType<T[P], AggregateTask[P]>
  }




  export type TaskGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TaskWhereInput
    orderBy?: TaskOrderByWithAggregationInput | TaskOrderByWithAggregationInput[]
    by: TaskScalarFieldEnum[] | TaskScalarFieldEnum
    having?: TaskScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TaskCountAggregateInputType | true
    _avg?: TaskAvgAggregateInputType
    _sum?: TaskSumAggregateInputType
    _min?: TaskMinAggregateInputType
    _max?: TaskMaxAggregateInputType
  }

  export type TaskGroupByOutputType = {
    id: number
    name: string
    description: string
    stateId: number
    percentage: number
    endDate: Date
    userId: number
    courseId: number
    _count: TaskCountAggregateOutputType | null
    _avg: TaskAvgAggregateOutputType | null
    _sum: TaskSumAggregateOutputType | null
    _min: TaskMinAggregateOutputType | null
    _max: TaskMaxAggregateOutputType | null
  }

  type GetTaskGroupByPayload<T extends TaskGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TaskGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TaskGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TaskGroupByOutputType[P]>
            : GetScalarType<T[P], TaskGroupByOutputType[P]>
        }
      >
    >


  export type TaskSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    stateId?: boolean
    percentage?: boolean
    endDate?: boolean
    userId?: boolean
    courseId?: boolean
    state?: boolean | TaskStateDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    course?: boolean | CourseDefaultArgs<ExtArgs>
    deliverables?: boolean | Task$deliverablesArgs<ExtArgs>
    _count?: boolean | TaskCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["task"]>

  export type TaskSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    stateId?: boolean
    percentage?: boolean
    endDate?: boolean
    userId?: boolean
    courseId?: boolean
    state?: boolean | TaskStateDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    course?: boolean | CourseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["task"]>

  export type TaskSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    stateId?: boolean
    percentage?: boolean
    endDate?: boolean
    userId?: boolean
    courseId?: boolean
    state?: boolean | TaskStateDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    course?: boolean | CourseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["task"]>

  export type TaskSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    stateId?: boolean
    percentage?: boolean
    endDate?: boolean
    userId?: boolean
    courseId?: boolean
  }

  export type TaskOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "stateId" | "percentage" | "endDate" | "userId" | "courseId", ExtArgs["result"]["task"]>
  export type TaskInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    state?: boolean | TaskStateDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    course?: boolean | CourseDefaultArgs<ExtArgs>
    deliverables?: boolean | Task$deliverablesArgs<ExtArgs>
    _count?: boolean | TaskCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TaskIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    state?: boolean | TaskStateDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    course?: boolean | CourseDefaultArgs<ExtArgs>
  }
  export type TaskIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    state?: boolean | TaskStateDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    course?: boolean | CourseDefaultArgs<ExtArgs>
  }

  export type $TaskPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Task"
    objects: {
      state: Prisma.$TaskStatePayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
      course: Prisma.$CoursePayload<ExtArgs>
      deliverables: Prisma.$DeliverablePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      description: string
      stateId: number
      percentage: number
      endDate: Date
      userId: number
      courseId: number
    }, ExtArgs["result"]["task"]>
    composites: {}
  }

  type TaskGetPayload<S extends boolean | null | undefined | TaskDefaultArgs> = $Result.GetResult<Prisma.$TaskPayload, S>

  type TaskCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TaskFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TaskCountAggregateInputType | true
    }

  export interface TaskDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Task'], meta: { name: 'Task' } }
    /**
     * Find zero or one Task that matches the filter.
     * @param {TaskFindUniqueArgs} args - Arguments to find a Task
     * @example
     * // Get one Task
     * const task = await prisma.task.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TaskFindUniqueArgs>(args: SelectSubset<T, TaskFindUniqueArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Task that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TaskFindUniqueOrThrowArgs} args - Arguments to find a Task
     * @example
     * // Get one Task
     * const task = await prisma.task.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TaskFindUniqueOrThrowArgs>(args: SelectSubset<T, TaskFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Task that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskFindFirstArgs} args - Arguments to find a Task
     * @example
     * // Get one Task
     * const task = await prisma.task.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TaskFindFirstArgs>(args?: SelectSubset<T, TaskFindFirstArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Task that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskFindFirstOrThrowArgs} args - Arguments to find a Task
     * @example
     * // Get one Task
     * const task = await prisma.task.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TaskFindFirstOrThrowArgs>(args?: SelectSubset<T, TaskFindFirstOrThrowArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tasks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tasks
     * const tasks = await prisma.task.findMany()
     * 
     * // Get first 10 Tasks
     * const tasks = await prisma.task.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const taskWithIdOnly = await prisma.task.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TaskFindManyArgs>(args?: SelectSubset<T, TaskFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Task.
     * @param {TaskCreateArgs} args - Arguments to create a Task.
     * @example
     * // Create one Task
     * const Task = await prisma.task.create({
     *   data: {
     *     // ... data to create a Task
     *   }
     * })
     * 
     */
    create<T extends TaskCreateArgs>(args: SelectSubset<T, TaskCreateArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tasks.
     * @param {TaskCreateManyArgs} args - Arguments to create many Tasks.
     * @example
     * // Create many Tasks
     * const task = await prisma.task.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TaskCreateManyArgs>(args?: SelectSubset<T, TaskCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Tasks and returns the data saved in the database.
     * @param {TaskCreateManyAndReturnArgs} args - Arguments to create many Tasks.
     * @example
     * // Create many Tasks
     * const task = await prisma.task.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Tasks and only return the `id`
     * const taskWithIdOnly = await prisma.task.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TaskCreateManyAndReturnArgs>(args?: SelectSubset<T, TaskCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Task.
     * @param {TaskDeleteArgs} args - Arguments to delete one Task.
     * @example
     * // Delete one Task
     * const Task = await prisma.task.delete({
     *   where: {
     *     // ... filter to delete one Task
     *   }
     * })
     * 
     */
    delete<T extends TaskDeleteArgs>(args: SelectSubset<T, TaskDeleteArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Task.
     * @param {TaskUpdateArgs} args - Arguments to update one Task.
     * @example
     * // Update one Task
     * const task = await prisma.task.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TaskUpdateArgs>(args: SelectSubset<T, TaskUpdateArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tasks.
     * @param {TaskDeleteManyArgs} args - Arguments to filter Tasks to delete.
     * @example
     * // Delete a few Tasks
     * const { count } = await prisma.task.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TaskDeleteManyArgs>(args?: SelectSubset<T, TaskDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tasks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tasks
     * const task = await prisma.task.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TaskUpdateManyArgs>(args: SelectSubset<T, TaskUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tasks and returns the data updated in the database.
     * @param {TaskUpdateManyAndReturnArgs} args - Arguments to update many Tasks.
     * @example
     * // Update many Tasks
     * const task = await prisma.task.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Tasks and only return the `id`
     * const taskWithIdOnly = await prisma.task.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TaskUpdateManyAndReturnArgs>(args: SelectSubset<T, TaskUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Task.
     * @param {TaskUpsertArgs} args - Arguments to update or create a Task.
     * @example
     * // Update or create a Task
     * const task = await prisma.task.upsert({
     *   create: {
     *     // ... data to create a Task
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Task we want to update
     *   }
     * })
     */
    upsert<T extends TaskUpsertArgs>(args: SelectSubset<T, TaskUpsertArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tasks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskCountArgs} args - Arguments to filter Tasks to count.
     * @example
     * // Count the number of Tasks
     * const count = await prisma.task.count({
     *   where: {
     *     // ... the filter for the Tasks we want to count
     *   }
     * })
    **/
    count<T extends TaskCountArgs>(
      args?: Subset<T, TaskCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TaskCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Task.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TaskAggregateArgs>(args: Subset<T, TaskAggregateArgs>): Prisma.PrismaPromise<GetTaskAggregateType<T>>

    /**
     * Group by Task.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TaskGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TaskGroupByArgs['orderBy'] }
        : { orderBy?: TaskGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TaskGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTaskGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Task model
   */
  readonly fields: TaskFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Task.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TaskClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    state<T extends TaskStateDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TaskStateDefaultArgs<ExtArgs>>): Prisma__TaskStateClient<$Result.GetResult<Prisma.$TaskStatePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    course<T extends CourseDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CourseDefaultArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    deliverables<T extends Task$deliverablesArgs<ExtArgs> = {}>(args?: Subset<T, Task$deliverablesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DeliverablePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Task model
   */
  interface TaskFieldRefs {
    readonly id: FieldRef<"Task", 'Int'>
    readonly name: FieldRef<"Task", 'String'>
    readonly description: FieldRef<"Task", 'String'>
    readonly stateId: FieldRef<"Task", 'Int'>
    readonly percentage: FieldRef<"Task", 'Int'>
    readonly endDate: FieldRef<"Task", 'DateTime'>
    readonly userId: FieldRef<"Task", 'Int'>
    readonly courseId: FieldRef<"Task", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Task findUnique
   */
  export type TaskFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * Filter, which Task to fetch.
     */
    where: TaskWhereUniqueInput
  }

  /**
   * Task findUniqueOrThrow
   */
  export type TaskFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * Filter, which Task to fetch.
     */
    where: TaskWhereUniqueInput
  }

  /**
   * Task findFirst
   */
  export type TaskFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * Filter, which Task to fetch.
     */
    where?: TaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tasks to fetch.
     */
    orderBy?: TaskOrderByWithRelationInput | TaskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tasks.
     */
    cursor?: TaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tasks.
     */
    distinct?: TaskScalarFieldEnum | TaskScalarFieldEnum[]
  }

  /**
   * Task findFirstOrThrow
   */
  export type TaskFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * Filter, which Task to fetch.
     */
    where?: TaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tasks to fetch.
     */
    orderBy?: TaskOrderByWithRelationInput | TaskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tasks.
     */
    cursor?: TaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tasks.
     */
    distinct?: TaskScalarFieldEnum | TaskScalarFieldEnum[]
  }

  /**
   * Task findMany
   */
  export type TaskFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * Filter, which Tasks to fetch.
     */
    where?: TaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tasks to fetch.
     */
    orderBy?: TaskOrderByWithRelationInput | TaskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Tasks.
     */
    cursor?: TaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tasks.
     */
    skip?: number
    distinct?: TaskScalarFieldEnum | TaskScalarFieldEnum[]
  }

  /**
   * Task create
   */
  export type TaskCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * The data needed to create a Task.
     */
    data: XOR<TaskCreateInput, TaskUncheckedCreateInput>
  }

  /**
   * Task createMany
   */
  export type TaskCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Tasks.
     */
    data: TaskCreateManyInput | TaskCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Task createManyAndReturn
   */
  export type TaskCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * The data used to create many Tasks.
     */
    data: TaskCreateManyInput | TaskCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Task update
   */
  export type TaskUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * The data needed to update a Task.
     */
    data: XOR<TaskUpdateInput, TaskUncheckedUpdateInput>
    /**
     * Choose, which Task to update.
     */
    where: TaskWhereUniqueInput
  }

  /**
   * Task updateMany
   */
  export type TaskUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Tasks.
     */
    data: XOR<TaskUpdateManyMutationInput, TaskUncheckedUpdateManyInput>
    /**
     * Filter which Tasks to update
     */
    where?: TaskWhereInput
    /**
     * Limit how many Tasks to update.
     */
    limit?: number
  }

  /**
   * Task updateManyAndReturn
   */
  export type TaskUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * The data used to update Tasks.
     */
    data: XOR<TaskUpdateManyMutationInput, TaskUncheckedUpdateManyInput>
    /**
     * Filter which Tasks to update
     */
    where?: TaskWhereInput
    /**
     * Limit how many Tasks to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Task upsert
   */
  export type TaskUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * The filter to search for the Task to update in case it exists.
     */
    where: TaskWhereUniqueInput
    /**
     * In case the Task found by the `where` argument doesn't exist, create a new Task with this data.
     */
    create: XOR<TaskCreateInput, TaskUncheckedCreateInput>
    /**
     * In case the Task was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TaskUpdateInput, TaskUncheckedUpdateInput>
  }

  /**
   * Task delete
   */
  export type TaskDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * Filter which Task to delete.
     */
    where: TaskWhereUniqueInput
  }

  /**
   * Task deleteMany
   */
  export type TaskDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tasks to delete
     */
    where?: TaskWhereInput
    /**
     * Limit how many Tasks to delete.
     */
    limit?: number
  }

  /**
   * Task.deliverables
   */
  export type Task$deliverablesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Deliverable
     */
    select?: DeliverableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Deliverable
     */
    omit?: DeliverableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeliverableInclude<ExtArgs> | null
    where?: DeliverableWhereInput
    orderBy?: DeliverableOrderByWithRelationInput | DeliverableOrderByWithRelationInput[]
    cursor?: DeliverableWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DeliverableScalarFieldEnum | DeliverableScalarFieldEnum[]
  }

  /**
   * Task without action
   */
  export type TaskDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
  }


  /**
   * Model Deliverable
   */

  export type AggregateDeliverable = {
    _count: DeliverableCountAggregateOutputType | null
    _avg: DeliverableAvgAggregateOutputType | null
    _sum: DeliverableSumAggregateOutputType | null
    _min: DeliverableMinAggregateOutputType | null
    _max: DeliverableMaxAggregateOutputType | null
  }

  export type DeliverableAvgAggregateOutputType = {
    id: number | null
    stateId: number | null
    percentageOfTask: number | null
    taskId: number | null
  }

  export type DeliverableSumAggregateOutputType = {
    id: number | null
    stateId: number | null
    percentageOfTask: number | null
    taskId: number | null
  }

  export type DeliverableMinAggregateOutputType = {
    id: number | null
    name: string | null
    stateId: number | null
    percentageOfTask: number | null
    date: Date | null
    taskId: number | null
  }

  export type DeliverableMaxAggregateOutputType = {
    id: number | null
    name: string | null
    stateId: number | null
    percentageOfTask: number | null
    date: Date | null
    taskId: number | null
  }

  export type DeliverableCountAggregateOutputType = {
    id: number
    name: number
    stateId: number
    percentageOfTask: number
    date: number
    taskId: number
    _all: number
  }


  export type DeliverableAvgAggregateInputType = {
    id?: true
    stateId?: true
    percentageOfTask?: true
    taskId?: true
  }

  export type DeliverableSumAggregateInputType = {
    id?: true
    stateId?: true
    percentageOfTask?: true
    taskId?: true
  }

  export type DeliverableMinAggregateInputType = {
    id?: true
    name?: true
    stateId?: true
    percentageOfTask?: true
    date?: true
    taskId?: true
  }

  export type DeliverableMaxAggregateInputType = {
    id?: true
    name?: true
    stateId?: true
    percentageOfTask?: true
    date?: true
    taskId?: true
  }

  export type DeliverableCountAggregateInputType = {
    id?: true
    name?: true
    stateId?: true
    percentageOfTask?: true
    date?: true
    taskId?: true
    _all?: true
  }

  export type DeliverableAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Deliverable to aggregate.
     */
    where?: DeliverableWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Deliverables to fetch.
     */
    orderBy?: DeliverableOrderByWithRelationInput | DeliverableOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DeliverableWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Deliverables from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Deliverables.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Deliverables
    **/
    _count?: true | DeliverableCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DeliverableAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DeliverableSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DeliverableMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DeliverableMaxAggregateInputType
  }

  export type GetDeliverableAggregateType<T extends DeliverableAggregateArgs> = {
        [P in keyof T & keyof AggregateDeliverable]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDeliverable[P]>
      : GetScalarType<T[P], AggregateDeliverable[P]>
  }




  export type DeliverableGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DeliverableWhereInput
    orderBy?: DeliverableOrderByWithAggregationInput | DeliverableOrderByWithAggregationInput[]
    by: DeliverableScalarFieldEnum[] | DeliverableScalarFieldEnum
    having?: DeliverableScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DeliverableCountAggregateInputType | true
    _avg?: DeliverableAvgAggregateInputType
    _sum?: DeliverableSumAggregateInputType
    _min?: DeliverableMinAggregateInputType
    _max?: DeliverableMaxAggregateInputType
  }

  export type DeliverableGroupByOutputType = {
    id: number
    name: string
    stateId: number
    percentageOfTask: number
    date: Date
    taskId: number
    _count: DeliverableCountAggregateOutputType | null
    _avg: DeliverableAvgAggregateOutputType | null
    _sum: DeliverableSumAggregateOutputType | null
    _min: DeliverableMinAggregateOutputType | null
    _max: DeliverableMaxAggregateOutputType | null
  }

  type GetDeliverableGroupByPayload<T extends DeliverableGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DeliverableGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DeliverableGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DeliverableGroupByOutputType[P]>
            : GetScalarType<T[P], DeliverableGroupByOutputType[P]>
        }
      >
    >


  export type DeliverableSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    stateId?: boolean
    percentageOfTask?: boolean
    date?: boolean
    taskId?: boolean
    state?: boolean | TaskStateDefaultArgs<ExtArgs>
    task?: boolean | TaskDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["deliverable"]>

  export type DeliverableSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    stateId?: boolean
    percentageOfTask?: boolean
    date?: boolean
    taskId?: boolean
    state?: boolean | TaskStateDefaultArgs<ExtArgs>
    task?: boolean | TaskDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["deliverable"]>

  export type DeliverableSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    stateId?: boolean
    percentageOfTask?: boolean
    date?: boolean
    taskId?: boolean
    state?: boolean | TaskStateDefaultArgs<ExtArgs>
    task?: boolean | TaskDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["deliverable"]>

  export type DeliverableSelectScalar = {
    id?: boolean
    name?: boolean
    stateId?: boolean
    percentageOfTask?: boolean
    date?: boolean
    taskId?: boolean
  }

  export type DeliverableOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "stateId" | "percentageOfTask" | "date" | "taskId", ExtArgs["result"]["deliverable"]>
  export type DeliverableInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    state?: boolean | TaskStateDefaultArgs<ExtArgs>
    task?: boolean | TaskDefaultArgs<ExtArgs>
  }
  export type DeliverableIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    state?: boolean | TaskStateDefaultArgs<ExtArgs>
    task?: boolean | TaskDefaultArgs<ExtArgs>
  }
  export type DeliverableIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    state?: boolean | TaskStateDefaultArgs<ExtArgs>
    task?: boolean | TaskDefaultArgs<ExtArgs>
  }

  export type $DeliverablePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Deliverable"
    objects: {
      state: Prisma.$TaskStatePayload<ExtArgs>
      task: Prisma.$TaskPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      stateId: number
      percentageOfTask: number
      date: Date
      taskId: number
    }, ExtArgs["result"]["deliverable"]>
    composites: {}
  }

  type DeliverableGetPayload<S extends boolean | null | undefined | DeliverableDefaultArgs> = $Result.GetResult<Prisma.$DeliverablePayload, S>

  type DeliverableCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DeliverableFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DeliverableCountAggregateInputType | true
    }

  export interface DeliverableDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Deliverable'], meta: { name: 'Deliverable' } }
    /**
     * Find zero or one Deliverable that matches the filter.
     * @param {DeliverableFindUniqueArgs} args - Arguments to find a Deliverable
     * @example
     * // Get one Deliverable
     * const deliverable = await prisma.deliverable.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DeliverableFindUniqueArgs>(args: SelectSubset<T, DeliverableFindUniqueArgs<ExtArgs>>): Prisma__DeliverableClient<$Result.GetResult<Prisma.$DeliverablePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Deliverable that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DeliverableFindUniqueOrThrowArgs} args - Arguments to find a Deliverable
     * @example
     * // Get one Deliverable
     * const deliverable = await prisma.deliverable.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DeliverableFindUniqueOrThrowArgs>(args: SelectSubset<T, DeliverableFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DeliverableClient<$Result.GetResult<Prisma.$DeliverablePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Deliverable that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeliverableFindFirstArgs} args - Arguments to find a Deliverable
     * @example
     * // Get one Deliverable
     * const deliverable = await prisma.deliverable.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DeliverableFindFirstArgs>(args?: SelectSubset<T, DeliverableFindFirstArgs<ExtArgs>>): Prisma__DeliverableClient<$Result.GetResult<Prisma.$DeliverablePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Deliverable that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeliverableFindFirstOrThrowArgs} args - Arguments to find a Deliverable
     * @example
     * // Get one Deliverable
     * const deliverable = await prisma.deliverable.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DeliverableFindFirstOrThrowArgs>(args?: SelectSubset<T, DeliverableFindFirstOrThrowArgs<ExtArgs>>): Prisma__DeliverableClient<$Result.GetResult<Prisma.$DeliverablePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Deliverables that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeliverableFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Deliverables
     * const deliverables = await prisma.deliverable.findMany()
     * 
     * // Get first 10 Deliverables
     * const deliverables = await prisma.deliverable.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const deliverableWithIdOnly = await prisma.deliverable.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DeliverableFindManyArgs>(args?: SelectSubset<T, DeliverableFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DeliverablePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Deliverable.
     * @param {DeliverableCreateArgs} args - Arguments to create a Deliverable.
     * @example
     * // Create one Deliverable
     * const Deliverable = await prisma.deliverable.create({
     *   data: {
     *     // ... data to create a Deliverable
     *   }
     * })
     * 
     */
    create<T extends DeliverableCreateArgs>(args: SelectSubset<T, DeliverableCreateArgs<ExtArgs>>): Prisma__DeliverableClient<$Result.GetResult<Prisma.$DeliverablePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Deliverables.
     * @param {DeliverableCreateManyArgs} args - Arguments to create many Deliverables.
     * @example
     * // Create many Deliverables
     * const deliverable = await prisma.deliverable.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DeliverableCreateManyArgs>(args?: SelectSubset<T, DeliverableCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Deliverables and returns the data saved in the database.
     * @param {DeliverableCreateManyAndReturnArgs} args - Arguments to create many Deliverables.
     * @example
     * // Create many Deliverables
     * const deliverable = await prisma.deliverable.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Deliverables and only return the `id`
     * const deliverableWithIdOnly = await prisma.deliverable.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DeliverableCreateManyAndReturnArgs>(args?: SelectSubset<T, DeliverableCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DeliverablePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Deliverable.
     * @param {DeliverableDeleteArgs} args - Arguments to delete one Deliverable.
     * @example
     * // Delete one Deliverable
     * const Deliverable = await prisma.deliverable.delete({
     *   where: {
     *     // ... filter to delete one Deliverable
     *   }
     * })
     * 
     */
    delete<T extends DeliverableDeleteArgs>(args: SelectSubset<T, DeliverableDeleteArgs<ExtArgs>>): Prisma__DeliverableClient<$Result.GetResult<Prisma.$DeliverablePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Deliverable.
     * @param {DeliverableUpdateArgs} args - Arguments to update one Deliverable.
     * @example
     * // Update one Deliverable
     * const deliverable = await prisma.deliverable.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DeliverableUpdateArgs>(args: SelectSubset<T, DeliverableUpdateArgs<ExtArgs>>): Prisma__DeliverableClient<$Result.GetResult<Prisma.$DeliverablePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Deliverables.
     * @param {DeliverableDeleteManyArgs} args - Arguments to filter Deliverables to delete.
     * @example
     * // Delete a few Deliverables
     * const { count } = await prisma.deliverable.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DeliverableDeleteManyArgs>(args?: SelectSubset<T, DeliverableDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Deliverables.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeliverableUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Deliverables
     * const deliverable = await prisma.deliverable.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DeliverableUpdateManyArgs>(args: SelectSubset<T, DeliverableUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Deliverables and returns the data updated in the database.
     * @param {DeliverableUpdateManyAndReturnArgs} args - Arguments to update many Deliverables.
     * @example
     * // Update many Deliverables
     * const deliverable = await prisma.deliverable.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Deliverables and only return the `id`
     * const deliverableWithIdOnly = await prisma.deliverable.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends DeliverableUpdateManyAndReturnArgs>(args: SelectSubset<T, DeliverableUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DeliverablePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Deliverable.
     * @param {DeliverableUpsertArgs} args - Arguments to update or create a Deliverable.
     * @example
     * // Update or create a Deliverable
     * const deliverable = await prisma.deliverable.upsert({
     *   create: {
     *     // ... data to create a Deliverable
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Deliverable we want to update
     *   }
     * })
     */
    upsert<T extends DeliverableUpsertArgs>(args: SelectSubset<T, DeliverableUpsertArgs<ExtArgs>>): Prisma__DeliverableClient<$Result.GetResult<Prisma.$DeliverablePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Deliverables.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeliverableCountArgs} args - Arguments to filter Deliverables to count.
     * @example
     * // Count the number of Deliverables
     * const count = await prisma.deliverable.count({
     *   where: {
     *     // ... the filter for the Deliverables we want to count
     *   }
     * })
    **/
    count<T extends DeliverableCountArgs>(
      args?: Subset<T, DeliverableCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DeliverableCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Deliverable.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeliverableAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DeliverableAggregateArgs>(args: Subset<T, DeliverableAggregateArgs>): Prisma.PrismaPromise<GetDeliverableAggregateType<T>>

    /**
     * Group by Deliverable.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeliverableGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DeliverableGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DeliverableGroupByArgs['orderBy'] }
        : { orderBy?: DeliverableGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DeliverableGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDeliverableGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Deliverable model
   */
  readonly fields: DeliverableFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Deliverable.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DeliverableClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    state<T extends TaskStateDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TaskStateDefaultArgs<ExtArgs>>): Prisma__TaskStateClient<$Result.GetResult<Prisma.$TaskStatePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    task<T extends TaskDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TaskDefaultArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Deliverable model
   */
  interface DeliverableFieldRefs {
    readonly id: FieldRef<"Deliverable", 'Int'>
    readonly name: FieldRef<"Deliverable", 'String'>
    readonly stateId: FieldRef<"Deliverable", 'Int'>
    readonly percentageOfTask: FieldRef<"Deliverable", 'Int'>
    readonly date: FieldRef<"Deliverable", 'DateTime'>
    readonly taskId: FieldRef<"Deliverable", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Deliverable findUnique
   */
  export type DeliverableFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Deliverable
     */
    select?: DeliverableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Deliverable
     */
    omit?: DeliverableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeliverableInclude<ExtArgs> | null
    /**
     * Filter, which Deliverable to fetch.
     */
    where: DeliverableWhereUniqueInput
  }

  /**
   * Deliverable findUniqueOrThrow
   */
  export type DeliverableFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Deliverable
     */
    select?: DeliverableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Deliverable
     */
    omit?: DeliverableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeliverableInclude<ExtArgs> | null
    /**
     * Filter, which Deliverable to fetch.
     */
    where: DeliverableWhereUniqueInput
  }

  /**
   * Deliverable findFirst
   */
  export type DeliverableFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Deliverable
     */
    select?: DeliverableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Deliverable
     */
    omit?: DeliverableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeliverableInclude<ExtArgs> | null
    /**
     * Filter, which Deliverable to fetch.
     */
    where?: DeliverableWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Deliverables to fetch.
     */
    orderBy?: DeliverableOrderByWithRelationInput | DeliverableOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Deliverables.
     */
    cursor?: DeliverableWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Deliverables from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Deliverables.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Deliverables.
     */
    distinct?: DeliverableScalarFieldEnum | DeliverableScalarFieldEnum[]
  }

  /**
   * Deliverable findFirstOrThrow
   */
  export type DeliverableFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Deliverable
     */
    select?: DeliverableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Deliverable
     */
    omit?: DeliverableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeliverableInclude<ExtArgs> | null
    /**
     * Filter, which Deliverable to fetch.
     */
    where?: DeliverableWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Deliverables to fetch.
     */
    orderBy?: DeliverableOrderByWithRelationInput | DeliverableOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Deliverables.
     */
    cursor?: DeliverableWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Deliverables from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Deliverables.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Deliverables.
     */
    distinct?: DeliverableScalarFieldEnum | DeliverableScalarFieldEnum[]
  }

  /**
   * Deliverable findMany
   */
  export type DeliverableFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Deliverable
     */
    select?: DeliverableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Deliverable
     */
    omit?: DeliverableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeliverableInclude<ExtArgs> | null
    /**
     * Filter, which Deliverables to fetch.
     */
    where?: DeliverableWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Deliverables to fetch.
     */
    orderBy?: DeliverableOrderByWithRelationInput | DeliverableOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Deliverables.
     */
    cursor?: DeliverableWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Deliverables from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Deliverables.
     */
    skip?: number
    distinct?: DeliverableScalarFieldEnum | DeliverableScalarFieldEnum[]
  }

  /**
   * Deliverable create
   */
  export type DeliverableCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Deliverable
     */
    select?: DeliverableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Deliverable
     */
    omit?: DeliverableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeliverableInclude<ExtArgs> | null
    /**
     * The data needed to create a Deliverable.
     */
    data: XOR<DeliverableCreateInput, DeliverableUncheckedCreateInput>
  }

  /**
   * Deliverable createMany
   */
  export type DeliverableCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Deliverables.
     */
    data: DeliverableCreateManyInput | DeliverableCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Deliverable createManyAndReturn
   */
  export type DeliverableCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Deliverable
     */
    select?: DeliverableSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Deliverable
     */
    omit?: DeliverableOmit<ExtArgs> | null
    /**
     * The data used to create many Deliverables.
     */
    data: DeliverableCreateManyInput | DeliverableCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeliverableIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Deliverable update
   */
  export type DeliverableUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Deliverable
     */
    select?: DeliverableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Deliverable
     */
    omit?: DeliverableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeliverableInclude<ExtArgs> | null
    /**
     * The data needed to update a Deliverable.
     */
    data: XOR<DeliverableUpdateInput, DeliverableUncheckedUpdateInput>
    /**
     * Choose, which Deliverable to update.
     */
    where: DeliverableWhereUniqueInput
  }

  /**
   * Deliverable updateMany
   */
  export type DeliverableUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Deliverables.
     */
    data: XOR<DeliverableUpdateManyMutationInput, DeliverableUncheckedUpdateManyInput>
    /**
     * Filter which Deliverables to update
     */
    where?: DeliverableWhereInput
    /**
     * Limit how many Deliverables to update.
     */
    limit?: number
  }

  /**
   * Deliverable updateManyAndReturn
   */
  export type DeliverableUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Deliverable
     */
    select?: DeliverableSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Deliverable
     */
    omit?: DeliverableOmit<ExtArgs> | null
    /**
     * The data used to update Deliverables.
     */
    data: XOR<DeliverableUpdateManyMutationInput, DeliverableUncheckedUpdateManyInput>
    /**
     * Filter which Deliverables to update
     */
    where?: DeliverableWhereInput
    /**
     * Limit how many Deliverables to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeliverableIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Deliverable upsert
   */
  export type DeliverableUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Deliverable
     */
    select?: DeliverableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Deliverable
     */
    omit?: DeliverableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeliverableInclude<ExtArgs> | null
    /**
     * The filter to search for the Deliverable to update in case it exists.
     */
    where: DeliverableWhereUniqueInput
    /**
     * In case the Deliverable found by the `where` argument doesn't exist, create a new Deliverable with this data.
     */
    create: XOR<DeliverableCreateInput, DeliverableUncheckedCreateInput>
    /**
     * In case the Deliverable was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DeliverableUpdateInput, DeliverableUncheckedUpdateInput>
  }

  /**
   * Deliverable delete
   */
  export type DeliverableDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Deliverable
     */
    select?: DeliverableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Deliverable
     */
    omit?: DeliverableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeliverableInclude<ExtArgs> | null
    /**
     * Filter which Deliverable to delete.
     */
    where: DeliverableWhereUniqueInput
  }

  /**
   * Deliverable deleteMany
   */
  export type DeliverableDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Deliverables to delete
     */
    where?: DeliverableWhereInput
    /**
     * Limit how many Deliverables to delete.
     */
    limit?: number
  }

  /**
   * Deliverable without action
   */
  export type DeliverableDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Deliverable
     */
    select?: DeliverableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Deliverable
     */
    omit?: DeliverableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeliverableInclude<ExtArgs> | null
  }


  /**
   * Model TutoringPost
   */

  export type AggregateTutoringPost = {
    _count: TutoringPostCountAggregateOutputType | null
    _avg: TutoringPostAvgAggregateOutputType | null
    _sum: TutoringPostSumAggregateOutputType | null
    _min: TutoringPostMinAggregateOutputType | null
    _max: TutoringPostMaxAggregateOutputType | null
  }

  export type TutoringPostAvgAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type TutoringPostSumAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type TutoringPostMinAggregateOutputType = {
    id: number | null
    title: string | null
    description: string | null
    userId: number | null
  }

  export type TutoringPostMaxAggregateOutputType = {
    id: number | null
    title: string | null
    description: string | null
    userId: number | null
  }

  export type TutoringPostCountAggregateOutputType = {
    id: number
    title: number
    description: number
    userId: number
    _all: number
  }


  export type TutoringPostAvgAggregateInputType = {
    id?: true
    userId?: true
  }

  export type TutoringPostSumAggregateInputType = {
    id?: true
    userId?: true
  }

  export type TutoringPostMinAggregateInputType = {
    id?: true
    title?: true
    description?: true
    userId?: true
  }

  export type TutoringPostMaxAggregateInputType = {
    id?: true
    title?: true
    description?: true
    userId?: true
  }

  export type TutoringPostCountAggregateInputType = {
    id?: true
    title?: true
    description?: true
    userId?: true
    _all?: true
  }

  export type TutoringPostAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TutoringPost to aggregate.
     */
    where?: TutoringPostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TutoringPosts to fetch.
     */
    orderBy?: TutoringPostOrderByWithRelationInput | TutoringPostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TutoringPostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TutoringPosts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TutoringPosts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TutoringPosts
    **/
    _count?: true | TutoringPostCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TutoringPostAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TutoringPostSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TutoringPostMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TutoringPostMaxAggregateInputType
  }

  export type GetTutoringPostAggregateType<T extends TutoringPostAggregateArgs> = {
        [P in keyof T & keyof AggregateTutoringPost]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTutoringPost[P]>
      : GetScalarType<T[P], AggregateTutoringPost[P]>
  }




  export type TutoringPostGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TutoringPostWhereInput
    orderBy?: TutoringPostOrderByWithAggregationInput | TutoringPostOrderByWithAggregationInput[]
    by: TutoringPostScalarFieldEnum[] | TutoringPostScalarFieldEnum
    having?: TutoringPostScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TutoringPostCountAggregateInputType | true
    _avg?: TutoringPostAvgAggregateInputType
    _sum?: TutoringPostSumAggregateInputType
    _min?: TutoringPostMinAggregateInputType
    _max?: TutoringPostMaxAggregateInputType
  }

  export type TutoringPostGroupByOutputType = {
    id: number
    title: string
    description: string
    userId: number
    _count: TutoringPostCountAggregateOutputType | null
    _avg: TutoringPostAvgAggregateOutputType | null
    _sum: TutoringPostSumAggregateOutputType | null
    _min: TutoringPostMinAggregateOutputType | null
    _max: TutoringPostMaxAggregateOutputType | null
  }

  type GetTutoringPostGroupByPayload<T extends TutoringPostGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TutoringPostGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TutoringPostGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TutoringPostGroupByOutputType[P]>
            : GetScalarType<T[P], TutoringPostGroupByOutputType[P]>
        }
      >
    >


  export type TutoringPostSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tutoringPost"]>

  export type TutoringPostSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tutoringPost"]>

  export type TutoringPostSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tutoringPost"]>

  export type TutoringPostSelectScalar = {
    id?: boolean
    title?: boolean
    description?: boolean
    userId?: boolean
  }

  export type TutoringPostOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "description" | "userId", ExtArgs["result"]["tutoringPost"]>
  export type TutoringPostInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type TutoringPostIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type TutoringPostIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $TutoringPostPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TutoringPost"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      title: string
      description: string
      userId: number
    }, ExtArgs["result"]["tutoringPost"]>
    composites: {}
  }

  type TutoringPostGetPayload<S extends boolean | null | undefined | TutoringPostDefaultArgs> = $Result.GetResult<Prisma.$TutoringPostPayload, S>

  type TutoringPostCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TutoringPostFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TutoringPostCountAggregateInputType | true
    }

  export interface TutoringPostDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TutoringPost'], meta: { name: 'TutoringPost' } }
    /**
     * Find zero or one TutoringPost that matches the filter.
     * @param {TutoringPostFindUniqueArgs} args - Arguments to find a TutoringPost
     * @example
     * // Get one TutoringPost
     * const tutoringPost = await prisma.tutoringPost.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TutoringPostFindUniqueArgs>(args: SelectSubset<T, TutoringPostFindUniqueArgs<ExtArgs>>): Prisma__TutoringPostClient<$Result.GetResult<Prisma.$TutoringPostPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TutoringPost that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TutoringPostFindUniqueOrThrowArgs} args - Arguments to find a TutoringPost
     * @example
     * // Get one TutoringPost
     * const tutoringPost = await prisma.tutoringPost.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TutoringPostFindUniqueOrThrowArgs>(args: SelectSubset<T, TutoringPostFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TutoringPostClient<$Result.GetResult<Prisma.$TutoringPostPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TutoringPost that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TutoringPostFindFirstArgs} args - Arguments to find a TutoringPost
     * @example
     * // Get one TutoringPost
     * const tutoringPost = await prisma.tutoringPost.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TutoringPostFindFirstArgs>(args?: SelectSubset<T, TutoringPostFindFirstArgs<ExtArgs>>): Prisma__TutoringPostClient<$Result.GetResult<Prisma.$TutoringPostPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TutoringPost that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TutoringPostFindFirstOrThrowArgs} args - Arguments to find a TutoringPost
     * @example
     * // Get one TutoringPost
     * const tutoringPost = await prisma.tutoringPost.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TutoringPostFindFirstOrThrowArgs>(args?: SelectSubset<T, TutoringPostFindFirstOrThrowArgs<ExtArgs>>): Prisma__TutoringPostClient<$Result.GetResult<Prisma.$TutoringPostPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TutoringPosts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TutoringPostFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TutoringPosts
     * const tutoringPosts = await prisma.tutoringPost.findMany()
     * 
     * // Get first 10 TutoringPosts
     * const tutoringPosts = await prisma.tutoringPost.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tutoringPostWithIdOnly = await prisma.tutoringPost.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TutoringPostFindManyArgs>(args?: SelectSubset<T, TutoringPostFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TutoringPostPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TutoringPost.
     * @param {TutoringPostCreateArgs} args - Arguments to create a TutoringPost.
     * @example
     * // Create one TutoringPost
     * const TutoringPost = await prisma.tutoringPost.create({
     *   data: {
     *     // ... data to create a TutoringPost
     *   }
     * })
     * 
     */
    create<T extends TutoringPostCreateArgs>(args: SelectSubset<T, TutoringPostCreateArgs<ExtArgs>>): Prisma__TutoringPostClient<$Result.GetResult<Prisma.$TutoringPostPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TutoringPosts.
     * @param {TutoringPostCreateManyArgs} args - Arguments to create many TutoringPosts.
     * @example
     * // Create many TutoringPosts
     * const tutoringPost = await prisma.tutoringPost.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TutoringPostCreateManyArgs>(args?: SelectSubset<T, TutoringPostCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TutoringPosts and returns the data saved in the database.
     * @param {TutoringPostCreateManyAndReturnArgs} args - Arguments to create many TutoringPosts.
     * @example
     * // Create many TutoringPosts
     * const tutoringPost = await prisma.tutoringPost.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TutoringPosts and only return the `id`
     * const tutoringPostWithIdOnly = await prisma.tutoringPost.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TutoringPostCreateManyAndReturnArgs>(args?: SelectSubset<T, TutoringPostCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TutoringPostPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TutoringPost.
     * @param {TutoringPostDeleteArgs} args - Arguments to delete one TutoringPost.
     * @example
     * // Delete one TutoringPost
     * const TutoringPost = await prisma.tutoringPost.delete({
     *   where: {
     *     // ... filter to delete one TutoringPost
     *   }
     * })
     * 
     */
    delete<T extends TutoringPostDeleteArgs>(args: SelectSubset<T, TutoringPostDeleteArgs<ExtArgs>>): Prisma__TutoringPostClient<$Result.GetResult<Prisma.$TutoringPostPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TutoringPost.
     * @param {TutoringPostUpdateArgs} args - Arguments to update one TutoringPost.
     * @example
     * // Update one TutoringPost
     * const tutoringPost = await prisma.tutoringPost.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TutoringPostUpdateArgs>(args: SelectSubset<T, TutoringPostUpdateArgs<ExtArgs>>): Prisma__TutoringPostClient<$Result.GetResult<Prisma.$TutoringPostPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TutoringPosts.
     * @param {TutoringPostDeleteManyArgs} args - Arguments to filter TutoringPosts to delete.
     * @example
     * // Delete a few TutoringPosts
     * const { count } = await prisma.tutoringPost.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TutoringPostDeleteManyArgs>(args?: SelectSubset<T, TutoringPostDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TutoringPosts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TutoringPostUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TutoringPosts
     * const tutoringPost = await prisma.tutoringPost.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TutoringPostUpdateManyArgs>(args: SelectSubset<T, TutoringPostUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TutoringPosts and returns the data updated in the database.
     * @param {TutoringPostUpdateManyAndReturnArgs} args - Arguments to update many TutoringPosts.
     * @example
     * // Update many TutoringPosts
     * const tutoringPost = await prisma.tutoringPost.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TutoringPosts and only return the `id`
     * const tutoringPostWithIdOnly = await prisma.tutoringPost.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TutoringPostUpdateManyAndReturnArgs>(args: SelectSubset<T, TutoringPostUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TutoringPostPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TutoringPost.
     * @param {TutoringPostUpsertArgs} args - Arguments to update or create a TutoringPost.
     * @example
     * // Update or create a TutoringPost
     * const tutoringPost = await prisma.tutoringPost.upsert({
     *   create: {
     *     // ... data to create a TutoringPost
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TutoringPost we want to update
     *   }
     * })
     */
    upsert<T extends TutoringPostUpsertArgs>(args: SelectSubset<T, TutoringPostUpsertArgs<ExtArgs>>): Prisma__TutoringPostClient<$Result.GetResult<Prisma.$TutoringPostPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TutoringPosts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TutoringPostCountArgs} args - Arguments to filter TutoringPosts to count.
     * @example
     * // Count the number of TutoringPosts
     * const count = await prisma.tutoringPost.count({
     *   where: {
     *     // ... the filter for the TutoringPosts we want to count
     *   }
     * })
    **/
    count<T extends TutoringPostCountArgs>(
      args?: Subset<T, TutoringPostCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TutoringPostCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TutoringPost.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TutoringPostAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TutoringPostAggregateArgs>(args: Subset<T, TutoringPostAggregateArgs>): Prisma.PrismaPromise<GetTutoringPostAggregateType<T>>

    /**
     * Group by TutoringPost.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TutoringPostGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TutoringPostGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TutoringPostGroupByArgs['orderBy'] }
        : { orderBy?: TutoringPostGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TutoringPostGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTutoringPostGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TutoringPost model
   */
  readonly fields: TutoringPostFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TutoringPost.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TutoringPostClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the TutoringPost model
   */
  interface TutoringPostFieldRefs {
    readonly id: FieldRef<"TutoringPost", 'Int'>
    readonly title: FieldRef<"TutoringPost", 'String'>
    readonly description: FieldRef<"TutoringPost", 'String'>
    readonly userId: FieldRef<"TutoringPost", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * TutoringPost findUnique
   */
  export type TutoringPostFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TutoringPost
     */
    select?: TutoringPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TutoringPost
     */
    omit?: TutoringPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TutoringPostInclude<ExtArgs> | null
    /**
     * Filter, which TutoringPost to fetch.
     */
    where: TutoringPostWhereUniqueInput
  }

  /**
   * TutoringPost findUniqueOrThrow
   */
  export type TutoringPostFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TutoringPost
     */
    select?: TutoringPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TutoringPost
     */
    omit?: TutoringPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TutoringPostInclude<ExtArgs> | null
    /**
     * Filter, which TutoringPost to fetch.
     */
    where: TutoringPostWhereUniqueInput
  }

  /**
   * TutoringPost findFirst
   */
  export type TutoringPostFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TutoringPost
     */
    select?: TutoringPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TutoringPost
     */
    omit?: TutoringPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TutoringPostInclude<ExtArgs> | null
    /**
     * Filter, which TutoringPost to fetch.
     */
    where?: TutoringPostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TutoringPosts to fetch.
     */
    orderBy?: TutoringPostOrderByWithRelationInput | TutoringPostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TutoringPosts.
     */
    cursor?: TutoringPostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TutoringPosts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TutoringPosts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TutoringPosts.
     */
    distinct?: TutoringPostScalarFieldEnum | TutoringPostScalarFieldEnum[]
  }

  /**
   * TutoringPost findFirstOrThrow
   */
  export type TutoringPostFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TutoringPost
     */
    select?: TutoringPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TutoringPost
     */
    omit?: TutoringPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TutoringPostInclude<ExtArgs> | null
    /**
     * Filter, which TutoringPost to fetch.
     */
    where?: TutoringPostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TutoringPosts to fetch.
     */
    orderBy?: TutoringPostOrderByWithRelationInput | TutoringPostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TutoringPosts.
     */
    cursor?: TutoringPostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TutoringPosts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TutoringPosts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TutoringPosts.
     */
    distinct?: TutoringPostScalarFieldEnum | TutoringPostScalarFieldEnum[]
  }

  /**
   * TutoringPost findMany
   */
  export type TutoringPostFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TutoringPost
     */
    select?: TutoringPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TutoringPost
     */
    omit?: TutoringPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TutoringPostInclude<ExtArgs> | null
    /**
     * Filter, which TutoringPosts to fetch.
     */
    where?: TutoringPostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TutoringPosts to fetch.
     */
    orderBy?: TutoringPostOrderByWithRelationInput | TutoringPostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TutoringPosts.
     */
    cursor?: TutoringPostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TutoringPosts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TutoringPosts.
     */
    skip?: number
    distinct?: TutoringPostScalarFieldEnum | TutoringPostScalarFieldEnum[]
  }

  /**
   * TutoringPost create
   */
  export type TutoringPostCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TutoringPost
     */
    select?: TutoringPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TutoringPost
     */
    omit?: TutoringPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TutoringPostInclude<ExtArgs> | null
    /**
     * The data needed to create a TutoringPost.
     */
    data: XOR<TutoringPostCreateInput, TutoringPostUncheckedCreateInput>
  }

  /**
   * TutoringPost createMany
   */
  export type TutoringPostCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TutoringPosts.
     */
    data: TutoringPostCreateManyInput | TutoringPostCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TutoringPost createManyAndReturn
   */
  export type TutoringPostCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TutoringPost
     */
    select?: TutoringPostSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TutoringPost
     */
    omit?: TutoringPostOmit<ExtArgs> | null
    /**
     * The data used to create many TutoringPosts.
     */
    data: TutoringPostCreateManyInput | TutoringPostCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TutoringPostIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * TutoringPost update
   */
  export type TutoringPostUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TutoringPost
     */
    select?: TutoringPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TutoringPost
     */
    omit?: TutoringPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TutoringPostInclude<ExtArgs> | null
    /**
     * The data needed to update a TutoringPost.
     */
    data: XOR<TutoringPostUpdateInput, TutoringPostUncheckedUpdateInput>
    /**
     * Choose, which TutoringPost to update.
     */
    where: TutoringPostWhereUniqueInput
  }

  /**
   * TutoringPost updateMany
   */
  export type TutoringPostUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TutoringPosts.
     */
    data: XOR<TutoringPostUpdateManyMutationInput, TutoringPostUncheckedUpdateManyInput>
    /**
     * Filter which TutoringPosts to update
     */
    where?: TutoringPostWhereInput
    /**
     * Limit how many TutoringPosts to update.
     */
    limit?: number
  }

  /**
   * TutoringPost updateManyAndReturn
   */
  export type TutoringPostUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TutoringPost
     */
    select?: TutoringPostSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TutoringPost
     */
    omit?: TutoringPostOmit<ExtArgs> | null
    /**
     * The data used to update TutoringPosts.
     */
    data: XOR<TutoringPostUpdateManyMutationInput, TutoringPostUncheckedUpdateManyInput>
    /**
     * Filter which TutoringPosts to update
     */
    where?: TutoringPostWhereInput
    /**
     * Limit how many TutoringPosts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TutoringPostIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * TutoringPost upsert
   */
  export type TutoringPostUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TutoringPost
     */
    select?: TutoringPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TutoringPost
     */
    omit?: TutoringPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TutoringPostInclude<ExtArgs> | null
    /**
     * The filter to search for the TutoringPost to update in case it exists.
     */
    where: TutoringPostWhereUniqueInput
    /**
     * In case the TutoringPost found by the `where` argument doesn't exist, create a new TutoringPost with this data.
     */
    create: XOR<TutoringPostCreateInput, TutoringPostUncheckedCreateInput>
    /**
     * In case the TutoringPost was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TutoringPostUpdateInput, TutoringPostUncheckedUpdateInput>
  }

  /**
   * TutoringPost delete
   */
  export type TutoringPostDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TutoringPost
     */
    select?: TutoringPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TutoringPost
     */
    omit?: TutoringPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TutoringPostInclude<ExtArgs> | null
    /**
     * Filter which TutoringPost to delete.
     */
    where: TutoringPostWhereUniqueInput
  }

  /**
   * TutoringPost deleteMany
   */
  export type TutoringPostDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TutoringPosts to delete
     */
    where?: TutoringPostWhereInput
    /**
     * Limit how many TutoringPosts to delete.
     */
    limit?: number
  }

  /**
   * TutoringPost without action
   */
  export type TutoringPostDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TutoringPost
     */
    select?: TutoringPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TutoringPost
     */
    omit?: TutoringPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TutoringPostInclude<ExtArgs> | null
  }


  /**
   * Model Notification
   */

  export type AggregateNotification = {
    _count: NotificationCountAggregateOutputType | null
    _avg: NotificationAvgAggregateOutputType | null
    _sum: NotificationSumAggregateOutputType | null
    _min: NotificationMinAggregateOutputType | null
    _max: NotificationMaxAggregateOutputType | null
  }

  export type NotificationAvgAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type NotificationSumAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type NotificationMinAggregateOutputType = {
    id: number | null
    title: string | null
    message: string | null
    isRead: boolean | null
    userId: number | null
  }

  export type NotificationMaxAggregateOutputType = {
    id: number | null
    title: string | null
    message: string | null
    isRead: boolean | null
    userId: number | null
  }

  export type NotificationCountAggregateOutputType = {
    id: number
    title: number
    message: number
    isRead: number
    userId: number
    _all: number
  }


  export type NotificationAvgAggregateInputType = {
    id?: true
    userId?: true
  }

  export type NotificationSumAggregateInputType = {
    id?: true
    userId?: true
  }

  export type NotificationMinAggregateInputType = {
    id?: true
    title?: true
    message?: true
    isRead?: true
    userId?: true
  }

  export type NotificationMaxAggregateInputType = {
    id?: true
    title?: true
    message?: true
    isRead?: true
    userId?: true
  }

  export type NotificationCountAggregateInputType = {
    id?: true
    title?: true
    message?: true
    isRead?: true
    userId?: true
    _all?: true
  }

  export type NotificationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Notification to aggregate.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Notifications
    **/
    _count?: true | NotificationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: NotificationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: NotificationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NotificationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NotificationMaxAggregateInputType
  }

  export type GetNotificationAggregateType<T extends NotificationAggregateArgs> = {
        [P in keyof T & keyof AggregateNotification]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNotification[P]>
      : GetScalarType<T[P], AggregateNotification[P]>
  }




  export type NotificationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NotificationWhereInput
    orderBy?: NotificationOrderByWithAggregationInput | NotificationOrderByWithAggregationInput[]
    by: NotificationScalarFieldEnum[] | NotificationScalarFieldEnum
    having?: NotificationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NotificationCountAggregateInputType | true
    _avg?: NotificationAvgAggregateInputType
    _sum?: NotificationSumAggregateInputType
    _min?: NotificationMinAggregateInputType
    _max?: NotificationMaxAggregateInputType
  }

  export type NotificationGroupByOutputType = {
    id: number
    title: string
    message: string
    isRead: boolean
    userId: number
    _count: NotificationCountAggregateOutputType | null
    _avg: NotificationAvgAggregateOutputType | null
    _sum: NotificationSumAggregateOutputType | null
    _min: NotificationMinAggregateOutputType | null
    _max: NotificationMaxAggregateOutputType | null
  }

  type GetNotificationGroupByPayload<T extends NotificationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NotificationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NotificationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NotificationGroupByOutputType[P]>
            : GetScalarType<T[P], NotificationGroupByOutputType[P]>
        }
      >
    >


  export type NotificationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    message?: boolean
    isRead?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["notification"]>

  export type NotificationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    message?: boolean
    isRead?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["notification"]>

  export type NotificationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    message?: boolean
    isRead?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["notification"]>

  export type NotificationSelectScalar = {
    id?: boolean
    title?: boolean
    message?: boolean
    isRead?: boolean
    userId?: boolean
  }

  export type NotificationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "message" | "isRead" | "userId", ExtArgs["result"]["notification"]>
  export type NotificationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type NotificationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type NotificationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $NotificationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Notification"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      title: string
      message: string
      isRead: boolean
      userId: number
    }, ExtArgs["result"]["notification"]>
    composites: {}
  }

  type NotificationGetPayload<S extends boolean | null | undefined | NotificationDefaultArgs> = $Result.GetResult<Prisma.$NotificationPayload, S>

  type NotificationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<NotificationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: NotificationCountAggregateInputType | true
    }

  export interface NotificationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Notification'], meta: { name: 'Notification' } }
    /**
     * Find zero or one Notification that matches the filter.
     * @param {NotificationFindUniqueArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends NotificationFindUniqueArgs>(args: SelectSubset<T, NotificationFindUniqueArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Notification that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {NotificationFindUniqueOrThrowArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends NotificationFindUniqueOrThrowArgs>(args: SelectSubset<T, NotificationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Notification that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationFindFirstArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends NotificationFindFirstArgs>(args?: SelectSubset<T, NotificationFindFirstArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Notification that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationFindFirstOrThrowArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends NotificationFindFirstOrThrowArgs>(args?: SelectSubset<T, NotificationFindFirstOrThrowArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Notifications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Notifications
     * const notifications = await prisma.notification.findMany()
     * 
     * // Get first 10 Notifications
     * const notifications = await prisma.notification.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const notificationWithIdOnly = await prisma.notification.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends NotificationFindManyArgs>(args?: SelectSubset<T, NotificationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Notification.
     * @param {NotificationCreateArgs} args - Arguments to create a Notification.
     * @example
     * // Create one Notification
     * const Notification = await prisma.notification.create({
     *   data: {
     *     // ... data to create a Notification
     *   }
     * })
     * 
     */
    create<T extends NotificationCreateArgs>(args: SelectSubset<T, NotificationCreateArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Notifications.
     * @param {NotificationCreateManyArgs} args - Arguments to create many Notifications.
     * @example
     * // Create many Notifications
     * const notification = await prisma.notification.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends NotificationCreateManyArgs>(args?: SelectSubset<T, NotificationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Notifications and returns the data saved in the database.
     * @param {NotificationCreateManyAndReturnArgs} args - Arguments to create many Notifications.
     * @example
     * // Create many Notifications
     * const notification = await prisma.notification.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Notifications and only return the `id`
     * const notificationWithIdOnly = await prisma.notification.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends NotificationCreateManyAndReturnArgs>(args?: SelectSubset<T, NotificationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Notification.
     * @param {NotificationDeleteArgs} args - Arguments to delete one Notification.
     * @example
     * // Delete one Notification
     * const Notification = await prisma.notification.delete({
     *   where: {
     *     // ... filter to delete one Notification
     *   }
     * })
     * 
     */
    delete<T extends NotificationDeleteArgs>(args: SelectSubset<T, NotificationDeleteArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Notification.
     * @param {NotificationUpdateArgs} args - Arguments to update one Notification.
     * @example
     * // Update one Notification
     * const notification = await prisma.notification.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends NotificationUpdateArgs>(args: SelectSubset<T, NotificationUpdateArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Notifications.
     * @param {NotificationDeleteManyArgs} args - Arguments to filter Notifications to delete.
     * @example
     * // Delete a few Notifications
     * const { count } = await prisma.notification.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends NotificationDeleteManyArgs>(args?: SelectSubset<T, NotificationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Notifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Notifications
     * const notification = await prisma.notification.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends NotificationUpdateManyArgs>(args: SelectSubset<T, NotificationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Notifications and returns the data updated in the database.
     * @param {NotificationUpdateManyAndReturnArgs} args - Arguments to update many Notifications.
     * @example
     * // Update many Notifications
     * const notification = await prisma.notification.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Notifications and only return the `id`
     * const notificationWithIdOnly = await prisma.notification.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends NotificationUpdateManyAndReturnArgs>(args: SelectSubset<T, NotificationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Notification.
     * @param {NotificationUpsertArgs} args - Arguments to update or create a Notification.
     * @example
     * // Update or create a Notification
     * const notification = await prisma.notification.upsert({
     *   create: {
     *     // ... data to create a Notification
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Notification we want to update
     *   }
     * })
     */
    upsert<T extends NotificationUpsertArgs>(args: SelectSubset<T, NotificationUpsertArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Notifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationCountArgs} args - Arguments to filter Notifications to count.
     * @example
     * // Count the number of Notifications
     * const count = await prisma.notification.count({
     *   where: {
     *     // ... the filter for the Notifications we want to count
     *   }
     * })
    **/
    count<T extends NotificationCountArgs>(
      args?: Subset<T, NotificationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NotificationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Notification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends NotificationAggregateArgs>(args: Subset<T, NotificationAggregateArgs>): Prisma.PrismaPromise<GetNotificationAggregateType<T>>

    /**
     * Group by Notification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends NotificationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NotificationGroupByArgs['orderBy'] }
        : { orderBy?: NotificationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, NotificationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNotificationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Notification model
   */
  readonly fields: NotificationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Notification.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__NotificationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Notification model
   */
  interface NotificationFieldRefs {
    readonly id: FieldRef<"Notification", 'Int'>
    readonly title: FieldRef<"Notification", 'String'>
    readonly message: FieldRef<"Notification", 'String'>
    readonly isRead: FieldRef<"Notification", 'Boolean'>
    readonly userId: FieldRef<"Notification", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Notification findUnique
   */
  export type NotificationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where: NotificationWhereUniqueInput
  }

  /**
   * Notification findUniqueOrThrow
   */
  export type NotificationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where: NotificationWhereUniqueInput
  }

  /**
   * Notification findFirst
   */
  export type NotificationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Notifications.
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Notifications.
     */
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * Notification findFirstOrThrow
   */
  export type NotificationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Notifications.
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Notifications.
     */
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * Notification findMany
   */
  export type NotificationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notifications to fetch.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Notifications.
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * Notification create
   */
  export type NotificationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * The data needed to create a Notification.
     */
    data: XOR<NotificationCreateInput, NotificationUncheckedCreateInput>
  }

  /**
   * Notification createMany
   */
  export type NotificationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Notifications.
     */
    data: NotificationCreateManyInput | NotificationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Notification createManyAndReturn
   */
  export type NotificationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * The data used to create many Notifications.
     */
    data: NotificationCreateManyInput | NotificationCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Notification update
   */
  export type NotificationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * The data needed to update a Notification.
     */
    data: XOR<NotificationUpdateInput, NotificationUncheckedUpdateInput>
    /**
     * Choose, which Notification to update.
     */
    where: NotificationWhereUniqueInput
  }

  /**
   * Notification updateMany
   */
  export type NotificationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Notifications.
     */
    data: XOR<NotificationUpdateManyMutationInput, NotificationUncheckedUpdateManyInput>
    /**
     * Filter which Notifications to update
     */
    where?: NotificationWhereInput
    /**
     * Limit how many Notifications to update.
     */
    limit?: number
  }

  /**
   * Notification updateManyAndReturn
   */
  export type NotificationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * The data used to update Notifications.
     */
    data: XOR<NotificationUpdateManyMutationInput, NotificationUncheckedUpdateManyInput>
    /**
     * Filter which Notifications to update
     */
    where?: NotificationWhereInput
    /**
     * Limit how many Notifications to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Notification upsert
   */
  export type NotificationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * The filter to search for the Notification to update in case it exists.
     */
    where: NotificationWhereUniqueInput
    /**
     * In case the Notification found by the `where` argument doesn't exist, create a new Notification with this data.
     */
    create: XOR<NotificationCreateInput, NotificationUncheckedCreateInput>
    /**
     * In case the Notification was found with the provided `where` argument, update it with this data.
     */
    update: XOR<NotificationUpdateInput, NotificationUncheckedUpdateInput>
  }

  /**
   * Notification delete
   */
  export type NotificationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter which Notification to delete.
     */
    where: NotificationWhereUniqueInput
  }

  /**
   * Notification deleteMany
   */
  export type NotificationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Notifications to delete
     */
    where?: NotificationWhereInput
    /**
     * Limit how many Notifications to delete.
     */
    limit?: number
  }

  /**
   * Notification without action
   */
  export type NotificationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const MajorScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type MajorScalarFieldEnum = (typeof MajorScalarFieldEnum)[keyof typeof MajorScalarFieldEnum]


  export const RoleScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type RoleScalarFieldEnum = (typeof RoleScalarFieldEnum)[keyof typeof RoleScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    password: 'password',
    name: 'name',
    lastname: 'lastname',
    majorId: 'majorId',
    verified: 'verified',
    roleId: 'roleId',
    createdAt: 'createdAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const PeriodScalarFieldEnum: {
    id: 'id',
    type: 'type',
    number: 'number',
    year: 'year',
    startDate: 'startDate',
    endDate: 'endDate'
  };

  export type PeriodScalarFieldEnum = (typeof PeriodScalarFieldEnum)[keyof typeof PeriodScalarFieldEnum]


  export const UserPeriodScalarFieldEnum: {
    id: 'id',
    enrollmentDate: 'enrollmentDate',
    userId: 'userId',
    periodId: 'periodId'
  };

  export type UserPeriodScalarFieldEnum = (typeof UserPeriodScalarFieldEnum)[keyof typeof UserPeriodScalarFieldEnum]


  export const TeacherScalarFieldEnum: {
    id: 'id',
    name: 'name',
    lastname: 'lastname'
  };

  export type TeacherScalarFieldEnum = (typeof TeacherScalarFieldEnum)[keyof typeof TeacherScalarFieldEnum]


  export const CourseScalarFieldEnum: {
    id: 'id',
    name: 'name',
    code: 'code',
    state: 'state',
    teacherId: 'teacherId',
    credits: 'credits',
    periodId: 'periodId'
  };

  export type CourseScalarFieldEnum = (typeof CourseScalarFieldEnum)[keyof typeof CourseScalarFieldEnum]


  export const TaskStateScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type TaskStateScalarFieldEnum = (typeof TaskStateScalarFieldEnum)[keyof typeof TaskStateScalarFieldEnum]


  export const TaskScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    stateId: 'stateId',
    percentage: 'percentage',
    endDate: 'endDate',
    userId: 'userId',
    courseId: 'courseId'
  };

  export type TaskScalarFieldEnum = (typeof TaskScalarFieldEnum)[keyof typeof TaskScalarFieldEnum]


  export const DeliverableScalarFieldEnum: {
    id: 'id',
    name: 'name',
    stateId: 'stateId',
    percentageOfTask: 'percentageOfTask',
    date: 'date',
    taskId: 'taskId'
  };

  export type DeliverableScalarFieldEnum = (typeof DeliverableScalarFieldEnum)[keyof typeof DeliverableScalarFieldEnum]


  export const TutoringPostScalarFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    userId: 'userId'
  };

  export type TutoringPostScalarFieldEnum = (typeof TutoringPostScalarFieldEnum)[keyof typeof TutoringPostScalarFieldEnum]


  export const NotificationScalarFieldEnum: {
    id: 'id',
    title: 'title',
    message: 'message',
    isRead: 'isRead',
    userId: 'userId'
  };

  export type NotificationScalarFieldEnum = (typeof NotificationScalarFieldEnum)[keyof typeof NotificationScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'PeriodType'
   */
  export type EnumPeriodTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PeriodType'>
    


  /**
   * Reference to a field of type 'PeriodType[]'
   */
  export type ListEnumPeriodTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PeriodType[]'>
    


  /**
   * Reference to a field of type 'CourseState'
   */
  export type EnumCourseStateFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CourseState'>
    


  /**
   * Reference to a field of type 'CourseState[]'
   */
  export type ListEnumCourseStateFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CourseState[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type MajorWhereInput = {
    AND?: MajorWhereInput | MajorWhereInput[]
    OR?: MajorWhereInput[]
    NOT?: MajorWhereInput | MajorWhereInput[]
    id?: IntFilter<"Major"> | number
    name?: StringFilter<"Major"> | string
    users?: UserListRelationFilter
  }

  export type MajorOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    users?: UserOrderByRelationAggregateInput
  }

  export type MajorWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    AND?: MajorWhereInput | MajorWhereInput[]
    OR?: MajorWhereInput[]
    NOT?: MajorWhereInput | MajorWhereInput[]
    users?: UserListRelationFilter
  }, "id" | "name">

  export type MajorOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    _count?: MajorCountOrderByAggregateInput
    _avg?: MajorAvgOrderByAggregateInput
    _max?: MajorMaxOrderByAggregateInput
    _min?: MajorMinOrderByAggregateInput
    _sum?: MajorSumOrderByAggregateInput
  }

  export type MajorScalarWhereWithAggregatesInput = {
    AND?: MajorScalarWhereWithAggregatesInput | MajorScalarWhereWithAggregatesInput[]
    OR?: MajorScalarWhereWithAggregatesInput[]
    NOT?: MajorScalarWhereWithAggregatesInput | MajorScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Major"> | number
    name?: StringWithAggregatesFilter<"Major"> | string
  }

  export type RoleWhereInput = {
    AND?: RoleWhereInput | RoleWhereInput[]
    OR?: RoleWhereInput[]
    NOT?: RoleWhereInput | RoleWhereInput[]
    id?: IntFilter<"Role"> | number
    name?: StringFilter<"Role"> | string
    users?: UserListRelationFilter
  }

  export type RoleOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    users?: UserOrderByRelationAggregateInput
  }

  export type RoleWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    AND?: RoleWhereInput | RoleWhereInput[]
    OR?: RoleWhereInput[]
    NOT?: RoleWhereInput | RoleWhereInput[]
    users?: UserListRelationFilter
  }, "id" | "name">

  export type RoleOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    _count?: RoleCountOrderByAggregateInput
    _avg?: RoleAvgOrderByAggregateInput
    _max?: RoleMaxOrderByAggregateInput
    _min?: RoleMinOrderByAggregateInput
    _sum?: RoleSumOrderByAggregateInput
  }

  export type RoleScalarWhereWithAggregatesInput = {
    AND?: RoleScalarWhereWithAggregatesInput | RoleScalarWhereWithAggregatesInput[]
    OR?: RoleScalarWhereWithAggregatesInput[]
    NOT?: RoleScalarWhereWithAggregatesInput | RoleScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Role"> | number
    name?: StringWithAggregatesFilter<"Role"> | string
  }

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    lastname?: StringFilter<"User"> | string
    majorId?: IntNullableFilter<"User"> | number | null
    verified?: BoolFilter<"User"> | boolean
    roleId?: IntFilter<"User"> | number
    createdAt?: DateTimeFilter<"User"> | Date | string
    major?: XOR<MajorNullableScalarRelationFilter, MajorWhereInput> | null
    role?: XOR<RoleScalarRelationFilter, RoleWhereInput>
    userPeriods?: UserPeriodListRelationFilter
    tasks?: TaskListRelationFilter
    tutoringPosts?: TutoringPostListRelationFilter
    notifications?: NotificationListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    lastname?: SortOrder
    majorId?: SortOrderInput | SortOrder
    verified?: SortOrder
    roleId?: SortOrder
    createdAt?: SortOrder
    major?: MajorOrderByWithRelationInput
    role?: RoleOrderByWithRelationInput
    userPeriods?: UserPeriodOrderByRelationAggregateInput
    tasks?: TaskOrderByRelationAggregateInput
    tutoringPosts?: TutoringPostOrderByRelationAggregateInput
    notifications?: NotificationOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    password?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    lastname?: StringFilter<"User"> | string
    majorId?: IntNullableFilter<"User"> | number | null
    verified?: BoolFilter<"User"> | boolean
    roleId?: IntFilter<"User"> | number
    createdAt?: DateTimeFilter<"User"> | Date | string
    major?: XOR<MajorNullableScalarRelationFilter, MajorWhereInput> | null
    role?: XOR<RoleScalarRelationFilter, RoleWhereInput>
    userPeriods?: UserPeriodListRelationFilter
    tasks?: TaskListRelationFilter
    tutoringPosts?: TutoringPostListRelationFilter
    notifications?: NotificationListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    lastname?: SortOrder
    majorId?: SortOrderInput | SortOrder
    verified?: SortOrder
    roleId?: SortOrder
    createdAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    lastname?: StringWithAggregatesFilter<"User"> | string
    majorId?: IntNullableWithAggregatesFilter<"User"> | number | null
    verified?: BoolWithAggregatesFilter<"User"> | boolean
    roleId?: IntWithAggregatesFilter<"User"> | number
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type PeriodWhereInput = {
    AND?: PeriodWhereInput | PeriodWhereInput[]
    OR?: PeriodWhereInput[]
    NOT?: PeriodWhereInput | PeriodWhereInput[]
    id?: IntFilter<"Period"> | number
    type?: EnumPeriodTypeFilter<"Period"> | $Enums.PeriodType
    number?: IntFilter<"Period"> | number
    year?: IntFilter<"Period"> | number
    startDate?: DateTimeFilter<"Period"> | Date | string
    endDate?: DateTimeFilter<"Period"> | Date | string
    userPeriods?: UserPeriodListRelationFilter
    courses?: CourseListRelationFilter
  }

  export type PeriodOrderByWithRelationInput = {
    id?: SortOrder
    type?: SortOrder
    number?: SortOrder
    year?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    userPeriods?: UserPeriodOrderByRelationAggregateInput
    courses?: CourseOrderByRelationAggregateInput
  }

  export type PeriodWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    type_number_year?: PeriodTypeNumberYearCompoundUniqueInput
    AND?: PeriodWhereInput | PeriodWhereInput[]
    OR?: PeriodWhereInput[]
    NOT?: PeriodWhereInput | PeriodWhereInput[]
    type?: EnumPeriodTypeFilter<"Period"> | $Enums.PeriodType
    number?: IntFilter<"Period"> | number
    year?: IntFilter<"Period"> | number
    startDate?: DateTimeFilter<"Period"> | Date | string
    endDate?: DateTimeFilter<"Period"> | Date | string
    userPeriods?: UserPeriodListRelationFilter
    courses?: CourseListRelationFilter
  }, "id" | "type_number_year">

  export type PeriodOrderByWithAggregationInput = {
    id?: SortOrder
    type?: SortOrder
    number?: SortOrder
    year?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    _count?: PeriodCountOrderByAggregateInput
    _avg?: PeriodAvgOrderByAggregateInput
    _max?: PeriodMaxOrderByAggregateInput
    _min?: PeriodMinOrderByAggregateInput
    _sum?: PeriodSumOrderByAggregateInput
  }

  export type PeriodScalarWhereWithAggregatesInput = {
    AND?: PeriodScalarWhereWithAggregatesInput | PeriodScalarWhereWithAggregatesInput[]
    OR?: PeriodScalarWhereWithAggregatesInput[]
    NOT?: PeriodScalarWhereWithAggregatesInput | PeriodScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Period"> | number
    type?: EnumPeriodTypeWithAggregatesFilter<"Period"> | $Enums.PeriodType
    number?: IntWithAggregatesFilter<"Period"> | number
    year?: IntWithAggregatesFilter<"Period"> | number
    startDate?: DateTimeWithAggregatesFilter<"Period"> | Date | string
    endDate?: DateTimeWithAggregatesFilter<"Period"> | Date | string
  }

  export type UserPeriodWhereInput = {
    AND?: UserPeriodWhereInput | UserPeriodWhereInput[]
    OR?: UserPeriodWhereInput[]
    NOT?: UserPeriodWhereInput | UserPeriodWhereInput[]
    id?: IntFilter<"UserPeriod"> | number
    enrollmentDate?: DateTimeFilter<"UserPeriod"> | Date | string
    userId?: IntFilter<"UserPeriod"> | number
    periodId?: IntFilter<"UserPeriod"> | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    period?: XOR<PeriodScalarRelationFilter, PeriodWhereInput>
  }

  export type UserPeriodOrderByWithRelationInput = {
    id?: SortOrder
    enrollmentDate?: SortOrder
    userId?: SortOrder
    periodId?: SortOrder
    user?: UserOrderByWithRelationInput
    period?: PeriodOrderByWithRelationInput
  }

  export type UserPeriodWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    userId_periodId?: UserPeriodUserIdPeriodIdCompoundUniqueInput
    AND?: UserPeriodWhereInput | UserPeriodWhereInput[]
    OR?: UserPeriodWhereInput[]
    NOT?: UserPeriodWhereInput | UserPeriodWhereInput[]
    enrollmentDate?: DateTimeFilter<"UserPeriod"> | Date | string
    userId?: IntFilter<"UserPeriod"> | number
    periodId?: IntFilter<"UserPeriod"> | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    period?: XOR<PeriodScalarRelationFilter, PeriodWhereInput>
  }, "id" | "userId_periodId">

  export type UserPeriodOrderByWithAggregationInput = {
    id?: SortOrder
    enrollmentDate?: SortOrder
    userId?: SortOrder
    periodId?: SortOrder
    _count?: UserPeriodCountOrderByAggregateInput
    _avg?: UserPeriodAvgOrderByAggregateInput
    _max?: UserPeriodMaxOrderByAggregateInput
    _min?: UserPeriodMinOrderByAggregateInput
    _sum?: UserPeriodSumOrderByAggregateInput
  }

  export type UserPeriodScalarWhereWithAggregatesInput = {
    AND?: UserPeriodScalarWhereWithAggregatesInput | UserPeriodScalarWhereWithAggregatesInput[]
    OR?: UserPeriodScalarWhereWithAggregatesInput[]
    NOT?: UserPeriodScalarWhereWithAggregatesInput | UserPeriodScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"UserPeriod"> | number
    enrollmentDate?: DateTimeWithAggregatesFilter<"UserPeriod"> | Date | string
    userId?: IntWithAggregatesFilter<"UserPeriod"> | number
    periodId?: IntWithAggregatesFilter<"UserPeriod"> | number
  }

  export type TeacherWhereInput = {
    AND?: TeacherWhereInput | TeacherWhereInput[]
    OR?: TeacherWhereInput[]
    NOT?: TeacherWhereInput | TeacherWhereInput[]
    id?: IntFilter<"Teacher"> | number
    name?: StringFilter<"Teacher"> | string
    lastname?: StringFilter<"Teacher"> | string
    courses?: CourseListRelationFilter
  }

  export type TeacherOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    lastname?: SortOrder
    courses?: CourseOrderByRelationAggregateInput
  }

  export type TeacherWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: TeacherWhereInput | TeacherWhereInput[]
    OR?: TeacherWhereInput[]
    NOT?: TeacherWhereInput | TeacherWhereInput[]
    name?: StringFilter<"Teacher"> | string
    lastname?: StringFilter<"Teacher"> | string
    courses?: CourseListRelationFilter
  }, "id">

  export type TeacherOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    lastname?: SortOrder
    _count?: TeacherCountOrderByAggregateInput
    _avg?: TeacherAvgOrderByAggregateInput
    _max?: TeacherMaxOrderByAggregateInput
    _min?: TeacherMinOrderByAggregateInput
    _sum?: TeacherSumOrderByAggregateInput
  }

  export type TeacherScalarWhereWithAggregatesInput = {
    AND?: TeacherScalarWhereWithAggregatesInput | TeacherScalarWhereWithAggregatesInput[]
    OR?: TeacherScalarWhereWithAggregatesInput[]
    NOT?: TeacherScalarWhereWithAggregatesInput | TeacherScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Teacher"> | number
    name?: StringWithAggregatesFilter<"Teacher"> | string
    lastname?: StringWithAggregatesFilter<"Teacher"> | string
  }

  export type CourseWhereInput = {
    AND?: CourseWhereInput | CourseWhereInput[]
    OR?: CourseWhereInput[]
    NOT?: CourseWhereInput | CourseWhereInput[]
    id?: IntFilter<"Course"> | number
    name?: StringFilter<"Course"> | string
    code?: StringFilter<"Course"> | string
    state?: EnumCourseStateFilter<"Course"> | $Enums.CourseState
    teacherId?: IntNullableFilter<"Course"> | number | null
    credits?: IntFilter<"Course"> | number
    periodId?: IntFilter<"Course"> | number
    teacher?: XOR<TeacherNullableScalarRelationFilter, TeacherWhereInput> | null
    period?: XOR<PeriodScalarRelationFilter, PeriodWhereInput>
    tasks?: TaskListRelationFilter
  }

  export type CourseOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    code?: SortOrder
    state?: SortOrder
    teacherId?: SortOrderInput | SortOrder
    credits?: SortOrder
    periodId?: SortOrder
    teacher?: TeacherOrderByWithRelationInput
    period?: PeriodOrderByWithRelationInput
    tasks?: TaskOrderByRelationAggregateInput
  }

  export type CourseWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: CourseWhereInput | CourseWhereInput[]
    OR?: CourseWhereInput[]
    NOT?: CourseWhereInput | CourseWhereInput[]
    name?: StringFilter<"Course"> | string
    code?: StringFilter<"Course"> | string
    state?: EnumCourseStateFilter<"Course"> | $Enums.CourseState
    teacherId?: IntNullableFilter<"Course"> | number | null
    credits?: IntFilter<"Course"> | number
    periodId?: IntFilter<"Course"> | number
    teacher?: XOR<TeacherNullableScalarRelationFilter, TeacherWhereInput> | null
    period?: XOR<PeriodScalarRelationFilter, PeriodWhereInput>
    tasks?: TaskListRelationFilter
  }, "id">

  export type CourseOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    code?: SortOrder
    state?: SortOrder
    teacherId?: SortOrderInput | SortOrder
    credits?: SortOrder
    periodId?: SortOrder
    _count?: CourseCountOrderByAggregateInput
    _avg?: CourseAvgOrderByAggregateInput
    _max?: CourseMaxOrderByAggregateInput
    _min?: CourseMinOrderByAggregateInput
    _sum?: CourseSumOrderByAggregateInput
  }

  export type CourseScalarWhereWithAggregatesInput = {
    AND?: CourseScalarWhereWithAggregatesInput | CourseScalarWhereWithAggregatesInput[]
    OR?: CourseScalarWhereWithAggregatesInput[]
    NOT?: CourseScalarWhereWithAggregatesInput | CourseScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Course"> | number
    name?: StringWithAggregatesFilter<"Course"> | string
    code?: StringWithAggregatesFilter<"Course"> | string
    state?: EnumCourseStateWithAggregatesFilter<"Course"> | $Enums.CourseState
    teacherId?: IntNullableWithAggregatesFilter<"Course"> | number | null
    credits?: IntWithAggregatesFilter<"Course"> | number
    periodId?: IntWithAggregatesFilter<"Course"> | number
  }

  export type TaskStateWhereInput = {
    AND?: TaskStateWhereInput | TaskStateWhereInput[]
    OR?: TaskStateWhereInput[]
    NOT?: TaskStateWhereInput | TaskStateWhereInput[]
    id?: IntFilter<"TaskState"> | number
    name?: StringFilter<"TaskState"> | string
    tasks?: TaskListRelationFilter
    deliverables?: DeliverableListRelationFilter
  }

  export type TaskStateOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    tasks?: TaskOrderByRelationAggregateInput
    deliverables?: DeliverableOrderByRelationAggregateInput
  }

  export type TaskStateWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    AND?: TaskStateWhereInput | TaskStateWhereInput[]
    OR?: TaskStateWhereInput[]
    NOT?: TaskStateWhereInput | TaskStateWhereInput[]
    tasks?: TaskListRelationFilter
    deliverables?: DeliverableListRelationFilter
  }, "id" | "name">

  export type TaskStateOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    _count?: TaskStateCountOrderByAggregateInput
    _avg?: TaskStateAvgOrderByAggregateInput
    _max?: TaskStateMaxOrderByAggregateInput
    _min?: TaskStateMinOrderByAggregateInput
    _sum?: TaskStateSumOrderByAggregateInput
  }

  export type TaskStateScalarWhereWithAggregatesInput = {
    AND?: TaskStateScalarWhereWithAggregatesInput | TaskStateScalarWhereWithAggregatesInput[]
    OR?: TaskStateScalarWhereWithAggregatesInput[]
    NOT?: TaskStateScalarWhereWithAggregatesInput | TaskStateScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"TaskState"> | number
    name?: StringWithAggregatesFilter<"TaskState"> | string
  }

  export type TaskWhereInput = {
    AND?: TaskWhereInput | TaskWhereInput[]
    OR?: TaskWhereInput[]
    NOT?: TaskWhereInput | TaskWhereInput[]
    id?: IntFilter<"Task"> | number
    name?: StringFilter<"Task"> | string
    description?: StringFilter<"Task"> | string
    stateId?: IntFilter<"Task"> | number
    percentage?: IntFilter<"Task"> | number
    endDate?: DateTimeFilter<"Task"> | Date | string
    userId?: IntFilter<"Task"> | number
    courseId?: IntFilter<"Task"> | number
    state?: XOR<TaskStateScalarRelationFilter, TaskStateWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    course?: XOR<CourseScalarRelationFilter, CourseWhereInput>
    deliverables?: DeliverableListRelationFilter
  }

  export type TaskOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    stateId?: SortOrder
    percentage?: SortOrder
    endDate?: SortOrder
    userId?: SortOrder
    courseId?: SortOrder
    state?: TaskStateOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
    course?: CourseOrderByWithRelationInput
    deliverables?: DeliverableOrderByRelationAggregateInput
  }

  export type TaskWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: TaskWhereInput | TaskWhereInput[]
    OR?: TaskWhereInput[]
    NOT?: TaskWhereInput | TaskWhereInput[]
    name?: StringFilter<"Task"> | string
    description?: StringFilter<"Task"> | string
    stateId?: IntFilter<"Task"> | number
    percentage?: IntFilter<"Task"> | number
    endDate?: DateTimeFilter<"Task"> | Date | string
    userId?: IntFilter<"Task"> | number
    courseId?: IntFilter<"Task"> | number
    state?: XOR<TaskStateScalarRelationFilter, TaskStateWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    course?: XOR<CourseScalarRelationFilter, CourseWhereInput>
    deliverables?: DeliverableListRelationFilter
  }, "id">

  export type TaskOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    stateId?: SortOrder
    percentage?: SortOrder
    endDate?: SortOrder
    userId?: SortOrder
    courseId?: SortOrder
    _count?: TaskCountOrderByAggregateInput
    _avg?: TaskAvgOrderByAggregateInput
    _max?: TaskMaxOrderByAggregateInput
    _min?: TaskMinOrderByAggregateInput
    _sum?: TaskSumOrderByAggregateInput
  }

  export type TaskScalarWhereWithAggregatesInput = {
    AND?: TaskScalarWhereWithAggregatesInput | TaskScalarWhereWithAggregatesInput[]
    OR?: TaskScalarWhereWithAggregatesInput[]
    NOT?: TaskScalarWhereWithAggregatesInput | TaskScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Task"> | number
    name?: StringWithAggregatesFilter<"Task"> | string
    description?: StringWithAggregatesFilter<"Task"> | string
    stateId?: IntWithAggregatesFilter<"Task"> | number
    percentage?: IntWithAggregatesFilter<"Task"> | number
    endDate?: DateTimeWithAggregatesFilter<"Task"> | Date | string
    userId?: IntWithAggregatesFilter<"Task"> | number
    courseId?: IntWithAggregatesFilter<"Task"> | number
  }

  export type DeliverableWhereInput = {
    AND?: DeliverableWhereInput | DeliverableWhereInput[]
    OR?: DeliverableWhereInput[]
    NOT?: DeliverableWhereInput | DeliverableWhereInput[]
    id?: IntFilter<"Deliverable"> | number
    name?: StringFilter<"Deliverable"> | string
    stateId?: IntFilter<"Deliverable"> | number
    percentageOfTask?: IntFilter<"Deliverable"> | number
    date?: DateTimeFilter<"Deliverable"> | Date | string
    taskId?: IntFilter<"Deliverable"> | number
    state?: XOR<TaskStateScalarRelationFilter, TaskStateWhereInput>
    task?: XOR<TaskScalarRelationFilter, TaskWhereInput>
  }

  export type DeliverableOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    stateId?: SortOrder
    percentageOfTask?: SortOrder
    date?: SortOrder
    taskId?: SortOrder
    state?: TaskStateOrderByWithRelationInput
    task?: TaskOrderByWithRelationInput
  }

  export type DeliverableWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: DeliverableWhereInput | DeliverableWhereInput[]
    OR?: DeliverableWhereInput[]
    NOT?: DeliverableWhereInput | DeliverableWhereInput[]
    name?: StringFilter<"Deliverable"> | string
    stateId?: IntFilter<"Deliverable"> | number
    percentageOfTask?: IntFilter<"Deliverable"> | number
    date?: DateTimeFilter<"Deliverable"> | Date | string
    taskId?: IntFilter<"Deliverable"> | number
    state?: XOR<TaskStateScalarRelationFilter, TaskStateWhereInput>
    task?: XOR<TaskScalarRelationFilter, TaskWhereInput>
  }, "id">

  export type DeliverableOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    stateId?: SortOrder
    percentageOfTask?: SortOrder
    date?: SortOrder
    taskId?: SortOrder
    _count?: DeliverableCountOrderByAggregateInput
    _avg?: DeliverableAvgOrderByAggregateInput
    _max?: DeliverableMaxOrderByAggregateInput
    _min?: DeliverableMinOrderByAggregateInput
    _sum?: DeliverableSumOrderByAggregateInput
  }

  export type DeliverableScalarWhereWithAggregatesInput = {
    AND?: DeliverableScalarWhereWithAggregatesInput | DeliverableScalarWhereWithAggregatesInput[]
    OR?: DeliverableScalarWhereWithAggregatesInput[]
    NOT?: DeliverableScalarWhereWithAggregatesInput | DeliverableScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Deliverable"> | number
    name?: StringWithAggregatesFilter<"Deliverable"> | string
    stateId?: IntWithAggregatesFilter<"Deliverable"> | number
    percentageOfTask?: IntWithAggregatesFilter<"Deliverable"> | number
    date?: DateTimeWithAggregatesFilter<"Deliverable"> | Date | string
    taskId?: IntWithAggregatesFilter<"Deliverable"> | number
  }

  export type TutoringPostWhereInput = {
    AND?: TutoringPostWhereInput | TutoringPostWhereInput[]
    OR?: TutoringPostWhereInput[]
    NOT?: TutoringPostWhereInput | TutoringPostWhereInput[]
    id?: IntFilter<"TutoringPost"> | number
    title?: StringFilter<"TutoringPost"> | string
    description?: StringFilter<"TutoringPost"> | string
    userId?: IntFilter<"TutoringPost"> | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type TutoringPostOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    userId?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type TutoringPostWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: TutoringPostWhereInput | TutoringPostWhereInput[]
    OR?: TutoringPostWhereInput[]
    NOT?: TutoringPostWhereInput | TutoringPostWhereInput[]
    title?: StringFilter<"TutoringPost"> | string
    description?: StringFilter<"TutoringPost"> | string
    userId?: IntFilter<"TutoringPost"> | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type TutoringPostOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    userId?: SortOrder
    _count?: TutoringPostCountOrderByAggregateInput
    _avg?: TutoringPostAvgOrderByAggregateInput
    _max?: TutoringPostMaxOrderByAggregateInput
    _min?: TutoringPostMinOrderByAggregateInput
    _sum?: TutoringPostSumOrderByAggregateInput
  }

  export type TutoringPostScalarWhereWithAggregatesInput = {
    AND?: TutoringPostScalarWhereWithAggregatesInput | TutoringPostScalarWhereWithAggregatesInput[]
    OR?: TutoringPostScalarWhereWithAggregatesInput[]
    NOT?: TutoringPostScalarWhereWithAggregatesInput | TutoringPostScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"TutoringPost"> | number
    title?: StringWithAggregatesFilter<"TutoringPost"> | string
    description?: StringWithAggregatesFilter<"TutoringPost"> | string
    userId?: IntWithAggregatesFilter<"TutoringPost"> | number
  }

  export type NotificationWhereInput = {
    AND?: NotificationWhereInput | NotificationWhereInput[]
    OR?: NotificationWhereInput[]
    NOT?: NotificationWhereInput | NotificationWhereInput[]
    id?: IntFilter<"Notification"> | number
    title?: StringFilter<"Notification"> | string
    message?: StringFilter<"Notification"> | string
    isRead?: BoolFilter<"Notification"> | boolean
    userId?: IntFilter<"Notification"> | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type NotificationOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    message?: SortOrder
    isRead?: SortOrder
    userId?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type NotificationWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: NotificationWhereInput | NotificationWhereInput[]
    OR?: NotificationWhereInput[]
    NOT?: NotificationWhereInput | NotificationWhereInput[]
    title?: StringFilter<"Notification"> | string
    message?: StringFilter<"Notification"> | string
    isRead?: BoolFilter<"Notification"> | boolean
    userId?: IntFilter<"Notification"> | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type NotificationOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    message?: SortOrder
    isRead?: SortOrder
    userId?: SortOrder
    _count?: NotificationCountOrderByAggregateInput
    _avg?: NotificationAvgOrderByAggregateInput
    _max?: NotificationMaxOrderByAggregateInput
    _min?: NotificationMinOrderByAggregateInput
    _sum?: NotificationSumOrderByAggregateInput
  }

  export type NotificationScalarWhereWithAggregatesInput = {
    AND?: NotificationScalarWhereWithAggregatesInput | NotificationScalarWhereWithAggregatesInput[]
    OR?: NotificationScalarWhereWithAggregatesInput[]
    NOT?: NotificationScalarWhereWithAggregatesInput | NotificationScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Notification"> | number
    title?: StringWithAggregatesFilter<"Notification"> | string
    message?: StringWithAggregatesFilter<"Notification"> | string
    isRead?: BoolWithAggregatesFilter<"Notification"> | boolean
    userId?: IntWithAggregatesFilter<"Notification"> | number
  }

  export type MajorCreateInput = {
    name: string
    users?: UserCreateNestedManyWithoutMajorInput
  }

  export type MajorUncheckedCreateInput = {
    id?: number
    name: string
    users?: UserUncheckedCreateNestedManyWithoutMajorInput
  }

  export type MajorUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    users?: UserUpdateManyWithoutMajorNestedInput
  }

  export type MajorUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    users?: UserUncheckedUpdateManyWithoutMajorNestedInput
  }

  export type MajorCreateManyInput = {
    id?: number
    name: string
  }

  export type MajorUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type MajorUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type RoleCreateInput = {
    name: string
    users?: UserCreateNestedManyWithoutRoleInput
  }

  export type RoleUncheckedCreateInput = {
    id?: number
    name: string
    users?: UserUncheckedCreateNestedManyWithoutRoleInput
  }

  export type RoleUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    users?: UserUpdateManyWithoutRoleNestedInput
  }

  export type RoleUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    users?: UserUncheckedUpdateManyWithoutRoleNestedInput
  }

  export type RoleCreateManyInput = {
    id?: number
    name: string
  }

  export type RoleUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type RoleUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type UserCreateInput = {
    email: string
    password: string
    name: string
    lastname: string
    verified?: boolean
    createdAt?: Date | string
    major?: MajorCreateNestedOneWithoutUsersInput
    role?: RoleCreateNestedOneWithoutUsersInput
    userPeriods?: UserPeriodCreateNestedManyWithoutUserInput
    tasks?: TaskCreateNestedManyWithoutUserInput
    tutoringPosts?: TutoringPostCreateNestedManyWithoutUserInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    email: string
    password: string
    name: string
    lastname: string
    majorId?: number | null
    verified?: boolean
    roleId?: number
    createdAt?: Date | string
    userPeriods?: UserPeriodUncheckedCreateNestedManyWithoutUserInput
    tasks?: TaskUncheckedCreateNestedManyWithoutUserInput
    tutoringPosts?: TutoringPostUncheckedCreateNestedManyWithoutUserInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    verified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    major?: MajorUpdateOneWithoutUsersNestedInput
    role?: RoleUpdateOneRequiredWithoutUsersNestedInput
    userPeriods?: UserPeriodUpdateManyWithoutUserNestedInput
    tasks?: TaskUpdateManyWithoutUserNestedInput
    tutoringPosts?: TutoringPostUpdateManyWithoutUserNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    majorId?: NullableIntFieldUpdateOperationsInput | number | null
    verified?: BoolFieldUpdateOperationsInput | boolean
    roleId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userPeriods?: UserPeriodUncheckedUpdateManyWithoutUserNestedInput
    tasks?: TaskUncheckedUpdateManyWithoutUserNestedInput
    tutoringPosts?: TutoringPostUncheckedUpdateManyWithoutUserNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    email: string
    password: string
    name: string
    lastname: string
    majorId?: number | null
    verified?: boolean
    roleId?: number
    createdAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    verified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    majorId?: NullableIntFieldUpdateOperationsInput | number | null
    verified?: BoolFieldUpdateOperationsInput | boolean
    roleId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PeriodCreateInput = {
    type: $Enums.PeriodType
    number: number
    year: number
    startDate: Date | string
    endDate: Date | string
    userPeriods?: UserPeriodCreateNestedManyWithoutPeriodInput
    courses?: CourseCreateNestedManyWithoutPeriodInput
  }

  export type PeriodUncheckedCreateInput = {
    id?: number
    type: $Enums.PeriodType
    number: number
    year: number
    startDate: Date | string
    endDate: Date | string
    userPeriods?: UserPeriodUncheckedCreateNestedManyWithoutPeriodInput
    courses?: CourseUncheckedCreateNestedManyWithoutPeriodInput
  }

  export type PeriodUpdateInput = {
    type?: EnumPeriodTypeFieldUpdateOperationsInput | $Enums.PeriodType
    number?: IntFieldUpdateOperationsInput | number
    year?: IntFieldUpdateOperationsInput | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    userPeriods?: UserPeriodUpdateManyWithoutPeriodNestedInput
    courses?: CourseUpdateManyWithoutPeriodNestedInput
  }

  export type PeriodUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: EnumPeriodTypeFieldUpdateOperationsInput | $Enums.PeriodType
    number?: IntFieldUpdateOperationsInput | number
    year?: IntFieldUpdateOperationsInput | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    userPeriods?: UserPeriodUncheckedUpdateManyWithoutPeriodNestedInput
    courses?: CourseUncheckedUpdateManyWithoutPeriodNestedInput
  }

  export type PeriodCreateManyInput = {
    id?: number
    type: $Enums.PeriodType
    number: number
    year: number
    startDate: Date | string
    endDate: Date | string
  }

  export type PeriodUpdateManyMutationInput = {
    type?: EnumPeriodTypeFieldUpdateOperationsInput | $Enums.PeriodType
    number?: IntFieldUpdateOperationsInput | number
    year?: IntFieldUpdateOperationsInput | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PeriodUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: EnumPeriodTypeFieldUpdateOperationsInput | $Enums.PeriodType
    number?: IntFieldUpdateOperationsInput | number
    year?: IntFieldUpdateOperationsInput | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserPeriodCreateInput = {
    enrollmentDate?: Date | string
    user: UserCreateNestedOneWithoutUserPeriodsInput
    period: PeriodCreateNestedOneWithoutUserPeriodsInput
  }

  export type UserPeriodUncheckedCreateInput = {
    id?: number
    enrollmentDate?: Date | string
    userId: number
    periodId: number
  }

  export type UserPeriodUpdateInput = {
    enrollmentDate?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutUserPeriodsNestedInput
    period?: PeriodUpdateOneRequiredWithoutUserPeriodsNestedInput
  }

  export type UserPeriodUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    enrollmentDate?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: IntFieldUpdateOperationsInput | number
    periodId?: IntFieldUpdateOperationsInput | number
  }

  export type UserPeriodCreateManyInput = {
    id?: number
    enrollmentDate?: Date | string
    userId: number
    periodId: number
  }

  export type UserPeriodUpdateManyMutationInput = {
    enrollmentDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserPeriodUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    enrollmentDate?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: IntFieldUpdateOperationsInput | number
    periodId?: IntFieldUpdateOperationsInput | number
  }

  export type TeacherCreateInput = {
    name: string
    lastname: string
    courses?: CourseCreateNestedManyWithoutTeacherInput
  }

  export type TeacherUncheckedCreateInput = {
    id?: number
    name: string
    lastname: string
    courses?: CourseUncheckedCreateNestedManyWithoutTeacherInput
  }

  export type TeacherUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    courses?: CourseUpdateManyWithoutTeacherNestedInput
  }

  export type TeacherUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    courses?: CourseUncheckedUpdateManyWithoutTeacherNestedInput
  }

  export type TeacherCreateManyInput = {
    id?: number
    name: string
    lastname: string
  }

  export type TeacherUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
  }

  export type TeacherUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
  }

  export type CourseCreateInput = {
    name: string
    code: string
    state?: $Enums.CourseState
    credits: number
    teacher?: TeacherCreateNestedOneWithoutCoursesInput
    period: PeriodCreateNestedOneWithoutCoursesInput
    tasks?: TaskCreateNestedManyWithoutCourseInput
  }

  export type CourseUncheckedCreateInput = {
    id?: number
    name: string
    code: string
    state?: $Enums.CourseState
    teacherId?: number | null
    credits: number
    periodId: number
    tasks?: TaskUncheckedCreateNestedManyWithoutCourseInput
  }

  export type CourseUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    state?: EnumCourseStateFieldUpdateOperationsInput | $Enums.CourseState
    credits?: IntFieldUpdateOperationsInput | number
    teacher?: TeacherUpdateOneWithoutCoursesNestedInput
    period?: PeriodUpdateOneRequiredWithoutCoursesNestedInput
    tasks?: TaskUpdateManyWithoutCourseNestedInput
  }

  export type CourseUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    state?: EnumCourseStateFieldUpdateOperationsInput | $Enums.CourseState
    teacherId?: NullableIntFieldUpdateOperationsInput | number | null
    credits?: IntFieldUpdateOperationsInput | number
    periodId?: IntFieldUpdateOperationsInput | number
    tasks?: TaskUncheckedUpdateManyWithoutCourseNestedInput
  }

  export type CourseCreateManyInput = {
    id?: number
    name: string
    code: string
    state?: $Enums.CourseState
    teacherId?: number | null
    credits: number
    periodId: number
  }

  export type CourseUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    state?: EnumCourseStateFieldUpdateOperationsInput | $Enums.CourseState
    credits?: IntFieldUpdateOperationsInput | number
  }

  export type CourseUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    state?: EnumCourseStateFieldUpdateOperationsInput | $Enums.CourseState
    teacherId?: NullableIntFieldUpdateOperationsInput | number | null
    credits?: IntFieldUpdateOperationsInput | number
    periodId?: IntFieldUpdateOperationsInput | number
  }

  export type TaskStateCreateInput = {
    name: string
    tasks?: TaskCreateNestedManyWithoutStateInput
    deliverables?: DeliverableCreateNestedManyWithoutStateInput
  }

  export type TaskStateUncheckedCreateInput = {
    id?: number
    name: string
    tasks?: TaskUncheckedCreateNestedManyWithoutStateInput
    deliverables?: DeliverableUncheckedCreateNestedManyWithoutStateInput
  }

  export type TaskStateUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    tasks?: TaskUpdateManyWithoutStateNestedInput
    deliverables?: DeliverableUpdateManyWithoutStateNestedInput
  }

  export type TaskStateUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    tasks?: TaskUncheckedUpdateManyWithoutStateNestedInput
    deliverables?: DeliverableUncheckedUpdateManyWithoutStateNestedInput
  }

  export type TaskStateCreateManyInput = {
    id?: number
    name: string
  }

  export type TaskStateUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type TaskStateUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type TaskCreateInput = {
    name: string
    description: string
    percentage?: number
    endDate: Date | string
    state?: TaskStateCreateNestedOneWithoutTasksInput
    user: UserCreateNestedOneWithoutTasksInput
    course: CourseCreateNestedOneWithoutTasksInput
    deliverables?: DeliverableCreateNestedManyWithoutTaskInput
  }

  export type TaskUncheckedCreateInput = {
    id?: number
    name: string
    description: string
    stateId?: number
    percentage?: number
    endDate: Date | string
    userId: number
    courseId: number
    deliverables?: DeliverableUncheckedCreateNestedManyWithoutTaskInput
  }

  export type TaskUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    percentage?: IntFieldUpdateOperationsInput | number
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    state?: TaskStateUpdateOneRequiredWithoutTasksNestedInput
    user?: UserUpdateOneRequiredWithoutTasksNestedInput
    course?: CourseUpdateOneRequiredWithoutTasksNestedInput
    deliverables?: DeliverableUpdateManyWithoutTaskNestedInput
  }

  export type TaskUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    stateId?: IntFieldUpdateOperationsInput | number
    percentage?: IntFieldUpdateOperationsInput | number
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: IntFieldUpdateOperationsInput | number
    courseId?: IntFieldUpdateOperationsInput | number
    deliverables?: DeliverableUncheckedUpdateManyWithoutTaskNestedInput
  }

  export type TaskCreateManyInput = {
    id?: number
    name: string
    description: string
    stateId?: number
    percentage?: number
    endDate: Date | string
    userId: number
    courseId: number
  }

  export type TaskUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    percentage?: IntFieldUpdateOperationsInput | number
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TaskUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    stateId?: IntFieldUpdateOperationsInput | number
    percentage?: IntFieldUpdateOperationsInput | number
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: IntFieldUpdateOperationsInput | number
    courseId?: IntFieldUpdateOperationsInput | number
  }

  export type DeliverableCreateInput = {
    name: string
    percentageOfTask?: number
    date: Date | string
    state?: TaskStateCreateNestedOneWithoutDeliverablesInput
    task: TaskCreateNestedOneWithoutDeliverablesInput
  }

  export type DeliverableUncheckedCreateInput = {
    id?: number
    name: string
    stateId?: number
    percentageOfTask?: number
    date: Date | string
    taskId: number
  }

  export type DeliverableUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    percentageOfTask?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    state?: TaskStateUpdateOneRequiredWithoutDeliverablesNestedInput
    task?: TaskUpdateOneRequiredWithoutDeliverablesNestedInput
  }

  export type DeliverableUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    stateId?: IntFieldUpdateOperationsInput | number
    percentageOfTask?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    taskId?: IntFieldUpdateOperationsInput | number
  }

  export type DeliverableCreateManyInput = {
    id?: number
    name: string
    stateId?: number
    percentageOfTask?: number
    date: Date | string
    taskId: number
  }

  export type DeliverableUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    percentageOfTask?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DeliverableUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    stateId?: IntFieldUpdateOperationsInput | number
    percentageOfTask?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    taskId?: IntFieldUpdateOperationsInput | number
  }

  export type TutoringPostCreateInput = {
    title: string
    description: string
    user: UserCreateNestedOneWithoutTutoringPostsInput
  }

  export type TutoringPostUncheckedCreateInput = {
    id?: number
    title: string
    description: string
    userId: number
  }

  export type TutoringPostUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutTutoringPostsNestedInput
  }

  export type TutoringPostUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type TutoringPostCreateManyInput = {
    id?: number
    title: string
    description: string
    userId: number
  }

  export type TutoringPostUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
  }

  export type TutoringPostUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type NotificationCreateInput = {
    title: string
    message: string
    isRead?: boolean
    user: UserCreateNestedOneWithoutNotificationsInput
  }

  export type NotificationUncheckedCreateInput = {
    id?: number
    title: string
    message: string
    isRead?: boolean
    userId: number
  }

  export type NotificationUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    user?: UserUpdateOneRequiredWithoutNotificationsNestedInput
  }

  export type NotificationUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type NotificationCreateManyInput = {
    id?: number
    title: string
    message: string
    isRead?: boolean
    userId: number
  }

  export type NotificationUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
  }

  export type NotificationUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type UserListRelationFilter = {
    every?: UserWhereInput
    some?: UserWhereInput
    none?: UserWhereInput
  }

  export type UserOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MajorCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type MajorAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type MajorMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type MajorMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type MajorSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type RoleCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type RoleAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type RoleMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type RoleMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type RoleSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type MajorNullableScalarRelationFilter = {
    is?: MajorWhereInput | null
    isNot?: MajorWhereInput | null
  }

  export type RoleScalarRelationFilter = {
    is?: RoleWhereInput
    isNot?: RoleWhereInput
  }

  export type UserPeriodListRelationFilter = {
    every?: UserPeriodWhereInput
    some?: UserPeriodWhereInput
    none?: UserPeriodWhereInput
  }

  export type TaskListRelationFilter = {
    every?: TaskWhereInput
    some?: TaskWhereInput
    none?: TaskWhereInput
  }

  export type TutoringPostListRelationFilter = {
    every?: TutoringPostWhereInput
    some?: TutoringPostWhereInput
    none?: TutoringPostWhereInput
  }

  export type NotificationListRelationFilter = {
    every?: NotificationWhereInput
    some?: NotificationWhereInput
    none?: NotificationWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type UserPeriodOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TaskOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TutoringPostOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type NotificationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    lastname?: SortOrder
    majorId?: SortOrder
    verified?: SortOrder
    roleId?: SortOrder
    createdAt?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
    majorId?: SortOrder
    roleId?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    lastname?: SortOrder
    majorId?: SortOrder
    verified?: SortOrder
    roleId?: SortOrder
    createdAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    lastname?: SortOrder
    majorId?: SortOrder
    verified?: SortOrder
    roleId?: SortOrder
    createdAt?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
    majorId?: SortOrder
    roleId?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type EnumPeriodTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.PeriodType | EnumPeriodTypeFieldRefInput<$PrismaModel>
    in?: $Enums.PeriodType[] | ListEnumPeriodTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.PeriodType[] | ListEnumPeriodTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumPeriodTypeFilter<$PrismaModel> | $Enums.PeriodType
  }

  export type CourseListRelationFilter = {
    every?: CourseWhereInput
    some?: CourseWhereInput
    none?: CourseWhereInput
  }

  export type CourseOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PeriodTypeNumberYearCompoundUniqueInput = {
    type: $Enums.PeriodType
    number: number
    year: number
  }

  export type PeriodCountOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    number?: SortOrder
    year?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
  }

  export type PeriodAvgOrderByAggregateInput = {
    id?: SortOrder
    number?: SortOrder
    year?: SortOrder
  }

  export type PeriodMaxOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    number?: SortOrder
    year?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
  }

  export type PeriodMinOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    number?: SortOrder
    year?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
  }

  export type PeriodSumOrderByAggregateInput = {
    id?: SortOrder
    number?: SortOrder
    year?: SortOrder
  }

  export type EnumPeriodTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PeriodType | EnumPeriodTypeFieldRefInput<$PrismaModel>
    in?: $Enums.PeriodType[] | ListEnumPeriodTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.PeriodType[] | ListEnumPeriodTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumPeriodTypeWithAggregatesFilter<$PrismaModel> | $Enums.PeriodType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPeriodTypeFilter<$PrismaModel>
    _max?: NestedEnumPeriodTypeFilter<$PrismaModel>
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type PeriodScalarRelationFilter = {
    is?: PeriodWhereInput
    isNot?: PeriodWhereInput
  }

  export type UserPeriodUserIdPeriodIdCompoundUniqueInput = {
    userId: number
    periodId: number
  }

  export type UserPeriodCountOrderByAggregateInput = {
    id?: SortOrder
    enrollmentDate?: SortOrder
    userId?: SortOrder
    periodId?: SortOrder
  }

  export type UserPeriodAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    periodId?: SortOrder
  }

  export type UserPeriodMaxOrderByAggregateInput = {
    id?: SortOrder
    enrollmentDate?: SortOrder
    userId?: SortOrder
    periodId?: SortOrder
  }

  export type UserPeriodMinOrderByAggregateInput = {
    id?: SortOrder
    enrollmentDate?: SortOrder
    userId?: SortOrder
    periodId?: SortOrder
  }

  export type UserPeriodSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    periodId?: SortOrder
  }

  export type TeacherCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    lastname?: SortOrder
  }

  export type TeacherAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type TeacherMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    lastname?: SortOrder
  }

  export type TeacherMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    lastname?: SortOrder
  }

  export type TeacherSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type EnumCourseStateFilter<$PrismaModel = never> = {
    equals?: $Enums.CourseState | EnumCourseStateFieldRefInput<$PrismaModel>
    in?: $Enums.CourseState[] | ListEnumCourseStateFieldRefInput<$PrismaModel>
    notIn?: $Enums.CourseState[] | ListEnumCourseStateFieldRefInput<$PrismaModel>
    not?: NestedEnumCourseStateFilter<$PrismaModel> | $Enums.CourseState
  }

  export type TeacherNullableScalarRelationFilter = {
    is?: TeacherWhereInput | null
    isNot?: TeacherWhereInput | null
  }

  export type CourseCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    code?: SortOrder
    state?: SortOrder
    teacherId?: SortOrder
    credits?: SortOrder
    periodId?: SortOrder
  }

  export type CourseAvgOrderByAggregateInput = {
    id?: SortOrder
    teacherId?: SortOrder
    credits?: SortOrder
    periodId?: SortOrder
  }

  export type CourseMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    code?: SortOrder
    state?: SortOrder
    teacherId?: SortOrder
    credits?: SortOrder
    periodId?: SortOrder
  }

  export type CourseMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    code?: SortOrder
    state?: SortOrder
    teacherId?: SortOrder
    credits?: SortOrder
    periodId?: SortOrder
  }

  export type CourseSumOrderByAggregateInput = {
    id?: SortOrder
    teacherId?: SortOrder
    credits?: SortOrder
    periodId?: SortOrder
  }

  export type EnumCourseStateWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CourseState | EnumCourseStateFieldRefInput<$PrismaModel>
    in?: $Enums.CourseState[] | ListEnumCourseStateFieldRefInput<$PrismaModel>
    notIn?: $Enums.CourseState[] | ListEnumCourseStateFieldRefInput<$PrismaModel>
    not?: NestedEnumCourseStateWithAggregatesFilter<$PrismaModel> | $Enums.CourseState
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCourseStateFilter<$PrismaModel>
    _max?: NestedEnumCourseStateFilter<$PrismaModel>
  }

  export type DeliverableListRelationFilter = {
    every?: DeliverableWhereInput
    some?: DeliverableWhereInput
    none?: DeliverableWhereInput
  }

  export type DeliverableOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TaskStateCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type TaskStateAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type TaskStateMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type TaskStateMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type TaskStateSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type TaskStateScalarRelationFilter = {
    is?: TaskStateWhereInput
    isNot?: TaskStateWhereInput
  }

  export type CourseScalarRelationFilter = {
    is?: CourseWhereInput
    isNot?: CourseWhereInput
  }

  export type TaskCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    stateId?: SortOrder
    percentage?: SortOrder
    endDate?: SortOrder
    userId?: SortOrder
    courseId?: SortOrder
  }

  export type TaskAvgOrderByAggregateInput = {
    id?: SortOrder
    stateId?: SortOrder
    percentage?: SortOrder
    userId?: SortOrder
    courseId?: SortOrder
  }

  export type TaskMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    stateId?: SortOrder
    percentage?: SortOrder
    endDate?: SortOrder
    userId?: SortOrder
    courseId?: SortOrder
  }

  export type TaskMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    stateId?: SortOrder
    percentage?: SortOrder
    endDate?: SortOrder
    userId?: SortOrder
    courseId?: SortOrder
  }

  export type TaskSumOrderByAggregateInput = {
    id?: SortOrder
    stateId?: SortOrder
    percentage?: SortOrder
    userId?: SortOrder
    courseId?: SortOrder
  }

  export type TaskScalarRelationFilter = {
    is?: TaskWhereInput
    isNot?: TaskWhereInput
  }

  export type DeliverableCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    stateId?: SortOrder
    percentageOfTask?: SortOrder
    date?: SortOrder
    taskId?: SortOrder
  }

  export type DeliverableAvgOrderByAggregateInput = {
    id?: SortOrder
    stateId?: SortOrder
    percentageOfTask?: SortOrder
    taskId?: SortOrder
  }

  export type DeliverableMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    stateId?: SortOrder
    percentageOfTask?: SortOrder
    date?: SortOrder
    taskId?: SortOrder
  }

  export type DeliverableMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    stateId?: SortOrder
    percentageOfTask?: SortOrder
    date?: SortOrder
    taskId?: SortOrder
  }

  export type DeliverableSumOrderByAggregateInput = {
    id?: SortOrder
    stateId?: SortOrder
    percentageOfTask?: SortOrder
    taskId?: SortOrder
  }

  export type TutoringPostCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    userId?: SortOrder
  }

  export type TutoringPostAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type TutoringPostMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    userId?: SortOrder
  }

  export type TutoringPostMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    userId?: SortOrder
  }

  export type TutoringPostSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type NotificationCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    message?: SortOrder
    isRead?: SortOrder
    userId?: SortOrder
  }

  export type NotificationAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type NotificationMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    message?: SortOrder
    isRead?: SortOrder
    userId?: SortOrder
  }

  export type NotificationMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    message?: SortOrder
    isRead?: SortOrder
    userId?: SortOrder
  }

  export type NotificationSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type UserCreateNestedManyWithoutMajorInput = {
    create?: XOR<UserCreateWithoutMajorInput, UserUncheckedCreateWithoutMajorInput> | UserCreateWithoutMajorInput[] | UserUncheckedCreateWithoutMajorInput[]
    connectOrCreate?: UserCreateOrConnectWithoutMajorInput | UserCreateOrConnectWithoutMajorInput[]
    createMany?: UserCreateManyMajorInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedManyWithoutMajorInput = {
    create?: XOR<UserCreateWithoutMajorInput, UserUncheckedCreateWithoutMajorInput> | UserCreateWithoutMajorInput[] | UserUncheckedCreateWithoutMajorInput[]
    connectOrCreate?: UserCreateOrConnectWithoutMajorInput | UserCreateOrConnectWithoutMajorInput[]
    createMany?: UserCreateManyMajorInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type UserUpdateManyWithoutMajorNestedInput = {
    create?: XOR<UserCreateWithoutMajorInput, UserUncheckedCreateWithoutMajorInput> | UserCreateWithoutMajorInput[] | UserUncheckedCreateWithoutMajorInput[]
    connectOrCreate?: UserCreateOrConnectWithoutMajorInput | UserCreateOrConnectWithoutMajorInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutMajorInput | UserUpsertWithWhereUniqueWithoutMajorInput[]
    createMany?: UserCreateManyMajorInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutMajorInput | UserUpdateWithWhereUniqueWithoutMajorInput[]
    updateMany?: UserUpdateManyWithWhereWithoutMajorInput | UserUpdateManyWithWhereWithoutMajorInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUncheckedUpdateManyWithoutMajorNestedInput = {
    create?: XOR<UserCreateWithoutMajorInput, UserUncheckedCreateWithoutMajorInput> | UserCreateWithoutMajorInput[] | UserUncheckedCreateWithoutMajorInput[]
    connectOrCreate?: UserCreateOrConnectWithoutMajorInput | UserCreateOrConnectWithoutMajorInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutMajorInput | UserUpsertWithWhereUniqueWithoutMajorInput[]
    createMany?: UserCreateManyMajorInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutMajorInput | UserUpdateWithWhereUniqueWithoutMajorInput[]
    updateMany?: UserUpdateManyWithWhereWithoutMajorInput | UserUpdateManyWithWhereWithoutMajorInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type UserCreateNestedManyWithoutRoleInput = {
    create?: XOR<UserCreateWithoutRoleInput, UserUncheckedCreateWithoutRoleInput> | UserCreateWithoutRoleInput[] | UserUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: UserCreateOrConnectWithoutRoleInput | UserCreateOrConnectWithoutRoleInput[]
    createMany?: UserCreateManyRoleInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedManyWithoutRoleInput = {
    create?: XOR<UserCreateWithoutRoleInput, UserUncheckedCreateWithoutRoleInput> | UserCreateWithoutRoleInput[] | UserUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: UserCreateOrConnectWithoutRoleInput | UserCreateOrConnectWithoutRoleInput[]
    createMany?: UserCreateManyRoleInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type UserUpdateManyWithoutRoleNestedInput = {
    create?: XOR<UserCreateWithoutRoleInput, UserUncheckedCreateWithoutRoleInput> | UserCreateWithoutRoleInput[] | UserUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: UserCreateOrConnectWithoutRoleInput | UserCreateOrConnectWithoutRoleInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutRoleInput | UserUpsertWithWhereUniqueWithoutRoleInput[]
    createMany?: UserCreateManyRoleInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutRoleInput | UserUpdateWithWhereUniqueWithoutRoleInput[]
    updateMany?: UserUpdateManyWithWhereWithoutRoleInput | UserUpdateManyWithWhereWithoutRoleInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type UserUncheckedUpdateManyWithoutRoleNestedInput = {
    create?: XOR<UserCreateWithoutRoleInput, UserUncheckedCreateWithoutRoleInput> | UserCreateWithoutRoleInput[] | UserUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: UserCreateOrConnectWithoutRoleInput | UserCreateOrConnectWithoutRoleInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutRoleInput | UserUpsertWithWhereUniqueWithoutRoleInput[]
    createMany?: UserCreateManyRoleInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutRoleInput | UserUpdateWithWhereUniqueWithoutRoleInput[]
    updateMany?: UserUpdateManyWithWhereWithoutRoleInput | UserUpdateManyWithWhereWithoutRoleInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type MajorCreateNestedOneWithoutUsersInput = {
    create?: XOR<MajorCreateWithoutUsersInput, MajorUncheckedCreateWithoutUsersInput>
    connectOrCreate?: MajorCreateOrConnectWithoutUsersInput
    connect?: MajorWhereUniqueInput
  }

  export type RoleCreateNestedOneWithoutUsersInput = {
    create?: XOR<RoleCreateWithoutUsersInput, RoleUncheckedCreateWithoutUsersInput>
    connectOrCreate?: RoleCreateOrConnectWithoutUsersInput
    connect?: RoleWhereUniqueInput
  }

  export type UserPeriodCreateNestedManyWithoutUserInput = {
    create?: XOR<UserPeriodCreateWithoutUserInput, UserPeriodUncheckedCreateWithoutUserInput> | UserPeriodCreateWithoutUserInput[] | UserPeriodUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserPeriodCreateOrConnectWithoutUserInput | UserPeriodCreateOrConnectWithoutUserInput[]
    createMany?: UserPeriodCreateManyUserInputEnvelope
    connect?: UserPeriodWhereUniqueInput | UserPeriodWhereUniqueInput[]
  }

  export type TaskCreateNestedManyWithoutUserInput = {
    create?: XOR<TaskCreateWithoutUserInput, TaskUncheckedCreateWithoutUserInput> | TaskCreateWithoutUserInput[] | TaskUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutUserInput | TaskCreateOrConnectWithoutUserInput[]
    createMany?: TaskCreateManyUserInputEnvelope
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
  }

  export type TutoringPostCreateNestedManyWithoutUserInput = {
    create?: XOR<TutoringPostCreateWithoutUserInput, TutoringPostUncheckedCreateWithoutUserInput> | TutoringPostCreateWithoutUserInput[] | TutoringPostUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TutoringPostCreateOrConnectWithoutUserInput | TutoringPostCreateOrConnectWithoutUserInput[]
    createMany?: TutoringPostCreateManyUserInputEnvelope
    connect?: TutoringPostWhereUniqueInput | TutoringPostWhereUniqueInput[]
  }

  export type NotificationCreateNestedManyWithoutUserInput = {
    create?: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput> | NotificationCreateWithoutUserInput[] | NotificationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutUserInput | NotificationCreateOrConnectWithoutUserInput[]
    createMany?: NotificationCreateManyUserInputEnvelope
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
  }

  export type UserPeriodUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<UserPeriodCreateWithoutUserInput, UserPeriodUncheckedCreateWithoutUserInput> | UserPeriodCreateWithoutUserInput[] | UserPeriodUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserPeriodCreateOrConnectWithoutUserInput | UserPeriodCreateOrConnectWithoutUserInput[]
    createMany?: UserPeriodCreateManyUserInputEnvelope
    connect?: UserPeriodWhereUniqueInput | UserPeriodWhereUniqueInput[]
  }

  export type TaskUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<TaskCreateWithoutUserInput, TaskUncheckedCreateWithoutUserInput> | TaskCreateWithoutUserInput[] | TaskUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutUserInput | TaskCreateOrConnectWithoutUserInput[]
    createMany?: TaskCreateManyUserInputEnvelope
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
  }

  export type TutoringPostUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<TutoringPostCreateWithoutUserInput, TutoringPostUncheckedCreateWithoutUserInput> | TutoringPostCreateWithoutUserInput[] | TutoringPostUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TutoringPostCreateOrConnectWithoutUserInput | TutoringPostCreateOrConnectWithoutUserInput[]
    createMany?: TutoringPostCreateManyUserInputEnvelope
    connect?: TutoringPostWhereUniqueInput | TutoringPostWhereUniqueInput[]
  }

  export type NotificationUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput> | NotificationCreateWithoutUserInput[] | NotificationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutUserInput | NotificationCreateOrConnectWithoutUserInput[]
    createMany?: NotificationCreateManyUserInputEnvelope
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type MajorUpdateOneWithoutUsersNestedInput = {
    create?: XOR<MajorCreateWithoutUsersInput, MajorUncheckedCreateWithoutUsersInput>
    connectOrCreate?: MajorCreateOrConnectWithoutUsersInput
    upsert?: MajorUpsertWithoutUsersInput
    disconnect?: MajorWhereInput | boolean
    delete?: MajorWhereInput | boolean
    connect?: MajorWhereUniqueInput
    update?: XOR<XOR<MajorUpdateToOneWithWhereWithoutUsersInput, MajorUpdateWithoutUsersInput>, MajorUncheckedUpdateWithoutUsersInput>
  }

  export type RoleUpdateOneRequiredWithoutUsersNestedInput = {
    create?: XOR<RoleCreateWithoutUsersInput, RoleUncheckedCreateWithoutUsersInput>
    connectOrCreate?: RoleCreateOrConnectWithoutUsersInput
    upsert?: RoleUpsertWithoutUsersInput
    connect?: RoleWhereUniqueInput
    update?: XOR<XOR<RoleUpdateToOneWithWhereWithoutUsersInput, RoleUpdateWithoutUsersInput>, RoleUncheckedUpdateWithoutUsersInput>
  }

  export type UserPeriodUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserPeriodCreateWithoutUserInput, UserPeriodUncheckedCreateWithoutUserInput> | UserPeriodCreateWithoutUserInput[] | UserPeriodUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserPeriodCreateOrConnectWithoutUserInput | UserPeriodCreateOrConnectWithoutUserInput[]
    upsert?: UserPeriodUpsertWithWhereUniqueWithoutUserInput | UserPeriodUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserPeriodCreateManyUserInputEnvelope
    set?: UserPeriodWhereUniqueInput | UserPeriodWhereUniqueInput[]
    disconnect?: UserPeriodWhereUniqueInput | UserPeriodWhereUniqueInput[]
    delete?: UserPeriodWhereUniqueInput | UserPeriodWhereUniqueInput[]
    connect?: UserPeriodWhereUniqueInput | UserPeriodWhereUniqueInput[]
    update?: UserPeriodUpdateWithWhereUniqueWithoutUserInput | UserPeriodUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserPeriodUpdateManyWithWhereWithoutUserInput | UserPeriodUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserPeriodScalarWhereInput | UserPeriodScalarWhereInput[]
  }

  export type TaskUpdateManyWithoutUserNestedInput = {
    create?: XOR<TaskCreateWithoutUserInput, TaskUncheckedCreateWithoutUserInput> | TaskCreateWithoutUserInput[] | TaskUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutUserInput | TaskCreateOrConnectWithoutUserInput[]
    upsert?: TaskUpsertWithWhereUniqueWithoutUserInput | TaskUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TaskCreateManyUserInputEnvelope
    set?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    disconnect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    delete?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    update?: TaskUpdateWithWhereUniqueWithoutUserInput | TaskUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TaskUpdateManyWithWhereWithoutUserInput | TaskUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TaskScalarWhereInput | TaskScalarWhereInput[]
  }

  export type TutoringPostUpdateManyWithoutUserNestedInput = {
    create?: XOR<TutoringPostCreateWithoutUserInput, TutoringPostUncheckedCreateWithoutUserInput> | TutoringPostCreateWithoutUserInput[] | TutoringPostUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TutoringPostCreateOrConnectWithoutUserInput | TutoringPostCreateOrConnectWithoutUserInput[]
    upsert?: TutoringPostUpsertWithWhereUniqueWithoutUserInput | TutoringPostUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TutoringPostCreateManyUserInputEnvelope
    set?: TutoringPostWhereUniqueInput | TutoringPostWhereUniqueInput[]
    disconnect?: TutoringPostWhereUniqueInput | TutoringPostWhereUniqueInput[]
    delete?: TutoringPostWhereUniqueInput | TutoringPostWhereUniqueInput[]
    connect?: TutoringPostWhereUniqueInput | TutoringPostWhereUniqueInput[]
    update?: TutoringPostUpdateWithWhereUniqueWithoutUserInput | TutoringPostUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TutoringPostUpdateManyWithWhereWithoutUserInput | TutoringPostUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TutoringPostScalarWhereInput | TutoringPostScalarWhereInput[]
  }

  export type NotificationUpdateManyWithoutUserNestedInput = {
    create?: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput> | NotificationCreateWithoutUserInput[] | NotificationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutUserInput | NotificationCreateOrConnectWithoutUserInput[]
    upsert?: NotificationUpsertWithWhereUniqueWithoutUserInput | NotificationUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: NotificationCreateManyUserInputEnvelope
    set?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    disconnect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    delete?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    update?: NotificationUpdateWithWhereUniqueWithoutUserInput | NotificationUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: NotificationUpdateManyWithWhereWithoutUserInput | NotificationUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserPeriodUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserPeriodCreateWithoutUserInput, UserPeriodUncheckedCreateWithoutUserInput> | UserPeriodCreateWithoutUserInput[] | UserPeriodUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserPeriodCreateOrConnectWithoutUserInput | UserPeriodCreateOrConnectWithoutUserInput[]
    upsert?: UserPeriodUpsertWithWhereUniqueWithoutUserInput | UserPeriodUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserPeriodCreateManyUserInputEnvelope
    set?: UserPeriodWhereUniqueInput | UserPeriodWhereUniqueInput[]
    disconnect?: UserPeriodWhereUniqueInput | UserPeriodWhereUniqueInput[]
    delete?: UserPeriodWhereUniqueInput | UserPeriodWhereUniqueInput[]
    connect?: UserPeriodWhereUniqueInput | UserPeriodWhereUniqueInput[]
    update?: UserPeriodUpdateWithWhereUniqueWithoutUserInput | UserPeriodUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserPeriodUpdateManyWithWhereWithoutUserInput | UserPeriodUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserPeriodScalarWhereInput | UserPeriodScalarWhereInput[]
  }

  export type TaskUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<TaskCreateWithoutUserInput, TaskUncheckedCreateWithoutUserInput> | TaskCreateWithoutUserInput[] | TaskUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutUserInput | TaskCreateOrConnectWithoutUserInput[]
    upsert?: TaskUpsertWithWhereUniqueWithoutUserInput | TaskUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TaskCreateManyUserInputEnvelope
    set?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    disconnect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    delete?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    update?: TaskUpdateWithWhereUniqueWithoutUserInput | TaskUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TaskUpdateManyWithWhereWithoutUserInput | TaskUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TaskScalarWhereInput | TaskScalarWhereInput[]
  }

  export type TutoringPostUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<TutoringPostCreateWithoutUserInput, TutoringPostUncheckedCreateWithoutUserInput> | TutoringPostCreateWithoutUserInput[] | TutoringPostUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TutoringPostCreateOrConnectWithoutUserInput | TutoringPostCreateOrConnectWithoutUserInput[]
    upsert?: TutoringPostUpsertWithWhereUniqueWithoutUserInput | TutoringPostUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TutoringPostCreateManyUserInputEnvelope
    set?: TutoringPostWhereUniqueInput | TutoringPostWhereUniqueInput[]
    disconnect?: TutoringPostWhereUniqueInput | TutoringPostWhereUniqueInput[]
    delete?: TutoringPostWhereUniqueInput | TutoringPostWhereUniqueInput[]
    connect?: TutoringPostWhereUniqueInput | TutoringPostWhereUniqueInput[]
    update?: TutoringPostUpdateWithWhereUniqueWithoutUserInput | TutoringPostUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TutoringPostUpdateManyWithWhereWithoutUserInput | TutoringPostUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TutoringPostScalarWhereInput | TutoringPostScalarWhereInput[]
  }

  export type NotificationUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput> | NotificationCreateWithoutUserInput[] | NotificationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutUserInput | NotificationCreateOrConnectWithoutUserInput[]
    upsert?: NotificationUpsertWithWhereUniqueWithoutUserInput | NotificationUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: NotificationCreateManyUserInputEnvelope
    set?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    disconnect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    delete?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    update?: NotificationUpdateWithWhereUniqueWithoutUserInput | NotificationUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: NotificationUpdateManyWithWhereWithoutUserInput | NotificationUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
  }

  export type UserPeriodCreateNestedManyWithoutPeriodInput = {
    create?: XOR<UserPeriodCreateWithoutPeriodInput, UserPeriodUncheckedCreateWithoutPeriodInput> | UserPeriodCreateWithoutPeriodInput[] | UserPeriodUncheckedCreateWithoutPeriodInput[]
    connectOrCreate?: UserPeriodCreateOrConnectWithoutPeriodInput | UserPeriodCreateOrConnectWithoutPeriodInput[]
    createMany?: UserPeriodCreateManyPeriodInputEnvelope
    connect?: UserPeriodWhereUniqueInput | UserPeriodWhereUniqueInput[]
  }

  export type CourseCreateNestedManyWithoutPeriodInput = {
    create?: XOR<CourseCreateWithoutPeriodInput, CourseUncheckedCreateWithoutPeriodInput> | CourseCreateWithoutPeriodInput[] | CourseUncheckedCreateWithoutPeriodInput[]
    connectOrCreate?: CourseCreateOrConnectWithoutPeriodInput | CourseCreateOrConnectWithoutPeriodInput[]
    createMany?: CourseCreateManyPeriodInputEnvelope
    connect?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
  }

  export type UserPeriodUncheckedCreateNestedManyWithoutPeriodInput = {
    create?: XOR<UserPeriodCreateWithoutPeriodInput, UserPeriodUncheckedCreateWithoutPeriodInput> | UserPeriodCreateWithoutPeriodInput[] | UserPeriodUncheckedCreateWithoutPeriodInput[]
    connectOrCreate?: UserPeriodCreateOrConnectWithoutPeriodInput | UserPeriodCreateOrConnectWithoutPeriodInput[]
    createMany?: UserPeriodCreateManyPeriodInputEnvelope
    connect?: UserPeriodWhereUniqueInput | UserPeriodWhereUniqueInput[]
  }

  export type CourseUncheckedCreateNestedManyWithoutPeriodInput = {
    create?: XOR<CourseCreateWithoutPeriodInput, CourseUncheckedCreateWithoutPeriodInput> | CourseCreateWithoutPeriodInput[] | CourseUncheckedCreateWithoutPeriodInput[]
    connectOrCreate?: CourseCreateOrConnectWithoutPeriodInput | CourseCreateOrConnectWithoutPeriodInput[]
    createMany?: CourseCreateManyPeriodInputEnvelope
    connect?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
  }

  export type EnumPeriodTypeFieldUpdateOperationsInput = {
    set?: $Enums.PeriodType
  }

  export type UserPeriodUpdateManyWithoutPeriodNestedInput = {
    create?: XOR<UserPeriodCreateWithoutPeriodInput, UserPeriodUncheckedCreateWithoutPeriodInput> | UserPeriodCreateWithoutPeriodInput[] | UserPeriodUncheckedCreateWithoutPeriodInput[]
    connectOrCreate?: UserPeriodCreateOrConnectWithoutPeriodInput | UserPeriodCreateOrConnectWithoutPeriodInput[]
    upsert?: UserPeriodUpsertWithWhereUniqueWithoutPeriodInput | UserPeriodUpsertWithWhereUniqueWithoutPeriodInput[]
    createMany?: UserPeriodCreateManyPeriodInputEnvelope
    set?: UserPeriodWhereUniqueInput | UserPeriodWhereUniqueInput[]
    disconnect?: UserPeriodWhereUniqueInput | UserPeriodWhereUniqueInput[]
    delete?: UserPeriodWhereUniqueInput | UserPeriodWhereUniqueInput[]
    connect?: UserPeriodWhereUniqueInput | UserPeriodWhereUniqueInput[]
    update?: UserPeriodUpdateWithWhereUniqueWithoutPeriodInput | UserPeriodUpdateWithWhereUniqueWithoutPeriodInput[]
    updateMany?: UserPeriodUpdateManyWithWhereWithoutPeriodInput | UserPeriodUpdateManyWithWhereWithoutPeriodInput[]
    deleteMany?: UserPeriodScalarWhereInput | UserPeriodScalarWhereInput[]
  }

  export type CourseUpdateManyWithoutPeriodNestedInput = {
    create?: XOR<CourseCreateWithoutPeriodInput, CourseUncheckedCreateWithoutPeriodInput> | CourseCreateWithoutPeriodInput[] | CourseUncheckedCreateWithoutPeriodInput[]
    connectOrCreate?: CourseCreateOrConnectWithoutPeriodInput | CourseCreateOrConnectWithoutPeriodInput[]
    upsert?: CourseUpsertWithWhereUniqueWithoutPeriodInput | CourseUpsertWithWhereUniqueWithoutPeriodInput[]
    createMany?: CourseCreateManyPeriodInputEnvelope
    set?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
    disconnect?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
    delete?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
    connect?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
    update?: CourseUpdateWithWhereUniqueWithoutPeriodInput | CourseUpdateWithWhereUniqueWithoutPeriodInput[]
    updateMany?: CourseUpdateManyWithWhereWithoutPeriodInput | CourseUpdateManyWithWhereWithoutPeriodInput[]
    deleteMany?: CourseScalarWhereInput | CourseScalarWhereInput[]
  }

  export type UserPeriodUncheckedUpdateManyWithoutPeriodNestedInput = {
    create?: XOR<UserPeriodCreateWithoutPeriodInput, UserPeriodUncheckedCreateWithoutPeriodInput> | UserPeriodCreateWithoutPeriodInput[] | UserPeriodUncheckedCreateWithoutPeriodInput[]
    connectOrCreate?: UserPeriodCreateOrConnectWithoutPeriodInput | UserPeriodCreateOrConnectWithoutPeriodInput[]
    upsert?: UserPeriodUpsertWithWhereUniqueWithoutPeriodInput | UserPeriodUpsertWithWhereUniqueWithoutPeriodInput[]
    createMany?: UserPeriodCreateManyPeriodInputEnvelope
    set?: UserPeriodWhereUniqueInput | UserPeriodWhereUniqueInput[]
    disconnect?: UserPeriodWhereUniqueInput | UserPeriodWhereUniqueInput[]
    delete?: UserPeriodWhereUniqueInput | UserPeriodWhereUniqueInput[]
    connect?: UserPeriodWhereUniqueInput | UserPeriodWhereUniqueInput[]
    update?: UserPeriodUpdateWithWhereUniqueWithoutPeriodInput | UserPeriodUpdateWithWhereUniqueWithoutPeriodInput[]
    updateMany?: UserPeriodUpdateManyWithWhereWithoutPeriodInput | UserPeriodUpdateManyWithWhereWithoutPeriodInput[]
    deleteMany?: UserPeriodScalarWhereInput | UserPeriodScalarWhereInput[]
  }

  export type CourseUncheckedUpdateManyWithoutPeriodNestedInput = {
    create?: XOR<CourseCreateWithoutPeriodInput, CourseUncheckedCreateWithoutPeriodInput> | CourseCreateWithoutPeriodInput[] | CourseUncheckedCreateWithoutPeriodInput[]
    connectOrCreate?: CourseCreateOrConnectWithoutPeriodInput | CourseCreateOrConnectWithoutPeriodInput[]
    upsert?: CourseUpsertWithWhereUniqueWithoutPeriodInput | CourseUpsertWithWhereUniqueWithoutPeriodInput[]
    createMany?: CourseCreateManyPeriodInputEnvelope
    set?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
    disconnect?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
    delete?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
    connect?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
    update?: CourseUpdateWithWhereUniqueWithoutPeriodInput | CourseUpdateWithWhereUniqueWithoutPeriodInput[]
    updateMany?: CourseUpdateManyWithWhereWithoutPeriodInput | CourseUpdateManyWithWhereWithoutPeriodInput[]
    deleteMany?: CourseScalarWhereInput | CourseScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutUserPeriodsInput = {
    create?: XOR<UserCreateWithoutUserPeriodsInput, UserUncheckedCreateWithoutUserPeriodsInput>
    connectOrCreate?: UserCreateOrConnectWithoutUserPeriodsInput
    connect?: UserWhereUniqueInput
  }

  export type PeriodCreateNestedOneWithoutUserPeriodsInput = {
    create?: XOR<PeriodCreateWithoutUserPeriodsInput, PeriodUncheckedCreateWithoutUserPeriodsInput>
    connectOrCreate?: PeriodCreateOrConnectWithoutUserPeriodsInput
    connect?: PeriodWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutUserPeriodsNestedInput = {
    create?: XOR<UserCreateWithoutUserPeriodsInput, UserUncheckedCreateWithoutUserPeriodsInput>
    connectOrCreate?: UserCreateOrConnectWithoutUserPeriodsInput
    upsert?: UserUpsertWithoutUserPeriodsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutUserPeriodsInput, UserUpdateWithoutUserPeriodsInput>, UserUncheckedUpdateWithoutUserPeriodsInput>
  }

  export type PeriodUpdateOneRequiredWithoutUserPeriodsNestedInput = {
    create?: XOR<PeriodCreateWithoutUserPeriodsInput, PeriodUncheckedCreateWithoutUserPeriodsInput>
    connectOrCreate?: PeriodCreateOrConnectWithoutUserPeriodsInput
    upsert?: PeriodUpsertWithoutUserPeriodsInput
    connect?: PeriodWhereUniqueInput
    update?: XOR<XOR<PeriodUpdateToOneWithWhereWithoutUserPeriodsInput, PeriodUpdateWithoutUserPeriodsInput>, PeriodUncheckedUpdateWithoutUserPeriodsInput>
  }

  export type CourseCreateNestedManyWithoutTeacherInput = {
    create?: XOR<CourseCreateWithoutTeacherInput, CourseUncheckedCreateWithoutTeacherInput> | CourseCreateWithoutTeacherInput[] | CourseUncheckedCreateWithoutTeacherInput[]
    connectOrCreate?: CourseCreateOrConnectWithoutTeacherInput | CourseCreateOrConnectWithoutTeacherInput[]
    createMany?: CourseCreateManyTeacherInputEnvelope
    connect?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
  }

  export type CourseUncheckedCreateNestedManyWithoutTeacherInput = {
    create?: XOR<CourseCreateWithoutTeacherInput, CourseUncheckedCreateWithoutTeacherInput> | CourseCreateWithoutTeacherInput[] | CourseUncheckedCreateWithoutTeacherInput[]
    connectOrCreate?: CourseCreateOrConnectWithoutTeacherInput | CourseCreateOrConnectWithoutTeacherInput[]
    createMany?: CourseCreateManyTeacherInputEnvelope
    connect?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
  }

  export type CourseUpdateManyWithoutTeacherNestedInput = {
    create?: XOR<CourseCreateWithoutTeacherInput, CourseUncheckedCreateWithoutTeacherInput> | CourseCreateWithoutTeacherInput[] | CourseUncheckedCreateWithoutTeacherInput[]
    connectOrCreate?: CourseCreateOrConnectWithoutTeacherInput | CourseCreateOrConnectWithoutTeacherInput[]
    upsert?: CourseUpsertWithWhereUniqueWithoutTeacherInput | CourseUpsertWithWhereUniqueWithoutTeacherInput[]
    createMany?: CourseCreateManyTeacherInputEnvelope
    set?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
    disconnect?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
    delete?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
    connect?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
    update?: CourseUpdateWithWhereUniqueWithoutTeacherInput | CourseUpdateWithWhereUniqueWithoutTeacherInput[]
    updateMany?: CourseUpdateManyWithWhereWithoutTeacherInput | CourseUpdateManyWithWhereWithoutTeacherInput[]
    deleteMany?: CourseScalarWhereInput | CourseScalarWhereInput[]
  }

  export type CourseUncheckedUpdateManyWithoutTeacherNestedInput = {
    create?: XOR<CourseCreateWithoutTeacherInput, CourseUncheckedCreateWithoutTeacherInput> | CourseCreateWithoutTeacherInput[] | CourseUncheckedCreateWithoutTeacherInput[]
    connectOrCreate?: CourseCreateOrConnectWithoutTeacherInput | CourseCreateOrConnectWithoutTeacherInput[]
    upsert?: CourseUpsertWithWhereUniqueWithoutTeacherInput | CourseUpsertWithWhereUniqueWithoutTeacherInput[]
    createMany?: CourseCreateManyTeacherInputEnvelope
    set?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
    disconnect?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
    delete?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
    connect?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
    update?: CourseUpdateWithWhereUniqueWithoutTeacherInput | CourseUpdateWithWhereUniqueWithoutTeacherInput[]
    updateMany?: CourseUpdateManyWithWhereWithoutTeacherInput | CourseUpdateManyWithWhereWithoutTeacherInput[]
    deleteMany?: CourseScalarWhereInput | CourseScalarWhereInput[]
  }

  export type TeacherCreateNestedOneWithoutCoursesInput = {
    create?: XOR<TeacherCreateWithoutCoursesInput, TeacherUncheckedCreateWithoutCoursesInput>
    connectOrCreate?: TeacherCreateOrConnectWithoutCoursesInput
    connect?: TeacherWhereUniqueInput
  }

  export type PeriodCreateNestedOneWithoutCoursesInput = {
    create?: XOR<PeriodCreateWithoutCoursesInput, PeriodUncheckedCreateWithoutCoursesInput>
    connectOrCreate?: PeriodCreateOrConnectWithoutCoursesInput
    connect?: PeriodWhereUniqueInput
  }

  export type TaskCreateNestedManyWithoutCourseInput = {
    create?: XOR<TaskCreateWithoutCourseInput, TaskUncheckedCreateWithoutCourseInput> | TaskCreateWithoutCourseInput[] | TaskUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutCourseInput | TaskCreateOrConnectWithoutCourseInput[]
    createMany?: TaskCreateManyCourseInputEnvelope
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
  }

  export type TaskUncheckedCreateNestedManyWithoutCourseInput = {
    create?: XOR<TaskCreateWithoutCourseInput, TaskUncheckedCreateWithoutCourseInput> | TaskCreateWithoutCourseInput[] | TaskUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutCourseInput | TaskCreateOrConnectWithoutCourseInput[]
    createMany?: TaskCreateManyCourseInputEnvelope
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
  }

  export type EnumCourseStateFieldUpdateOperationsInput = {
    set?: $Enums.CourseState
  }

  export type TeacherUpdateOneWithoutCoursesNestedInput = {
    create?: XOR<TeacherCreateWithoutCoursesInput, TeacherUncheckedCreateWithoutCoursesInput>
    connectOrCreate?: TeacherCreateOrConnectWithoutCoursesInput
    upsert?: TeacherUpsertWithoutCoursesInput
    disconnect?: TeacherWhereInput | boolean
    delete?: TeacherWhereInput | boolean
    connect?: TeacherWhereUniqueInput
    update?: XOR<XOR<TeacherUpdateToOneWithWhereWithoutCoursesInput, TeacherUpdateWithoutCoursesInput>, TeacherUncheckedUpdateWithoutCoursesInput>
  }

  export type PeriodUpdateOneRequiredWithoutCoursesNestedInput = {
    create?: XOR<PeriodCreateWithoutCoursesInput, PeriodUncheckedCreateWithoutCoursesInput>
    connectOrCreate?: PeriodCreateOrConnectWithoutCoursesInput
    upsert?: PeriodUpsertWithoutCoursesInput
    connect?: PeriodWhereUniqueInput
    update?: XOR<XOR<PeriodUpdateToOneWithWhereWithoutCoursesInput, PeriodUpdateWithoutCoursesInput>, PeriodUncheckedUpdateWithoutCoursesInput>
  }

  export type TaskUpdateManyWithoutCourseNestedInput = {
    create?: XOR<TaskCreateWithoutCourseInput, TaskUncheckedCreateWithoutCourseInput> | TaskCreateWithoutCourseInput[] | TaskUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutCourseInput | TaskCreateOrConnectWithoutCourseInput[]
    upsert?: TaskUpsertWithWhereUniqueWithoutCourseInput | TaskUpsertWithWhereUniqueWithoutCourseInput[]
    createMany?: TaskCreateManyCourseInputEnvelope
    set?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    disconnect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    delete?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    update?: TaskUpdateWithWhereUniqueWithoutCourseInput | TaskUpdateWithWhereUniqueWithoutCourseInput[]
    updateMany?: TaskUpdateManyWithWhereWithoutCourseInput | TaskUpdateManyWithWhereWithoutCourseInput[]
    deleteMany?: TaskScalarWhereInput | TaskScalarWhereInput[]
  }

  export type TaskUncheckedUpdateManyWithoutCourseNestedInput = {
    create?: XOR<TaskCreateWithoutCourseInput, TaskUncheckedCreateWithoutCourseInput> | TaskCreateWithoutCourseInput[] | TaskUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutCourseInput | TaskCreateOrConnectWithoutCourseInput[]
    upsert?: TaskUpsertWithWhereUniqueWithoutCourseInput | TaskUpsertWithWhereUniqueWithoutCourseInput[]
    createMany?: TaskCreateManyCourseInputEnvelope
    set?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    disconnect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    delete?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    update?: TaskUpdateWithWhereUniqueWithoutCourseInput | TaskUpdateWithWhereUniqueWithoutCourseInput[]
    updateMany?: TaskUpdateManyWithWhereWithoutCourseInput | TaskUpdateManyWithWhereWithoutCourseInput[]
    deleteMany?: TaskScalarWhereInput | TaskScalarWhereInput[]
  }

  export type TaskCreateNestedManyWithoutStateInput = {
    create?: XOR<TaskCreateWithoutStateInput, TaskUncheckedCreateWithoutStateInput> | TaskCreateWithoutStateInput[] | TaskUncheckedCreateWithoutStateInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutStateInput | TaskCreateOrConnectWithoutStateInput[]
    createMany?: TaskCreateManyStateInputEnvelope
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
  }

  export type DeliverableCreateNestedManyWithoutStateInput = {
    create?: XOR<DeliverableCreateWithoutStateInput, DeliverableUncheckedCreateWithoutStateInput> | DeliverableCreateWithoutStateInput[] | DeliverableUncheckedCreateWithoutStateInput[]
    connectOrCreate?: DeliverableCreateOrConnectWithoutStateInput | DeliverableCreateOrConnectWithoutStateInput[]
    createMany?: DeliverableCreateManyStateInputEnvelope
    connect?: DeliverableWhereUniqueInput | DeliverableWhereUniqueInput[]
  }

  export type TaskUncheckedCreateNestedManyWithoutStateInput = {
    create?: XOR<TaskCreateWithoutStateInput, TaskUncheckedCreateWithoutStateInput> | TaskCreateWithoutStateInput[] | TaskUncheckedCreateWithoutStateInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutStateInput | TaskCreateOrConnectWithoutStateInput[]
    createMany?: TaskCreateManyStateInputEnvelope
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
  }

  export type DeliverableUncheckedCreateNestedManyWithoutStateInput = {
    create?: XOR<DeliverableCreateWithoutStateInput, DeliverableUncheckedCreateWithoutStateInput> | DeliverableCreateWithoutStateInput[] | DeliverableUncheckedCreateWithoutStateInput[]
    connectOrCreate?: DeliverableCreateOrConnectWithoutStateInput | DeliverableCreateOrConnectWithoutStateInput[]
    createMany?: DeliverableCreateManyStateInputEnvelope
    connect?: DeliverableWhereUniqueInput | DeliverableWhereUniqueInput[]
  }

  export type TaskUpdateManyWithoutStateNestedInput = {
    create?: XOR<TaskCreateWithoutStateInput, TaskUncheckedCreateWithoutStateInput> | TaskCreateWithoutStateInput[] | TaskUncheckedCreateWithoutStateInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutStateInput | TaskCreateOrConnectWithoutStateInput[]
    upsert?: TaskUpsertWithWhereUniqueWithoutStateInput | TaskUpsertWithWhereUniqueWithoutStateInput[]
    createMany?: TaskCreateManyStateInputEnvelope
    set?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    disconnect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    delete?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    update?: TaskUpdateWithWhereUniqueWithoutStateInput | TaskUpdateWithWhereUniqueWithoutStateInput[]
    updateMany?: TaskUpdateManyWithWhereWithoutStateInput | TaskUpdateManyWithWhereWithoutStateInput[]
    deleteMany?: TaskScalarWhereInput | TaskScalarWhereInput[]
  }

  export type DeliverableUpdateManyWithoutStateNestedInput = {
    create?: XOR<DeliverableCreateWithoutStateInput, DeliverableUncheckedCreateWithoutStateInput> | DeliverableCreateWithoutStateInput[] | DeliverableUncheckedCreateWithoutStateInput[]
    connectOrCreate?: DeliverableCreateOrConnectWithoutStateInput | DeliverableCreateOrConnectWithoutStateInput[]
    upsert?: DeliverableUpsertWithWhereUniqueWithoutStateInput | DeliverableUpsertWithWhereUniqueWithoutStateInput[]
    createMany?: DeliverableCreateManyStateInputEnvelope
    set?: DeliverableWhereUniqueInput | DeliverableWhereUniqueInput[]
    disconnect?: DeliverableWhereUniqueInput | DeliverableWhereUniqueInput[]
    delete?: DeliverableWhereUniqueInput | DeliverableWhereUniqueInput[]
    connect?: DeliverableWhereUniqueInput | DeliverableWhereUniqueInput[]
    update?: DeliverableUpdateWithWhereUniqueWithoutStateInput | DeliverableUpdateWithWhereUniqueWithoutStateInput[]
    updateMany?: DeliverableUpdateManyWithWhereWithoutStateInput | DeliverableUpdateManyWithWhereWithoutStateInput[]
    deleteMany?: DeliverableScalarWhereInput | DeliverableScalarWhereInput[]
  }

  export type TaskUncheckedUpdateManyWithoutStateNestedInput = {
    create?: XOR<TaskCreateWithoutStateInput, TaskUncheckedCreateWithoutStateInput> | TaskCreateWithoutStateInput[] | TaskUncheckedCreateWithoutStateInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutStateInput | TaskCreateOrConnectWithoutStateInput[]
    upsert?: TaskUpsertWithWhereUniqueWithoutStateInput | TaskUpsertWithWhereUniqueWithoutStateInput[]
    createMany?: TaskCreateManyStateInputEnvelope
    set?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    disconnect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    delete?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    update?: TaskUpdateWithWhereUniqueWithoutStateInput | TaskUpdateWithWhereUniqueWithoutStateInput[]
    updateMany?: TaskUpdateManyWithWhereWithoutStateInput | TaskUpdateManyWithWhereWithoutStateInput[]
    deleteMany?: TaskScalarWhereInput | TaskScalarWhereInput[]
  }

  export type DeliverableUncheckedUpdateManyWithoutStateNestedInput = {
    create?: XOR<DeliverableCreateWithoutStateInput, DeliverableUncheckedCreateWithoutStateInput> | DeliverableCreateWithoutStateInput[] | DeliverableUncheckedCreateWithoutStateInput[]
    connectOrCreate?: DeliverableCreateOrConnectWithoutStateInput | DeliverableCreateOrConnectWithoutStateInput[]
    upsert?: DeliverableUpsertWithWhereUniqueWithoutStateInput | DeliverableUpsertWithWhereUniqueWithoutStateInput[]
    createMany?: DeliverableCreateManyStateInputEnvelope
    set?: DeliverableWhereUniqueInput | DeliverableWhereUniqueInput[]
    disconnect?: DeliverableWhereUniqueInput | DeliverableWhereUniqueInput[]
    delete?: DeliverableWhereUniqueInput | DeliverableWhereUniqueInput[]
    connect?: DeliverableWhereUniqueInput | DeliverableWhereUniqueInput[]
    update?: DeliverableUpdateWithWhereUniqueWithoutStateInput | DeliverableUpdateWithWhereUniqueWithoutStateInput[]
    updateMany?: DeliverableUpdateManyWithWhereWithoutStateInput | DeliverableUpdateManyWithWhereWithoutStateInput[]
    deleteMany?: DeliverableScalarWhereInput | DeliverableScalarWhereInput[]
  }

  export type TaskStateCreateNestedOneWithoutTasksInput = {
    create?: XOR<TaskStateCreateWithoutTasksInput, TaskStateUncheckedCreateWithoutTasksInput>
    connectOrCreate?: TaskStateCreateOrConnectWithoutTasksInput
    connect?: TaskStateWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutTasksInput = {
    create?: XOR<UserCreateWithoutTasksInput, UserUncheckedCreateWithoutTasksInput>
    connectOrCreate?: UserCreateOrConnectWithoutTasksInput
    connect?: UserWhereUniqueInput
  }

  export type CourseCreateNestedOneWithoutTasksInput = {
    create?: XOR<CourseCreateWithoutTasksInput, CourseUncheckedCreateWithoutTasksInput>
    connectOrCreate?: CourseCreateOrConnectWithoutTasksInput
    connect?: CourseWhereUniqueInput
  }

  export type DeliverableCreateNestedManyWithoutTaskInput = {
    create?: XOR<DeliverableCreateWithoutTaskInput, DeliverableUncheckedCreateWithoutTaskInput> | DeliverableCreateWithoutTaskInput[] | DeliverableUncheckedCreateWithoutTaskInput[]
    connectOrCreate?: DeliverableCreateOrConnectWithoutTaskInput | DeliverableCreateOrConnectWithoutTaskInput[]
    createMany?: DeliverableCreateManyTaskInputEnvelope
    connect?: DeliverableWhereUniqueInput | DeliverableWhereUniqueInput[]
  }

  export type DeliverableUncheckedCreateNestedManyWithoutTaskInput = {
    create?: XOR<DeliverableCreateWithoutTaskInput, DeliverableUncheckedCreateWithoutTaskInput> | DeliverableCreateWithoutTaskInput[] | DeliverableUncheckedCreateWithoutTaskInput[]
    connectOrCreate?: DeliverableCreateOrConnectWithoutTaskInput | DeliverableCreateOrConnectWithoutTaskInput[]
    createMany?: DeliverableCreateManyTaskInputEnvelope
    connect?: DeliverableWhereUniqueInput | DeliverableWhereUniqueInput[]
  }

  export type TaskStateUpdateOneRequiredWithoutTasksNestedInput = {
    create?: XOR<TaskStateCreateWithoutTasksInput, TaskStateUncheckedCreateWithoutTasksInput>
    connectOrCreate?: TaskStateCreateOrConnectWithoutTasksInput
    upsert?: TaskStateUpsertWithoutTasksInput
    connect?: TaskStateWhereUniqueInput
    update?: XOR<XOR<TaskStateUpdateToOneWithWhereWithoutTasksInput, TaskStateUpdateWithoutTasksInput>, TaskStateUncheckedUpdateWithoutTasksInput>
  }

  export type UserUpdateOneRequiredWithoutTasksNestedInput = {
    create?: XOR<UserCreateWithoutTasksInput, UserUncheckedCreateWithoutTasksInput>
    connectOrCreate?: UserCreateOrConnectWithoutTasksInput
    upsert?: UserUpsertWithoutTasksInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutTasksInput, UserUpdateWithoutTasksInput>, UserUncheckedUpdateWithoutTasksInput>
  }

  export type CourseUpdateOneRequiredWithoutTasksNestedInput = {
    create?: XOR<CourseCreateWithoutTasksInput, CourseUncheckedCreateWithoutTasksInput>
    connectOrCreate?: CourseCreateOrConnectWithoutTasksInput
    upsert?: CourseUpsertWithoutTasksInput
    connect?: CourseWhereUniqueInput
    update?: XOR<XOR<CourseUpdateToOneWithWhereWithoutTasksInput, CourseUpdateWithoutTasksInput>, CourseUncheckedUpdateWithoutTasksInput>
  }

  export type DeliverableUpdateManyWithoutTaskNestedInput = {
    create?: XOR<DeliverableCreateWithoutTaskInput, DeliverableUncheckedCreateWithoutTaskInput> | DeliverableCreateWithoutTaskInput[] | DeliverableUncheckedCreateWithoutTaskInput[]
    connectOrCreate?: DeliverableCreateOrConnectWithoutTaskInput | DeliverableCreateOrConnectWithoutTaskInput[]
    upsert?: DeliverableUpsertWithWhereUniqueWithoutTaskInput | DeliverableUpsertWithWhereUniqueWithoutTaskInput[]
    createMany?: DeliverableCreateManyTaskInputEnvelope
    set?: DeliverableWhereUniqueInput | DeliverableWhereUniqueInput[]
    disconnect?: DeliverableWhereUniqueInput | DeliverableWhereUniqueInput[]
    delete?: DeliverableWhereUniqueInput | DeliverableWhereUniqueInput[]
    connect?: DeliverableWhereUniqueInput | DeliverableWhereUniqueInput[]
    update?: DeliverableUpdateWithWhereUniqueWithoutTaskInput | DeliverableUpdateWithWhereUniqueWithoutTaskInput[]
    updateMany?: DeliverableUpdateManyWithWhereWithoutTaskInput | DeliverableUpdateManyWithWhereWithoutTaskInput[]
    deleteMany?: DeliverableScalarWhereInput | DeliverableScalarWhereInput[]
  }

  export type DeliverableUncheckedUpdateManyWithoutTaskNestedInput = {
    create?: XOR<DeliverableCreateWithoutTaskInput, DeliverableUncheckedCreateWithoutTaskInput> | DeliverableCreateWithoutTaskInput[] | DeliverableUncheckedCreateWithoutTaskInput[]
    connectOrCreate?: DeliverableCreateOrConnectWithoutTaskInput | DeliverableCreateOrConnectWithoutTaskInput[]
    upsert?: DeliverableUpsertWithWhereUniqueWithoutTaskInput | DeliverableUpsertWithWhereUniqueWithoutTaskInput[]
    createMany?: DeliverableCreateManyTaskInputEnvelope
    set?: DeliverableWhereUniqueInput | DeliverableWhereUniqueInput[]
    disconnect?: DeliverableWhereUniqueInput | DeliverableWhereUniqueInput[]
    delete?: DeliverableWhereUniqueInput | DeliverableWhereUniqueInput[]
    connect?: DeliverableWhereUniqueInput | DeliverableWhereUniqueInput[]
    update?: DeliverableUpdateWithWhereUniqueWithoutTaskInput | DeliverableUpdateWithWhereUniqueWithoutTaskInput[]
    updateMany?: DeliverableUpdateManyWithWhereWithoutTaskInput | DeliverableUpdateManyWithWhereWithoutTaskInput[]
    deleteMany?: DeliverableScalarWhereInput | DeliverableScalarWhereInput[]
  }

  export type TaskStateCreateNestedOneWithoutDeliverablesInput = {
    create?: XOR<TaskStateCreateWithoutDeliverablesInput, TaskStateUncheckedCreateWithoutDeliverablesInput>
    connectOrCreate?: TaskStateCreateOrConnectWithoutDeliverablesInput
    connect?: TaskStateWhereUniqueInput
  }

  export type TaskCreateNestedOneWithoutDeliverablesInput = {
    create?: XOR<TaskCreateWithoutDeliverablesInput, TaskUncheckedCreateWithoutDeliverablesInput>
    connectOrCreate?: TaskCreateOrConnectWithoutDeliverablesInput
    connect?: TaskWhereUniqueInput
  }

  export type TaskStateUpdateOneRequiredWithoutDeliverablesNestedInput = {
    create?: XOR<TaskStateCreateWithoutDeliverablesInput, TaskStateUncheckedCreateWithoutDeliverablesInput>
    connectOrCreate?: TaskStateCreateOrConnectWithoutDeliverablesInput
    upsert?: TaskStateUpsertWithoutDeliverablesInput
    connect?: TaskStateWhereUniqueInput
    update?: XOR<XOR<TaskStateUpdateToOneWithWhereWithoutDeliverablesInput, TaskStateUpdateWithoutDeliverablesInput>, TaskStateUncheckedUpdateWithoutDeliverablesInput>
  }

  export type TaskUpdateOneRequiredWithoutDeliverablesNestedInput = {
    create?: XOR<TaskCreateWithoutDeliverablesInput, TaskUncheckedCreateWithoutDeliverablesInput>
    connectOrCreate?: TaskCreateOrConnectWithoutDeliverablesInput
    upsert?: TaskUpsertWithoutDeliverablesInput
    connect?: TaskWhereUniqueInput
    update?: XOR<XOR<TaskUpdateToOneWithWhereWithoutDeliverablesInput, TaskUpdateWithoutDeliverablesInput>, TaskUncheckedUpdateWithoutDeliverablesInput>
  }

  export type UserCreateNestedOneWithoutTutoringPostsInput = {
    create?: XOR<UserCreateWithoutTutoringPostsInput, UserUncheckedCreateWithoutTutoringPostsInput>
    connectOrCreate?: UserCreateOrConnectWithoutTutoringPostsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutTutoringPostsNestedInput = {
    create?: XOR<UserCreateWithoutTutoringPostsInput, UserUncheckedCreateWithoutTutoringPostsInput>
    connectOrCreate?: UserCreateOrConnectWithoutTutoringPostsInput
    upsert?: UserUpsertWithoutTutoringPostsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutTutoringPostsInput, UserUpdateWithoutTutoringPostsInput>, UserUncheckedUpdateWithoutTutoringPostsInput>
  }

  export type UserCreateNestedOneWithoutNotificationsInput = {
    create?: XOR<UserCreateWithoutNotificationsInput, UserUncheckedCreateWithoutNotificationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutNotificationsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutNotificationsNestedInput = {
    create?: XOR<UserCreateWithoutNotificationsInput, UserUncheckedCreateWithoutNotificationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutNotificationsInput
    upsert?: UserUpsertWithoutNotificationsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutNotificationsInput, UserUpdateWithoutNotificationsInput>, UserUncheckedUpdateWithoutNotificationsInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumPeriodTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.PeriodType | EnumPeriodTypeFieldRefInput<$PrismaModel>
    in?: $Enums.PeriodType[] | ListEnumPeriodTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.PeriodType[] | ListEnumPeriodTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumPeriodTypeFilter<$PrismaModel> | $Enums.PeriodType
  }

  export type NestedEnumPeriodTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PeriodType | EnumPeriodTypeFieldRefInput<$PrismaModel>
    in?: $Enums.PeriodType[] | ListEnumPeriodTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.PeriodType[] | ListEnumPeriodTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumPeriodTypeWithAggregatesFilter<$PrismaModel> | $Enums.PeriodType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPeriodTypeFilter<$PrismaModel>
    _max?: NestedEnumPeriodTypeFilter<$PrismaModel>
  }

  export type NestedEnumCourseStateFilter<$PrismaModel = never> = {
    equals?: $Enums.CourseState | EnumCourseStateFieldRefInput<$PrismaModel>
    in?: $Enums.CourseState[] | ListEnumCourseStateFieldRefInput<$PrismaModel>
    notIn?: $Enums.CourseState[] | ListEnumCourseStateFieldRefInput<$PrismaModel>
    not?: NestedEnumCourseStateFilter<$PrismaModel> | $Enums.CourseState
  }

  export type NestedEnumCourseStateWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CourseState | EnumCourseStateFieldRefInput<$PrismaModel>
    in?: $Enums.CourseState[] | ListEnumCourseStateFieldRefInput<$PrismaModel>
    notIn?: $Enums.CourseState[] | ListEnumCourseStateFieldRefInput<$PrismaModel>
    not?: NestedEnumCourseStateWithAggregatesFilter<$PrismaModel> | $Enums.CourseState
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCourseStateFilter<$PrismaModel>
    _max?: NestedEnumCourseStateFilter<$PrismaModel>
  }

  export type UserCreateWithoutMajorInput = {
    email: string
    password: string
    name: string
    lastname: string
    verified?: boolean
    createdAt?: Date | string
    role?: RoleCreateNestedOneWithoutUsersInput
    userPeriods?: UserPeriodCreateNestedManyWithoutUserInput
    tasks?: TaskCreateNestedManyWithoutUserInput
    tutoringPosts?: TutoringPostCreateNestedManyWithoutUserInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutMajorInput = {
    id?: number
    email: string
    password: string
    name: string
    lastname: string
    verified?: boolean
    roleId?: number
    createdAt?: Date | string
    userPeriods?: UserPeriodUncheckedCreateNestedManyWithoutUserInput
    tasks?: TaskUncheckedCreateNestedManyWithoutUserInput
    tutoringPosts?: TutoringPostUncheckedCreateNestedManyWithoutUserInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutMajorInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutMajorInput, UserUncheckedCreateWithoutMajorInput>
  }

  export type UserCreateManyMajorInputEnvelope = {
    data: UserCreateManyMajorInput | UserCreateManyMajorInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithWhereUniqueWithoutMajorInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutMajorInput, UserUncheckedUpdateWithoutMajorInput>
    create: XOR<UserCreateWithoutMajorInput, UserUncheckedCreateWithoutMajorInput>
  }

  export type UserUpdateWithWhereUniqueWithoutMajorInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutMajorInput, UserUncheckedUpdateWithoutMajorInput>
  }

  export type UserUpdateManyWithWhereWithoutMajorInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutMajorInput>
  }

  export type UserScalarWhereInput = {
    AND?: UserScalarWhereInput | UserScalarWhereInput[]
    OR?: UserScalarWhereInput[]
    NOT?: UserScalarWhereInput | UserScalarWhereInput[]
    id?: IntFilter<"User"> | number
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    lastname?: StringFilter<"User"> | string
    majorId?: IntNullableFilter<"User"> | number | null
    verified?: BoolFilter<"User"> | boolean
    roleId?: IntFilter<"User"> | number
    createdAt?: DateTimeFilter<"User"> | Date | string
  }

  export type UserCreateWithoutRoleInput = {
    email: string
    password: string
    name: string
    lastname: string
    verified?: boolean
    createdAt?: Date | string
    major?: MajorCreateNestedOneWithoutUsersInput
    userPeriods?: UserPeriodCreateNestedManyWithoutUserInput
    tasks?: TaskCreateNestedManyWithoutUserInput
    tutoringPosts?: TutoringPostCreateNestedManyWithoutUserInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutRoleInput = {
    id?: number
    email: string
    password: string
    name: string
    lastname: string
    majorId?: number | null
    verified?: boolean
    createdAt?: Date | string
    userPeriods?: UserPeriodUncheckedCreateNestedManyWithoutUserInput
    tasks?: TaskUncheckedCreateNestedManyWithoutUserInput
    tutoringPosts?: TutoringPostUncheckedCreateNestedManyWithoutUserInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutRoleInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutRoleInput, UserUncheckedCreateWithoutRoleInput>
  }

  export type UserCreateManyRoleInputEnvelope = {
    data: UserCreateManyRoleInput | UserCreateManyRoleInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithWhereUniqueWithoutRoleInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutRoleInput, UserUncheckedUpdateWithoutRoleInput>
    create: XOR<UserCreateWithoutRoleInput, UserUncheckedCreateWithoutRoleInput>
  }

  export type UserUpdateWithWhereUniqueWithoutRoleInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutRoleInput, UserUncheckedUpdateWithoutRoleInput>
  }

  export type UserUpdateManyWithWhereWithoutRoleInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutRoleInput>
  }

  export type MajorCreateWithoutUsersInput = {
    name: string
  }

  export type MajorUncheckedCreateWithoutUsersInput = {
    id?: number
    name: string
  }

  export type MajorCreateOrConnectWithoutUsersInput = {
    where: MajorWhereUniqueInput
    create: XOR<MajorCreateWithoutUsersInput, MajorUncheckedCreateWithoutUsersInput>
  }

  export type RoleCreateWithoutUsersInput = {
    name: string
  }

  export type RoleUncheckedCreateWithoutUsersInput = {
    id?: number
    name: string
  }

  export type RoleCreateOrConnectWithoutUsersInput = {
    where: RoleWhereUniqueInput
    create: XOR<RoleCreateWithoutUsersInput, RoleUncheckedCreateWithoutUsersInput>
  }

  export type UserPeriodCreateWithoutUserInput = {
    enrollmentDate?: Date | string
    period: PeriodCreateNestedOneWithoutUserPeriodsInput
  }

  export type UserPeriodUncheckedCreateWithoutUserInput = {
    id?: number
    enrollmentDate?: Date | string
    periodId: number
  }

  export type UserPeriodCreateOrConnectWithoutUserInput = {
    where: UserPeriodWhereUniqueInput
    create: XOR<UserPeriodCreateWithoutUserInput, UserPeriodUncheckedCreateWithoutUserInput>
  }

  export type UserPeriodCreateManyUserInputEnvelope = {
    data: UserPeriodCreateManyUserInput | UserPeriodCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type TaskCreateWithoutUserInput = {
    name: string
    description: string
    percentage?: number
    endDate: Date | string
    state?: TaskStateCreateNestedOneWithoutTasksInput
    course: CourseCreateNestedOneWithoutTasksInput
    deliverables?: DeliverableCreateNestedManyWithoutTaskInput
  }

  export type TaskUncheckedCreateWithoutUserInput = {
    id?: number
    name: string
    description: string
    stateId?: number
    percentage?: number
    endDate: Date | string
    courseId: number
    deliverables?: DeliverableUncheckedCreateNestedManyWithoutTaskInput
  }

  export type TaskCreateOrConnectWithoutUserInput = {
    where: TaskWhereUniqueInput
    create: XOR<TaskCreateWithoutUserInput, TaskUncheckedCreateWithoutUserInput>
  }

  export type TaskCreateManyUserInputEnvelope = {
    data: TaskCreateManyUserInput | TaskCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type TutoringPostCreateWithoutUserInput = {
    title: string
    description: string
  }

  export type TutoringPostUncheckedCreateWithoutUserInput = {
    id?: number
    title: string
    description: string
  }

  export type TutoringPostCreateOrConnectWithoutUserInput = {
    where: TutoringPostWhereUniqueInput
    create: XOR<TutoringPostCreateWithoutUserInput, TutoringPostUncheckedCreateWithoutUserInput>
  }

  export type TutoringPostCreateManyUserInputEnvelope = {
    data: TutoringPostCreateManyUserInput | TutoringPostCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type NotificationCreateWithoutUserInput = {
    title: string
    message: string
    isRead?: boolean
  }

  export type NotificationUncheckedCreateWithoutUserInput = {
    id?: number
    title: string
    message: string
    isRead?: boolean
  }

  export type NotificationCreateOrConnectWithoutUserInput = {
    where: NotificationWhereUniqueInput
    create: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput>
  }

  export type NotificationCreateManyUserInputEnvelope = {
    data: NotificationCreateManyUserInput | NotificationCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type MajorUpsertWithoutUsersInput = {
    update: XOR<MajorUpdateWithoutUsersInput, MajorUncheckedUpdateWithoutUsersInput>
    create: XOR<MajorCreateWithoutUsersInput, MajorUncheckedCreateWithoutUsersInput>
    where?: MajorWhereInput
  }

  export type MajorUpdateToOneWithWhereWithoutUsersInput = {
    where?: MajorWhereInput
    data: XOR<MajorUpdateWithoutUsersInput, MajorUncheckedUpdateWithoutUsersInput>
  }

  export type MajorUpdateWithoutUsersInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type MajorUncheckedUpdateWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type RoleUpsertWithoutUsersInput = {
    update: XOR<RoleUpdateWithoutUsersInput, RoleUncheckedUpdateWithoutUsersInput>
    create: XOR<RoleCreateWithoutUsersInput, RoleUncheckedCreateWithoutUsersInput>
    where?: RoleWhereInput
  }

  export type RoleUpdateToOneWithWhereWithoutUsersInput = {
    where?: RoleWhereInput
    data: XOR<RoleUpdateWithoutUsersInput, RoleUncheckedUpdateWithoutUsersInput>
  }

  export type RoleUpdateWithoutUsersInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type RoleUncheckedUpdateWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type UserPeriodUpsertWithWhereUniqueWithoutUserInput = {
    where: UserPeriodWhereUniqueInput
    update: XOR<UserPeriodUpdateWithoutUserInput, UserPeriodUncheckedUpdateWithoutUserInput>
    create: XOR<UserPeriodCreateWithoutUserInput, UserPeriodUncheckedCreateWithoutUserInput>
  }

  export type UserPeriodUpdateWithWhereUniqueWithoutUserInput = {
    where: UserPeriodWhereUniqueInput
    data: XOR<UserPeriodUpdateWithoutUserInput, UserPeriodUncheckedUpdateWithoutUserInput>
  }

  export type UserPeriodUpdateManyWithWhereWithoutUserInput = {
    where: UserPeriodScalarWhereInput
    data: XOR<UserPeriodUpdateManyMutationInput, UserPeriodUncheckedUpdateManyWithoutUserInput>
  }

  export type UserPeriodScalarWhereInput = {
    AND?: UserPeriodScalarWhereInput | UserPeriodScalarWhereInput[]
    OR?: UserPeriodScalarWhereInput[]
    NOT?: UserPeriodScalarWhereInput | UserPeriodScalarWhereInput[]
    id?: IntFilter<"UserPeriod"> | number
    enrollmentDate?: DateTimeFilter<"UserPeriod"> | Date | string
    userId?: IntFilter<"UserPeriod"> | number
    periodId?: IntFilter<"UserPeriod"> | number
  }

  export type TaskUpsertWithWhereUniqueWithoutUserInput = {
    where: TaskWhereUniqueInput
    update: XOR<TaskUpdateWithoutUserInput, TaskUncheckedUpdateWithoutUserInput>
    create: XOR<TaskCreateWithoutUserInput, TaskUncheckedCreateWithoutUserInput>
  }

  export type TaskUpdateWithWhereUniqueWithoutUserInput = {
    where: TaskWhereUniqueInput
    data: XOR<TaskUpdateWithoutUserInput, TaskUncheckedUpdateWithoutUserInput>
  }

  export type TaskUpdateManyWithWhereWithoutUserInput = {
    where: TaskScalarWhereInput
    data: XOR<TaskUpdateManyMutationInput, TaskUncheckedUpdateManyWithoutUserInput>
  }

  export type TaskScalarWhereInput = {
    AND?: TaskScalarWhereInput | TaskScalarWhereInput[]
    OR?: TaskScalarWhereInput[]
    NOT?: TaskScalarWhereInput | TaskScalarWhereInput[]
    id?: IntFilter<"Task"> | number
    name?: StringFilter<"Task"> | string
    description?: StringFilter<"Task"> | string
    stateId?: IntFilter<"Task"> | number
    percentage?: IntFilter<"Task"> | number
    endDate?: DateTimeFilter<"Task"> | Date | string
    userId?: IntFilter<"Task"> | number
    courseId?: IntFilter<"Task"> | number
  }

  export type TutoringPostUpsertWithWhereUniqueWithoutUserInput = {
    where: TutoringPostWhereUniqueInput
    update: XOR<TutoringPostUpdateWithoutUserInput, TutoringPostUncheckedUpdateWithoutUserInput>
    create: XOR<TutoringPostCreateWithoutUserInput, TutoringPostUncheckedCreateWithoutUserInput>
  }

  export type TutoringPostUpdateWithWhereUniqueWithoutUserInput = {
    where: TutoringPostWhereUniqueInput
    data: XOR<TutoringPostUpdateWithoutUserInput, TutoringPostUncheckedUpdateWithoutUserInput>
  }

  export type TutoringPostUpdateManyWithWhereWithoutUserInput = {
    where: TutoringPostScalarWhereInput
    data: XOR<TutoringPostUpdateManyMutationInput, TutoringPostUncheckedUpdateManyWithoutUserInput>
  }

  export type TutoringPostScalarWhereInput = {
    AND?: TutoringPostScalarWhereInput | TutoringPostScalarWhereInput[]
    OR?: TutoringPostScalarWhereInput[]
    NOT?: TutoringPostScalarWhereInput | TutoringPostScalarWhereInput[]
    id?: IntFilter<"TutoringPost"> | number
    title?: StringFilter<"TutoringPost"> | string
    description?: StringFilter<"TutoringPost"> | string
    userId?: IntFilter<"TutoringPost"> | number
  }

  export type NotificationUpsertWithWhereUniqueWithoutUserInput = {
    where: NotificationWhereUniqueInput
    update: XOR<NotificationUpdateWithoutUserInput, NotificationUncheckedUpdateWithoutUserInput>
    create: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput>
  }

  export type NotificationUpdateWithWhereUniqueWithoutUserInput = {
    where: NotificationWhereUniqueInput
    data: XOR<NotificationUpdateWithoutUserInput, NotificationUncheckedUpdateWithoutUserInput>
  }

  export type NotificationUpdateManyWithWhereWithoutUserInput = {
    where: NotificationScalarWhereInput
    data: XOR<NotificationUpdateManyMutationInput, NotificationUncheckedUpdateManyWithoutUserInput>
  }

  export type NotificationScalarWhereInput = {
    AND?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
    OR?: NotificationScalarWhereInput[]
    NOT?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
    id?: IntFilter<"Notification"> | number
    title?: StringFilter<"Notification"> | string
    message?: StringFilter<"Notification"> | string
    isRead?: BoolFilter<"Notification"> | boolean
    userId?: IntFilter<"Notification"> | number
  }

  export type UserPeriodCreateWithoutPeriodInput = {
    enrollmentDate?: Date | string
    user: UserCreateNestedOneWithoutUserPeriodsInput
  }

  export type UserPeriodUncheckedCreateWithoutPeriodInput = {
    id?: number
    enrollmentDate?: Date | string
    userId: number
  }

  export type UserPeriodCreateOrConnectWithoutPeriodInput = {
    where: UserPeriodWhereUniqueInput
    create: XOR<UserPeriodCreateWithoutPeriodInput, UserPeriodUncheckedCreateWithoutPeriodInput>
  }

  export type UserPeriodCreateManyPeriodInputEnvelope = {
    data: UserPeriodCreateManyPeriodInput | UserPeriodCreateManyPeriodInput[]
    skipDuplicates?: boolean
  }

  export type CourseCreateWithoutPeriodInput = {
    name: string
    code: string
    state?: $Enums.CourseState
    credits: number
    teacher?: TeacherCreateNestedOneWithoutCoursesInput
    tasks?: TaskCreateNestedManyWithoutCourseInput
  }

  export type CourseUncheckedCreateWithoutPeriodInput = {
    id?: number
    name: string
    code: string
    state?: $Enums.CourseState
    teacherId?: number | null
    credits: number
    tasks?: TaskUncheckedCreateNestedManyWithoutCourseInput
  }

  export type CourseCreateOrConnectWithoutPeriodInput = {
    where: CourseWhereUniqueInput
    create: XOR<CourseCreateWithoutPeriodInput, CourseUncheckedCreateWithoutPeriodInput>
  }

  export type CourseCreateManyPeriodInputEnvelope = {
    data: CourseCreateManyPeriodInput | CourseCreateManyPeriodInput[]
    skipDuplicates?: boolean
  }

  export type UserPeriodUpsertWithWhereUniqueWithoutPeriodInput = {
    where: UserPeriodWhereUniqueInput
    update: XOR<UserPeriodUpdateWithoutPeriodInput, UserPeriodUncheckedUpdateWithoutPeriodInput>
    create: XOR<UserPeriodCreateWithoutPeriodInput, UserPeriodUncheckedCreateWithoutPeriodInput>
  }

  export type UserPeriodUpdateWithWhereUniqueWithoutPeriodInput = {
    where: UserPeriodWhereUniqueInput
    data: XOR<UserPeriodUpdateWithoutPeriodInput, UserPeriodUncheckedUpdateWithoutPeriodInput>
  }

  export type UserPeriodUpdateManyWithWhereWithoutPeriodInput = {
    where: UserPeriodScalarWhereInput
    data: XOR<UserPeriodUpdateManyMutationInput, UserPeriodUncheckedUpdateManyWithoutPeriodInput>
  }

  export type CourseUpsertWithWhereUniqueWithoutPeriodInput = {
    where: CourseWhereUniqueInput
    update: XOR<CourseUpdateWithoutPeriodInput, CourseUncheckedUpdateWithoutPeriodInput>
    create: XOR<CourseCreateWithoutPeriodInput, CourseUncheckedCreateWithoutPeriodInput>
  }

  export type CourseUpdateWithWhereUniqueWithoutPeriodInput = {
    where: CourseWhereUniqueInput
    data: XOR<CourseUpdateWithoutPeriodInput, CourseUncheckedUpdateWithoutPeriodInput>
  }

  export type CourseUpdateManyWithWhereWithoutPeriodInput = {
    where: CourseScalarWhereInput
    data: XOR<CourseUpdateManyMutationInput, CourseUncheckedUpdateManyWithoutPeriodInput>
  }

  export type CourseScalarWhereInput = {
    AND?: CourseScalarWhereInput | CourseScalarWhereInput[]
    OR?: CourseScalarWhereInput[]
    NOT?: CourseScalarWhereInput | CourseScalarWhereInput[]
    id?: IntFilter<"Course"> | number
    name?: StringFilter<"Course"> | string
    code?: StringFilter<"Course"> | string
    state?: EnumCourseStateFilter<"Course"> | $Enums.CourseState
    teacherId?: IntNullableFilter<"Course"> | number | null
    credits?: IntFilter<"Course"> | number
    periodId?: IntFilter<"Course"> | number
  }

  export type UserCreateWithoutUserPeriodsInput = {
    email: string
    password: string
    name: string
    lastname: string
    verified?: boolean
    createdAt?: Date | string
    major?: MajorCreateNestedOneWithoutUsersInput
    role?: RoleCreateNestedOneWithoutUsersInput
    tasks?: TaskCreateNestedManyWithoutUserInput
    tutoringPosts?: TutoringPostCreateNestedManyWithoutUserInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutUserPeriodsInput = {
    id?: number
    email: string
    password: string
    name: string
    lastname: string
    majorId?: number | null
    verified?: boolean
    roleId?: number
    createdAt?: Date | string
    tasks?: TaskUncheckedCreateNestedManyWithoutUserInput
    tutoringPosts?: TutoringPostUncheckedCreateNestedManyWithoutUserInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutUserPeriodsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutUserPeriodsInput, UserUncheckedCreateWithoutUserPeriodsInput>
  }

  export type PeriodCreateWithoutUserPeriodsInput = {
    type: $Enums.PeriodType
    number: number
    year: number
    startDate: Date | string
    endDate: Date | string
    courses?: CourseCreateNestedManyWithoutPeriodInput
  }

  export type PeriodUncheckedCreateWithoutUserPeriodsInput = {
    id?: number
    type: $Enums.PeriodType
    number: number
    year: number
    startDate: Date | string
    endDate: Date | string
    courses?: CourseUncheckedCreateNestedManyWithoutPeriodInput
  }

  export type PeriodCreateOrConnectWithoutUserPeriodsInput = {
    where: PeriodWhereUniqueInput
    create: XOR<PeriodCreateWithoutUserPeriodsInput, PeriodUncheckedCreateWithoutUserPeriodsInput>
  }

  export type UserUpsertWithoutUserPeriodsInput = {
    update: XOR<UserUpdateWithoutUserPeriodsInput, UserUncheckedUpdateWithoutUserPeriodsInput>
    create: XOR<UserCreateWithoutUserPeriodsInput, UserUncheckedCreateWithoutUserPeriodsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutUserPeriodsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutUserPeriodsInput, UserUncheckedUpdateWithoutUserPeriodsInput>
  }

  export type UserUpdateWithoutUserPeriodsInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    verified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    major?: MajorUpdateOneWithoutUsersNestedInput
    role?: RoleUpdateOneRequiredWithoutUsersNestedInput
    tasks?: TaskUpdateManyWithoutUserNestedInput
    tutoringPosts?: TutoringPostUpdateManyWithoutUserNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutUserPeriodsInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    majorId?: NullableIntFieldUpdateOperationsInput | number | null
    verified?: BoolFieldUpdateOperationsInput | boolean
    roleId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tasks?: TaskUncheckedUpdateManyWithoutUserNestedInput
    tutoringPosts?: TutoringPostUncheckedUpdateManyWithoutUserNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
  }

  export type PeriodUpsertWithoutUserPeriodsInput = {
    update: XOR<PeriodUpdateWithoutUserPeriodsInput, PeriodUncheckedUpdateWithoutUserPeriodsInput>
    create: XOR<PeriodCreateWithoutUserPeriodsInput, PeriodUncheckedCreateWithoutUserPeriodsInput>
    where?: PeriodWhereInput
  }

  export type PeriodUpdateToOneWithWhereWithoutUserPeriodsInput = {
    where?: PeriodWhereInput
    data: XOR<PeriodUpdateWithoutUserPeriodsInput, PeriodUncheckedUpdateWithoutUserPeriodsInput>
  }

  export type PeriodUpdateWithoutUserPeriodsInput = {
    type?: EnumPeriodTypeFieldUpdateOperationsInput | $Enums.PeriodType
    number?: IntFieldUpdateOperationsInput | number
    year?: IntFieldUpdateOperationsInput | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    courses?: CourseUpdateManyWithoutPeriodNestedInput
  }

  export type PeriodUncheckedUpdateWithoutUserPeriodsInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: EnumPeriodTypeFieldUpdateOperationsInput | $Enums.PeriodType
    number?: IntFieldUpdateOperationsInput | number
    year?: IntFieldUpdateOperationsInput | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    courses?: CourseUncheckedUpdateManyWithoutPeriodNestedInput
  }

  export type CourseCreateWithoutTeacherInput = {
    name: string
    code: string
    state?: $Enums.CourseState
    credits: number
    period: PeriodCreateNestedOneWithoutCoursesInput
    tasks?: TaskCreateNestedManyWithoutCourseInput
  }

  export type CourseUncheckedCreateWithoutTeacherInput = {
    id?: number
    name: string
    code: string
    state?: $Enums.CourseState
    credits: number
    periodId: number
    tasks?: TaskUncheckedCreateNestedManyWithoutCourseInput
  }

  export type CourseCreateOrConnectWithoutTeacherInput = {
    where: CourseWhereUniqueInput
    create: XOR<CourseCreateWithoutTeacherInput, CourseUncheckedCreateWithoutTeacherInput>
  }

  export type CourseCreateManyTeacherInputEnvelope = {
    data: CourseCreateManyTeacherInput | CourseCreateManyTeacherInput[]
    skipDuplicates?: boolean
  }

  export type CourseUpsertWithWhereUniqueWithoutTeacherInput = {
    where: CourseWhereUniqueInput
    update: XOR<CourseUpdateWithoutTeacherInput, CourseUncheckedUpdateWithoutTeacherInput>
    create: XOR<CourseCreateWithoutTeacherInput, CourseUncheckedCreateWithoutTeacherInput>
  }

  export type CourseUpdateWithWhereUniqueWithoutTeacherInput = {
    where: CourseWhereUniqueInput
    data: XOR<CourseUpdateWithoutTeacherInput, CourseUncheckedUpdateWithoutTeacherInput>
  }

  export type CourseUpdateManyWithWhereWithoutTeacherInput = {
    where: CourseScalarWhereInput
    data: XOR<CourseUpdateManyMutationInput, CourseUncheckedUpdateManyWithoutTeacherInput>
  }

  export type TeacherCreateWithoutCoursesInput = {
    name: string
    lastname: string
  }

  export type TeacherUncheckedCreateWithoutCoursesInput = {
    id?: number
    name: string
    lastname: string
  }

  export type TeacherCreateOrConnectWithoutCoursesInput = {
    where: TeacherWhereUniqueInput
    create: XOR<TeacherCreateWithoutCoursesInput, TeacherUncheckedCreateWithoutCoursesInput>
  }

  export type PeriodCreateWithoutCoursesInput = {
    type: $Enums.PeriodType
    number: number
    year: number
    startDate: Date | string
    endDate: Date | string
    userPeriods?: UserPeriodCreateNestedManyWithoutPeriodInput
  }

  export type PeriodUncheckedCreateWithoutCoursesInput = {
    id?: number
    type: $Enums.PeriodType
    number: number
    year: number
    startDate: Date | string
    endDate: Date | string
    userPeriods?: UserPeriodUncheckedCreateNestedManyWithoutPeriodInput
  }

  export type PeriodCreateOrConnectWithoutCoursesInput = {
    where: PeriodWhereUniqueInput
    create: XOR<PeriodCreateWithoutCoursesInput, PeriodUncheckedCreateWithoutCoursesInput>
  }

  export type TaskCreateWithoutCourseInput = {
    name: string
    description: string
    percentage?: number
    endDate: Date | string
    state?: TaskStateCreateNestedOneWithoutTasksInput
    user: UserCreateNestedOneWithoutTasksInput
    deliverables?: DeliverableCreateNestedManyWithoutTaskInput
  }

  export type TaskUncheckedCreateWithoutCourseInput = {
    id?: number
    name: string
    description: string
    stateId?: number
    percentage?: number
    endDate: Date | string
    userId: number
    deliverables?: DeliverableUncheckedCreateNestedManyWithoutTaskInput
  }

  export type TaskCreateOrConnectWithoutCourseInput = {
    where: TaskWhereUniqueInput
    create: XOR<TaskCreateWithoutCourseInput, TaskUncheckedCreateWithoutCourseInput>
  }

  export type TaskCreateManyCourseInputEnvelope = {
    data: TaskCreateManyCourseInput | TaskCreateManyCourseInput[]
    skipDuplicates?: boolean
  }

  export type TeacherUpsertWithoutCoursesInput = {
    update: XOR<TeacherUpdateWithoutCoursesInput, TeacherUncheckedUpdateWithoutCoursesInput>
    create: XOR<TeacherCreateWithoutCoursesInput, TeacherUncheckedCreateWithoutCoursesInput>
    where?: TeacherWhereInput
  }

  export type TeacherUpdateToOneWithWhereWithoutCoursesInput = {
    where?: TeacherWhereInput
    data: XOR<TeacherUpdateWithoutCoursesInput, TeacherUncheckedUpdateWithoutCoursesInput>
  }

  export type TeacherUpdateWithoutCoursesInput = {
    name?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
  }

  export type TeacherUncheckedUpdateWithoutCoursesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
  }

  export type PeriodUpsertWithoutCoursesInput = {
    update: XOR<PeriodUpdateWithoutCoursesInput, PeriodUncheckedUpdateWithoutCoursesInput>
    create: XOR<PeriodCreateWithoutCoursesInput, PeriodUncheckedCreateWithoutCoursesInput>
    where?: PeriodWhereInput
  }

  export type PeriodUpdateToOneWithWhereWithoutCoursesInput = {
    where?: PeriodWhereInput
    data: XOR<PeriodUpdateWithoutCoursesInput, PeriodUncheckedUpdateWithoutCoursesInput>
  }

  export type PeriodUpdateWithoutCoursesInput = {
    type?: EnumPeriodTypeFieldUpdateOperationsInput | $Enums.PeriodType
    number?: IntFieldUpdateOperationsInput | number
    year?: IntFieldUpdateOperationsInput | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    userPeriods?: UserPeriodUpdateManyWithoutPeriodNestedInput
  }

  export type PeriodUncheckedUpdateWithoutCoursesInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: EnumPeriodTypeFieldUpdateOperationsInput | $Enums.PeriodType
    number?: IntFieldUpdateOperationsInput | number
    year?: IntFieldUpdateOperationsInput | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    userPeriods?: UserPeriodUncheckedUpdateManyWithoutPeriodNestedInput
  }

  export type TaskUpsertWithWhereUniqueWithoutCourseInput = {
    where: TaskWhereUniqueInput
    update: XOR<TaskUpdateWithoutCourseInput, TaskUncheckedUpdateWithoutCourseInput>
    create: XOR<TaskCreateWithoutCourseInput, TaskUncheckedCreateWithoutCourseInput>
  }

  export type TaskUpdateWithWhereUniqueWithoutCourseInput = {
    where: TaskWhereUniqueInput
    data: XOR<TaskUpdateWithoutCourseInput, TaskUncheckedUpdateWithoutCourseInput>
  }

  export type TaskUpdateManyWithWhereWithoutCourseInput = {
    where: TaskScalarWhereInput
    data: XOR<TaskUpdateManyMutationInput, TaskUncheckedUpdateManyWithoutCourseInput>
  }

  export type TaskCreateWithoutStateInput = {
    name: string
    description: string
    percentage?: number
    endDate: Date | string
    user: UserCreateNestedOneWithoutTasksInput
    course: CourseCreateNestedOneWithoutTasksInput
    deliverables?: DeliverableCreateNestedManyWithoutTaskInput
  }

  export type TaskUncheckedCreateWithoutStateInput = {
    id?: number
    name: string
    description: string
    percentage?: number
    endDate: Date | string
    userId: number
    courseId: number
    deliverables?: DeliverableUncheckedCreateNestedManyWithoutTaskInput
  }

  export type TaskCreateOrConnectWithoutStateInput = {
    where: TaskWhereUniqueInput
    create: XOR<TaskCreateWithoutStateInput, TaskUncheckedCreateWithoutStateInput>
  }

  export type TaskCreateManyStateInputEnvelope = {
    data: TaskCreateManyStateInput | TaskCreateManyStateInput[]
    skipDuplicates?: boolean
  }

  export type DeliverableCreateWithoutStateInput = {
    name: string
    percentageOfTask?: number
    date: Date | string
    task: TaskCreateNestedOneWithoutDeliverablesInput
  }

  export type DeliverableUncheckedCreateWithoutStateInput = {
    id?: number
    name: string
    percentageOfTask?: number
    date: Date | string
    taskId: number
  }

  export type DeliverableCreateOrConnectWithoutStateInput = {
    where: DeliverableWhereUniqueInput
    create: XOR<DeliverableCreateWithoutStateInput, DeliverableUncheckedCreateWithoutStateInput>
  }

  export type DeliverableCreateManyStateInputEnvelope = {
    data: DeliverableCreateManyStateInput | DeliverableCreateManyStateInput[]
    skipDuplicates?: boolean
  }

  export type TaskUpsertWithWhereUniqueWithoutStateInput = {
    where: TaskWhereUniqueInput
    update: XOR<TaskUpdateWithoutStateInput, TaskUncheckedUpdateWithoutStateInput>
    create: XOR<TaskCreateWithoutStateInput, TaskUncheckedCreateWithoutStateInput>
  }

  export type TaskUpdateWithWhereUniqueWithoutStateInput = {
    where: TaskWhereUniqueInput
    data: XOR<TaskUpdateWithoutStateInput, TaskUncheckedUpdateWithoutStateInput>
  }

  export type TaskUpdateManyWithWhereWithoutStateInput = {
    where: TaskScalarWhereInput
    data: XOR<TaskUpdateManyMutationInput, TaskUncheckedUpdateManyWithoutStateInput>
  }

  export type DeliverableUpsertWithWhereUniqueWithoutStateInput = {
    where: DeliverableWhereUniqueInput
    update: XOR<DeliverableUpdateWithoutStateInput, DeliverableUncheckedUpdateWithoutStateInput>
    create: XOR<DeliverableCreateWithoutStateInput, DeliverableUncheckedCreateWithoutStateInput>
  }

  export type DeliverableUpdateWithWhereUniqueWithoutStateInput = {
    where: DeliverableWhereUniqueInput
    data: XOR<DeliverableUpdateWithoutStateInput, DeliverableUncheckedUpdateWithoutStateInput>
  }

  export type DeliverableUpdateManyWithWhereWithoutStateInput = {
    where: DeliverableScalarWhereInput
    data: XOR<DeliverableUpdateManyMutationInput, DeliverableUncheckedUpdateManyWithoutStateInput>
  }

  export type DeliverableScalarWhereInput = {
    AND?: DeliverableScalarWhereInput | DeliverableScalarWhereInput[]
    OR?: DeliverableScalarWhereInput[]
    NOT?: DeliverableScalarWhereInput | DeliverableScalarWhereInput[]
    id?: IntFilter<"Deliverable"> | number
    name?: StringFilter<"Deliverable"> | string
    stateId?: IntFilter<"Deliverable"> | number
    percentageOfTask?: IntFilter<"Deliverable"> | number
    date?: DateTimeFilter<"Deliverable"> | Date | string
    taskId?: IntFilter<"Deliverable"> | number
  }

  export type TaskStateCreateWithoutTasksInput = {
    name: string
    deliverables?: DeliverableCreateNestedManyWithoutStateInput
  }

  export type TaskStateUncheckedCreateWithoutTasksInput = {
    id?: number
    name: string
    deliverables?: DeliverableUncheckedCreateNestedManyWithoutStateInput
  }

  export type TaskStateCreateOrConnectWithoutTasksInput = {
    where: TaskStateWhereUniqueInput
    create: XOR<TaskStateCreateWithoutTasksInput, TaskStateUncheckedCreateWithoutTasksInput>
  }

  export type UserCreateWithoutTasksInput = {
    email: string
    password: string
    name: string
    lastname: string
    verified?: boolean
    createdAt?: Date | string
    major?: MajorCreateNestedOneWithoutUsersInput
    role?: RoleCreateNestedOneWithoutUsersInput
    userPeriods?: UserPeriodCreateNestedManyWithoutUserInput
    tutoringPosts?: TutoringPostCreateNestedManyWithoutUserInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutTasksInput = {
    id?: number
    email: string
    password: string
    name: string
    lastname: string
    majorId?: number | null
    verified?: boolean
    roleId?: number
    createdAt?: Date | string
    userPeriods?: UserPeriodUncheckedCreateNestedManyWithoutUserInput
    tutoringPosts?: TutoringPostUncheckedCreateNestedManyWithoutUserInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutTasksInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutTasksInput, UserUncheckedCreateWithoutTasksInput>
  }

  export type CourseCreateWithoutTasksInput = {
    name: string
    code: string
    state?: $Enums.CourseState
    credits: number
    teacher?: TeacherCreateNestedOneWithoutCoursesInput
    period: PeriodCreateNestedOneWithoutCoursesInput
  }

  export type CourseUncheckedCreateWithoutTasksInput = {
    id?: number
    name: string
    code: string
    state?: $Enums.CourseState
    teacherId?: number | null
    credits: number
    periodId: number
  }

  export type CourseCreateOrConnectWithoutTasksInput = {
    where: CourseWhereUniqueInput
    create: XOR<CourseCreateWithoutTasksInput, CourseUncheckedCreateWithoutTasksInput>
  }

  export type DeliverableCreateWithoutTaskInput = {
    name: string
    percentageOfTask?: number
    date: Date | string
    state?: TaskStateCreateNestedOneWithoutDeliverablesInput
  }

  export type DeliverableUncheckedCreateWithoutTaskInput = {
    id?: number
    name: string
    stateId?: number
    percentageOfTask?: number
    date: Date | string
  }

  export type DeliverableCreateOrConnectWithoutTaskInput = {
    where: DeliverableWhereUniqueInput
    create: XOR<DeliverableCreateWithoutTaskInput, DeliverableUncheckedCreateWithoutTaskInput>
  }

  export type DeliverableCreateManyTaskInputEnvelope = {
    data: DeliverableCreateManyTaskInput | DeliverableCreateManyTaskInput[]
    skipDuplicates?: boolean
  }

  export type TaskStateUpsertWithoutTasksInput = {
    update: XOR<TaskStateUpdateWithoutTasksInput, TaskStateUncheckedUpdateWithoutTasksInput>
    create: XOR<TaskStateCreateWithoutTasksInput, TaskStateUncheckedCreateWithoutTasksInput>
    where?: TaskStateWhereInput
  }

  export type TaskStateUpdateToOneWithWhereWithoutTasksInput = {
    where?: TaskStateWhereInput
    data: XOR<TaskStateUpdateWithoutTasksInput, TaskStateUncheckedUpdateWithoutTasksInput>
  }

  export type TaskStateUpdateWithoutTasksInput = {
    name?: StringFieldUpdateOperationsInput | string
    deliverables?: DeliverableUpdateManyWithoutStateNestedInput
  }

  export type TaskStateUncheckedUpdateWithoutTasksInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    deliverables?: DeliverableUncheckedUpdateManyWithoutStateNestedInput
  }

  export type UserUpsertWithoutTasksInput = {
    update: XOR<UserUpdateWithoutTasksInput, UserUncheckedUpdateWithoutTasksInput>
    create: XOR<UserCreateWithoutTasksInput, UserUncheckedCreateWithoutTasksInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutTasksInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutTasksInput, UserUncheckedUpdateWithoutTasksInput>
  }

  export type UserUpdateWithoutTasksInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    verified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    major?: MajorUpdateOneWithoutUsersNestedInput
    role?: RoleUpdateOneRequiredWithoutUsersNestedInput
    userPeriods?: UserPeriodUpdateManyWithoutUserNestedInput
    tutoringPosts?: TutoringPostUpdateManyWithoutUserNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutTasksInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    majorId?: NullableIntFieldUpdateOperationsInput | number | null
    verified?: BoolFieldUpdateOperationsInput | boolean
    roleId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userPeriods?: UserPeriodUncheckedUpdateManyWithoutUserNestedInput
    tutoringPosts?: TutoringPostUncheckedUpdateManyWithoutUserNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
  }

  export type CourseUpsertWithoutTasksInput = {
    update: XOR<CourseUpdateWithoutTasksInput, CourseUncheckedUpdateWithoutTasksInput>
    create: XOR<CourseCreateWithoutTasksInput, CourseUncheckedCreateWithoutTasksInput>
    where?: CourseWhereInput
  }

  export type CourseUpdateToOneWithWhereWithoutTasksInput = {
    where?: CourseWhereInput
    data: XOR<CourseUpdateWithoutTasksInput, CourseUncheckedUpdateWithoutTasksInput>
  }

  export type CourseUpdateWithoutTasksInput = {
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    state?: EnumCourseStateFieldUpdateOperationsInput | $Enums.CourseState
    credits?: IntFieldUpdateOperationsInput | number
    teacher?: TeacherUpdateOneWithoutCoursesNestedInput
    period?: PeriodUpdateOneRequiredWithoutCoursesNestedInput
  }

  export type CourseUncheckedUpdateWithoutTasksInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    state?: EnumCourseStateFieldUpdateOperationsInput | $Enums.CourseState
    teacherId?: NullableIntFieldUpdateOperationsInput | number | null
    credits?: IntFieldUpdateOperationsInput | number
    periodId?: IntFieldUpdateOperationsInput | number
  }

  export type DeliverableUpsertWithWhereUniqueWithoutTaskInput = {
    where: DeliverableWhereUniqueInput
    update: XOR<DeliverableUpdateWithoutTaskInput, DeliverableUncheckedUpdateWithoutTaskInput>
    create: XOR<DeliverableCreateWithoutTaskInput, DeliverableUncheckedCreateWithoutTaskInput>
  }

  export type DeliverableUpdateWithWhereUniqueWithoutTaskInput = {
    where: DeliverableWhereUniqueInput
    data: XOR<DeliverableUpdateWithoutTaskInput, DeliverableUncheckedUpdateWithoutTaskInput>
  }

  export type DeliverableUpdateManyWithWhereWithoutTaskInput = {
    where: DeliverableScalarWhereInput
    data: XOR<DeliverableUpdateManyMutationInput, DeliverableUncheckedUpdateManyWithoutTaskInput>
  }

  export type TaskStateCreateWithoutDeliverablesInput = {
    name: string
    tasks?: TaskCreateNestedManyWithoutStateInput
  }

  export type TaskStateUncheckedCreateWithoutDeliverablesInput = {
    id?: number
    name: string
    tasks?: TaskUncheckedCreateNestedManyWithoutStateInput
  }

  export type TaskStateCreateOrConnectWithoutDeliverablesInput = {
    where: TaskStateWhereUniqueInput
    create: XOR<TaskStateCreateWithoutDeliverablesInput, TaskStateUncheckedCreateWithoutDeliverablesInput>
  }

  export type TaskCreateWithoutDeliverablesInput = {
    name: string
    description: string
    percentage?: number
    endDate: Date | string
    state?: TaskStateCreateNestedOneWithoutTasksInput
    user: UserCreateNestedOneWithoutTasksInput
    course: CourseCreateNestedOneWithoutTasksInput
  }

  export type TaskUncheckedCreateWithoutDeliverablesInput = {
    id?: number
    name: string
    description: string
    stateId?: number
    percentage?: number
    endDate: Date | string
    userId: number
    courseId: number
  }

  export type TaskCreateOrConnectWithoutDeliverablesInput = {
    where: TaskWhereUniqueInput
    create: XOR<TaskCreateWithoutDeliverablesInput, TaskUncheckedCreateWithoutDeliverablesInput>
  }

  export type TaskStateUpsertWithoutDeliverablesInput = {
    update: XOR<TaskStateUpdateWithoutDeliverablesInput, TaskStateUncheckedUpdateWithoutDeliverablesInput>
    create: XOR<TaskStateCreateWithoutDeliverablesInput, TaskStateUncheckedCreateWithoutDeliverablesInput>
    where?: TaskStateWhereInput
  }

  export type TaskStateUpdateToOneWithWhereWithoutDeliverablesInput = {
    where?: TaskStateWhereInput
    data: XOR<TaskStateUpdateWithoutDeliverablesInput, TaskStateUncheckedUpdateWithoutDeliverablesInput>
  }

  export type TaskStateUpdateWithoutDeliverablesInput = {
    name?: StringFieldUpdateOperationsInput | string
    tasks?: TaskUpdateManyWithoutStateNestedInput
  }

  export type TaskStateUncheckedUpdateWithoutDeliverablesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    tasks?: TaskUncheckedUpdateManyWithoutStateNestedInput
  }

  export type TaskUpsertWithoutDeliverablesInput = {
    update: XOR<TaskUpdateWithoutDeliverablesInput, TaskUncheckedUpdateWithoutDeliverablesInput>
    create: XOR<TaskCreateWithoutDeliverablesInput, TaskUncheckedCreateWithoutDeliverablesInput>
    where?: TaskWhereInput
  }

  export type TaskUpdateToOneWithWhereWithoutDeliverablesInput = {
    where?: TaskWhereInput
    data: XOR<TaskUpdateWithoutDeliverablesInput, TaskUncheckedUpdateWithoutDeliverablesInput>
  }

  export type TaskUpdateWithoutDeliverablesInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    percentage?: IntFieldUpdateOperationsInput | number
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    state?: TaskStateUpdateOneRequiredWithoutTasksNestedInput
    user?: UserUpdateOneRequiredWithoutTasksNestedInput
    course?: CourseUpdateOneRequiredWithoutTasksNestedInput
  }

  export type TaskUncheckedUpdateWithoutDeliverablesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    stateId?: IntFieldUpdateOperationsInput | number
    percentage?: IntFieldUpdateOperationsInput | number
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: IntFieldUpdateOperationsInput | number
    courseId?: IntFieldUpdateOperationsInput | number
  }

  export type UserCreateWithoutTutoringPostsInput = {
    email: string
    password: string
    name: string
    lastname: string
    verified?: boolean
    createdAt?: Date | string
    major?: MajorCreateNestedOneWithoutUsersInput
    role?: RoleCreateNestedOneWithoutUsersInput
    userPeriods?: UserPeriodCreateNestedManyWithoutUserInput
    tasks?: TaskCreateNestedManyWithoutUserInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutTutoringPostsInput = {
    id?: number
    email: string
    password: string
    name: string
    lastname: string
    majorId?: number | null
    verified?: boolean
    roleId?: number
    createdAt?: Date | string
    userPeriods?: UserPeriodUncheckedCreateNestedManyWithoutUserInput
    tasks?: TaskUncheckedCreateNestedManyWithoutUserInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutTutoringPostsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutTutoringPostsInput, UserUncheckedCreateWithoutTutoringPostsInput>
  }

  export type UserUpsertWithoutTutoringPostsInput = {
    update: XOR<UserUpdateWithoutTutoringPostsInput, UserUncheckedUpdateWithoutTutoringPostsInput>
    create: XOR<UserCreateWithoutTutoringPostsInput, UserUncheckedCreateWithoutTutoringPostsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutTutoringPostsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutTutoringPostsInput, UserUncheckedUpdateWithoutTutoringPostsInput>
  }

  export type UserUpdateWithoutTutoringPostsInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    verified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    major?: MajorUpdateOneWithoutUsersNestedInput
    role?: RoleUpdateOneRequiredWithoutUsersNestedInput
    userPeriods?: UserPeriodUpdateManyWithoutUserNestedInput
    tasks?: TaskUpdateManyWithoutUserNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutTutoringPostsInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    majorId?: NullableIntFieldUpdateOperationsInput | number | null
    verified?: BoolFieldUpdateOperationsInput | boolean
    roleId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userPeriods?: UserPeriodUncheckedUpdateManyWithoutUserNestedInput
    tasks?: TaskUncheckedUpdateManyWithoutUserNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutNotificationsInput = {
    email: string
    password: string
    name: string
    lastname: string
    verified?: boolean
    createdAt?: Date | string
    major?: MajorCreateNestedOneWithoutUsersInput
    role?: RoleCreateNestedOneWithoutUsersInput
    userPeriods?: UserPeriodCreateNestedManyWithoutUserInput
    tasks?: TaskCreateNestedManyWithoutUserInput
    tutoringPosts?: TutoringPostCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutNotificationsInput = {
    id?: number
    email: string
    password: string
    name: string
    lastname: string
    majorId?: number | null
    verified?: boolean
    roleId?: number
    createdAt?: Date | string
    userPeriods?: UserPeriodUncheckedCreateNestedManyWithoutUserInput
    tasks?: TaskUncheckedCreateNestedManyWithoutUserInput
    tutoringPosts?: TutoringPostUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutNotificationsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutNotificationsInput, UserUncheckedCreateWithoutNotificationsInput>
  }

  export type UserUpsertWithoutNotificationsInput = {
    update: XOR<UserUpdateWithoutNotificationsInput, UserUncheckedUpdateWithoutNotificationsInput>
    create: XOR<UserCreateWithoutNotificationsInput, UserUncheckedCreateWithoutNotificationsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutNotificationsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutNotificationsInput, UserUncheckedUpdateWithoutNotificationsInput>
  }

  export type UserUpdateWithoutNotificationsInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    verified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    major?: MajorUpdateOneWithoutUsersNestedInput
    role?: RoleUpdateOneRequiredWithoutUsersNestedInput
    userPeriods?: UserPeriodUpdateManyWithoutUserNestedInput
    tasks?: TaskUpdateManyWithoutUserNestedInput
    tutoringPosts?: TutoringPostUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutNotificationsInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    majorId?: NullableIntFieldUpdateOperationsInput | number | null
    verified?: BoolFieldUpdateOperationsInput | boolean
    roleId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userPeriods?: UserPeriodUncheckedUpdateManyWithoutUserNestedInput
    tasks?: TaskUncheckedUpdateManyWithoutUserNestedInput
    tutoringPosts?: TutoringPostUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyMajorInput = {
    id?: number
    email: string
    password: string
    name: string
    lastname: string
    verified?: boolean
    roleId?: number
    createdAt?: Date | string
  }

  export type UserUpdateWithoutMajorInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    verified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: RoleUpdateOneRequiredWithoutUsersNestedInput
    userPeriods?: UserPeriodUpdateManyWithoutUserNestedInput
    tasks?: TaskUpdateManyWithoutUserNestedInput
    tutoringPosts?: TutoringPostUpdateManyWithoutUserNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutMajorInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    verified?: BoolFieldUpdateOperationsInput | boolean
    roleId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userPeriods?: UserPeriodUncheckedUpdateManyWithoutUserNestedInput
    tasks?: TaskUncheckedUpdateManyWithoutUserNestedInput
    tutoringPosts?: TutoringPostUncheckedUpdateManyWithoutUserNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateManyWithoutMajorInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    verified?: BoolFieldUpdateOperationsInput | boolean
    roleId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateManyRoleInput = {
    id?: number
    email: string
    password: string
    name: string
    lastname: string
    majorId?: number | null
    verified?: boolean
    createdAt?: Date | string
  }

  export type UserUpdateWithoutRoleInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    verified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    major?: MajorUpdateOneWithoutUsersNestedInput
    userPeriods?: UserPeriodUpdateManyWithoutUserNestedInput
    tasks?: TaskUpdateManyWithoutUserNestedInput
    tutoringPosts?: TutoringPostUpdateManyWithoutUserNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutRoleInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    majorId?: NullableIntFieldUpdateOperationsInput | number | null
    verified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userPeriods?: UserPeriodUncheckedUpdateManyWithoutUserNestedInput
    tasks?: TaskUncheckedUpdateManyWithoutUserNestedInput
    tutoringPosts?: TutoringPostUncheckedUpdateManyWithoutUserNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateManyWithoutRoleInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    majorId?: NullableIntFieldUpdateOperationsInput | number | null
    verified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserPeriodCreateManyUserInput = {
    id?: number
    enrollmentDate?: Date | string
    periodId: number
  }

  export type TaskCreateManyUserInput = {
    id?: number
    name: string
    description: string
    stateId?: number
    percentage?: number
    endDate: Date | string
    courseId: number
  }

  export type TutoringPostCreateManyUserInput = {
    id?: number
    title: string
    description: string
  }

  export type NotificationCreateManyUserInput = {
    id?: number
    title: string
    message: string
    isRead?: boolean
  }

  export type UserPeriodUpdateWithoutUserInput = {
    enrollmentDate?: DateTimeFieldUpdateOperationsInput | Date | string
    period?: PeriodUpdateOneRequiredWithoutUserPeriodsNestedInput
  }

  export type UserPeriodUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    enrollmentDate?: DateTimeFieldUpdateOperationsInput | Date | string
    periodId?: IntFieldUpdateOperationsInput | number
  }

  export type UserPeriodUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    enrollmentDate?: DateTimeFieldUpdateOperationsInput | Date | string
    periodId?: IntFieldUpdateOperationsInput | number
  }

  export type TaskUpdateWithoutUserInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    percentage?: IntFieldUpdateOperationsInput | number
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    state?: TaskStateUpdateOneRequiredWithoutTasksNestedInput
    course?: CourseUpdateOneRequiredWithoutTasksNestedInput
    deliverables?: DeliverableUpdateManyWithoutTaskNestedInput
  }

  export type TaskUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    stateId?: IntFieldUpdateOperationsInput | number
    percentage?: IntFieldUpdateOperationsInput | number
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    courseId?: IntFieldUpdateOperationsInput | number
    deliverables?: DeliverableUncheckedUpdateManyWithoutTaskNestedInput
  }

  export type TaskUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    stateId?: IntFieldUpdateOperationsInput | number
    percentage?: IntFieldUpdateOperationsInput | number
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    courseId?: IntFieldUpdateOperationsInput | number
  }

  export type TutoringPostUpdateWithoutUserInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
  }

  export type TutoringPostUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
  }

  export type TutoringPostUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
  }

  export type NotificationUpdateWithoutUserInput = {
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
  }

  export type NotificationUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
  }

  export type NotificationUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
  }

  export type UserPeriodCreateManyPeriodInput = {
    id?: number
    enrollmentDate?: Date | string
    userId: number
  }

  export type CourseCreateManyPeriodInput = {
    id?: number
    name: string
    code: string
    state?: $Enums.CourseState
    teacherId?: number | null
    credits: number
  }

  export type UserPeriodUpdateWithoutPeriodInput = {
    enrollmentDate?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutUserPeriodsNestedInput
  }

  export type UserPeriodUncheckedUpdateWithoutPeriodInput = {
    id?: IntFieldUpdateOperationsInput | number
    enrollmentDate?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type UserPeriodUncheckedUpdateManyWithoutPeriodInput = {
    id?: IntFieldUpdateOperationsInput | number
    enrollmentDate?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type CourseUpdateWithoutPeriodInput = {
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    state?: EnumCourseStateFieldUpdateOperationsInput | $Enums.CourseState
    credits?: IntFieldUpdateOperationsInput | number
    teacher?: TeacherUpdateOneWithoutCoursesNestedInput
    tasks?: TaskUpdateManyWithoutCourseNestedInput
  }

  export type CourseUncheckedUpdateWithoutPeriodInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    state?: EnumCourseStateFieldUpdateOperationsInput | $Enums.CourseState
    teacherId?: NullableIntFieldUpdateOperationsInput | number | null
    credits?: IntFieldUpdateOperationsInput | number
    tasks?: TaskUncheckedUpdateManyWithoutCourseNestedInput
  }

  export type CourseUncheckedUpdateManyWithoutPeriodInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    state?: EnumCourseStateFieldUpdateOperationsInput | $Enums.CourseState
    teacherId?: NullableIntFieldUpdateOperationsInput | number | null
    credits?: IntFieldUpdateOperationsInput | number
  }

  export type CourseCreateManyTeacherInput = {
    id?: number
    name: string
    code: string
    state?: $Enums.CourseState
    credits: number
    periodId: number
  }

  export type CourseUpdateWithoutTeacherInput = {
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    state?: EnumCourseStateFieldUpdateOperationsInput | $Enums.CourseState
    credits?: IntFieldUpdateOperationsInput | number
    period?: PeriodUpdateOneRequiredWithoutCoursesNestedInput
    tasks?: TaskUpdateManyWithoutCourseNestedInput
  }

  export type CourseUncheckedUpdateWithoutTeacherInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    state?: EnumCourseStateFieldUpdateOperationsInput | $Enums.CourseState
    credits?: IntFieldUpdateOperationsInput | number
    periodId?: IntFieldUpdateOperationsInput | number
    tasks?: TaskUncheckedUpdateManyWithoutCourseNestedInput
  }

  export type CourseUncheckedUpdateManyWithoutTeacherInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    state?: EnumCourseStateFieldUpdateOperationsInput | $Enums.CourseState
    credits?: IntFieldUpdateOperationsInput | number
    periodId?: IntFieldUpdateOperationsInput | number
  }

  export type TaskCreateManyCourseInput = {
    id?: number
    name: string
    description: string
    stateId?: number
    percentage?: number
    endDate: Date | string
    userId: number
  }

  export type TaskUpdateWithoutCourseInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    percentage?: IntFieldUpdateOperationsInput | number
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    state?: TaskStateUpdateOneRequiredWithoutTasksNestedInput
    user?: UserUpdateOneRequiredWithoutTasksNestedInput
    deliverables?: DeliverableUpdateManyWithoutTaskNestedInput
  }

  export type TaskUncheckedUpdateWithoutCourseInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    stateId?: IntFieldUpdateOperationsInput | number
    percentage?: IntFieldUpdateOperationsInput | number
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: IntFieldUpdateOperationsInput | number
    deliverables?: DeliverableUncheckedUpdateManyWithoutTaskNestedInput
  }

  export type TaskUncheckedUpdateManyWithoutCourseInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    stateId?: IntFieldUpdateOperationsInput | number
    percentage?: IntFieldUpdateOperationsInput | number
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type TaskCreateManyStateInput = {
    id?: number
    name: string
    description: string
    percentage?: number
    endDate: Date | string
    userId: number
    courseId: number
  }

  export type DeliverableCreateManyStateInput = {
    id?: number
    name: string
    percentageOfTask?: number
    date: Date | string
    taskId: number
  }

  export type TaskUpdateWithoutStateInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    percentage?: IntFieldUpdateOperationsInput | number
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutTasksNestedInput
    course?: CourseUpdateOneRequiredWithoutTasksNestedInput
    deliverables?: DeliverableUpdateManyWithoutTaskNestedInput
  }

  export type TaskUncheckedUpdateWithoutStateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    percentage?: IntFieldUpdateOperationsInput | number
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: IntFieldUpdateOperationsInput | number
    courseId?: IntFieldUpdateOperationsInput | number
    deliverables?: DeliverableUncheckedUpdateManyWithoutTaskNestedInput
  }

  export type TaskUncheckedUpdateManyWithoutStateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    percentage?: IntFieldUpdateOperationsInput | number
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: IntFieldUpdateOperationsInput | number
    courseId?: IntFieldUpdateOperationsInput | number
  }

  export type DeliverableUpdateWithoutStateInput = {
    name?: StringFieldUpdateOperationsInput | string
    percentageOfTask?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    task?: TaskUpdateOneRequiredWithoutDeliverablesNestedInput
  }

  export type DeliverableUncheckedUpdateWithoutStateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    percentageOfTask?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    taskId?: IntFieldUpdateOperationsInput | number
  }

  export type DeliverableUncheckedUpdateManyWithoutStateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    percentageOfTask?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    taskId?: IntFieldUpdateOperationsInput | number
  }

  export type DeliverableCreateManyTaskInput = {
    id?: number
    name: string
    stateId?: number
    percentageOfTask?: number
    date: Date | string
  }

  export type DeliverableUpdateWithoutTaskInput = {
    name?: StringFieldUpdateOperationsInput | string
    percentageOfTask?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    state?: TaskStateUpdateOneRequiredWithoutDeliverablesNestedInput
  }

  export type DeliverableUncheckedUpdateWithoutTaskInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    stateId?: IntFieldUpdateOperationsInput | number
    percentageOfTask?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DeliverableUncheckedUpdateManyWithoutTaskInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    stateId?: IntFieldUpdateOperationsInput | number
    percentageOfTask?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}