// https://www.apollographql.com/docs/react/pagination/core-api

const FEED_QUERY = gql`
  query Feed($offset: Int, $limit: Int) {
    feed(offset: $offset, limit: $limit) {
      id
      # ...
    }
  }
`;

const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        feed: {
          // Don't cache separate results based on
          // any of this field's arguments.
          keyArgs: false,

          // Concatenate the incoming list items with
          // the existing list items.
          merge(existing = [], incoming) {
            return [...existing, ...incoming];
          },
        }
      }
    }
  }
})

/*

import { InMemoryCache } from "@apollo/client";
import { offsetLimitPagination } from "@apollo/client/utilities";

const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        feed: offsetLimitPagination()
      },
    },
  },
});


*/

function FeedWithDataMore() {

  const { loading, data, fetchMore } = useQuery(FEED_QUERY, {
    variables: {
      offset: 0,
      limit: 10
    },
  });


  // If you want your component to rerender with loading:true whenever
  // fetchMore is called, add `notifyOnNetworkStatusChange:true` to the
  // options you pass to useQuery.
  if (loading) return 'Loading...';

  return (
      <Feed
        entries={data.feed || []}
        onLoadMore={() => fetchMore({
          variables: {
            offset: data.feed.length
          },
        })}
      />
    );
  }