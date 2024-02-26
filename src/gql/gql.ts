/* eslint-disable */
import * as types from './graphql';



/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "query CategoriesGetList {\n  categories {\n    data {\n      ...CategoriesListItem\n    }\n    meta {\n      total\n      count\n    }\n  }\n}": types.CategoriesGetListDocument,
    "query CategoryGetItem($slug: String!) {\n  category(slug: $slug) {\n    ...CategoriesListItem\n    products {\n      ...ProductsListItem\n    }\n  }\n}": types.CategoryGetItemDocument,
    "fragment CategoriesListItem on Category {\n  id\n  name\n  description\n  slug\n}": types.CategoriesListItemFragmentDoc,
    "fragment ProductList on Product {\n  id\n  name\n  price\n  description\n  rating\n  images {\n    url\n    alt\n  }\n  categories {\n    name\n  }\n}": types.ProductListFragmentDoc,
    "query ProductGetItemById($id: ID!) {\n  product(id: $id) {\n    categories {\n      name\n    }\n    description\n    id\n    images {\n      alt\n      url\n    }\n    name\n    price\n  }\n}": types.ProductGetItemByIdDocument,
    "fragment ProductsListItem on Product {\n  id\n  name\n  price\n  description\n  rating\n  images {\n    url\n    alt\n  }\n  categories {\n    name\n  }\n}": types.ProductsListItemFragmentDoc,
    "query ProductsGetList($take: Int!, $skip: Int!) {\n  products(take: $take, skip: $skip) {\n    data {\n      id\n      name\n      categories {\n        name\n      }\n      description\n      images {\n        url\n        alt\n      }\n      price\n    }\n    meta {\n      total\n    }\n  }\n}": types.ProductsGetListDocument,
    "query ProductsGetListBySearch($search: String!) {\n  products(search: $search) {\n    data {\n      ...ProductsListItem\n    }\n    meta {\n      total\n    }\n  }\n}": types.ProductsGetListBySearchDocument,
    "query ProductsGetSuggestedList {\n  products {\n    data {\n      id\n      name\n      categories {\n        name\n      }\n      description\n      images {\n        url\n        alt\n      }\n      price\n    }\n    meta {\n      total\n    }\n  }\n}": types.ProductsGetSuggestedListDocument,
    "fragment ProductsGetTotalCount on ProductList {\n  meta {\n    total\n  }\n}": types.ProductsGetTotalCountFragmentDoc,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query CategoriesGetList {\n  categories {\n    data {\n      ...CategoriesListItem\n    }\n    meta {\n      total\n      count\n    }\n  }\n}"): typeof import('./graphql').CategoriesGetListDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query CategoryGetItem($slug: String!) {\n  category(slug: $slug) {\n    ...CategoriesListItem\n    products {\n      ...ProductsListItem\n    }\n  }\n}"): typeof import('./graphql').CategoryGetItemDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment CategoriesListItem on Category {\n  id\n  name\n  description\n  slug\n}"): typeof import('./graphql').CategoriesListItemFragmentDoc;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment ProductList on Product {\n  id\n  name\n  price\n  description\n  rating\n  images {\n    url\n    alt\n  }\n  categories {\n    name\n  }\n}"): typeof import('./graphql').ProductListFragmentDoc;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductGetItemById($id: ID!) {\n  product(id: $id) {\n    categories {\n      name\n    }\n    description\n    id\n    images {\n      alt\n      url\n    }\n    name\n    price\n  }\n}"): typeof import('./graphql').ProductGetItemByIdDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment ProductsListItem on Product {\n  id\n  name\n  price\n  description\n  rating\n  images {\n    url\n    alt\n  }\n  categories {\n    name\n  }\n}"): typeof import('./graphql').ProductsListItemFragmentDoc;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductsGetList($take: Int!, $skip: Int!) {\n  products(take: $take, skip: $skip) {\n    data {\n      id\n      name\n      categories {\n        name\n      }\n      description\n      images {\n        url\n        alt\n      }\n      price\n    }\n    meta {\n      total\n    }\n  }\n}"): typeof import('./graphql').ProductsGetListDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductsGetListBySearch($search: String!) {\n  products(search: $search) {\n    data {\n      ...ProductsListItem\n    }\n    meta {\n      total\n    }\n  }\n}"): typeof import('./graphql').ProductsGetListBySearchDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductsGetSuggestedList {\n  products {\n    data {\n      id\n      name\n      categories {\n        name\n      }\n      description\n      images {\n        url\n        alt\n      }\n      price\n    }\n    meta {\n      total\n    }\n  }\n}"): typeof import('./graphql').ProductsGetSuggestedListDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment ProductsGetTotalCount on ProductList {\n  meta {\n    total\n  }\n}"): typeof import('./graphql').ProductsGetTotalCountFragmentDoc;


export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}
