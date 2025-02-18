function Text({ children }: { children: string }) {
  const message = children.split('\n').map((str, idx, array) => {
    return (
      <>
        {str} {idx === array.length - 1 ? null : <br />}
      </>
    )
  })

  return <div>{message}</div>
}

export default Text
