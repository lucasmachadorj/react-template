module.exports = {
  schema: [
    {
      '${process.env.REACT_APP_GRAPHQL_SERVER_URL}': {
        headers: {
          Authorization: 'Bearer ${process.env.REACT_APP_AUTH_TOKEN}',
        },
      },
    },
  ],
  documents: ['./src/**/*.tsx', './src/**/*.ts'],
  overwrite: true,
  generates: {
    './src/graphql/generated/graphql.tsx': {
      plugins: ['typescript', 'typescript-operations', 'typescript-react-apollo'],
      config: {
        skipTypename: false,
        withHooks: true,
        withHOC: false,
        withComponent: false,
      },
    },
    './graphql.schema.json': {
      plugins: ['introspection'],
    },
  },
};
