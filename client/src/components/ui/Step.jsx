import { Button, ButtonGroup, Steps } from "@chakra-ui/react"


const Step = () => {
  return (
    <Steps.Root defaultStep={1} count={steps.length}>
      <Steps.List>
        {steps.map((step, index) => (
          <Steps.Item key={index} index={index} title={step.title}>
            {/* <Steps.Indicator /> */}
            <Steps.Title>{step.title}</Steps.Title>
            <Steps.Separator />
          </Steps.Item>
        ))}
      </Steps.List>

      <ButtonGroup size="sm" variant="outline">
        <Steps.PrevTrigger asChild>
          <Button>Prev</Button>
        </Steps.PrevTrigger>
        <Steps.NextTrigger asChild>
          <Button>Next</Button>
        </Steps.NextTrigger>
      </ButtonGroup>
    </Steps.Root>
  )
}

const steps = [
  {
    title: "Cart"
  },
  {
    title: "Address"
  },
  {
    title: "PAYMENT",
  },
]

export default Step
