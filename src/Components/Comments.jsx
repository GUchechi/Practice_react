import React from 'react'

const Comments = (props) => {
    let {data} = props;
  return (
        <ol>
            {
            data.map((comment, index) => (
                <li key={index}>{comment}</li>
            ))
            }
        </ol>
  )
}

export default Comments