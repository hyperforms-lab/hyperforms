import { GraphQLResolveInfo } from "graphql";
import gql from "graphql-tag";
import * as React from "react";
import * as ApolloReactCommon from "@apollo/react-common";
import * as ApolloReactComponents from "@apollo/react-components";
import * as ApolloReactHoc from "@apollo/react-hoc";
export type Maybe<T> = T | null;
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

export type ResolverTypeWrapper<T> = Promise<T> | T;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type StitchingResolver<TResult, TParent, TContext, TArgs> = {
  fragment: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | StitchingResolver<TResult, TParent, TContext, TArgs>;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterator<TResult> | Promise<AsyncIterator<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<
  TResult,
  TKey extends string,
  TParent,
  TContext,
  TArgs
> {
  subscribe: SubscriptionSubscribeFn<
    { [key in TKey]: TResult },
    TParent,
    TContext,
    TArgs
  >;
  resolve?: SubscriptionResolveFn<
    TResult,
    { [key in TKey]: TResult },
    TContext,
    TArgs
  >;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<
  TResult,
  TKey extends string,
  TParent,
  TContext,
  TArgs
> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<
  TResult,
  TKey extends string,
  TParent = {},
  TContext = {},
  TArgs = {}
> =
  | ((
      ...args: any[]
    ) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<
  TResult = {},
  TParent = {},
  TContext = {},
  TArgs = {}
> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Query: ResolverTypeWrapper<{}>;
  Document: ResolverTypeWrapper<Document>;
  String: ResolverTypeWrapper<Scalars["String"]>;
  Boolean: ResolverTypeWrapper<Scalars["Boolean"]>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Query: {};
  Document: Document;
  String: Scalars["String"];
  Boolean: Scalars["Boolean"];
};

export type DocumentResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["Document"] = ResolversParentTypes["Document"]
> = {
  description?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  createdOn?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
};

export type QueryResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["Query"] = ResolversParentTypes["Query"]
> = {
  documents?: Resolver<
    Array<ResolversTypes["Document"]>,
    ParentType,
    ContextType
  >;
};

export type Resolvers<ContextType = any> = {
  Document?: DocumentResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
};

/**
 * @deprecated
 * Use "Resolvers" root object instead. If you wish to get "IResolvers", add "typesPrefix: I" to your config.
 */
export type IResolvers<ContextType = any> = Resolvers<ContextType>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Document = {
  __typename?: "Document";
  description?: Maybe<Scalars["String"]>;
  createdOn: Scalars["String"];
};

export type Query = {
  __typename?: "Query";
  documents: Array<Document>;
};
export type DocumentXQueryVariables = {};

export type DocumentXQuery = { __typename?: "Query" } & {
  documents: Array<{ __typename?: "Document" } & Pick<Document, "description">>;
};

export const DocumentXDocument = gql`
  query DocumentX {
    documents {
      description
    }
  }
`;
export type DocumentXComponentProps = Omit<
  ApolloReactComponents.QueryComponentOptions<
    DocumentXQuery,
    DocumentXQueryVariables
  >,
  "query"
>;

export const DocumentXComponent = (props: DocumentXComponentProps) => (
  <ApolloReactComponents.Query<DocumentXQuery, DocumentXQueryVariables>
    query={DocumentXDocument}
    {...props}
  />
);

export type DocumentXProps<TChildProps = {}> = ApolloReactHoc.DataProps<
  DocumentXQuery,
  DocumentXQueryVariables
> &
  TChildProps;
export function withDocumentX<TProps, TChildProps = {}>(
  operationOptions?: ApolloReactHoc.OperationOption<
    TProps,
    DocumentXQuery,
    DocumentXQueryVariables,
    DocumentXProps<TChildProps>
  >
) {
  return ApolloReactHoc.withQuery<
    TProps,
    DocumentXQuery,
    DocumentXQueryVariables,
    DocumentXProps<TChildProps>
  >(DocumentXDocument, {
    alias: "withDocumentX",
    ...operationOptions
  });
}
export type DocumentXQueryResult = ApolloReactCommon.QueryResult<
  DocumentXQuery,
  DocumentXQueryVariables
>;