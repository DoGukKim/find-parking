import Button from 'src/components/button/Button'

export default function Home() {
  const click = () => {
    console.log('hi')
  }
  return (
    <>
      <Button variety="contained" size="large" disabled onClick={click}>
        contained
      </Button>
      <Button variety="contained" size="large" onClick={click}>
        contained
      </Button>
      <Button variety="contained" size="large" onClick={click}>
        contained
      </Button>

      <Button variety="outlined" size="large" onClick={click}>
        outlined
      </Button>
      <Button variety="outlined" size="large" onClick={click}>
        outlined
      </Button>
      <Button variety="outlined" size="large" onClick={click}>
        outlined
      </Button>

      <Button variety="text" size="large" onClick={click}>
        text
      </Button>
      <Button variety="text" size="large" onClick={click}>
        text
      </Button>
      <Button variety="text" size="large" onClick={click}>
        text
      </Button>
    </>
  )
}
