/**
 * Maps a graphql-codegen-generated query type onto the shape
 * fetchPersistedQuery() actually returns at runtime: rich-text
 * `{ html: string | null } | null` objects collapsed to `string` (mirroring
 * graphql-client.ts's flattenMultiFormatStrings()), and every other
 * field/array member stripped of AEM's blanket GraphQL nullability — the
 * existing hand-written domain types (lib/aem/types.ts) already assume
 * fields are always present once a fragment is authored, so this keeps that
 * same non-null contract instead of pushing null-checks into every
 * component.
 */
type FlattenField<T> = NonNullable<T> extends { html: string | null }
  ? string
  : NonNullable<T> extends ReadonlyArray<infer U>
    ? Array<FlattenField<U>>
    : NonNullable<T> extends object
      ? Flatten<NonNullable<T>>
      : NonNullable<T>;

export type Flatten<T> = { [K in keyof T]: FlattenField<T[K]> };
