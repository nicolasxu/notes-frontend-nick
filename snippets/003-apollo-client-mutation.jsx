import { gql, useMutation } from '@apollo/client'


const INCREMENT_COUNTER = gql`

  # Increments a back-end counter and gets its resulting value
  mutation IncrementCounter {
    currentValue
  }
`

const ADD_TODO = gql`
  mutation AddTodo($type: String!) {
    addTodo(type: $type) {
      id
      type
    }
  }

`

function MyComponent() {
  // Pass mutation to useMutation
  const [mutateFunction, { data: renamedData, loading, error }] = useMutation(INCREMENT_COUNTER);

  function handleClick() {
    mutateFunction({variables: {type: "buy milk"},  refetchQueries: [GET_TODO]})
  }

}

