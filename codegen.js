module.exports = {
  schema: [
    {
      'https://learn.hasura.io/graphql': {
        headers: {
          Authorization:
            'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImtpZCI6Ik9FWTJSVGM1UlVOR05qSXhSRUV5TURJNFFUWXdNekZETWtReU1EQXdSVUV4UVVRM05EazFNQSJ9.eyJodHRwczovL2hhc3VyYS5pby9qd3QvY2xhaW1zIjp7IngtaGFzdXJhLWRlZmF1bHQtcm9sZSI6InVzZXIiLCJ4LWhhc3VyYS1hbGxvd2VkLXJvbGVzIjpbInVzZXIiXSwieC1oYXN1cmEtdXNlci1pZCI6ImF1dGgwfDVkZDQwY2RlODhjZjIyMGVlN2Y3ZjNkZSJ9LCJuaWNrbmFtZSI6Imx1Y2FzbWFjaGFkby5yaiIsIm5hbWUiOiJsdWNhc21hY2hhZG8ucmpAZ21haWwuY29tIiwicGljdHVyZSI6Imh0dHBzOi8vcy5ncmF2YXRhci5jb20vYXZhdGFyLzZmZjdkMzY3NGI3MjgzNDcxZDMwNzUzNzhmNGZhZDAwP3M9NDgwJnI9cGcmZD1odHRwcyUzQSUyRiUyRmNkbi5hdXRoMC5jb20lMkZhdmF0YXJzJTJGbHUucG5nIiwidXBkYXRlZF9hdCI6IjIwMTktMTEtMTlUMTU6NDA6MTUuODI2WiIsImlzcyI6Imh0dHBzOi8vZ3JhcGhxbC10dXRvcmlhbHMuYXV0aDAuY29tLyIsInN1YiI6ImF1dGgwfDVkZDQwY2RlODhjZjIyMGVlN2Y3ZjNkZSIsImF1ZCI6IlAzOHFuRm8xbEZBUUpyemt1bi0td0V6cWxqVk5HY1dXIiwiaWF0IjoxNTc0MTg4NjU2LCJleHAiOjE1NzQyMjQ2NTYsImF0X2hhc2giOiIyQ3hwMGh2ZTBoSmp5ZHRQc1VUMV9BIiwibm9uY2UiOiJBOEVDbkxlN1lUb2R3cUw0R0puUzNnTzA2SUNQSW1ZcCJ9.NJ4SnZHPBdEZGr3uaPxOfF0rMiQ06PMG3nrVOtiykDYDwovP6fCHX42od89C0UkNmXUnt9RdudbToZ4swg9c4kCj66GdI_ePJTsfduZbr_DuXXibVdnAee_q0hOJ-SWnxooj6GDWe8R9v03j2P4K5n9yTIMeNHdXjfwC9axqfqi1hvKmxxihD15EGIrOETzMDTXEIUvxhJTOSYDvQaZmKTWyLlj6puRiktrHB0jwHO9mVjroMocNFcPHzGuVHVruD_eM2bT7MEWxKMYvvYg2G5jvMKq5CZhaQsk2oU9dV9aVKIWxPrHYY4rsBmc0Vf8MFFB0u8ZbQsdRojyzouHW7w',
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
